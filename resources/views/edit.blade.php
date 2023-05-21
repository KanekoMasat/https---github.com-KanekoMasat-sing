@extends('layouts.edit_default')

@section('title', '編集ページ')

@section('head')
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
@endsection


@section('main')
    <form action="{{ route('singing.update', ['singing' => $singing->id]) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        曲名:
        <input type="text" value="{{ old('title', $singing->title) }}" name="title"><br>
        歌詞:
        <input type="text" value="{{ old('lyrics', $singing->lyrics) }}" name="lyrics"><br>
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
            <button class="secret" type="submit">保存</button>
        </form>
    </div>

    <form action="">
        @csrf
        @method('PUT')
        タイトル:
        <input type="text">
        <div id="editable" contenteditable="true" class="editable">
            <div id="editable-inner" class="editable-inner">
                {{ old('lyrics', $singing->lyrics) }}
            </div>
        </div>
        <button type="submit">更新</button>
    </form>


    <div id="tool-bar2" class="tool-bar2">
        <div class="tool-bar-menu2">
            <button id="boldButton4">B</button>
            <button id="italicButton" style="font-style: italic">I</button>
            <button id="underlineButton"><u>U</u></button>
        </div>
    </div>


    <script src="{{ asset('js/script.js') }}"></script>
@endsection
