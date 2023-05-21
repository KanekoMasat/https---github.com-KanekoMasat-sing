<!DOCTYPE html>
<html>

<head>
    <title>@yield('title', '歌い方')</title>
    <meta charset="UTF-8">
    @yield('head')
</head>

<body>
    <a href="{{ route('index') }}">トップページへ</a>
    <div class="body-container" id="body-container">
        <div class="edit-songs-container">
            @foreach($singingSheets as $singingSheet)
            <div class="edit-songs-wrapper">
                <a href="">
                    <p><b>{{ $singingSheet->title }}</b></p>
                    <p>{{ $singingSheet->lyrics }}</p>
                </a>
                <form {{-- action="{{ route('form.destroy', ['form' => $singingSheet->id]) }}" method="POST" --}} >
                    @csrf
                    @method('DELETE')
                    <button type="submit">削除</button>
                </form>
            </div>
            @endforeach
        </div>
        <main>
            <div class="main-container">
                @yield('main')
            </div>
        </main>
    </div>
    
</body>


</html>
