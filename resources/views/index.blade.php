@extends('layouts.default')
@section('title', 'トップ画面')

@section('main')
    @if (session()->has('success'))
        {{ session('success') }}
    @endif
    <ul>
        <li><a href="{{ route('singing.create') }}">新規作成</a></li>
        <li><a href="{{ route('singing.index') }}">曲の編集</a></li>
        <li><a href="{{ route('definition') }}">各テクニックの説明</a></li>
        <li><a href="">お問い合わせ</a></li>
    </ul>
@endsection
