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
const alertButton = document.getElementById("alertButton");


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


boldButton4.addEventListener('click', setBold);
italicButton.addEventListener('click', setItalic);
underlineButton.addEventListener('click', setUnderline);
alertButton.addEventListener("click", alertFunction);

function alertFunction() {
    console.log("アラートボタン");
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    console.log(range.commonAncestorContainer.parentNode);
}





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

//太字
function setBold() {
    console.log("処理開始");
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        console.log(range.commonAncestorContainer);
        edit(range, "bold");
        let rangeParentNode = range.commonAncestorContainer.parentNode;
        if (rangeParentNode.className !== "editable") {
            while (rangeParentNode.className !== "editable-inner") {
                rangeParentNode = rangeParentNode.parentNode;
            }
        } else {
            rangeParentNode = range.commonAncestorContainer;
        }

        combineAdjacentTextNodes(rangeParentNode);
        emptySpanRemove(rangeParentNode);
        combineAdjacentSpanNodes(rangeParentNode)
    }
}

//斜体
function setItalic() {
    console.log("処理開始");
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        edit(range, "italic");
        let rangeParentNode = range.commonAncestorContainer.parentNode;
        if (rangeParentNode.className !== "editable") {
            while (rangeParentNode.className !== "editable-inner") {
                rangeParentNode = rangeParentNode.parentNode;
            }
        } else {
            rangeParentNode = range.commonAncestorContainer;
        }

        combineAdjacentTextNodes(rangeParentNode);
        emptySpanRemove(rangeParentNode);
        combineAdjacentSpanNodes(rangeParentNode);
    }
}

//下線
function setUnderline() {
    console.log("処理開始");
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        edit(range, "underLine");
        let rangeParentNode = range.commonAncestorContainer.parentNode;
        if (rangeParentNode.className !== "editable") {
            while (rangeParentNode.className !== "editable-inner") {
                rangeParentNode = rangeParentNode.parentNode;
            }
        } else {
            rangeParentNode = range.commonAncestorContainer;
        }

        combineAdjacentTextNodes(rangeParentNode);
        emptySpanRemove(rangeParentNode);
        combineAdjacentSpanNodes(rangeParentNode);
    }
}
//これらの処理は共通化できそう



function edit(range, addAttribute) {
    //ノードの範囲が複数のノードに跨っていない時
    if (range.startContainer === range.endContainer) {
        console.log("単一ノードです");
        if (range.commonAncestorContainer.parentElement.tagName === "SPAN" && getAttributeStatus(addAttribute, range.commonAncestorContainer.parentElement) && getStyleCount(range.commonAncestorContainer.parentElement) === 1) {
            //付与しようとしている属性を消したい場合の処理
            removeSpanElement(addAttribute, range);

        } else if (range.commonAncestorContainer.parentElement.tagName === "SPAN" && !(getAttributeStatus(addAttribute, range.commonAncestorContainer.parentElement))) {
            //付与しようとしている属性を加えて新しいspanタグを作成する場合の処理
            addAttributeToSpanTag(addAttribute, range);
        }
        else if (range.commonAncestorContainer.parentElement.tagName === "SPAN" && getAttributeStatus(addAttribute, range.commonAncestorContainer.parentElement) && getStyleCount(range.commonAncestorContainer.parentElement) > 1) {
            //付与しようとしている属性を消したい場合の処理(属性のみでspanタグは消さない)
            removeSpanAttribute(addAttribute, range);
        }
        else if (range.commonAncestorContainer.nodeType === Node.TEXT_NODE) {
            //まだ不完全
            setSpan(addAttribute, range);
        }
    }
    //ノードが複数のノードに跨っている時
    else {
        const rangeChildNodes = range.extractContents().childNodes;
        console.log("複数ノードです");

        if (hasTextNodes(rangeChildNodes)) {
            applyAttributesToMultipleNodes(addAttribute, rangeChildNodes, range);
        } else {
            if (getNodesAttributeStatus(addAttribute, rangeChildNodes)) {
                range.deleteContents();
                const fragment = document.createDocumentFragment();
                for (let i = 0, j = rangeChildNodes.length; i < j; i++) {
                    removeAttribute(addAttribute, rangeChildNodes[i]);
                    if (getStyleCount(rangeChildNodes[i]) === 0) {
                        const textContent = document.createTextNode(rangeChildNodes[i].textContent);
                        rangeChildNodes[i].parentNode.replaceChild(textContent, rangeChildNodes[i]);
                    }
                    fragment.appendChild(rangeChildNodes[i]);
                    i--;
                    j--;
                }
                range.insertNode(fragment);
            } else {
                applyAttributesToMultipleNodes(addAttribute, rangeChildNodes, range);
            }
        }



    }
}

//引数にノードを受け取り、当該ノードがどのような属性を持っているかを二進数(文字列)で返す
function getStateOfStyle(node) {
    let binaryString = "";

    if (node.style.fontWeight === "bold") {
        binaryString += "1";
    } else {
        binaryString += "0";
    }

    if (node.style.fontStyle === "italic") {
        binaryString += "1";
    } else {
        binaryString += "0";
    }

    if (node.style.borderBottom === "2px solid black") {
        binaryString += "1";
    } else {
        binaryString += "0";
    }
    return binaryString;
}

//スタイルの数を取得
function getStyleCount(node) {
    const attributes = AttributeManager.getElementAttribute(node);
    let attributesCount = 0;
    attributes.forEach(attribute => {
        if (attribute.getValue() !== "") {
            attributesCount++;
        }
    })
    return attributesCount;
}

//付与しようとしている属性があるかどうか真偽値で返す
function duplicationJudgment(addAttribute, node) {
    const elementAttribute = AttributeManager.getElementAttribute(node);
    for (let i = 0; i < elementAttribute.length; i++) {
        if (addAttribute === elementAttribute[i].name && elementAttribute[i].value === "") {
            return true;
        }
    }
    return false;
}

//spanタグから指定の属性を削除できるメソッド(正確には属性に空白を代入する)
function removeAttribute(attribute, element) {
    if (attribute === "bold") {
        element.style.fontWeight = "";
    } else if (attribute === "italic") {
        element.style.fontStyle = "";
    } else if (attribute === "underLine") {
        element.style.borderBottom = "";
    }
}

//同じContainer内で選択範囲のspanタグを消したい場合のメソッド
function removeSpanElement(addAttribute, range) {
    let resultNode;
    let beforeText;
    let afterText;
    const parentElement = range.commonAncestorContainer.parentElement;
    const parentNode = range.commonAncestorContainer.parentNode;

    const middleTextNode = document.createTextNode(range.toString());
    const rangeNumberArray = getNumbersBetween(range.startOffset, range.endOffset);
    const parentElementTextArray = parentElement.textContent.split("");
    resultNode = createElementTextArray(parentElementTextArray, rangeNumberArray);
    beforeText = nodeSplit(resultNode)[0];
    afterText = nodeSplit(resultNode)[1];

    const fragment = stripAttributeFromTag(beforeText, middleTextNode, afterText, addAttribute);

    parentElement.parentNode.replaceChild(fragment, parentNode);
}

//同じContainer内で選択範囲のspanタグに属性を追加したい場合のメソッド
function addAttributeToSpanTag(addAttribute, range) {
    let resultNode;
    let beforeText;
    let afterText;
    const parentElement = range.commonAncestorContainer.parentElement;
    const parentNode = range.commonAncestorContainer.parentNode;

    const rangeNumberArray = getNumbersBetween(range.startOffset, range.endOffset);
    const parentElementTextArray = parentElement.textContent.split("");
    resultNode = createElementTextArray(parentElementTextArray, rangeNumberArray);
    beforeText = nodeSplit(resultNode)[0];
    afterText = nodeSplit(resultNode)[1];

    const parentElementAttributes = AttributeManager.getElementAttribute(parentElement);
    const originalAttribute = [];
    parentElementAttributes.forEach(attribute => {
        if (attribute.getValue() !== "") {
            originalAttribute.push(attribute.getName());
        }
    });
    const fragment = applyTagToPartialText(addAttribute, originalAttribute, beforeText, range, afterText);

    parentNode.parentNode.replaceChild(fragment, parentNode);
}

function removeSpanAttribute(addAttribute, range) {
    let resultNode;
    let beforeText;
    let afterText;
    const parentElement = range.commonAncestorContainer.parentElement;
    const parentNode = range.commonAncestorContainer.parentNode;

    const rangeNumberArray = getNumbersBetween(range.startOffset, range.endOffset);
    const parentElementTextArray = parentElement.textContent.split("");
    resultNode = createElementTextArray(parentElementTextArray, rangeNumberArray);
    beforeText = nodeSplit(resultNode)[0];
    afterText = nodeSplit(resultNode)[1];

    const parentElementAttributes = AttributeManager.getElementAttribute(parentElement);
    const originalAttribute = [];
    parentElementAttributes.forEach(attribute => {
        if (attribute.getValue() !== "") {
            originalAttribute.push(attribute.getName());
        }
    });
    const fragment = removeAttributesFromPartialText(addAttribute, originalAttribute, beforeText, range, afterText);

    parentNode.parentNode.replaceChild(fragment, parentNode);
}

//各spanタグを付与するメソッドの分岐
function setSpan(attribute, range) {
    if (attribute === "bold") {
        // setSpanBold(range);
        setSpanAttribute(range, attribute);
    } else if (attribute === "italic") {
        // setSpanItalic(range);
        setSpanAttribute(range, attribute);
    } else if (attribute === "underLine") {
        // setSpanUnderLine(range);
        setSpanAttribute(range, attribute);
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


//これより下はsetSpanメソッドと依存関係（共通化できそう）
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
function setSpanUnderLine(range) {
    let selectedText = range.extractContents();
    range.deleteContents();

    const underline = document.createElement("span");
    underline.style.borderBottom = "2px solid black";
    underline.appendChild(selectedText);
    range.insertNode(underline);
}
//ここまで

function setSpanAttribute(range, addAttribute) {
    let selectedText = range.extractContents();
    range.deleteContents();
    const container = new SpanTag(selectedText);
    container.setAttribute(addAttribute);
    range.insertNode(container.getElement());
}

//引数としてノードを渡し、隣接するテキストノードの結合処理
function combineAdjacentTextNodes(element) {
    const elementChilds = element.childNodes;
    let previousNode;
    for (let i = 0, j = elementChilds.length; i < j; i++) {
        if (elementChilds[i].nodeType === Node.TEXT_NODE && elementChilds[i].textContent !== "" && previousNode !== undefined) {
            if (previousNode.nodeType === Node.TEXT_NODE) {
                const textNode = document.createTextNode(previousNode.textContent + elementChilds[i].textContent);
                element.replaceChild(textNode, previousNode);
                elementChilds[i].parentNode.removeChild(elementChilds[i]);
                i--;
                j--;
            }
        }
        previousNode = elementChilds[i];
    }
}

//引数としてノードを渡し、隣り合った同じ属性を持つspanタグを結合
function combineAdjacentSpanNodes(element) {
    const elementChilds = element.childNodes;
    let previousNode;
    for (let i = 0, j = elementChilds.length; i < j; i++) {
        if (previousNode !== undefined && previousNode.nodeType === Node.ELEMENT_NODE && elementChilds[i].nodeType === Node.ELEMENT_NODE) {
            if (getStateOfStyle(previousNode) === getStateOfStyle(elementChilds[i])) {
                console.log(i + 1);
                previousNode.textContent = previousNode.textContent + elementChilds[i].textContent;
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

//引数として属性名とノードを受け取り、当該ノードにその属性が付与されているか真偽値で返す
function getAttributeStatus(addAttribute, node) {
    let attribute;
    const status = AttributeManager.getElementAttribute(node);
    while (attribute === undefined) {
        status.forEach(element => {
            if (element.name === addAttribute) {
                attribute = element;
            }
        });
    }
    if (attribute.value === "") {
        return false;
    }
    return true;
}

//引数として渡したノード内にテキストノードがあるか真偽値で返す
function hasTextNodes(nodes) {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeType === Node.TEXT_NODE) {
            return true;
        }
    }
    return false;
}

//引数として渡したノード内全てに付与しようとしている属性があるか真偽値で返す
function getNodesAttributeStatus(addAttribute, nodes) {
    for (let i = 0; i < nodes.length; i++) {
        const attributes = AttributeManager.getElementAttribute(nodes[i]);
        for (let j = 0; j < attributes.length; j++) {
            if (attributes[j].getName() === addAttribute && attributes[j].getValue() === "") {
                return false;
            }
        }
    }
    return true;
}

//これら下の3つのメソッドはsetAttributeと依存関係にある(setAttributeより呼び出されている)
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



//選択した部分だけ"？"にする(引数に範囲と配列を受け取る)
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

//注意！このメソッドはrangeオブジェクトがひとつのContainerに収まっているかつ、付与しようとしている属性がrangeオブジェクトの親ノードにいないと使えない
//前中後のテキスト及び与える属性名を引数にそれらを連結する
function stripAttributeFromTag(beforeText, middleTextNode, afterText, addAttribute) {
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

//単一ノード用：複数の属性の中から一つの属性のみ消す
function removeAttributesFromPartialText(addAttribute, originalAttribute, beforeText, range, afterText) {
    const middleSpanContainer = document.createElement("span");
    let fragment = document.createDocumentFragment();

    if (beforeText !== "") {
        const beforeNodeContainer = document.createElement("span");
        const beforeChangeTextNode = document.createTextNode(beforeText);
        for (let i = 0; i < originalAttribute.length; i++) {
            setAttribute(originalAttribute[i], beforeNodeContainer);
        }
        beforeNodeContainer.appendChild(beforeChangeTextNode);
        fragment.appendChild(beforeNodeContainer);
    }

    for (let i = 0; i < originalAttribute.length; i++) {
        setAttribute(originalAttribute[i], middleSpanContainer);
    }
    removeAttribute(addAttribute, middleSpanContainer);
    middleSpanContainer.appendChild(document.createTextNode(range.toString()));
    fragment.appendChild(middleSpanContainer);

    if (afterText !== "") {
        const afterNodeContainer = document.createElement("span");
        const afterChangeTextNode = document.createTextNode(afterText);
        for (let i = 0; i < originalAttribute.length; i++) {
            setAttribute(originalAttribute[i], afterNodeContainer);
        }
        afterNodeContainer.appendChild(afterChangeTextNode);
        fragment.appendChild(afterNodeContainer);
    }
    return fragment;
}

//注意！このメソッドはrangeオブジェクトがひとつのContainerに収まっているかつ、付与しようとしている属性がrangeオブジェクトの親ノードに無い場合に使える
//選択した部分にのみ属性を付与するメソッド(正確には、rangeオブジェクトの部分を新しいspanタグに入れ替える)
function applyTagToPartialText(addAttribute, originalAttribute, beforeText, range, afterText) {
    const middleSpanContainer = document.createElement("span");
    let fragment = document.createDocumentFragment();

    if (beforeText !== "") {
        const beforeNodeContainer = document.createElement("span");
        const beforeChangeTextNode = document.createTextNode(beforeText);
        for (let i = 0; i < originalAttribute.length; i++) {
            setAttribute(originalAttribute[i], beforeNodeContainer);
        }
        beforeNodeContainer.appendChild(beforeChangeTextNode);
        fragment.appendChild(beforeNodeContainer);
    }

    for (let i = 0; i < originalAttribute.length; i++) {
        setAttribute(originalAttribute[i], middleSpanContainer);
    }
    setAttribute(addAttribute, middleSpanContainer);
    middleSpanContainer.appendChild(document.createTextNode(range.toString()));
    fragment.appendChild(middleSpanContainer);

    if (afterText !== "") {
        const afterNodeContainer = document.createElement("span");
        const afterChangeTextNode = document.createTextNode(afterText);
        for (let i = 0; i < originalAttribute.length; i++) {
            setAttribute(originalAttribute[i], afterNodeContainer);
        }
        afterNodeContainer.appendChild(afterChangeTextNode);
        fragment.appendChild(afterNodeContainer);
    }
    return fragment;
}

//複数ノード用：spanタグ適用処理
function applyAttributesToMultipleNodes(addAttribute, nodes, range) {
    const rangeFragment = document.createDocumentFragment();
    for (let i = 0, j = nodes.length; i < j; i++) {
        if (nodes[i].nodeName === "SPAN" && !(getAttributeStatus(addAttribute, nodes[i]))) {
            setAttribute(addAttribute, nodes[i]);
            rangeFragment.appendChild(nodes[i]);
            i--;
            j--;
            //変数を減らす理由はappendChild()で配列内から取得しているため総数も変化しているから
        } else if (nodes[i].nodeName === "SPAN" && getAttributeStatus(addAttribute, nodes[i])) {
            rangeFragment.appendChild(nodes[i]);
            i--;
            j--;
        } else if (nodes[i].nodeType === Node.TEXT_NODE) {
            const rangeChildNodesContainer = document.createElement("span");
            setAttribute(addAttribute, rangeChildNodesContainer);
            rangeChildNodesContainer.appendChild(document.createTextNode(nodes[i].textContent));
            rangeFragment.appendChild(rangeChildNodesContainer);
            //変数を減らしてないのは、別の変数に入れ替えてdocument-fragmentに入れているため、配列の総数は変わってないから
        }
    }
    range.deleteContents();
    range.insertNode(rangeFragment);
}


//"?"前後のテキストを返す(前後二つの変数を配列の形式で返す)
function nodeSplit(node) {
    const resultNode = [];
    let afterNodeNumber;
    let beforeText = "";
    let afterText = "";

    //"？"の部分を何番目か保存及び"？"前の文字取得
    for (let i = 0; i < node.length; i++) {
        if (node[i].indexOf("?") === -1) {
            beforeText += node[i];
        } else if (node[i].indexOf("?") !== -1) {
            afterNodeNumber = i;
            i = node.length;
        }
    }
    resultNode.push(beforeText);

    //文字列"?"後のインデックス番号取得
    for (let i = 0; i < node.length; i++) {
        if (node[i].indexOf("?") !== -1) {
            afterNodeNumber++;
        }
    }

    //"？"終わりからの文字取得
    for (let i = afterNodeNumber; i < node.length; i++) {
        afterText += node[i];
    }
    resultNode.push(afterText);
    return resultNode;
}

//誤作動の原因である、テキストが入ってない(0文字)spanタグを削除する
function emptySpanRemove(node) {
    const nodeChildNodes = node.childNodes;
    for (let i = 0, j = nodeChildNodes.length; i < j; i++) {
        if (nodeChildNodes[i].textContent === "") {
            node.removeChild(nodeChildNodes[i]);
            i--;
            j--;
        }
    }
}



class ElementAttribute {
    constructor(name, attributeName, value) {
        this.name = name;
        this.attributeName = attributeName;
        this.value = value;
    }
    getName() {
        return this.name;
    }

    getAttributeName() {
        return this.attributeName;
    }

    getValue() {
        return this.value;
    }
}

class AttributeManager {
    static getElementAttribute(parentElement) {
        const attribute = [];
        attribute.push(
            new ElementAttribute("bold", "fontWeight", parentElement.style.fontWeight),
            new ElementAttribute("italic", "fontStyle", parentElement.style.fontStyle),
            new ElementAttribute("underLine", "borderBottom", parentElement.style.borderBottom)
        );
        return attribute;
    }
}

class SpanTag {
    constructor(value) {
        this.container = document.createElement("span");
        this.container.appendChild(value);
    }

    setValue(value) {
        this.value = value;
    }

    setAttribute(attribute) {
        if (attribute === "bold") {
            this.container.style.fontWeight = "bold";
        } else if (attribute === "italic") {
            this.container.style.fontStyle = "italic";
        } else if (attribute === "underLine") {
            this.container.style.borderBottom = "2px solid black";
        }
    }

    getElement() {
        return this.container;
    }
}