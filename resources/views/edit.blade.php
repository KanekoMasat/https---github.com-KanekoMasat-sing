@extends('layouts.default')

@section('title', 'サンプル')
@section('styleSheet', 'style.css')

@section('head')
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
@endsection


@section('main')
    <form action="{{ route('form.update', ['form' => $form->id]) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        曲名:
        <input type="text" value="{{ old('title', $form->title) }}" name="title"><br>
        歌詞:
        <input type="text" value="{{ old('lyrics', $form->lyrics) }}" name="lyrics"><br>
        <button type="submit">更新</button>        
    </form>

    {{-- テスト --}}
    <div class="form-sample" id="form-sample">
        {{-- ツールバー --}}
        <div class="tool-bar" id="tool-bar">
            <div class="tool-bar-menu">
                <ul class="menu-list" id="menu-list">
                    <button type="button" class="menu-btn" id="menu-btn" onclick="alert('ビブラートボタンが押されました')">ビブラート</button>
                    <button type="button" class="menu-btn" onclick="alert('こぶしボタンが押されました')">こぶし</button>
                    <button type="button" class="menu-btn" onclick="alert('しゃくりボタンが押されました')">しゃくり</button>
                    <button type="button" class="menu-btn" onclick="alert('フォールボタンが押されました')">フォール</button>
                    <button type="button" class="menu-btn" id="boldButton">B</button>
                </ul>
            </div>
        </div>
        <form action="">
            <textarea class="test-textarea" name="" id="test-textarea" cols="30" rows="10">{{ old('lyrics', $form->lyrics) }}</textarea>
            <button class="secret" type="submit">保存</button>
        </form>
    </div>

    <button id="boldButton2">太字</button>
    <button id="boldButton3">太字(mytextarea)</button>
    <p id="myText">これはサンプルテキストです。</p>
    <textarea name="" id="testTextarea" cols="30" rows="10"></textarea>

    <textarea name="" id="testTextarea2" cols="30" rows="10">mytextarea2</textarea>

    <div id="editable" contenteditable="true">JavaScript</div>
    <button id="boldButton4">B</button>
    <button id="italicButton"><i>I</i></button>
    <button onclick='document.execCommand("underline");'><u>U</u></button>
    <script src="{{ asset('js/script.js') }}"></script>
@endsection