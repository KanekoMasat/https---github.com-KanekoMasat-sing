/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./resources/js/editDefaultScript.js ***!
  \*******************************************/
var songLyrics = document.getElementsByClassName("song-lyrics");
Array.from(songLyrics).forEach(function (element) {
  element.innerHTML = decodeHTMLEntities(element.innerHTML).toString();
});

// // HTMLエンティティをデコードする関数
function decodeHTMLEntities(text) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}
// const deleteForm2 = document.getElementsByClassName("delete-form");
// let deleteForm3;
// Array.from(deleteForm2).forEach((element, index) => {
//     if (index === 0) {
//         deleteForm3 = element;
//     }
// });
// console.log(deleteForm3);

// window.addEventListener("DOMContentLoaded", function () {
//     const deleteButton = document.getElementsByClassName("delete-button");
//     Array.from(deleteButton).forEach(element => {
//         element.addEventListener("click", function (event) {
//             let result = confirm('シートの削除を行います。宜しいですか？※元には戻ません');
//             if (result) {
//                 console.log('削除しました');
//                 const deleteForm = element.parentNode;
//                 deleteForm.submit();
//             } else {
//                 console.log('削除を取りやめました');
//             }
//         });
//     });
// });
/******/ })()
;