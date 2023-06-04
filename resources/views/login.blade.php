@extends('layouts.default')

@section('title', 'ログイン')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/defaultStyle.css') }}">
@endsection
@section('main')
    @if ($errors->any())
        <p>ログインに失敗しました</p>
    @endif
    @if (session()->has('success'))
        {{ session('success') }}
    @endif
    <form action="{{ route('login') }}" method="POST">
        @csrf
        <div>
            <label for="username">名前：</label><input id="username" type="text" placeholde="名前" name="name"><br>
            <label for="accountID">メールアドレス：</label><input id="accountID" type="email" placeholde="メールアドレス" name="email"
                value="{{ old('email') }}"><br>
            <label for="password">パスワード：</label><input id="password" type="password" placeholde="パスワード"
                name="password"><br>
            <button type="submit">ログイン</button>
        </div>
    </form>
    <a href="{{ route('users.create') }}" class="user-related-link">ユーザーの新規作成</a>
@endsection
