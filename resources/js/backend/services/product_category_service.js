import {http, httpFile} from "./http_service";

export function getProductCategoryParent()
{
    return http().get('get-product-category-parent');
}

export function createProductCategory(data)
{
    return httpFile().post('product-category',data);
}

export function getCategories()
{
    return http().get('product-category');
}

export function updateProductCategory(id, data)
{
    return httpFile().post(`product-category/${id}`,data);
}

export function deleteProductCategory(id)
{
    return http().delete(`product-category/${id}`);
}
