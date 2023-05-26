@extends('layouts.edit_default')

@section('title', '編集ページ')

@section('head')
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
@endsection

{{-- この辺のゴチャゴチャしてるのをリファクタリング --}}
@section('main')
    @foreach ($errors->all() as $error)
        <p>{{ $error }}</p>
    @endforeach

    <form action="{{ route('singing.update', ['singing' => $singing->id]) }}" method="POST" enctype="multipart/form-data"
        class="main-form" id="updateForm">
        @csrf
        @method('PUT')
        {{-- 曲名編集エリア --}}
        <div class="title-wrapper">
            <div class="title-label">
                <h3>タイトル:</h3>
            </div>
            <div class="title-form">
                <input type="text" value="{{ old('title', $singing->title) }}" name="title" class="title-content">
            </div>
        </div>

        {{-- 歌詞編集エリア --}}
        <div id="editable" contenteditable="true" class="editable">
            <div id="editable-inner" class="editable-inner">
                {{ old('lyrics', $singing->lyrics) }}
            </div>
        </div>
        {{-- 問題点：タグもそのまま保存されてえげつないことになった。一旦更新できないようにしとく --}}

        <button type="submit" class="submit">更新</button>
        <div id="my-textarea" contenteditable="true">

        </div>
    </form>


    <div id="tool-bar" class="tool-bar">
        <div class="tool-bar-menu">
            <button id="boldButton">B</button>
            <button id="italicButton" style="font-style: italic">I</button>
            <button id="underlineButton"><u>U</u></button>
        </div>
    </div>


    {{-- <script src="{{ asset('js/script.js') }}"></script> --}}
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
