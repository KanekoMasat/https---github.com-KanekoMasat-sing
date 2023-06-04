@extends('layouts.default')

@section('title', 'アカウント登録')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/defaultStyle.css') }}">
@endsection
@section('main')
    @if ($errors->any())
        <p>登録に失敗しました</p>
    @endif
    <form action="{{ route('users.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div>
            <label for="username">名前：<input id="username" type="text" name="name"></label>
            <label for="accountID">メールアドレス：<input id="accountID" type="email" name="email"></label>
            <label for="password">パスワード：<input type="password" name="password"></label>
            <label for="confirmPassword">パスワード(確認) : <input id="confirmPassword" type="password"
                    name="password_confirmation"></label>
            <button type="submit">登録</button>
        </div>
    </form>
    <a href="{{ route('index') }}" class="user-related-link">ログインページへ</a>
@endsection
