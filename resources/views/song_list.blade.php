@extends('layouts.edit_default')

@section('title', 'サンプル')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
@endsection


@section('main')
    @if (session()->has('success'))
        {{ session('success') }}
    @endif
    <p>画面左の作成したシートを選択してください</p>
    <p>画面右に編集画面が表示されます</p>
    <p>『+』ボタンを押すと新たにシートを作成できます</p>
    <p>『削除』ボタンを押すとシートが削除されます</p>
    <h3>※削除すると元に戻せません!</h3>
@endsection
