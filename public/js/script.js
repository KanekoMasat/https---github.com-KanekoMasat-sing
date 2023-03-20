const foucasTarget = document.getElementById('test-textarea');
const formSampleTarget = document.getElementById('form-sample');
let changeTarget = document.getElementById('tool-bar');
const headerArea = document.getElementById('header-container');
let textPosition = null;
const buttonArea = document.getElementById('menu-btn');
const bodyArea = document.getElementById('body-container');
const myTextarea2 = document.getElementById('testTextarea2');
const boldButton3 = document.getElementById('boldButton3');
const boldButton4 = document.getElementById('boldButton4');
const italicButton = document.getElementById('italicButton');
const underlineButton = document.getElementById('underlineButton');


// foucasTarget.onselect = (event) => {
//     let x = event.pageX;
//     let y = event.pageY;
//     changeTarget.style.display = "block";
//     changeTarget.style.top = y;
//     changeTarget.style.left = x;
//     console.log("x座標: "+x);
//     console.log("y座標: "+y);
// }

foucasTarget.addEventListener('mouseup', function (event) {
    // 選択されたテキストの長さが0より大きい場合、ボタンを表示する
    if (foucasTarget.selectionStart !== foucasTarget.selectionEnd) {
        let start = foucasTarget.selectionStart;
        let end = foucasTarget.selectionEnd;

        changeTarget.style.display = "block";
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; // x軸のスクロール量を取得
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // y軸のスクロール量を取得
        const headerTop = headerArea.offsetTop;     //ヘッダーのy軸ピクセルを取得
        const x = event.pageX - scrollLeft - 60;
        const y = event.pageY - scrollTop - 80;
        changeTarget.style.left = x + 'px';
        changeTarget.style.top = y + 'px';
        console.log(window.getSelection().toString());  //選択した文字を取得して出力

        console.log(buttonArea.tagName);
        console.log(start);
        console.log(end);
        console.log('----------------------');
        textPosition = createArray(start, end);
        console.log(textPosition);

    }

    //setSelection(3, 5)....3から5文字目を選択



    // textPosition.forEach(element => {
    //     if (element === foucasTarget.selectionStart) {
    //         setTimeout(function () {
    //             changeTarget.style.display = "none";
    //         }, 500);
    //     }
    // });
});

// foucasTarget.addEventListener('mouseup', function () {
//     const selection = window.getSelection().toString();
//     if (selection.length > 0) {
//         console.log('テキストが選択されました。');

//         // 選択されたテキストをクリックしたときに、クリックイベントをキャンセルする
//         foucasTarget.addEventListener('click', function handleClick(event) {
//             event.preventDefault();
//             foucasTarget.removeEventListener('click', handleClick);
//         }, { once: true });
//     }
// });

// foucasTarget.addEventListener('mousedown', function () {
//     setTimeout(function () {
//         changeTarget.style.display = "none";
//     }, 500)
// });

//このイベントの問題点: 選択するのが400mSec以内に終わった場合消える→これは妥協か？
bodyArea.addEventListener('mousedown', function (event) {
    textPosition.forEach(element => {
        if (event.target.tagName !== 'BUTTON') {
            if (element === foucasTarget.selectionStart) {
                setTimeout(function () {
                    changeTarget.style.display = "none";
                    // console.log("changeTargetのstyleをnoneにしました");
                }, 400);
            }
        }
    });
});

buttonArea.addEventListener('click', () => {
    console.log(window.getSelection().toString());
});

foucasTarget.addEventListener("selectionchange", function () {
    var start = foucasTarget.selectionStart; // テキストの選択範囲の最初の文字の位置
    var end = foucasTarget.selectionEnd; // テキストの選択範囲の最後の文字の位置

    console.log("選択されたテキストの範囲: " + start + " 〜 " + end);
});

function createArray(start, end) {
    const result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}

const boldButton = document.getElementById("boldButton");

boldButton.onclick = function () {
    applyBold();
};

foucasTarget.oninput = function () {
    applyBold();
};

function applyBold() {
    var textarea = document.getElementById("test-textarea");
    var startIndex = textarea.selectionStart;
    var endIndex = textarea.selectionEnd;

    var beforeSelectedText = textarea.value.substring(0, startIndex);
    var selectedText = textarea.value.substring(startIndex, endIndex);
    var afterSelectedText = textarea.value.substring(endIndex);

    var formattedSelectedText = "<span style='font-weight:bold'>" + selectedText + "</span>";

    textarea.value = beforeSelectedText + formattedSelectedText + afterSelectedText;
    textarea.setSelectionRange(startIndex + 29, endIndex + 29);
}

var boldButton2 = document.getElementById("boldButton2");
var myText = document.getElementById("myText");
var testTextarea = document.getElementById('testTextarea');

boldButton2.addEventListener("click", function () {
    if (myText.style.fontWeight !== "bold") {
        myText.style.fontWeight = "bold";
        testTextarea.style.fontWeight = "bold";
        myTextarea2.style.fontWeight = "bold";
    } else {
        myText.style.fontWeight = "normal";
        testTextarea.style.fontWeight = "normal";
        myTextarea2.style.fontWeight = "normal";
    }

    var selectedText = "";
    if (window.getSelection) {
        // 現在の選択範囲を取得
        selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        // IE8以前の選択範囲を取得
        selectedText = document.selection.createRange().text;
    }

    console.log(selectedText); // 選択されたテキストをコンソールに出力

});



myTextarea2.addEventListener('input', notification);
boldButton3.addEventListener('click', innerhtml);

//押されたら<b>タグで囲む
function boldSelection() {
    const start = myTextarea2.selectionStart;
    const end = myTextarea2.selectionEnd;

    const selectedText = myTextarea2.value.substring(start, end);
    const boldText = "<b>" + selectedText + "</b>";

    const newText = myTextarea2.value.substring(0, start) + boldText + myTextarea2.value.substring(end);
    myTextarea2.value = newText;

    notification();

}

function formatSelectedText() {
    const selectedText = myTextarea2.value.substring(myTextarea2.selectionStart, myTextarea2.selectionEnd);
    const boldText = `<b>${selectedText}</b>`;
    const formattedText = myTextarea2.value.substring(0, myTextarea2.selectionStart) + boldText + myTextarea2.value.substring(myTextarea2.selectionEnd);
    myTextarea2.innerHTML = formattedText;
}

function notification() {
    console.log('myTextarea2の内容が変更されました');
}

function innerhtml() {
    let text = myTextarea2.value;
    let boldText = `<b>${text}</b>`;
    myTextarea2.innerHTML = boldText;
}

boldButton4.addEventListener('click', setBold);
italicButton.addEventListener('click', setItalic);
underlineButton.addEventListener('click', setUnderline);

// function setBold() {
//     var selection = window.getSelection();
//     var range = selection.getRangeAt(0);
//     var selectedText = range.extractContents();
//     console.log(selectedText);
//     var bold = document.createElement("strong");
//     bold.appendChild(selectedText);
//     range.insertNode(bold);
// }

function setItalic() {
    let selection = window.getSelection();
    console.log(selection);
    let range = selection.getRangeAt(0);
    console.log(range.toString());
    let selectedText = range.extractContents();
    let italic = document.createElement("span");
    italic.className = "italic-font";
    italic.appendChild(selectedText);
    range.insertNode(italic);
}

function setBold() {
    let selection = window.getSelection();
    console.log(selection);
    let range = selection.getRangeAt(0);
    console.log(range.toString());
    let selectedText = range.extractContents();
    let bold = document.createElement("span");
    bold.className = "bold-font";
    bold.appendChild(selectedText);
    range.insertNode(bold);
}

function setUnderline() {
    let selection = window.getSelection();
    console.log(selection);
    let range = selection.getRangeAt(0);
    console.log(range.toString());
    let selectedText = range.extractContents();
    let underline = document.createElement("span");
    underline.className = "underline";
    underline.appendChild(selectedText);
    range.insertNode(underline);
}


// function setBold() {
//     if (window.getSelection().style.fontWeight === "bold") {
//         window.getSelection().style.fontWeight = "normal";
//     } else if (document.selection && document.selection.type != "Control" && document.selection.style.fontWeight === "bold") {
//         document.selection.style.fontWeight = "normal";
//     } else if (window.getSelection().style.fontWeight === "normal") {
//         /// 太字用のspan要素作成
//         const span = document.createElement("span");
//         span.style.fontWeight = `bold`;
//         /// 現在のテキスト選択を取得
//         const userSelection = window.getSelection();
//         /// 現在の選択範囲を取得
//         const selectedTextRange = userSelection.getRangeAt(0);
//         /// その範囲を太字span要素で囲む
//         selectedTextRange.surroundContents(span);
//     }
//     /// 太字用のspan要素作成
//     const span = document.createElement("span")
//     span.style.fontWeight = `bold`
//     /// 現在のテキスト選択を取得
//     const userSelection = window.getSelection()
//     /// 現在の選択範囲を取得
//     const selectedTextRange = userSelection.getRangeAt(0)
//     /// その範囲を太字span要素で囲む
//     selectedTextRange.surroundContents(span)
// }
