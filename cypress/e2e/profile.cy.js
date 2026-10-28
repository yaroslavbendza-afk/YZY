describe("Protected profile", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.sessionStorage.clear();
      },
    });
  });

  it("redirects guests and restores the requested profile after signup", () => {
    cy.visit("/profile?tab=account");
    cy.location("pathname").should("eq", "/auth");
    cy.get("main h1").should("have.text", "Log in to keep listening");
    cy.get("main").contains("button", "Sign Up").click();
    cy.get("#auth-name").clear().type("Alex Carter");
    cy.get("#auth-email").clear().type("alex@example.com");
    cy.get("#auth-password").type("test-password");
    cy.get("main").contains("button", "Create account").click();
    cy.location("pathname").should("eq", "/profile");
    cy.location("search").should("eq", "?tab=account");
    cy.get("main h1").should("have.text", "Profile");
    cy.get("main")
      .should("contain", "Alex Carter")
      .and("contain", "alex@example.com");
    cy.reload();
    cy.get("main h1").should("have.text", "Profile");
    cy.get("main").contains("button", "Log Out").click();
    cy.location("pathname").should("eq", "/auth");
    cy.go("back");
    cy.get("main h1").should("not.have.text", "Profile");
    cy.visit("/profile");
    cy.location("pathname").should("eq", "/auth");
  });

  it("opens the profile from the header after a normal login", () => {
    cy.visit("/auth");
    cy.get("main").contains("button", "Continue as demo listener").click();
    cy.location("pathname").should("eq", "/");
    cy.get('header a[aria-label="Open profile"]').click();
    cy.location("pathname").should("eq", "/profile");
    cy.get("main").should("contain", "Demo Listener");
    cy.get("header").contains("button", "Log Out").click();
    cy.location("pathname").should("eq", "/auth");
  });
});
