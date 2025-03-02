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
    Route::get('/Doctor/get/{Spec}', 'DoctorController@get');
    Route::get('/Comment/{Issue}/', 'CommentController@get');
    Route::put('/Issue/close/{Issue}', 'IssueController@close');


    Route::resource('Doctor', 'DoctorController');
    Route::resource('Appointment', 'AppointmentController');
    Route::resource('Patient', 'PatientController');
    Route::resource('Report', 'ReportController');
    Route::resource('User', 'UserController');
    Route::resource('Issue', 'IssueController');
    Route::resource('Comment', 'CommentController');
    Route::resource('Statistic', 'StatisticController');
    Route::resource('Specialty', 'SpecialtyController');
});
