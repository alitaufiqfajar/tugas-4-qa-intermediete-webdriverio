const HomeIG = require('../pageobjects/homeInstagram.page')
const SearchIG = require('../pageobjects/searchInstagram.page')
const ProfileIG = require('../pageobjects/profileInstagram.page')
const MessageIG = require('../pageobjects/messageInstagram.page')
const { delay } = require('../../helpers/delayHelper');

describe('Follow Account Instagram', () => {
    
    it('Can Search User', async () => {
        await HomeIG.clickButtonSearch();
        await SearchIG.clickTextSearch();
        await SearchIG.typeTextSearch('aozorabookstore');
        delay(3000)

        await SearchIG.clearTextInputSearch();
        await SearchIG.typeTextSearch('dicoding');
        delay(3000)

        await SearchIG.clearTextInputSearch();
    });
    
    it('Can Follow User', async () => {
        await MessageIG.backButton();
        await SearchIG.clickButtonHome();
        await HomeIG.clickButtonSearch();

        await SearchIG.clickTextSearch();
        await SearchIG.typeTextSearch('aozorabookstore');
        delay(1000)
        await SearchIG.clickFirstItemResult();

        await ProfileIG.verifyUserFullName('Planner Book 2021 / Agenda')
        await ProfileIG.clickFollow()
        await ProfileIG.verifySuccessFollow('Planner Book 2021 / Agenda')
    });
    
    it('Can Unfollow User', async () => {
        await ProfileIG.clickFollow()
        await ProfileIG.clickUnfollowButton();
        await ProfileIG.verifySuccessUnFollow();
        await MessageIG.backButton();
        await HomeIG.clickButtonHome();
    });
});

describe('Send message to followed account', () => {
    it('Send message to someone which hasn\'t been followed', async () => {
        await HomeIG.clickButtonSearch();
        await SearchIG.clickTextSearch();
        await SearchIG.typeTextSearch('aozorabookstore');
        delay(1000)
        await SearchIG.clickFirstItemResult();

        await ProfileIG.verifyUserFullName('Planner Book 2021 / Agenda')
        await ProfileIG.clickButtonMessage();

        await MessageIG.typeMessage('Selamat malam, apakah masih ada bukunya?')
        await MessageIG.sendMessage();

        await MessageIG.backButton();
        await SearchIG.clickButtonHome();
    });
})