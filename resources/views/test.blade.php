@extends('layouts.default')
@section('styleSheet', 'style.css')
@section('main')
<div id="words">
    <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
    <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
    <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
</div>
<button onclick="deleteNode()">削除</button>
<script type="text/javascript">
    let range;

    document.addEventListener('mouseup', function(ev) {
        const selection = document.getSelection();
        range = selection.getRangeAt(0);
    }, false);

    function deleteNode() {
        range.deleteContents();
    }
</script>

<div id="sampleMenu" class="sampleMenu">
    <div class="sampleMenuList">
        <ul class="menuBar">
            <li>ミックスナッツ</li>
            <li>Anarchy</li>
            <li>Choral A</li>
            <li>破顔</li>
        </ul>
        <div class="mixedNuts">ミックスナッツ</div>
        <div>Anarchy</div>
    </div>

</div>


<p id="hoge1">テスト１</p>
<p id="hoge2">テスト2</p>
<input type="button" value="切り替えボタン" onclick="test1()">
<input type="button" value="色切り替えボタン" onclick="test2()">
<script>
    document.getElementById("hoge1").style.display = "none";

    function test1() {
        var change = document.getElementById("hoge1");

        if (change.style.display == "block") {
            change.style.display = "none";
        } else {
            change.style.display = "block";
        }
    }

    function test2() {
        let change = document.getElementById('hoge2');

        if (change.style.color == "black") {
            change.style.color = 'red';
        } else {
            change.style.color = "black";
        }

    }
</script>

<div id="parabola">
    <input type="text">
</div>

<div>
    <button id="sample1">サンプル</button>
    <textarea name="" id="sample2" cols="30" rows="10"></textarea>
</div>

<script>
    document.getElementById("sample1").onclick = function( event ) {
        var x = event.pageX ;	// 水平の位置座標
        var y = event.pageY ;	// 垂直の位置座標
        console.log("x座標:"+x)
        console.log("y座標:"+y)
    }

    document.getElementById("sample2").onselect = function( event ) {
        var x = event.pageX ;	// 水平の位置座標
        var y = event.pageY ;	// 垂直の位置座標
        console.log("x座標:"+x)
        console.log("y座標:"+y)
    }
    
</script>


<textarea id="myTextArea"></textarea>
<button onclick="getSelection()">選択されたテキストを取得</button>

<script>
    function getSelection() {
    const textarea = document.getElementById('myTextArea');
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    const selectedText = textarea.value.substring(selectionStart, selectionEnd);

    console.log("選択されたテキスト: " + selectedText);
    console.log("開始位置: " + selectionStart);
    console.log("長さ: " + (selectionEnd - selectionStart));
}

</script>
@endsection