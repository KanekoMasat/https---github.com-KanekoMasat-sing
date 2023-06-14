@extends('layouts.default')
@section('title', '用語説明')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/defaultStyle.css') }}">
@endsection

@section('main')
    <a href="{{ route('index') }}" class="back-to-top-link">トップへ</a>

    <div class="technique-and-vocalization-title-wrapper">
        <h1>歌唱テクニック・発声の紹介</h1>
        <h3>※これらは人によって定義が違います</h3>
    </div>

    <div class="technique-title-wrapper">
        <h1>歌唱中でのテクニックの種類</h1>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>・ビブラート</h2>
        </div>
        <img src="{{ asset('storage/ビブラート.png') }}" alt="">
        <p>簡単に言うと声を揺らす技術。
            語尾を伸ばした際に使用されることが多い
        </p>
        <p>波が大きいビブラート、小さいビブラート、とても短いビブラート等様々な種類がある</p>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>・こぶし</h2>
        </div>
        <img src="{{ asset('storage/こぶし.png') }}" alt="">
        <p>音程を一瞬だけ上下したり揺らす技術。
            短いビブラートのようなイメージ(イメージというだけで実際には全くの別物)
        </p>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>・しゃくり</h2>
        </div>
        <img src="{{ asset('storage/しゃくり.png') }}" alt="">
        <p>音程をずり上げる（すくう）ようにして歌う技術。
            歌詞の間に使われる。自然な音程移動にするのがポイント
        </p>
        <p>カラオケでしゃくりが多すぎる人はしゃくり癖がついている可能性があるので要注意（100％悪い訳では無い）</p>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>・フォール</h2>
        </div>
        <img src="{{ asset('storage/フォール.png') }}" alt="">
        <p>音程を投げるようにして歌う技術。
            語尾に使われることが多いが、歌手によっては歌詞の途中でも使われる
        </p>
        <p>不安や憂いを表現することができる</p>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>・ブレス(v)</h2>
        </div>
        <p>歌唱テクニックじゃないです。すいません</p>
        <p>息継ぎをするタイミング。(v)で表されることが多い。息継ぎ(ブレス)も場合によっては表現になる。胸式呼吸、腹式呼吸で音が変わる。</p>
    </div>


    <div class="vocalization-title-wrapper">
        <h1>発声の種類</h1>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>・地声</h2>
        </div>
        <p>日常会話での声、素の声、チェストボイスなどと言われる</p>
        <p>地声を出す際に裏声が混ざっている場合もある</p>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>・裏声</h2>
        </div>
        <p>ハリのある、まっすぐ伸びたような声</p>
        <p>裏声を出す際に地声が混ざっている場合もある</p>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>・エッジボイス</h2>
        </div>
        <p>ボーカルフライとも言われるテクニック</p>
        <p>声帯を閉じて発声させる声でブツブツという音が特徴。</p>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>・ウィスパーボイス</h2>
        </div>
        <p>和訳するとささやき声。日本では声の成分の中に多く息が入った声のことを指すことが多い</p>
        <p>話し声がウィスパーボイスのような人もいる</p>
    </div>
    <div class="category-container">
        <div class="category-title">
            <h2>・ファルセット</h2>
        </div>
        <p>息漏れのある、または息漏れが多い裏声。</p>
        <p>出せる裏声が全てファルセットではなく、息漏れがあまり無い裏声も出せるようにしよう</p>
    </div>

    <div class="summary">
        <p>これらは歌唱テクニックや発声の例で他にもヒーカップ、フェイク、がなり等がある</p>
        <p>そして、歌唱テクニック、発声が全てできる人がうまいと言うわけではない</p>
    </div>


@endsection
