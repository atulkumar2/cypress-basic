describe("template spec 2", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
  it("fails with specific msg in cy.log and generic in throw", () => {
    let url = "https://example.cypress.io";

    if (url.length != 10) {
      cy.log(`${url} length is not 10`);
      throw Error("Url length is unexpected");
    }
  });

  it("fails with specific msg in cy.log and throw", () => {
    let url = "https://example.cypress.io";

    if (url.length != 10) {
      cy.log(`${url} length is not 10`);
      throw Error(`${url} length is not 10`);
    }
  });

  it("fails with expect statement", () => {
    let url = "https://example.cypress.io";

    expect(url).to.have.length(10);
  });
});
