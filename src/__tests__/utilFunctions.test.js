import React from 'react';
import {shortenText} from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';

it('shortenText should not alter a string with less then 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

it('shortenText should cut off extra characters after 100 and add 3 periods', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
})

it('wordCount should correctly count the number of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233)
})

it('attachUserName should check to see if the first post return from function has property displayname', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
})

it('attachUserName remove any post with no matches', () => {
    const newPosts = attachUserName(users, posts);
    const deletePost = posts[5];
    expect(newPosts).not.toContainEqual(deletePost);
})
