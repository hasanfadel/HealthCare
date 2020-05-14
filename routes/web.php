<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::prefix('api')->group(function () {

    Route::get('/Patient/get/', 'PatientController@get');


    Route::resource('Doctor', 'DoctorController');
    Route::resource('Appointment', 'AppointmentController');
    Route::resource('Patient', 'PatientController');
    Route::resource('Report', 'ReportController');
    Route::resource('User', 'UserController');
});
