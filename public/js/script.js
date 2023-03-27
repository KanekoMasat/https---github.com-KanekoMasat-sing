const foucasTarget = document.getElementById('test-textarea');
const formSampleTarget = document.getElementById('form-sample');
let changeTarget = document.getElementById('tool-bar');
const headerArea = document.getElementById('header-container');
let textPosition = 1;
const buttonArea = document.getElementById('menu-btn');
const bodyArea = document.getElementById('body-container');
const myTextarea2 = document.getElementById('testTextarea2');
const boldButton3 = document.getElementById('boldButton3');
const boldButton4 = document.getElementById('boldButton4');
const italicButton = document.getElementById('italicButton');
// const underlineButton = document.getElementById('underlineButton');
const editable = document.getElementById('editable');
const testButton = document.getElementById('testButton');

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
// bodyArea.addEventListener('mousedown', function (event) {
//     textPosition.forEach(element => {
//         if (event.target.tagName !== 'BUTTON') {
//             if (element === foucasTarget.selectionStart) {
//                 setTimeout(function () {
//                     changeTarget.style.display = "none";
//                     // console.log("changeTargetのstyleをnoneにしました");
//                 }, 400);
//             }
//         }
//     });
// });

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
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);

    // 選択範囲のテキストを1文字ずつrangeオブジェクトにして配列に格納
    // const textArray = [];
    // for (let i = 0; i < range.toString().length; i++) {
    //     if (range.startContainer === range.endContainer) {
    //         const charRange = document.createRange();
    //         charRange.setStart(range.startContainer, range.startOffset + i);
    //         charRange.setEnd(range.startContainer, range.startOffset + i + 1);
    //         textArray.push(charRange);
    //         console.log(charRange.toString());
    //         console.log(charRange.commonAncestorContainer.parentElement.tagName);
    //     } else if (range.startContainer !== range.endContainer) {
    //         console.log("複数要素を跨いでいます");

    //     }

    // }
    // console.log(textArray);  一旦コメントアウト

    const textArray = [];
    let container = range.startContainer;
    let offset = range.startOffset;

    // 選択範囲の文字列を1文字ずつ分割して、配列に追加する
    if (range.startContainer === range.endContainer) {
        //startContainerとendContainerが同じ場合
        for (let i = 0; i < range.toString().length; i++) {
            // 現在の文字の範囲を取得する
            const charRange = document.createRange();
            charRange.setStart(container, offset);
            charRange.setEnd(container, offset + 1);
            console.log("charRange.toString(): " + charRange.toString());
            console.log("charRange.commonAncestorContainer.parentElement.tagName: " + charRange.commonAncestorContainer.parentElement.tagName);
            textArray.push(charRange);

            // containerとoffsetを更新する
            if (offset + 1 >= container.length) {
                container = container.nextSibling;
                offset = 0;
            } else {
                offset++;
            }
        }
    } else {
        // startContainerとendContainerが違う場合の処理
        if (range.startContainer !== range.endContainer) {
            // 選択範囲に含まれるすべてのノードを取得する
            const nodes = getNodesInRange2(range);
            console.log(nodes);

            // 各ノードについて、選択範囲内のテキスト範囲を1文字ずつ取得して配列に追加する
            for (const node of nodes) {
                let start = 0;
                let end = node.textContent.length;

                if (node === range.startContainer) {
                    start = range.startOffset;
                }
                if (node === range.endContainer) {
                    end = range.endOffset;
                }

                for (let i = start; i < end; i++) {
                    const charRange = document.createRange();
                    charRange.setStart(node, i);
                    charRange.setEnd(node, i + 1);
                    console.log("charRange.toString(): " + charRange.toString());
                    console.log("charRange.commonAncestorContainer.parentElement.tagName: " + charRange.commonAncestorContainer.parentElement.tagName);
                    textArray.push(charRange);
                }
            }
        }

        // 選択範囲に含まれるすべてのノードを取得する関数
        function getNodesInRange1(range) {
            const startNode = range.startContainer;
            const endNode = range.endContainer;
            const nodes = [];

            let currentNode = startNode;
            while (currentNode !== endNode.nextSibling) {
                nodes.push(currentNode);
                currentNode = currentNode.nextSibling;
            }
            console.log(nodes);
            return nodes;

        }

        function getNodesInRange2(range) {
            const startNode = range.startContainer;
            const endNode = range.endContainer;
            const nodes = [];

            if (startNode === endNode) {
                // 要素を跨がない場合
                const startOffset = range.startOffset;
                const endOffset = range.endOffset;
                nodes.push(startNode.splitText(startOffset));
                nodes[0].splitText(endOffset - startOffset);
            } else {
                // 要素を跨ぐ場合
                let currentNode = startNode.nextSibling;
                while (currentNode !== endNode) {
                    nodes.push(currentNode);
                    currentNode = currentNode.nextSibling;
                }
                nodes.push(endNode.splitText(range.endOffset));
                nodes[0].splitText(range.startOffset);
            }

            return nodes;
        }


    }



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

function testFunction() {
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    const startNode = range.startContainer;
    const endNode = range.endContainer;
    let currentNode = startNode;
    const childNodes = editable.childNodes;
    console.log(childNodes[0].textContent);

    if (range.startContainer === range.endContainer) {
        console.log("選択範囲は一つのコンテナに収まっています");
        console.log(editable.childNodes.length);
        console.log(range.commonAncestorContainer.parentElement.tagName);
        console.log(range.startContainer);
        console.log(range.endContainer);
        console.log(range.startOffset);
        console.log(range.endOffset);
        console.log(range.commonAncestorContainer);

        //range.commonAncestorContainer.parentElement.tagNameを使って、親要素がIタグか調べる

        //iタグだった場合
        //iタグ消す

        //iタグじゃなかった場合
        //iタグで囲む

    } else {
        console.log("選択範囲のコンテナは2つ以上です");
        console.log(editable.childNodes.length);
        editable.childNodes.forEach(element => {
            console.log(element.textContent);
        });
        console.log("startContainer: " + range.startContainer.textContent);
        console.log("endContainer: " + range.endContainer.textContent);
        console.log(range.startOffset);
        console.log(range.endOffset);
        console.log(range.commonAncestorContainer);

        //まず各コンテナに分ける
        const containers = [];
        const ranges = [];

        for (let i = 0; i < editable.childNodes.length; i++) {
            if (editable.childNodes[i].textContent !== "") {
                containers.push(editable.childNodes[i]);
                console.log(i + "." + editable.childNodes[i].textContent);
                console.log(i + "." + editable.childNodes[i].parentElement.tagName);

            }
        }


        childNodes.forEach(element => {
            if (element.textContent !== "") {
                console.log(element.textContent.length);
                for (let i = 0, j = element.textContent.length; i < j; i++) {
                    let charRange = document.createRange();
                    charRange.setStart(currentNode, i);
                    charRange.setEnd(currentNode, i + 1);
                    ranges.push(charRange);
                    console.log(ranges[i].toString());
                    console.log(ranges[i].startContainer);
                }
                if (endNode !== currentNode) {
                    currentNode = currentNode.nextSibling;
                }
            }
        });

        console.log("------------------------");
        console.log(ranges);
    }



}


boldButton4.addEventListener('click', newSetBold);
italicButton.addEventListener('click', sampleItalic);
// underlineButton.addEventListener('click', setUnderline);
testButton.addEventListener('click', testFunction);




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



