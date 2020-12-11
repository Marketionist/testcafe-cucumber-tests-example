'use strict';

let testPage2 = {};

const createMenuLinkSelector = (title) => {
    return `.header a[title*="${title}"]`;
};

testPage2.linkOurProducts = createMenuLinkSelector('Products');
testPage2.linkOurCommitments = createMenuLinkSelector('Commitments');
testPage2.linkOurStories = createMenuLinkSelector('Stories');

module.exports = testPage2;
