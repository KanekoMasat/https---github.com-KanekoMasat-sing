/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./resources/js/editDefaultScript.js ***!
  \*******************************************/
var songLyrics = document.getElementsByClassName("song-lyrics");

// // HTMLエンティティをデコードする関数
function decodeHTMLEntities(text) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}
Array.from(songLyrics).forEach(function (element) {
  element.innerHTML = decodeHTMLEntities(element.innerHTML).toString();
});
/******/ })()
;