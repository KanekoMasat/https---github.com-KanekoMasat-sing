@extends('layouts.default')
@section('title', 'トップ画面')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/defaultStyle.css') }}">
    <script>
        console.log("Sing start");
    </script>
@endsection

@section('main')
    @if (session()->has('success'))
        {{ session('success') }}
    @endif
    <div class="topSite-list-wrapper">
        <ul>
            <li class="topSite-list"><a href="{{ route('singing.create') }}" class="topSite-list-link">新規作成</a></li>
            &nbsp;&nbsp;<span class="topSite-list-lead">シートを作成します</span>
            <li class="topSite-list"><a href="{{ route('singing.index') }}" class="topSite-list-link">曲の編集</a></li>
            &nbsp;&nbsp;<span class="topSite-list-lead">作成したシートを編集します</span>
            <li class="topSite-list"><a href="{{ route('definition') }}" class="topSite-list-link">歌唱での様々な表現の紹介</a></li>
            &nbsp;&nbsp;<span class="topSite-list-lead">ビブラートやしゃくり等の技術はどういう技術なのか簡単に説明</span>
            <li class="topSite-list"><a href="{{ route('explanation') }}" class="topSite-list-link">使い方含め、このWebページについて</a>
            </li>
            &nbsp;&nbsp;<span class="topSite-list-lead">使い方解説</span>
        </ul>
    </div>


    <form action="{{ route('logout') }}" method="POST">
        @csrf
        <button type="submit" class="default-button">ログアウト</button>
    </form>
@endsection
