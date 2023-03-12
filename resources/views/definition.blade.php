@extends('layouts.default')
@section('title', '用語説明')
@section('styleSheet', 'style.css')

@section('main')
    <div class="category-container">
        <div class="category-title">
            <h2>ビブラート</h2>
        </div>
        <img src="{{ asset('storage/ビブラート.png') }}" alt="">
        <p>簡単に言うと、音を揺らす技術。
            語尾を伸ばした際に使用されることが多い
        </p>
        <p>波が大きいビブラート、小さいビブラート、とても短いビブラート等様々な種類がある</p>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>こぶし</h2>
        </div>
        <img src="{{ asset('storage/こぶし.png') }}" alt="">
        <p>音程を一瞬だけ上下したり揺らす技術。
            短いビブラートのようなイメージ(イメージというだけで実際には全くの別物)
        </p>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>しゃくり</h2>
        </div>
        <img src="{{ asset('storage/しゃくり.png') }}" alt="">
        <p>音程をずり上げる（すくう）ようにして歌う技術。
            歌詞の間に使われる。自然な音程移動にするのがポイント
        </p>
        <p>カラオケでしゃくりが多すぎる人はしゃくり癖がついている可能性があるので要注意（100％悪い訳では無い）</p>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>フォール</h2>
        </div>
        <img src="{{ asset('storage/フォール.png') }}" alt="">
        <p>音程を投げるようにして歌う技術。
            語尾に使われることが多いが、歌手によっては歌詞の途中でも使われる
        </p>
        <p>不安や憂いを表現することができる</p>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>ブレス(v)</h2>
        </div>
        <p>息継ぎをするタイミング。(v)で表される。息継ぎ(ブレス)も場合によっては表現になる。胸式呼吸、腹式呼吸で音が変わる。</p>
    </div>

    <div class="category-container">
        <div class="category-title">
            <h2>エッジボイス</h2>
        </div>
        <p>ボーカルフライトも言われるテクニック</p>
    </div>

@endsection
