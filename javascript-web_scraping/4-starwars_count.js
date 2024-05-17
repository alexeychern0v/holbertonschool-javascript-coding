#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const characterId = '18';
let i = 0;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    data.results.forEach((film) => {
      film.characters.forEach((character) => {
        if (character.includes(characterId)) {
          i += 1;
        }
      });
    });
    console.log(i);
  }
});
