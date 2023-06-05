const boldButton = document.getElementById("boldButton");
const italicButton = document.getElementById("italicButton");
const underlineButton = document.getElementById("underlineButton");
const vibratoButton = document.getElementById("vibratoButton");
const editable = document.getElementById("editable");
const toolBar = document.getElementById("tool-bar");
const updateForm = document.getElementById("updateForm");
const songLyrics = document.getElementsByClassName("song-lyrics");

Array.from(songLyrics).forEach(element => {
    element.innerHTML = decodeHTMLEntities(element.innerHTML).toString();
});
editable.innerHTML = decodeHTMLEntities(editable.innerHTML);


editable.addEventListener("input", function (event) {
    editable.childNodes.forEach(element => {
        if (element.nodeName === "DIV" && element.textContent.length === 0 && editable.childNodes.length === 3) {
            element.textContent = "ここに歌詞を入力できます";
        }
    });
});


// HTMLエンティティをデコードする関数
function decodeHTMLEntities(text) {
    let textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}


let previousRange;

editable.addEventListener('click', function (event) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    if (previousRange !== range && selection.toString().length > 0) {
        toolBar.style.display = "block";
    } else {
        toolBar.style.display = "none";
    }
    previousRange = range;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; // x軸のスクロール量を取得
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // y軸のスクロール量を取得
    const x = event.pageX - scrollLeft;
    const y = event.pageY - scrollTop - 60;
    toolBar.style.left = x + 'px';
    toolBar.style.top = y + 'px';

});

updateForm.addEventListener("submit", function (event) {
    event.preventDefault(); //フォームの規定の送信をしない処理

    let formData = new FormData(updateForm);
    formData.append("lyrics", editable.innerHTML);

    // フォームデータの内容を表示（デバッグ用）
    for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }
    if (formData.get("lyrics")) {
        console.log(formData.get("lyrics"));
    }

    const inputHidden = document.createElement("input");
    inputHidden.setAttribute("type", "hidden");
    inputHidden.name = "lyrics";
    inputHidden.value = editable.innerHTML;
    updateForm.append(inputHidden);

    updateForm.submit();
});



//ここからは全てテキスト編集のためのコード
boldButton.addEventListener('click', setBold);
italicButton.addEventListener('click', setItalic);
underlineButton.addEventListener('click', setUnderline);
vibratoButton.addEventListener('click', setWavyUnderline);
// vibratoButton.addEventListener('click', textFunction);

//波線テスト処理
function textFunction() {
    console.log("処理開始");
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.extractContents();
        const spanContainer = document.createElement("span");
        spanContainer.appendChild(selectedText);
        spanContainer.style.textDecoration = "underline";
        spanContainer.style.textDecorationStyle = "wavy";
        spanContainer.style.textDecorationColor = "rgb(100, 155, 17)";
        spanContainer.style.textDecorationThickness = "3px";
        range.deleteContents();
        range.insertNode(spanContainer);
    }
}



//太字
function setBold() {
    console.log("処理開始");
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        edit(range, "bold");
        let rangeParentNode = range.commonAncestorContainer.parentNode;
        console.log(rangeParentNode);
        console.log(range.commonAncestorContainer);
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

//波下線
function setWavyUnderline() {
    console.log("処理開始");
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        edit(range, "wavyUnderline");
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
            //テキストノードのためspanタグを付与
            setSpanAttribute(range, addAttribute);
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

    //再利用性のあるコードにする
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

    if (node.style.textDecoration === "underline") {
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
    });
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
    } else if (attribute === "wavyUnderline") {
        element.style.textDecoration = "";
        element.style.textDecorationStyle = "";
        element.style.textDecorationColor = "";
        element.style.textDecorationThickness = "";
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

//Elementオブジェクトに属性を付与する分岐
function setAttribute(attribute, element) {
    if (attribute === "bold") {
        element.style.fontWeight = "bold";
    } else if (attribute === "italic") {
        element.style.fontStyle = "italic";
    } else if (attribute === "underLine") {
        element.style.borderBottom = "2px solid black";
    } else if (attribute === "wavyUnderline") {
        element.style.textDecoration = "underline";
        element.style.textDecorationStyle = "wavy";
        element.style.textDecorationColor = "rgb(100, 155, 17)";
        element.style.textDecorationThickness = "3px";
    }
}

//rangeオブジェクトにspanタグを追加
function setSpanAttribute(range, addAttribute) {
    let selectedText = range.extractContents();
    range.deleteContents();
    const container = new SpanTag(selectedText);
    container.setAttribute(addAttribute);
    console.log(addAttribute);
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
            new ElementAttribute("underLine", "borderBottom", parentElement.style.borderBottom),
            new ElementAttribute("wavyUnderline", "textDecoration", parentElement.style.textDecoration)
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
        } else if (attribute === "wavyUnderline") {
            this.container.style.textDecoration = "underline";
            this.container.style.textDecorationStyle = "wavy";
            this.container.style.textDecorationColor = "rgb(100, 155, 17)";
            this.container.style.textDecorationThickness = "3px";
        }
    }

    getElement() {
        return this.container;
    }
}