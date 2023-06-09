@extends('layouts.default')
@section('title', 'このWebページについて')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/defaultStyle.css') }}">
@endsection

@section('main')
    <a href="{{ route('index') }}" class="back-to-top-link">トップへ</a>
    <h3>・PC以外の使用は想定していません</h3>
    <h3>・Google Chrome、Safariでしか動作確認してません。※特にSafariでは動作確認しかしてません</h3>
    <h3>・まだまだ未熟な者が歌唱テクニックを説明をしているので間違っている可能性があります</h3>
@endsection
