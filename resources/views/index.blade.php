@extends('layouts.default')
@section('title', 'トップ画面')

@section('main')
    @if (session()->has('success'))
        {{ session('success') }}
    @endif
    <ul>
        <li><a href="{{ route('form.create') }}">新規作成</a></li>
        <li><a href="{{ route('form.index') }}">作成した歌い方カード</a></li>
        <li><a href="{{ route('definition') }}">各テクニックの説明</a></li>
        <li><a href="{{ route('index.test') }}">テストページ</a></li>
    </ul>
@endsection
