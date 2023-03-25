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
// const underlineButton = document.getElementById('underlineButton');
const editable = document.getElementById('editable');

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
        console.log(boldButton2.parentNode);
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

function setItalic() {
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    console.log(range.commonAncestorContainer.parentElement);
    console.log(range.commonAncestorContainer.parentElement.tagName);
    console.log(range.intersectsNode(range.commonAncestorContainer.parentElement));
    if (range.commonAncestorContainer.parentElement.tagName === "DIV") {
        console.log("互い違いに歩き出した僕の両足は");
        let selectedText = range.extractContents();
        let italic = document.createElement("i");
        italic.appendChild(selectedText);
        range.insertNode(italic);
    } else if (range.commonAncestorContainer.parentElement.tagName === "I") {
        console.log("何もしません");
    }

}

function sampleItalic() {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);

    // 選択範囲のテキストを1文字ずつ配列に格納
    const textArray = [];
    for (let i = 0; i < range.toString().length; i++) {
        const charRange = document.createRange();
        charRange.setStart(range.startContainer, range.startOffset + i);
        charRange.setEnd(range.startContainer, range.startOffset + i + 1);
        textArray.push(charRange);
        console.log(charRange.toString());
    }
    console.log(textArray);

    // 選択範囲内のすべてのノードを取得する
    var nodes = getSelectedNodes(range);

    // すべてのノードが<i>タグで囲まれているかを確認する
    var isAllWrappedInItalic = nodes.every(function (node) {
        return node.parentNode.tagName === 'I';
    });

    if (isAllWrappedInItalic) {
        // すべての<i>タグを取り除く
        nodes.forEach(function (node) {
            var parent = node.parentNode;
            while (parent.tagName !== 'I') {
                parent = parent.parentNode;
            }
            var textNode = document.createTextNode(node.textContent);
            parent.parentNode.insertBefore(textNode, parent);
            parent.parentNode.removeChild(parent);
        });
    } else {
        // 選択範囲内のすべてのノードを<i>タグで囲む
        var selectedText = range.toString();
        var italicText = document.createElement('i');
        italicText.appendChild(document.createTextNode(selectedText));
        range.deleteContents();
        range.insertNode(italicText);
    }
}

function getSelectedNodes(range) {
    var startContainer = range.startContainer;
    var endContainer = range.endContainer;
    var commonAncestor = range.commonAncestorContainer;

    // 選択範囲内のすべてのノードを取得する
    var nodes = [];
    var node = startContainer;
    while (node && node !== commonAncestor.nextSibling && range.comparePoint(node, 0) !== 1) {
        nodes.push(node);
        node = node.nextSibling || node.parentNode.nextSibling;
    }

    node = endContainer;
    while (node && node !== commonAncestor.previousSibling && range.comparePoint(node, node.length) !== -1) {
        nodes.push(node);
        node = node.previousSibling || node.parentNode.previousSibling;
    }

    // ノードの重複を削除する
    return nodes.filter(function (node, index) {
        return nodes.indexOf(node) === index;
    });
}




// italicButton.addEventListener("click", () => {
//     const selection = window.getSelection();
//     const range = selection.getRangeAt(0);

//     const selectedNodes = getSelectedNodes(range);

//     // 既にiタグで囲まれているかどうかを判定
//     const isAlreadyWrapped = selectedNodes.every(node =>
//         node.parentNode.tagName === "I"
//     );

//     if (isAlreadyWrapped) {
//         // 選択範囲がすべてiタグで囲まれている場合はiタグを外す
//         selectedNodes.forEach(node => {
//             const parent = node.parentNode;
//             parent.parentNode.insertBefore(node, parent);
//             parent.parentNode.removeChild(parent);
//         });
//     } else {
//         // 選択範囲がiタグで囲まれていない場合はiタグで囲む
//         const iTag = document.createElement("i");
//         range.surroundContents(iTag);
//     }

//     selection.removeAllRanges();
// });

// function getSelectedNodes(range) {
//     const startNode = range.startContainer;
//     const endNode = range.endContainer;
//     const commonAncestorNode = range.commonAncestorContainer;

//     const nodes = [];

//     let currentNode = startNode;

//     while (currentNode && currentNode !== commonAncestorNode) {
//         nodes.push(currentNode);
//         currentNode = currentNode.nextSibling;
//     }

//     currentNode = endNode;

//     while (currentNode && currentNode !== commonAncestorNode) {
//         nodes.push(currentNode);
//         currentNode = currentNode.previousSibling;
//     }

//     nodes.push(commonAncestorNode);

//     return nodes.filter(function (node, index) {
//         return nodes.indexOf(node) === index;
//     });
// }




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
boldButton4.addEventListener('click', newSetBold);
italicButton.addEventListener('click', sampleItalic);
// underlineButton.addEventListener('click', setUnderline);

// function setBold() {
//     var selection = window.getSelection();
//     var range = selection.getRangeAt(0);
//     var selectedText = range.extractContents();
//     console.log(selectedText);
//     var bold = document.createElement("strong");
//     bold.appendChild(selectedText);
//     range.insertNode(bold);
// }

function setBold() {
    let selection = window.getSelection();
    console.log(selection);
    let range = selection.getRangeAt(0);
    console.log(range.toString());
    let selectedText = range.extractContents();
    let bold = document.createElement("span");
    bold.className = "bold-font";
    bold.appendChild(selectedText);
    console.log(bold.parentNode);
    range.insertNode(bold);
}

function newSetBold() {
    const selection = document.getSelection();
    const range = window.getSelection().getRangeAt(0);
    const boldElement = document.createElement("b");
    boldElement.appendChild(document.createTextNode(range.toString()));
    range.deleteContents();
    range.insertNode(boldElement);
    selection.removeAllRanges();
    selection.addRange(range);
}

function newSetBold() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const boldElement = document.createElement("b");
    if (range.value) {

    }
    boldElement.appendChild(document.createTextNode(range.toString()));
    range.deleteContents();
    range.insertNode(boldElement);
    selection.removeAllRanges();
    selection.addRange(range);
}



