<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Response;

class ProductController extends Controller
{
    public function index():Response
    {
        $products=Product::query()->paginate(10);
        return inertia('Products/Index',[
            'products'=>ProductResource::collection($products),
        ]);
    }
}
