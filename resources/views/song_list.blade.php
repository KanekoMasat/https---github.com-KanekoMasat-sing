@extends('layouts.edit_default')

@section('title', 'サンプル')
@section('styleSheet', 'style.css')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
@endsection


@section('main')
    @if (session()->has('success'))
        {{ session('success') }}
    @endif
    <p>画面左の作成したシートを選択してください</p>
    <p>画面右に編集画面が表示されます</p>
@endsection
