import Page from "./page";

class loginPO extends Page {
    provideCredentials(email, password) {
        $('input[name="email"]').waitForDisplayed({timeout: 10000}); 
        $('input[name="email"]').setValue(email)
        $('input[name="password"]').setValue(password)
    };
    clickLogin() {
        $('button .auth0-label-submit').click();
    };
    logIn(email, password) {
        this.open();
        this.provideCredentials(email, password);
        this.clickLogin();
    }
}

export default new loginPO();