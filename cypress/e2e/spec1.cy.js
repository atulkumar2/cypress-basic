describe("template spec 1", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
  it("fails", () => {
    cy.visit("https://example.cypress.io/fails");
  });
});
