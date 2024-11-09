/**
 * shot.js - a JavaScript library to make JavaScript shorter
 * Made by https://github.com/aakash4dev (MIT Licensed)
 * https://github.com/aakash4dev/shot.js
 */

function out(value) {
  console.log(value);
}

function id(id) {
  return document.getElementById(id);
}

function cl(cl) {
  return document.getElementsByClassName(cl);
}

function tag(tagName) {
  return document.getElementsByTagName(tagName);
}

// .value shorthand
function idValue(IDname) {
  return id(IDname)?.value;
}

function clValue(c) {
  return cl(c)[0]?.value; // assuming first element if multiple classes
}

module.exports = { out, id, cl, tag, idValue, clValue };
