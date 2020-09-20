<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register','Backend\AuthController@register');
Route::post('login','Backend\AuthController@login');

Route::middleware('auth:api')->group(function () {
    Route::get('logout','Backend\AuthController@logout');

    Route::resource('product-category','Backend\ProductCategoryController');
    Route::get('get-product-category-parent','Backend\ProductCategoryController@getProductCategoryParent');
});
