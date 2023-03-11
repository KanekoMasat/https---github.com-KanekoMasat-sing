@extends('layouts.default')
@section('title', 'サンプル')
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
@endsection