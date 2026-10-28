describe("Playlist App - E2E Test Suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders main semantic layout elements", () => {
    cy.get("header").should("exist");
    cy.get("aside").should("exist");
    cy.get("main").should("exist");
    cy.get("footer").should("exist");
  });

  it("displays website branding and search input", () => {
    cy.get("header").contains("YZY");
    cy.get('input[type="search"]').should("exist");
  });

  it("displays playlists and tracks sections", () => {
    cy.get("section").should("have.length.at.least", 2);
    cy.get("ul").should("exist");
  });

  it("navigates between pages via state (Home, Search, Library, Playlist) without routing or URL change", () => {
    cy.get("aside").contains("button", "Search").click();
    cy.contains("Browse All").should("exist");

    cy.get("aside").contains("button", "Library").click();
    cy.contains("Your Library").should("exist");
    cy.contains("Liked Songs").should("exist");

    cy.contains("Roadtrip Mix").click();
    cy.contains("Play All").should("exist");
    cy.contains("YZY Curated").should("exist");

    cy.get("aside").contains("button", "Home").click();
    cy.contains("Guilt Trip").should("exist");
    cy.contains("Popular songs").should("exist");
  });

  it("opens and interacts with Auth Modal", () => {
    cy.get("header").contains("Log In").click();
    cy.get('div[role="dialog"]').should("exist");
    cy.contains("Log in to keep listening").should("exist");
    cy.get('div[role="dialog"]').contains("button", "Sign Up").click();
    cy.contains("Create your YZY account").should("exist");
    cy.contains("Continue as demo listener").click();
    cy.get('div[role="dialog"]').should("not.exist");
  });
});
