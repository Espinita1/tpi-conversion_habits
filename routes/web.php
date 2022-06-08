<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ConversionController;

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

// Callle the function Index when when a request to the "/" root document is being requested, if there'es an error show 404 error
Route::get('/', [ConversionController::class, 'Index', 404]);

// Call the function Help in ConversionController when a request to the "/Aide" route is being requested, if there's an error show 404 error
Route::get('/Aide', [ConversionController::class, 'Help', 404]);