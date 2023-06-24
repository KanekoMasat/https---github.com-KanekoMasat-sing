<!DOCTYPE html>
<html>

<head>
    <title>「{{ $singingSheet->title }}」の全体表示</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="{{ asset('css/showStyle.css') }}">
</head>

<body>
    <div class="body-container">
        <div class="title-container">
            <div class="title-content">
                <h1>{{ $singingSheet->title }}</h1>
            </div>
        </div>
        <div class="lyrics-container">
            <div id="lyrics-content" class="lyrics-content">
                {{ $singingSheet->lyrics }}
            </div>
        </div>
    </div>
    <div class="edit-link-wrapper">
        <div class="edit-link">
            <a href="{{ route('singing.edit', ['singing' => $singingSheet->id]) }}">編集画面へ戻る</a>
        </div>
    </div>
    <script>
        const lyrics = document.getElementById("lyrics-content");
        lyrics.innerHTML = decodeHTMLEntities(lyrics.innerHTML);

        // HTMLエンティティをデコードする関数
        function decodeHTMLEntities(text) {
            let textArea = document.createElement('textarea');
            textArea.innerHTML = text;
            return textArea.value;
        }
    </script>
</body>

</html>
