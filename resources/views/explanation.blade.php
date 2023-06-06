@extends('layouts.default')
@section('title', 'このWebページについて')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/defaultStyle.css') }}">
@endsection

@section('main')
    <a href="{{ route('index') }}" class="back-to-top-link">トップへ</a>
    <h1 style="background-color: lightblue">準備中</h1>
    <h1 style="background-color: lightblue">準備中</h1>
    <h3>PCでしか使用できない</h3>
    <h3>Google Chrome、Safariでしか動作確認してない</h3>
    <h3>初心者が書いてるので間違っていることあるかも</h3>
@endsection
