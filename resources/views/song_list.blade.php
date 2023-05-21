@extends('layouts.edit_default')

@section('title', 'サンプル')
@section('styleSheet', 'style.css')
@section('head')
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
@endsection


@section('main')
    @if (session()->has('success'))
        {{ session('success') }}
    @endif

@endsection
