describe("URL routing", () => {
  it("supports browser back and forward without reloading the app", () => {
    cy.visit("/");
    cy.window().then((win) => {
      win.routingMarker = true;
    });
    cy.get('aside a[href="/search"]').click();
    cy.get('aside nav a[href="/library"]').click();
    cy.go("back");
    cy.location("pathname").should("eq", "/search");
    cy.get("main h1").should("have.text", "Search");
    cy.go("forward");
    cy.location("pathname").should("eq", "/library");
    cy.get("main h1").should("have.text", "Your Library");
    cy.window().its("routingMarker").should("eq", true);
  });

  it("resolves playlist IDs on direct entry, reload, and playlist changes", () => {
    cy.visit("/playlist/p2");
    cy.get("main h1").should("have.text", "Redesign Demo");
    cy.reload();
    cy.get("main h1").should("have.text", "Redesign Demo");
    cy.get('aside a[href="/playlist/p1"]').click();
    cy.location("pathname").should("eq", "/playlist/p1");
    cy.get("main h1").should("have.text", "Roadtrip Mix");
    cy.go("back");
    cy.get("main h1").should("have.text", "Redesign Demo");
    cy.get('aside nav a[href="/library"]').click();
    cy.get("main").contains("a", "Late Night Hip-Hop").click();
    cy.location("pathname").should("eq", "/playlist/p3");
    cy.reload();
    cy.get("main h1").should("have.text", "Late Night Hip-Hop");
  });

  it("keeps both search inputs in sync with the URL, including clearing", () => {
    cy.visit("/");
    cy.get('[aria-label="Search tracks"]').type("Kanye");
    cy.location("pathname").should("eq", "/search");
    cy.location("search").should("eq", "?q=Kanye");
    cy.get('[aria-label="Search music"]').should("have.value", "Kanye");
    cy.get('[aria-label="Search music"]').clear().type("Drake");
    cy.get('[aria-label="Search tracks"]').should("have.value", "Drake");
    cy.reload();
    cy.get('[aria-label="Search music"]').should("have.value", "Drake");
    cy.get('section[aria-label="Search results"]').should(
      "contain",
      "You Broke My Heart",
    );
    cy.get('[aria-label="Search tracks"]').clear();
    cy.location("search").should("eq", "");
    cy.get('[aria-label="Search music"]').should("have.value", "");
    cy.contains("Browse All").should("be.visible");
    cy.go("back");
    cy.location("pathname").should("eq", "/");
  });

  it("reads signup mode from the URL and supports auth history", () => {
    cy.visit("/");
    cy.get('header a[href="/auth?mode=signup"]').click();
    cy.get("main h1").should("have.text", "Create your YZY account");
    cy.reload();
    cy.get("main h1").should("have.text", "Create your YZY account");
    cy.get("main").contains("button", "Log In").first().click();
    cy.location("search").should("eq", "");
    cy.go("back");
    cy.get("main h1").should("have.text", "Create your YZY account");
  });

  it("shows recoverable 404 pages for unknown URLs and playlist IDs", () => {
    cy.visit("/missing-page");
    cy.get("main h1").should("have.text", "Page not found");
    cy.contains("a", "Back to home").click();
    cy.location("pathname").should("eq", "/");
    cy.visit("/playlist/missing-id");
    cy.get("main h1").should("have.text", "Playlist not found");
    cy.contains("a", "Back to library").click();
    cy.location("pathname").should("eq", "/library");
  });

  it("keeps player state while navigating", () => {
    cy.visit("/");
    cy.get('section[aria-label="Featured Song"]')
      .contains("button", "Play")
      .click();
    cy.get('footer button[aria-label="Pause"]').should("exist");
    cy.get('aside nav a[href="/library"]').click();
    cy.get("footer").should("contain", "Guilt Trip");
    cy.get('footer button[aria-label="Pause"]').should("exist");
    cy.get('aside a[href="/playlist/p1"]').click();
    cy.get('footer button[aria-label="Pause"]').should("exist");
  });

  it("opens newly created playlists by ID after a reload", () => {
    cy.visit("/");
    cy.get('[aria-label="Create playlist"]').click();
    cy.location("pathname").should("match", /^\/playlist\/custom-/);
    cy.get("main h1").should("have.text", "My Playlist #3");
    cy.get("main").should("contain", "0 songs");
    cy.get("main").contains("button", "Play All").should("be.disabled");
    cy.reload();
    cy.get("main h1").should("have.text", "My Playlist #3");
    cy.get('aside nav a[href="/library"]').click();
    cy.get("main").contains("a", "My Playlist #3").click();
    cy.get("main h1").should("have.text", "My Playlist #3");
  });
});
