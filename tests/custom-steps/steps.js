'use strict';
/* eslint new-cap: 0 */ // --> OFF for Given, When, Then

// #############################################################################

const { Given, When, Then } = require('cucumber');
const { ClientFunction } = require('testcafe');

// #### Then steps #############################################################

const getTitle = ClientFunction(() => {
    return document.title;
});

Then(
    /the title length should be less than ([0-9]+) characters$/,
    async function (t, [numberOfCharacters]) {
        await t.expect((await getTitle()).length)
            .lt(parseInt(numberOfCharacters));
    }
);
