import Login from "../../Page_Objects/Login_Page";

describe("Login cases", () => {
    const ln=new Login();

    it("Verify Login Successfully", () => {
        
    cy.visit("https://demoblaze.com/index.html")    
     // Wait for the page to load fully
     cy.waitUntilPageLoad();

    ln.Login_option()
    
    cy.wait(500)
    ln.setuserName("champ0900")
    ln.setPassword("0900")
    ln.Login_button()
    cy.wait(500)
    });
    });