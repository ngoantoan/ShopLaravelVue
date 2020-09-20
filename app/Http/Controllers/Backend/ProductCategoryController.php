<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductCategory;
use Illuminate\Support\Facades\Storage;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = ProductCategory::with('category')->orderBy('parent_id','asc')->get();
        return response()->json($categories,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg'
        ]);

        $productCategory = new ProductCategory();

        $productCategory->parent_id = $request->parent_id;
        $productCategory->name = $request->name;
        $productCategory->status = $request->status;

        $path = $request->file('image')->store('product_cateogry');
        $productCategory->image = $path;

        if ($productCategory->save()) {
            $productCategory = ProductCategory::with('category')->find($productCategory->id);
            return response()->json($productCategory,200);
        } else {
            return response()->json([
                'message' => 'Tạo danh mục không thành công, xin vui lòng thử lại',
                'status_code' => 500
            ],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $productCategory = ProductCategory::find($id);

        $productCategory->parent_id = $request->parent_id;
        $productCategory->name = $request->name;
        $productCategory->status = $request->status;

        $oldPath = $productCategory->image;

        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg'
            ]);

            $path = $request->file('image')->store('product_cateogry');
            $productCategory->image = $path;

            Storage::delete($oldPath);
        }

        if ($productCategory->save()) {
            $productCategory = ProductCategory::with('category')->find($productCategory->id);
            return response()->json($productCategory,200);
        } else {
            Storage::delete($path);
            return response()->json([
                'message' => 'Cập nhật danh mục sản phẩm không thành công!',
                'status_code' => 500
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $productCategory = ProductCategory::find($id);

        if ($productCategory->parent_id == 0) {
            $child = ProductCategory::where('parent_id', $productCategory->id)->first();
            if (!is_null($child)) {
                return response()->json([
                    'message' => 'VUi lòng xóa danh mục con trước',
                    'status_code' => 501
                ],501);
            }
        }

        if ($productCategory->delete()) {
            return response()->json([
                'message' => 'Xóa danh mục sản phẩm thành công',
                'status_code' => 200
            ],200);
        } else {
            return response()->json([
                'message' => 'Xóa danh mục sản phẩm không thành công',
                'status_code' => 500
            ],500);
        }
    }

    public function getProductCategoryParent()
    {
        $productCategoryParent = ProductCategory::where('parent_id', '0')->get();
        return response()->json($productCategoryParent, 200);
    }
}
