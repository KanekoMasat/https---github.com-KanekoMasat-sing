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
            <a href="{{ route('index') }}" class="back-to-top-link">
                トップへ
            </a>
            <a href="{{ route('singing.create') }}" class="song-create-button">＋</a>
        </div>
    </header>
    <div class="body-container" id="body-container">
        <div class="edit-songs-container">
            <div class="list-none-message-area">
                @if (count($singingSheets) === 0)
                    <p style="font-weight: bold">シートが作成されていません。</p>
                    <p style="font-weight: bold">画面上の＋ボタンでシートの作成を行なってください</p>
                @endif
            </div>


            @foreach ($singingSheets as $singingSheet)
                <div class="edit-songs-wrapper">
                    <div class="edit-song">
                        <a href="{{ route('singing.edit', ['singing' => $singingSheet->id]) }}" class="song-button">
                            <div class="song-label">
                                <p class="song-title">{{ $singingSheet->title }}</p>
                                <form class="delete-form"
                                    action="{{ route('singing.destroy', ['singing' => $singingSheet->id]) }}"
                                    method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button class="delete-button" type="submit"
                                        onclick="return confirm('シートの削除を行います。宜しいですか？※元には戻せません');">削除</button>
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
        <script src="{{ mix('js/editDefaultScript.js') }}"></script>
    </div>
</body>


</html>
