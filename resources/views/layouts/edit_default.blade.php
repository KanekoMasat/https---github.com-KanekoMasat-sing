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
                            <div class="song-lyrics" id="song-lyrics">{{ $singingSheet->lyrics }}</div>
                        </a>
                    </div>
                </div>
            @endforeach
        </div>
        <main class="main-container">
            @yield('main')
        </main>
        {{-- <script>
            const songLyrics = document.getElementById("song-lyrics");
            window.addEventListener("load", function(event) {
                songLyrics.innerHTML = decodeHTMLEntities(songLyrics.innerHTML);

                function decodeHTMLEntities(text) {
                    let textArea = document.createElement('textarea');
                    textArea.innerHTML = text;
                    return textArea.value;
                }
            });
        </script> --}}
        <script src="{{ mix('js/app.js') }}"></script>
    </div>

</body>


</html>
