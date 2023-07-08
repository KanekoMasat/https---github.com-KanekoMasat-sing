<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SingingSheetController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

//ユーザー関連
Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
Route::post('/users', [UserController::class, 'store'])->name('users.store');
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login')->middleware('guest');
Route::post('/login', [AuthController::class, 'login']);
Route::get('/guestLogin', [AuthController::class, 'guestLogin'])->name('guestLogin');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/', function () {
    return view('index');
});

Route::get('/index', function () {
    return view('index');
})->name('index')->middleware('auth');

Route::resource('/singing', SingingSheetController::class)->middleware('auth');


Route::get('/definition', function () {
    return view('definition');
})->name('definition');
Route::get('/explanation', function () {
    return view('explanation');
})->name('explanation');
