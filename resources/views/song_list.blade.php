@extends('layouts.edit_default')

@section('title', 'シート一覧')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
@endsection


@section('main')
    <div class="success-message-wrapper">
        @if (session()->has('success'))
            {{ session('success') }}
        @endif
    </div>

    <p style="font-weight: bold">画面左の作成したシートを選択してください</p>
    <p style="font-weight: bold">画面右に編集画面が表示されます</p>
    <p style="font-weight: bold">『+』ボタンを押すと新たにシートを作成できます</p>
    <p style="font-weight: bold">『削除』ボタンを押すとシートが削除されます</p>
    <h3>※削除すると元に戻せません!</h3>
@endsection
