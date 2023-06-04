const songLyrics = document.getElementsByClassName("song-lyrics");


Array.from(songLyrics).forEach(element => {
    element.innerHTML = decodeHTMLEntities(element.innerHTML).toString();
});

// // HTMLエンティティをデコードする関数
function decodeHTMLEntities(text) {
    let textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}