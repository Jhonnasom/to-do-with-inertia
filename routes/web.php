<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;



//Como segundo parametro le podemos pasar props que se van a compartir con todas las vistas
Route::redirect('/', '/products');

Route::resource('products', ProductController::class);
