describe("Playlist App - Home Page", () => {
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
});
