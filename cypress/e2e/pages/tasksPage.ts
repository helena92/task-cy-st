class TasksPage {
  endpoints = {
    tasks: "/tasks/my_tasks",
    taskCreate: "/tasks/add_task",
  };

  elements = {
    taskTextArea: () => cy.getById("task"), // cy.getById is a custom command created in support/commands.ts
    submitButton: () => cy.getById("submit"),
    tasksTableRows: () => cy.getByClass("table").find("tr"),
    lastTableRowCells: () => this.elements.tasksTableRows().last().find("td"),
    deleteButton: (taskName) =>
      this.elements
        .tasksTableRows()
        .contains(taskName)
        .parent("tr")
        .find(".btn-group a")
        .contains("Delete"),
  };

  visitTasksCreatePage() {
    cy.visit(this.endpoints.taskCreate);
    this.elements.taskTextArea().should("be.visible");
  }

  visitTasksPage() {
    cy.visit(this.endpoints.tasks);
    this.elements.tasksTableRows().should("be.visible");
  }

  formatTaskName(taskName) {
    return taskName.split("\n").join(" ");
  }

  createTask(taskNames: string | Array<string>) {
    const tasks = Array.isArray(taskNames) ? taskNames : [taskNames];
    // Loop through the task names and create each task
    tasks.forEach((taskName) => {
      this.visitTasksCreatePage();
      this.elements.taskTextArea().type(taskName);
      this.elements.submitButton().click();
      cy.url().should("include", this.endpoints.tasks);
      this.elements.lastTableRowCells().first().should("have.text", taskName);
    });
  }

  deleteTask(taskNames: string | Array<string>) {
    const tasks = Array.isArray(taskNames) ? taskNames : [taskNames];
    // Loop through the task names and delete each task
    tasks.forEach((taskName) => {
      const formattedTaskName = this.formatTaskName(taskName);
      this.elements.deleteButton(formattedTaskName).click();
      this.elements
        .tasksTableRows()
        .contains(formattedTaskName)
        .should("not.exist");
    });
  }
}

export default new TasksPage();
