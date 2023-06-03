@extends('layouts.default')

@section('title', 'ログイン')
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
            <label for="">名前：</label><input type="text" placeholde="名前" name="name"><br>
            <label for="">メールアドレス：</label><input type="email" placeholde="メールアドレス" name="email"
                value="{{ old('email') }}"><br>
            <label for="">パスワード：</label><input type="password" placeholde="パスワード" name="password"><br>
            <button type="submit">ログイン</button>
        </div>
    </form>
    <a href="{{ route('users.create') }}">ユーザーの新規作成</a>
@endsection
