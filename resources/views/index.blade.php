@extends('layouts.default')
@section('title', 'トップ画面')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/defaultStyle.css') }}">
@endsection

@section('main')
    @if (session()->has('success'))
        {{ session('success') }}
    @endif
    <div class="topSite-list-wrapper">
        <ul>
            <li class="topSite-list"><a href="{{ route('singing.create') }}" class="topSite-list-link">新規作成</a></li>
            <li class="topSite-list"><a href="{{ route('singing.index') }}" class="topSite-list-link">曲の編集</a></li>
            <li class="topSite-list"><a href="{{ route('definition') }}" class="topSite-list-link">各テクニック(表現)の説明</a></li>
            <li class="topSite-list"><a href="{{ route('explanation') }}" class="topSite-list-link">このWebページについて</a></li>
        </ul>
    </div>


    <form action="{{ route('logout') }}" method="POST">
        @csrf
        <button type="submit" class="default-button">ログアウト</button>
    </form>
@endsection
