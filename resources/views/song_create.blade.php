@extends('layouts.edit_default')

@section('title', '新規追加')

@section('head')
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
@endsection
@section('main')
    @if (session()->has('success'))
        {{ session('success') }}
    @endif
    <div class="create-form">
        <form action="{{ route('singing.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="create-title-form">
                <h3 class="create-title-wrapper">
                    曲名
                </h3>
                <label for="title"><input type="text" name="title" placeholder="曲名"
                        class="create-title-content"></label>
            </div>
            <br>
            <div class="create-lyrics-form">
                <h3 class="create-lyrics-wrapper">
                    歌詞
                </h3>
                <label for="lyrics"><input type="text" name="lyrics" placeholder="歌詞"
                        class="create-lyrics-content"></label>
            </div>
            <div class="create-submit-button-wrapper">
                <input type="submit" value="登録" class="create-submit-button">
            </div>
        </form>
    </div>

@endsection
