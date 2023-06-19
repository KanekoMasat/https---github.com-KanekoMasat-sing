<!DOCTYPE html>
<html>

<head>
    <title>@yield('title', 'My Singing Sheet')</title>
    <meta charset="UTF-8">
    @yield('head')
</head>

<body>
    <div class="body-container" id="body-container">
        <div class="header-container" id="header-container">
            <header>
                <h1 class="webSite-title">My Singing Sheet</h1>
                <div class="lead-content">
                    <h2>~~ 歌い方を可視化する ~~</h2>
                </div>
            </header>
            <div class="user-view-container">
                ユーザー
            </div>
        </div>

        <main>
            <div class="main-container">
                @yield('main')
            </div>
        </main>
        <footer>

        </footer>
    </div>

</body>

</html>
