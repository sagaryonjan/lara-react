<?php

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

Route::get('api/users', function () {
    return App\User::all();
});

Route::get('api/users/{id}', function ($id) {
    return App\User::findOrFail($id);
});

Route::post('api/users/store', function () {
	$data = request()->validate([
		'name' => 'required',
		'email'    => 'required',
		'password' => 'required'
	]);

	$user = App\User::create($data);

   return response()->json($user, 201);
});


Route::post('api/users/{id}/update', function ($id) {
	$data = request()->validate([
		'name' => 'required',
		'email'    => 'required',
		'password' => 'nullable'
	]);

	$user = App\User::findOrFail($id);

	$user->update($data);

   return response()->json($user, 200);
});

Route::post('api/users/{id}/delete', function ($id) {
	
	$user = App\User::findOrFail($id);
	$user->delete();

   return response()->json($user, 200);
});


Auth::routes();


Route::get('/{path?}', [
    'uses' => 'HomeController@index',
    'as' => 'react',
    'where' => ['path' => '.*']
]);

