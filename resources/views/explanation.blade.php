@extends('layouts.default')
@section('title', 'このWebページについて')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/defaultStyle.css') }}">
@endsection

@section('main')
    <div class="usage">
        <a href="{{ route('index') }}" class="back-to-top-link">トップへ</a>
        <h2>使い方</h2>
        <p class="usage-content">1. 新規作成または編集画面の＋ボタンよりシートを新規作成します。※この段階ではまだ編集できません</p>
        <p class="usage-content">2. 「曲の編集」より画面左に作成したシートが表示されます。クリックすると歌詞の編集が可能になります</p>
        <p class="usage-content">3. 歌詞を選択するとツールバーが表示されるので、ボタンを押すと色等をつけることができます</p>
    </div>


    <h2>注意事項</h2>
    <h3>・PC以外の使用は想定していません</h3>
    <h3>・Google Chrome、Safariでしか動作確認してません。※特にSafariでは動作確認しかしてません</h3>
    <h3>・まだまだ未熟な者が歌唱テクニックを説明をしているので間違っている可能性があります</h3>
@endsection
