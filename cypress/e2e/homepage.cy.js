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

  it("navigates between pages with URL changes and active links", () => {
    cy.get("aside").contains("a", "Search").click();
    cy.location("pathname").should("eq", "/search");
    cy.get('aside a[href="/search"]').should(
      "have.attr",
      "aria-current",
      "page",
    );
    cy.contains("Browse All").should("exist");

    cy.get("aside").contains("a", "Library").click();
    cy.location("pathname").should("eq", "/library");
    cy.contains("Your Library").should("exist");
    cy.contains("Liked Songs").should("exist");

    cy.get("main").contains("a", "Roadtrip Mix").click();
    cy.location("pathname").should("eq", "/playlist/p1");
    cy.contains("Play All").should("exist");
    cy.contains("YZY Curated").should("exist");

    cy.get("aside").contains("a", "Home").click();
    cy.location("pathname").should("eq", "/");
    cy.contains("Guilt Trip").should("exist");
    cy.contains("Popular songs").should("exist");
  });

  it("navigates to authentication and returns home after demo login", () => {
    cy.get("header").contains("a", "Log In").click();
    cy.location("pathname").should("eq", "/auth");
    cy.contains("Log in to keep listening").should("exist");
    cy.get("main").contains("button", "Sign Up").click();
    cy.location("search").should("eq", "?mode=signup");
    cy.contains("Create your YZY account").should("exist");
    cy.contains("Continue as demo listener").click();
    cy.location("pathname").should("eq", "/");
    cy.get("header").should("contain", "Demo Listener");
  });
});
