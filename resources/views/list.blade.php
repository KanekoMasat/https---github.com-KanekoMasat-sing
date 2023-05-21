@extends('layouts.edit_default')

@section('title', 'サンプル')
@section('styleSheet', 'style.css')
@section('head')
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
@endsection


@section('main')
    @if (session()->has('success'))
        {{ session('success') }}
    @endif
    <div class="edit-songs-container2">
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
    </div>
    
@endsection
