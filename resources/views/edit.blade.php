@extends('layouts.edit_default')

@section('title', '編集ページ')

@section('head')
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
@endsection

{{-- この辺のゴチャゴチャしてるのをリファクタリング --}}
@section('main')
    @foreach ($errors->all() as $error)
        <p>{{ $error }}</p>
    @endforeach
    {{ $errors->first('title') }}
    {{ $errors->first('lyrics') }}


    <form action="{{ route('singing.update', ['singing' => $singing->id]) }}" method="POST" enctype="multipart/form-data"
        class="main-form" id="updateForm">
        @csrf
        @method('PUT')
        {{-- 曲名編集エリア --}}
        <div class="edit-title-wrapper">
            <div class="title-label">
                <h3>タイトル:</h3>
            </div>
            <div class="title-form">
                <input type="text" value="{{ old('title', $singing->title) }}" name="title" class="title-content">
            </div>
            <div class="show-link-wrapper">
                <a href="{{ route('singing.show', ['singing' => $singing->id]) }}" class="show-link">&nbsp;全体表示（スクショ用）</a>
            </div>
        </div>

        {{-- 歌詞編集エリア --}}
        <div id="editable" contenteditable="true" class="editable">
            {{ old('lyrics', $singing->lyrics) }}
        </div>

        <button type="submit" class="update-button">更新</button>
        <div id="my-textarea" contenteditable="true">
        </div>
    </form>
    <div>※テキスト選択中は色が変わります</div>
    <div id="tool-bar" class="tool-bar">
        <div class="tool-bar-menu">
            <button id="vibratoButton">ビブラート</button>
            <button id="blueColor">表現1</button>
            <button id="greenColor">表現２</button>
            <button id="orangeColor">表現3</button>
            <button id="boldButton">B</button>
            <button id="italicButton" style="font-style: italic">I</button>
            <button id="underlineButton"><u>U</u></button>
        </div>
    </div>


    {{-- <script src="{{ asset('js/script.js') }}"></script> --}}
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
