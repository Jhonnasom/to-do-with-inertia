<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
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

    public function create():Response
    {
        return inertia('Products/Create');
    }

    public function store(StoreProductRequest $request):RedirectResponse
    {
        $data=$request->validated();
        Product::create($request->validated());
        return redirect()->action([static ::class,'index']);
    }

    public function edit(Product $product):Response
    {
        return inertia('Products/Edit',[
            'product'=>$product,
        ]);
    }

    public function update(UpdateProductRequest $request, Product $product):RedirectResponse
    {
        $product->update($request->validated());
        return redirect()->action([static ::class,'index']);
    }
}
