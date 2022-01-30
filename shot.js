/**
 * shot.js - a javascript library make javascript short
 * made by https://github.com/aakash4dev (MIT Licensed)
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
//.value
function idValue(IDname) {
  return id(IDname).value;
}
function clValue(c) {
  return cl(c).value;
}
