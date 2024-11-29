class Login{


    log_option="#login2";
    txtuserName="input[id='loginusername']";
    txtPassword="input[id='loginpassword']";
    btnSubmit="button[onclick='logIn()']";
    
     
    setuserName(userName){
    cy.get(this.txtuserName).type(userName)   
   }
       
   setPassword(password){
   cy.get(this.txtPassword).type(password)   
   }

Login_option()
{
   
cy.get(this.log_option).click()
   
}   

   
Login_button()
{

cy.get(this.btnSubmit).click()

}   
   

}

export default Login;