<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    protected $table = 'product_category';

    public function products()
    {
        return $this->hasMany('App\Models\Product', 'category_id');
    }

    public function category()
    {
        return $this->belongsTo('App\Models\ProductCategory', 'parent_id');
    }
}
