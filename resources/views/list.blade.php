@extends('layouts.default')

@section('title', 'サンプル')
@section('styleSheet', 'style.css')
@section('head')

@endsection


@section('main')
    @if (session()->has('success'))
        {{ session('success') }}
    @endif
        @foreach ($singingSheets as $singingSheet)
            <p><b>{{ $singingSheet->title }}</b></p>
            <p>{{ $singingSheet->lyrics }}</p>
            <a href="{{ route('form.edit', ['form' => $singingSheet->id]) }}">編集</a>
            <form action="{{ route('form.destroy', ['form' => $singingSheet->id]) }}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit">削除</button>
            </form>

            <br>
        @endforeach


    <div class="form-sample" id="form-sample">
        {{-- ツールバー --}}
        <div class="tool-bar" id="tool-bar">
            <div class="tool-bar-menu">
                <ul class="menu-list">
                    <button type="button" class="menu-btn">ビブラート</button>
                    <button type="button" class="menu-btn">こぶし</button>
                    <button type="button" class="menu-btn">しゃくり</button>
                    <button type="button" class="menu-btn">フォール</button>
                </ul>
            </div>
        </div>
        <form action="">
            <textarea class="test-textarea" name="" id="test-textarea" cols="30" rows="10">{{ $singingSheets[0]->lyrics }}</textarea>
            <button class="secret" type="submit">保存</button>
        </form>
    </div>

    
    <script>
        const foucasTarget = document.getElementById('test-textarea');
        const formSampleTarget = document.getElementById('form-sample');
        let changeTarget = document.getElementById('tool-bar');
        const headerArea = document.getElementById('header-container');
            

        // foucasTarget.onselect = (event) => {
        //     let x = event.pageX;
        //     let y = event.pageY;
        //     changeTarget.style.display = "block";
        //     changeTarget.style.top = y;
        //     changeTarget.style.left = x;
        //     console.log("x座標: "+x);
        //     console.log("y座標: "+y);
        // }

        foucasTarget.addEventListener('mouseup', function(event) {
            // 選択されたテキストの長さが0より大きい場合、ボタンを表示する
            if (foucasTarget.selectionStart !== foucasTarget.selectionEnd) {
                changeTarget.style.display = "block";
                const textareaRect = foucasTarget.getBoundingClientRect();
                const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; // x軸のスクロール量を取得
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // y軸のスクロール量を取得
                const headerTop = headerArea.offsetTop;     //ヘッダーのy軸ピクセルを取得
                const x = event.pageX - scrollLeft;
                const y = event.pageY - scrollTop - headerTop;
                changeTarget.style.left = x + 'px';
                changeTarget.style.top = y + 'px';
                console.log(headerTop);
                console.log(scrollTop);
                console.log(scrollLeft);
                console.log(event.pageY);
                console.log(event.pageX);
                console.log(window.getSelection().toString());  //選択した文字を取得して出力
                console.log('----------------------');

            } else {
                changeTarget.style.display = "none";
            }
        });

        // foucasTarget.onblur = () => {
        //     changeTarget.style.display = "none";
        // }

    </script>
@endsection
