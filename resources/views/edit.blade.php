@extends('layouts.default')

@section('title', 'サンプル')
@section('styleSheet', 'style.css')

@section('head')
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
@endsection


@section('main')
    <form action="{{ route('form.update', ['form' => $form->id]) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        曲名:
        <input type="text" value="{{ old('title', $form->title) }}" name="title"><br>
        歌詞:
        <input type="text" value="{{ old('lyrics', $form->lyrics) }}" name="lyrics"><br>
        <button type="submit">更新</button>        
    </form>

    {{-- テスト --}}
    <div class="form-sample" id="form-sample">
        {{-- ツールバー --}}
        <div class="tool-bar" id="tool-bar">
            <div class="tool-bar-menu">
                <ul class="menu-list">
                    <button type="button" class="menu-btn" onclick="alert('ビブラートボタンが押されました')">ビブラート</button>
                    <button type="button" class="menu-btn">こぶし</button>
                    <button type="button" class="menu-btn">しゃくり</button>
                    <button type="button" class="menu-btn">フォール</button>
                </ul>
            </div>
        </div>
        <form action="">
            <textarea class="test-textarea" name="" id="test-textarea" cols="30" rows="10">{{ old('lyrics', $form->lyrics) }}</textarea>
            <button class="secret" type="submit">保存</button>
        </form>
    </div>
    <script src="{{ asset('js/script.js') }}"></script>
@endsection