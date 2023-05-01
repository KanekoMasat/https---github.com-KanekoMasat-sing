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
const underlineButton = document.getElementById('underlineButton');
const editable = document.getElementById('editable');
const testButton = document.getElementById('testButton');
const boldRemove = document.getElementById('boldRemove');


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









function testFunction() {
    const ranges1 = [];
    const ranges2 = [];
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    let text = selection.toString();
    const editableChildNodes = editable.childNodes;

    if (range.startContainer === range.endContainer) {
        console.log("選択範囲は一つのコンテナに収まっています");
    } else {
        console.log("選択範囲のコンテナは2つ以上です");

        const fragment = range.cloneContents();
        range.deleteContents();
        let test = document.createElement("span");
        test.appendChild(fragment);
        range.insertNode(test);

        // 子孫ノードを走査する関数
        function traverse(node) {
            console.log("関数traverseが呼び出されました");
            console.log(node.nodeType);
            console.log(node.childNodes);
            if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                node = node.childNodes;
            }
            if (node.nodeType === Node.ELEMENT_NODE) { // ノードが要素ノードの場合
                // ノードを処理するコードをここに記述
                console.log(node);
                ranges1.push(node);
                node.childNodes.forEach(element => {
                    console.log(element.textContent);
                });

                const children = node.childNodes;
                for (let i = 0; i < children.length; i++) {
                    traverse(children[i]); // 子ノードを再帰的に走査する
                }
            } else {
                console.log("要素ノードではありません");
                if (node.textContent !== "") {
                    ranges2.push(node);
                }
            }
        }

        // 親ノードを走査する
        console.log(fragment);
        traverse(test);
        console.log(ranges1);
        console.log(ranges2);
        for (let i = 0; i < ranges2.length; i++) {
            console.log(ranges2[i].nodeName);

        }

    }
    console.log("------------------------");
}

function boldRemoveFunction() {
    let selection = window.getSelection();

    let range = selection.getRangeAt(0);

    let cloneRange = range.cloneContents();

    let bDocument = cloneRange.querySelectorAll('b');

    let cloneRangeChildNodes = cloneRange.childNodes;

    console.log("cloneRange");
    console.log(cloneRange);
    console.log("------------------------");
    console.log("cloneChildNodes");
    console.log(cloneRangeChildNodes);
    console.log("------------------------");


    let index = 1;
    let i = 0;
    let nodes = [];
    cloneRangeChildNodes.forEach(element => {
        if (element.nodeName === "B") {
            console.log(element.childNodes[0]);
            console.log(element.hasChildNodes());
            element.childNodes.forEach(elementChilds => {
                if (elementChilds.nodeType === Node.TEXT_NODE) {
                    nodes.push(elementChilds);
                }
                console.log(element.childNodes);
                element.parentNode.appendChild(elementChilds);
                console.log(elementChilds.parentNode);
                console.log(element.parentNode);
            });
        }
        console.log(element.nodeType);
        if (element.nodeType === Node.ELEMENT_NODE) {
            if (element.nodeName === "B") {
                element.parentNode.removeChild(element);
            }
        } else if (element.nodeType === Node.TEXT_NODE) {
            nodes.push(element);
        }
    });
    console.log(cloneRangeChildNodes.length);
    console.log(cloneRangeChildNodes[0]);
    console.log(cloneRangeChildNodes[1]);
    range.deleteContents();
    for (let i = 0; i < 2; i++) {
        // range.insertNode(cloneRangeChildNodes[i]);
        // console.log((i + 1) + "回目");
    }



    function traverse(node) {
        // console.log("関数traverseが呼び出されました");
        // let index = 1;
        // // const bElement = node.querySelectorAll('b');
        // // console.log(bElement);
        // // const parentNode = bElement.parentNode;
        // // while (bElement.firstChild) {
        // //     parentNode.insertBefore(bElement.firstChild, bElement);
        // // }
        // // parentNode.removeChild(bElement);
        // node.forEach(element => {
        //     console.log(element);
        //     if (element.nodeName === "B") {
        //         // node.removeChild(element);
        //         console.log(index + "回目です");
        //         console.log(element);
        //         console.log(element.nodeName);
        //         console.log(element.childNodes);
        //         node.removeChild(element);
        //     }
        //     index++;
        // });
        // console.log(node);
    }

    console.log(nodes);
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeType === Node.TEXT_NODE) {
            console.log(nodes[i]);
            range.insertNode(nodes[i]);
        }
    }
}



// boldButton4.addEventListener('click', setBold);
italicButton.addEventListener('click', setItalic);
underlineButton.addEventListener('click', setUnderline);
// testButton.addEventListener('click', testFunction);
testButton.addEventListener('click', tagRemove);
boldRemove.addEventListener('click', boldRemoveFunction);





//太字
// function setBold() {
//     const ranges1 = [];
//     const ranges2 = [];
//     const selection = window.getSelection();
//     const range = selection.getRangeAt(0);

//     if (range.commonAncestorContainer.parentElement.style.fontWeight === "bold") {


//         const parentElement = range.commonAncestorContainer.parentElement;
//         console.log("選択ノードは太字です");
//         const resultNode = [];
//         let condition;
//         let beforeNode = "";
//         let duringNode = "";
//         let afterNode = "";
//         let afterNodeNumber;
//         const rangeNumberArray = getNumbersBetween(range.startOffset, range.endOffset);
//         const parentElementTextContent = parentElement.textContent.split("");

//         for (let i = 0; i < parentElementTextContent.length; i++) {
//             console.log(parentElementTextContent[i]);
//             for (let j = 0; j < rangeNumberArray.length - 1; j++) {
//                 if (rangeNumberArray[j] === i) {
//                     console.log("iが合致した");
//                     resultNode.push("?");
//                     condition = false;
//                 }
//             }
//             if (condition || condition === undefined) {
//                 resultNode.push(parentElementTextContent[i]);
//             }
//             condition = true;
//         }
//         console.log(resultNode);

//         for (let i = 0; i < resultNode.length; i++) {
//             if (resultNode[i].indexOf("?") === -1) {
//                 beforeNode += resultNode[i];
//             } else if (resultNode[i].indexOf("?") !== -1) {
//                 afterNodeNumber = i;
//                 i = resultNode.length;
//             }
//         }

//         for (let i = 0; i < resultNode.length; i++) {
//             if (resultNode[i].indexOf("?") !== -1) {
//                 duringNode += resultNode[i];
//                 afterNodeNumber++;
//             }
//         }

//         for (let i = afterNodeNumber; i < resultNode.length; i++) {
//             afterNode += resultNode[i];
//         }
//         let fragment = document.createDocumentFragment();

//         const beforeNodeContainer = document.createElement("span");
//         if (beforeNode !== "") {
//             const beforeChangeNodeText = document.createTextNode(beforeNode);
//             beforeNodeContainer.style.fontWeight = "bold";
//             beforeNodeContainer.appendChild(beforeChangeNodeText);
//             fragment.appendChild(beforeNodeContainer);
//             console.log(beforeNodeContainer);
//         } else {
//             console.log(beforeNode);
//         }



//         const duringText = document.createTextNode(range.toString());
//         console.log(duringText);
//         fragment.appendChild(duringText);


//         const afterChangeNodeContainer = document.createElement("span");
//         if (afterNode !== "") {
//             const afterChangeNodeText = document.createTextNode(afterNode);
//             afterChangeNodeContainer.style.fontWeight = "bold";
//             afterChangeNodeContainer.appendChild(afterChangeNodeText);
//             fragment.appendChild(afterChangeNodeContainer);
//             console.log(afterChangeNodeContainer);
//         } else {
//             console.log(afterNode);
//         }

//         range.deleteContents();
//         parentElement.parentNode.removeChild(parentElement);
//         range.insertNode(fragment);



//         //二つの数字を引数として、それらの数字を含めた間の数字を返すメソッド
//         function getNumbersBetween(num1, num2) {
//             const result = [];
//             const min = Math.min(num1, num2); // num1とnum2のうち、小さい方を最小値とする
//             const max = Math.max(num1, num2); // num1とnum2のうち、大きい方を最大値とする

//             for (let i = min; i <= max; i++) {
//                 result.push(i); // 最小値から最大値までの数字を配列に追加する
//             }

//             return result; // 結果を返す
//         }

//     } else {



//         //デバック用及びタグ付け用
//         if (range.startContainer === range.endContainer) {
//             console.log("複数ノードを跨いでいません");
//         }
//         let nodes = [];
//         console.log(editable.childNodes.length);
//         console.log("----- editableのchildNodes -----");
//         for (let i = 0; i < editable.childNodes.length; i++) {
//             console.log(editable.childNodes[1].childNodes[i]);
//         }
//         console.log("----- 終わり ------");


//         const boldContainer = document.createElement("span");
//         boldContainer.style.fontWeight = "bold";
//         const rangeExtractContents = range.extractContents();


//         range.deleteContents();
//         boldContainer.appendChild(rangeExtractContents);
//         range.insertNode(boldContainer);

//         console.log("----- 削除前のchildNodes -----")
//         for (let i = 0; i < range.commonAncestorContainer.childNodes.length; i++) {
//             console.log(range.commonAncestorContainer.childNodes[i]);
//             if (range.commonAncestorContainer.childNodes[i].textContent === "") {
//                 nodes.push(range.commonAncestorContainer.childNodes[i]);
//             }
//         }
//         console.log("----- 終わり ------");

//         for (let i = 0; i < nodes.length; i++) {
//             nodes[i].parentNode.removeChild(nodes[i]);
//         }

//         console.log("----- 削除後のchildNodes -----");

//         for (let i = 0; i < range.commonAncestorContainer.childNodes.length; i++) {
//             console.log(range.commonAncestorContainer.childNodes[i]);
//         }
//         console.log("----- 終わり ------");



//         //タグの前後を繋げる
//         let node;
//         console.log(node);
//         const newLine = range.commonAncestorContainer.childNodes[0].textContent;

//         for (let i = 0, j = range.commonAncestorContainer.childNodes.length; i < j; i++) {
//             console.log(i + 1 + "回目です");
//             console.log(range.commonAncestorContainer.childNodes[i]);
//             if (range.commonAncestorContainer.childNodes[i].nodeName === "SPAN") {

//                 if (node !== undefined && node.textContent !== "" && node.textContent !== newLine && node.style) {

//                     if (range.commonAncestorContainer.childNodes[i].style.fontWeight === "bold") {
//                         console.log(node);

//                         if (range.commonAncestorContainer.childNodes[i].style.fontWeight === node.style.fontWeight) {

//                             const boldContainer = document.createElement("span");
//                             boldContainer.style.fontWeight = "bold";
//                             const boldText = node.textContent + range.commonAncestorContainer.childNodes[i].textContent;
//                             console.log(boldText);
//                             const boldTextNode = document.createTextNode(boldText);
//                             boldContainer.appendChild(boldTextNode);
//                             range.commonAncestorContainer.childNodes[i].parentNode.removeChild(range.commonAncestorContainer.childNodes[i]);
//                             node.parentNode.removeChild(node);
//                             range.insertNode(boldContainer);
//                             i--;
//                             j--;
//                         }
//                     }
//                 }
//             }
//             node = range.commonAncestorContainer.childNodes[i];
//         }

//         let nodes2 = [];
//         for (let i = 0; i < range.commonAncestorContainer.childNodes.length; i++) {
//             console.log(range.commonAncestorContainer.childNodes[i]);
//             if (range.commonAncestorContainer.childNodes[i].textContent === "") {
//                 nodes2.push(range.commonAncestorContainer.childNodes[i]);
//             }
//         }

//         for (let i = 0; i < nodes2.length; i++) {
//             nodes2[i].parentNode.removeChild(nodes2[i]);
//         }
//     }
// }


//子孫ノードを走査する関数
function traverse(node) {
    console.log("関数traverseが呼び出されました");
    console.log(node.nodeType);
    console.log(node.childNode);
    console.log(node);
    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        node = node.childNodes;
    }
    console.log(node);
    if (node.nodeType === Node.ELEMENT_NODE) { // ノードが要素ノードの場合
        // ノードを処理するコードをここに記述
        console.log(node);
        ranges1.push(node);
        node.childNodes.forEach(element => {
            console.log(element.textContent);
        });

        const children = node.childNodes;
        for (let i = 0; i < children.length; i++) {
            traverse(children[i]); // 子ノードを再帰的に走査する
        }
    } else {
        console.log("要素ノードではありません");
        if (node.textContent !== "") {
            ranges2.push(node);
        }
    }
}

//斜体
function setItalic() {
    console.log("処理開始");
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    edit(range, "italic");
    // let rangeParentNode = range.commonAncestorContainer.parentNode;
    // if (rangeParentNode.className !== "editable") {
    //     while (rangeParentNode.className !== "editable-inner") {
    //         rangeParentNode = rangeParentNode.parentNode;
    //     }
    // } else {
    //     rangeParentNode = range.commonAncestorContainer;
    // }

    // combineAdjacentNodes(rangeParentNode);




    // const selectedText = range.extractContents();
    // console.log(selectedText.textContent);
    // range.deleteContents();

    // const italic = document.createElement("span");
    // italic.style.fontStyle = "italic";
    // italic.appendChild(selectedText);
    // range.insertNode(italic);
}

//下線
function setUnderline() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    edit(range, "underLine");

    // const selectedText = range.extractContents();
    // console.log(selectedText.textContent);
    // range.deleteContents();

    // const underline = document.createElement("span");
    // underline.style.borderBottom = "2px solid black";
    // underline.appendChild(selectedText);
    // range.insertNode(underline);
}

//タグ削除
function tagRemove() {
    const ranges1 = [];
    const ranges2 = [];
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const weight = window.getComputedStyle(range.commonAncestorContainer.parentElement).fontWeight;
    console.log(weight);
    const cloneRange = range.cloneContents();
    const cloneRangeChildNodes = cloneRange.childNodes;
    console.log(cloneRangeChildNodes);
    const cloneRangeCount = cloneRange.childNodes.length;
    for (let i = 0; i < cloneRangeCount; i++) {
        traverse(cloneRangeChildNodes[i]);
    }
    console.log(ranges1);
    console.log(ranges2);
    range.deleteContents();
    for (let i = 0; i < ranges2.length; i++) {
        range.insertNode(ranges2[ranges2.length - 1 - i]);
    }


    function traverse(node) {
        console.log("関数traverseが呼び出されました");
        console.log(node.nodeType);
        console.log(node.childNodes);
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) { // このif文OK
            node = node.childNodes;
            console.log("#document-fragmentです");
        }
        if (node.nodeType === Node.ELEMENT_NODE) { // ノードが要素ノードの場合
            console.log("要素ノードです");
            // ノードを処理するコードをここに記述
            console.log(node);
            console.log(node.nodeName);
            ranges1.push(node);
            node.childNodes.forEach(element => {
                console.log(element.textContent);
            });

            const children = node.childNodes;
            for (let i = 0; i < children.length; i++) {
                traverse(children[i]); // 子ノードを再帰的に走査する
            }
        } else if (node.nodeType === Node.TEXT_NODE) {  //ノードがテキストノードの場合
            console.log("テキストノードです");
            if (node.textContent !== "") {
                console.log(node);
                ranges2.push(node);
            }
        }
    }
}

function edit(range, addAttribute) {
    //ノードの範囲が複数のノードに跨っていない時
    if (range.startContainer === range.endContainer) {
        if (range.commonAncestorContainer.parentElement.tagName === "SPAN") {
            let resultNode;
            let beforeText = "";
            let afterText = "";
            let afterNodeNumber;
            const middleTextNode = document.createTextNode(range.toString());
            const rangeNumberArray = getNumbersBetween(range.startOffset, range.endOffset);
            const parentElement = range.commonAncestorContainer.parentElement;
            const parentElementTextArray = parentElement.textContent.split("");

            resultNode = createElementTextArray(parentElementTextArray, rangeNumberArray);

            //？の部分を何番目か保存及び？前の文字取得
            for (let i = 0; i < resultNode.length; i++) {
                if (resultNode[i].indexOf("?") === -1) {
                    beforeText += resultNode[i];
                } else if (resultNode[i].indexOf("?") !== -1) {
                    afterNodeNumber = i;
                    i = resultNode.length;
                }
            }

            //?が何文字あるか
            for (let i = 0; i < resultNode.length; i++) {
                if (resultNode[i].indexOf("?") !== -1) {
                    afterNodeNumber++;
                }
            }

            //？終わりからの文字取得
            for (let i = afterNodeNumber; i < resultNode.length; i++) {
                afterText += resultNode[i];
            }

            //空白でなければspanタグに入れる
            // if (beforeNode !== "") {
            //     const beforeChangeTextNode = document.createTextNode(beforeNode);
            //     setAttribute(addAttribute, beforeNodeContainer);
            //     beforeNodeContainer.appendChild(beforeChangeTextNode);
            //     fragment.appendChild(beforeNodeContainer);
            // }

            // //今回外れる
            // fragment.appendChild(middleTextNode);

            // //空白でなければspanタグに入れる
            // if (afterNode !== "") {
            //     const afterChangeTextNode = document.createTextNode(afterNode);
            //     setAttribute(addAttribute, afterNodeContainer);
            //     afterNodeContainer.appendChild(afterChangeTextNode);
            //     fragment.appendChild(afterNodeContainer);
            // }
            console.log(concatNodes(beforeText, middleTextNode, afterText, addAttribute));


            //     const parentElementAttribute = getElementAttribute(range.commonAncestorContainer.parentElement);
            //     parentElementAttribute.forEach(element => {
            //         if (element.value === addAttribute) {
            //             removeAttribute(element.value, parentElement);
            //         }
            //     });

            //     if (parentElement.style.length === 0) {
            //         childText = parentElement.textContent;
            //         childTextContainer = document.createTextNode(childText);
            //         console.log(childTextContainer);
            //         parentElement.parentNode.replaceChild(childTextContainer, parentElement);
            //     }
            // } else {
            //     setSpan(addAttribute, range);
        }
    } else {

    }
}


//spanタグに付与予定の属性を取得できるメソッド
function getElementAttribute(parentElement) {
    const attribute = [];
    const bold = { name: "bold", attributeName: "fontWeight", value: parentElement.style.fontWeight };
    const italic = { name: "italic", attributeName: "fontStyle", value: parentElement.style.fontStyle };
    const underLine = { name: "underLine", attributeName: "borderBottom", value: parentElement.style.borderBottom };
    attribute.push(bold);
    attribute.push(italic);
    attribute.push(underLine);
    return attribute;
}

//spanタグに付与予定の属性を削除できるメソッド(単一属性のみ)
function removeAttribute(attribute, element) {
    if (attribute === "bold") {
        element.style.fontWeight = "";
    } else if (attribute === "italic") {
        element.style.fontStyle = "";
    } else if (attribute === "underLine") {
        element.style.borderBottom = "";
    }
}

//各spanタグを付与するメソッドの分岐
function setSpan(attribute, range) {
    if (attribute === "bold") {
        setSpanBold(range);
    } else if (attribute === "italic") {
        setSpanItalic(range);
    } else if (attribute === "underLine") {
        setSpanUnderLine(range);
    }
}

//Elementオブジェクトに属性を付与する分岐
function setAttribute(attribute, element) {
    if (attribute === "bold") {
        assignmentBold(element);
    } else if (attribute === "italic") {
        assignmentItalic(element);
    } else if (attribute === "underLine") {
        assignmentUnderLine(element);
    }
}

//rangeオブジェクトの太字処理
function setSpanBold(range) {
    let selectedText = range.extractContents();
    range.deleteContents();

    const bold = document.createElement("span");
    bold.style.fontWeight = "bold";
    bold.appendChild(selectedText);
    range.insertNode(bold);
}

//rangeオブジェクトの斜体処理
function setSpanItalic(range) {
    let selectedText = range.extractContents();
    range.deleteContents();

    const italic = document.createElement("span");
    italic.style.fontStyle = "italic";
    italic.appendChild(selectedText);
    range.insertNode(italic);
}

//rangeオブジェクトの下線処理
function setSpanUnderLine() {
    let selectedText = range.extractContents();
    range.deleteContents();

    const underline = document.createElement("span");
    underline.style.borderBottom = "2px solid black";
    underline.appendChild(selectedText);
    range.insertNode(underline);
}

//隣接するテキストノードの結合処理
function combineAdjacentNodes(element) {
    const elementChilds = element.childNodes;
    console.log(elementChilds);
    let previousNode;
    for (let i = 0, j = elementChilds.length; i < j; i++) {
        console.log(i);
        console.log(elementChilds[i]);
        if (elementChilds[i].nodeType === Node.TEXT_NODE && elementChilds[i].textContent !== "" && previousNode !== undefined) {
            if (previousNode.nodeType === Node.TEXT_NODE) {
                const textNode = document.createTextNode(previousNode.textContent + elementChilds[i].textContent);
                //ノードを消す
                element.replaceChild(textNode, previousNode);
                elementChilds[i].parentNode.removeChild(elementChilds[i]);
                i--;
                j--;
            }
        }
        previousNode = elementChilds[i];
    }
}

//引数として二つの数字を受け取り、その間の数字を返す
function getNumbersBetween(num1, num2) {
    const result = [];
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    for (let i = min; i <= max; i++) {
        result.push(i);
    }

    return result;
}

//ノードの太字処理
function assignmentBold(element) {
    element.style.fontWeight = "bold";
}

//ノードの斜体処理
function assignmentItalic(element) {
    element.style.fontStyle = "italic";
}

//ノードの下線処理
function assignmentUnderLine(element) {
    element.style.borderBottom = "2px solid black";
}

//選択した部分だけ"？"にする
function createElementTextArray(elementTextArray, numberRange) {
    let condition;
    const resultNode = [];
    for (let i = 0; i < elementTextArray.length; i++) {
        for (let j = 0; j < numberRange.length - 1; j++) {
            if (numberRange[j] === i) {
                resultNode.push("?");
                condition = false;
            }
        }
        if (condition || condition === undefined) {
            resultNode.push(elementTextArray[i]);
        }
        condition = true;
    }
    return resultNode;
}

function concatNodes(beforeText, middleTextNode, afterText, addAttribute) {
    const beforeNodeContainer = document.createElement("span");
    const afterNodeContainer = document.createElement("span");
    let fragment = document.createDocumentFragment();

    if (beforeText !== "") {
        const beforeChangeTextNode = document.createTextNode(beforeText);
        setAttribute(addAttribute, beforeNodeContainer);
        beforeNodeContainer.appendChild(beforeChangeTextNode);
        fragment.appendChild(beforeNodeContainer);
    }

    fragment.appendChild(middleTextNode);

    if (afterText !== "") {
        const afterChangeTextNode = document.createTextNode(afterText);
        setAttribute(addAttribute, afterNodeContainer);
        afterNodeContainer.appendChild(afterChangeTextNode);
        fragment.appendChild(afterNodeContainer);
    }

    return fragment;
}