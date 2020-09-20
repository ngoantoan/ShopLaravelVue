<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function category()
    {
        return $this->bolongsTo('App\Models\ProductCategory', 'category_id');
    }
}
