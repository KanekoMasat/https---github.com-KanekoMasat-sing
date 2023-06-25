@extends('layouts.default')

@section('title', 'ログイン')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/defaultStyle.css') }}">
@endsection
@section('main')
    <div class="error-message-container">
        @if ($errors->any())
            <p> --ログインに失敗しました-- </p>
        @endif
    </div>

    @if (session()->has('success'))
        {{ session('success') }}
    @endif
    <form action="{{ route('login') }}" method="POST">
        @csrf
        <div class="login-form-container">
            <div class="login-form-wrapper">
                <div class="login-form-label">
                    <ul>
                        <li><label for="username">名前：</label></li>
                        <li><label for="accountID">メールアドレス：</label></li>
                        <li><label for="password">パスワード：</label></li>
                    </ul>
                </div>

                <div class="login-form-content">
                    <ul>
                        <li class="content"><input id="username" type="text" placeholde="名前" name="name"></li>
                        <li class="content"><input id="accountID" type="email" placeholde="メールアドレス" name="email"
                                value="{{ old('email') }}">
                        </li>
                        <li class="content"><input id="password" type="password" placeholde="パスワード" name="password"></li>
                    </ul>
                </div>
            </div>
            <button type="submit" class="login-button">ログイン</button>
        </div>
    </form>
    <div class="guestLogin-link-wrapper">
        <a href="{{ route('guestLogin') }}" class="guestLogin-link">ゲストユーザーでログイン</a>
    </div>
    <div class="user-create-link-wrapper">
        <a href="{{ route('users.create') }}" class="user-related-link">ユーザーの新規作成</a>
    </div>
@endsection
