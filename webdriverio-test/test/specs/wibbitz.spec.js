import { user } from '../env/env';
import loginPage from '../pageobjects/login.po';

describe('Log in, select the first clip, click play', () => {
    it('Log in', () => {
        loginPage.logIn(user.email.value, user.password.value);
        expect(browser).toHaveUrlContaining('/app/home')
    })
    it('Select the first video and click play', () => {
        $('div.preview-boxes').waitForDisplayed({timeout: 10000});
        let videos = $('div.preview-boxes')
        let firstVideo = videos.$$('.preview-box')[0]
        firstVideo.click();
        $('.icon.icon-Play.ready').click();
    })
    it('Make sure the video is playing', () => {
        $('.icon.icon-Pause.fill-icon').waitForExist({timeout: 10000});
        expect($('.icon.icon-Pause.fill-icon')).toExist();
    })
})