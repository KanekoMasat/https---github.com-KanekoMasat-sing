@extends('layouts.edit_default')

@section('title', '新規追加')

@section('head')
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
@endsection
@section('main')
    <div class="success-message-wrapper">
        @if (session()->has('success'))
            {{ session('success') }}
        @endif
    </div>

    <div class="create-form">
        <form action="{{ route('singing.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="create-title-form">
                <h2 class="create-title-wrapper">
                    曲名
                </h2>
                <label for="title"><input type="text" name="title" placeholder="曲名"
                        class="create-title-content"></label>
            </div>
            <br>
            <div class="create-lyrics-form">
                <h2 class="create-lyrics-wrapper">
                    歌詞
                </h2>
                <label for="lyrics"><input type="text" name="lyrics" placeholder="歌詞"
                        class="create-lyrics-content"></label>
            </div>
            <div class="create-submit-button-wrapper">
                <input type="submit" value="登録" class="create-submit-button">
            </div>
            ※0文字では登録できません
        </form>
    </div>

@endsection
