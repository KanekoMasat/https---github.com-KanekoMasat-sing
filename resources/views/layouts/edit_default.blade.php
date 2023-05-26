<!DOCTYPE html>
<html>

<head>
    <title>@yield('title', '歌い方')</title>
    <meta charset="UTF-8">
    @yield('head')
</head>

<body>
    <header class="header-container">
        <div class="header-button-wrapper">
            <a href="{{ route('index') }}" class="header-button">
                トップへ
            </a>
        </div>
    </header>
    <div class="body-container" id="body-container">
        <div class="edit-songs-container">
            @foreach ($singingSheets as $singingSheet)
                <div class="edit-songs-wrapper">
                    <div class="edit-song">
                        <a href="{{ route('singing.edit', ['singing' => $singingSheet->id]) }}" class="song-button">
                            <div class="song-label">
                                <p class="song-title">{{ $singingSheet->title }}</p>
                                <form class="delete-button-wrapper"
                                    action="{{ route('singing.destroy', ['singing' => $singingSheet->id]) }}"
                                    method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button class="delete-button" type="submit">削除</button>
                                </form>
                            </div>
                            <p class="song-lyrics">{{ $singingSheet->lyrics }}</p>
                        </a>
                    </div>
                </div>
            @endforeach
        </div>
        <main class="main-container">
            @yield('main')
        </main>
    </div>

</body>


</html>
