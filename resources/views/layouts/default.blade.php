<!DOCTYPE html>
<html>

<head>
    <title>@yield('title', 'My Singing Sheet')</title>
    <meta charset="UTF-8">
    @yield('head')
</head>

<body>
    <div class="body-container" id="body-container">
        <header class="header-container" id="header-container">
            <h1>My Singing Sheet</h1>
            <div class="lead-content">
                <h2>~~ 歌い方を可視化する ~~</h2>
            </div>
        </header>
        <main>
            <div class="main-container">
                @yield('main')
            </div>
        </main>
        <footer>
            <h2>フッター部分</h2>

        </footer>
    </div>

</body>

</html>
