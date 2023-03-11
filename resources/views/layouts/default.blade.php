<!DOCTYPE html>
<html>

<head>
    <title>@yield('title', '歌い方')</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/@yield('styleSheet', 'styles.css')">
    @yield('head')
</head>

<body onContextmenu="return false;">
    <header class="header-container" id="header-container">
        <h1>テキスト</h1>
        <a href="{{ route('index') }}">トップページへ</a>
    </header>
    <main>
        <div class="main-container">
            @yield('main')
        </div>
    </main>
    <footer>
        <h2>フッター部分</h2>
        <form action="{{ route('logout') }}" method="POST">
            @csrf
            <button type="submit">ログアウト</button>
        </form>
    </footer>
</body>


</html>
