@extends('layouts.default')

@section('title', 'アカウント登録')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/defaultStyle.css') }}">
@endsection
@section('main')
    <div class="error-message-container">
        @if ($errors->any())
            <p> --登録に失敗しました-- </p>
        @endif
    </div>

    <form action="{{ route('users.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="user-create-form-container">
            <div class="user-create-form-wrapper">
                <div class="user-create-label">
                    <ul>
                        <li><label for="username">名前：</label></li>
                        <li><label for="accountID">アカウントID：</label></li>
                        <li><label for="password">パスワード：</label></li>
                        <li><label for="confirmPassword">パスワード(確認)：</label></li>
                    </ul>
                </div>

                <div class="user-create-content-wrapper">
                    <div class="user-create-content">
                        <ul>
                            <li class="content"><input id="username" type="text" name="name"></li>
                            <li class="content"><input id="accountID" type="email" name="email"></li>
                            <li class="content"><input type="password" name="password"></li>
                            <li class="content"><input id="confirmPassword" type="password" name="password_confirmation">
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <button type="submit" class="user-create-button">登録</button>
        </div>
    </form>
    <div class="login-form-link-wrapper">
        <a href="{{ route('index') }}" class="user-related-link">ログインページへ</a>
    </div>
@endsection
