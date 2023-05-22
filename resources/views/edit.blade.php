@extends('layouts.edit_default')

@section('title', '編集ページ')

@section('head')
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
@endsection

{{-- この辺のゴチャゴチャしてるのをリファクタリング --}}
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

    <form action="{{ route('singing.update', ['singing' => $singing->id]) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        タイトル:
        <input type="text" value="{{ old('title', $singing->title) }}" name="title">
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
