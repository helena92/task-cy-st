import TasksPage from "./pages/tasksPage";
import LoginPage from "./pages/loginPage";
import UserAccountPage from "./pages/userAccountPage";

describe("Tasks", () => {
  const date = Date.now();
  const testTaskName = `test\n${date}`;
  const testUserEmail = Cypress.env("testUserEmail");
  const testUserPassword = Cypress.env("testUserPassword");

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(testUserEmail, testUserPassword);
    UserAccountPage.elements.accountDropdown().should("be.visible");
  });

  describe("create task", () => {
    let testPassed = true;

    it("should create a task", () => {
      TasksPage.createTask(testTaskName);
    });

    after(() => {
      if (testPassed) {
        // ideally, this should be done via API to avoid this conditional
        cy.log("Cleaning up created tasks ...");
        TasksPage.deleteTask(testTaskName);
      }
    });
  });

  describe("delete task", () => {
    let testPassed = true;

    beforeEach(() => {
      cy.log("Creating a test task ...");
      TasksPage.createTask(testTaskName);
    });

    it("should delete a task", () => {
      TasksPage.visitTasksPage();
      TasksPage.deleteTask(testTaskName);
      testPassed = true;
    });

    after(() => {
      if (!testPassed) {
        // ideally, this should be done via API to avoid this conditional
        cy.log("Cleaning up created tasks ...");
        TasksPage.deleteTask(testTaskName);
      }
    });
  });

  describe("delete multiple tasks", () => {
    let testPassed = true;
    const testTaskName1 = `test1\n${date}`;
    const testTaskName2 = `test2\n${date}`;
    const testTaskName3 = `test3\n${date}`;

    beforeEach(() => {
      cy.log("Creating test tasks ...");
      TasksPage.createTask([testTaskName1, testTaskName2, testTaskName3]);
    });

    it("deleting two tasks belonging to an user results in only one task being left displayed on the task table", () => {
      TasksPage.visitTasksPage();
      TasksPage.deleteTask([testTaskName1, testTaskName2]);
      TasksPage.elements
        .tasksTableRows()
        .contains(TasksPage.formatTaskName(testTaskName3))
        .should("be.visible");
      testPassed = true;
    });

    after(() => {
      if (!testPassed) {
        // ideally, this should be done via API to avoid this conditional
        cy.log("Cleaning up created tasks ...");
        TasksPage.deleteTask([testTaskName1, testTaskName2, testTaskName3]);
      } else {
        TasksPage.deleteTask(testTaskName3);
      }
    });
  });
});
