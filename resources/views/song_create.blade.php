@extends('layouts.default')
@section('title', 'サンプル')
@section('main')
    @if (session()->has('success'))
        {{ session('success') }}
    @endif
    <form action="{{ route('singing.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <label for="title"><input type="text" name="title" placeholder="曲名" id="title"></label>
        <label for="lyrics"><input type="text" name="lyrics" placeholder="歌詞" id="lyrics"></label>

        <input type="submit" value="登録">
    </form>
@endsection
