describe("Table cases", () => {
    it("Verify the Number of rows on first Page", () => {
    cy.visit("https://demoblaze.com/index.html")
    cy.wait(500)
    cy.get('#login2').click()
    cy.wait(500)
    cy.get("input[id='loginusername']").type("champ0900")
    cy.get("input[id='loginpassword']").type("0900")
    cy.get("button[onclick='logIn()']").click()
    cy.wait(500)
    });
    });