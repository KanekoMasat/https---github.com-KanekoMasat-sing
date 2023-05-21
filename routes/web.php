<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SingingSheetController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

//ユーザー関連
Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
Route::post('/users', [UserController::class, 'store'])->name('users.store');
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login')->middleware('guest');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');


Route::get('/index', function () {
    return view('index');
})->name('index')->middleware('auth');

Route::resource('/singing', SingingSheetController::class)->middleware('auth');
Route::get('/definition', function () {
    return view('definition');
})->name('definition');


Route::get('/index/test', function () {
    return view('test');
})->name('index.test')->middleware('auth');
