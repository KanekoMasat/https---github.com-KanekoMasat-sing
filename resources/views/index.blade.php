@extends('layouts.default')
@section('title', 'トップ画面')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/defaultStyle.css') }}">
@endsection

@section('main')
    @if (session()->has('success'))
        {{ session('success') }}
    @endif
    <ul>
        <li><a href="{{ route('singing.create') }}">新規作成</a></li>
        <li><a href="{{ route('singing.index') }}">曲の編集</a></li>
        <li><a href="{{ route('definition') }}">各テクニックの説明</a></li>
        <li><a href="">このWebページについて</a></li>
    </ul>

    <form action="{{ route('logout') }}" method="POST">
        @csrf
        <button type="submit">ログアウト</button>
    </form>
@endsection
