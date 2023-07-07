<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'description' => ['nullable', 'string'],
            'name' => ['required', 'string'],
            'price' => ['required', 'numeric'],
        ];
    }
}
