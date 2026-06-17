describe("Test des emprunts", () => {

  it("Affiche les emprunts d'un utilisateur", () => {

    cy.visit("http://localhost:5173/emprunts");

    cy.get("input")
      .type("jean.dupont@biblio.com");

    cy.get("button")
      .click();

  });

});