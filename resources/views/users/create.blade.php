<!DOCTYPE html>
<head>
    <title>ログイン</title>
    <meta charset="UTF-8">
</head>
<html>
    <form action="{{ route('users.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div>
            <label for="">名前：<input type="text" name="name"></label>
            <label for="">メールアドレス：<input type="email" name="email"></label>
            <label for="">パスワード：<input type="password" name="password"></label>
            <label for="">パスワード(確認)：<input type="password" name="password_confirmation"></label>
            <button type="submit">登録</button>
        </div>

    </form>
</html>
