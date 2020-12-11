'use strict';

const { ClientFunction } = require('testcafe');

const testPageExample2 = require('../centralized-page-model/test-page-example2.js');
const testPageExample1 = require('./page-model/test-page-example1.js');


const getTitle = ClientFunction(() => {
    return document.title;
});

fixture('Running Cucumber with TestCafe - test feature example');

test('Google\'s Products page title should contain "Google"', async (t) => {
    await t.navigateTo('https://www.google.com/')
        .click(testPageExample1.linkAbout)
        .click(testPageExample2.linkOurProducts)
        .expect(getTitle())
        .contains('Google');
});
