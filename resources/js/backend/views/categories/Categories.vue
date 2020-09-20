<template>
    <div class="container-fluid">

        <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex">
                <h6 class="m-0 font-weight-bold text-primary">Quản lý danh mục sản phẩm</h6>
                <button class="btn btn-primary btn-sm ml-auto" v-on:click="showNewCategoryProductModal"><span class="fa fa-plus"></span> Thêm danh mục</button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tên</th>
                                <th>Danh mục cha</th>
                                <th>Ảnh</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(category,index) in categories" :key="index">
                                <td>{{index+1}}</td>
                                <td>{{category.name}}</td>
                                <td v-if="category.category">{{category.category.name}}</td>
                                <td v-else></td>
                                <td>
                                    <img :src="`${$store.state.serverPath}/storage/${category.image}`" width="50">
                                </td>
                                <td>
                                    <button class="btn btn-primary btn-sm" v-on:click="editProductCategory(category)"><span class="fa fa-edit"></span></button>
                                    <button class="btn btn-danger btn-sm" v-on:click="deleteProductCategory(category)"><span class="fa fa-trash"></span></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <b-modal ref="newCategoryProductModal" hide-footer title="Thêm danh mục danh sách">
            <form v-on:submit.prevent="createProductCategory">
                <div class="form-group">
                    <label for="name">Tên danh mục</label>
                    <input type="name" v-model="categoryData.name" class="form-control" id="name" placeholder="Nhập tên danh mục">
                    <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                </div>
                <div class="form-group">
                    <label for="parent_id">Danh mục cha</label>
                    <select class="form-control" v-model="categoryData.parent_id" id="parent_id">
                        <option value="0">Danh mục cha</option>
                        <option v-for="(category,index) in productCategoryParent" :value="category.id" :key="index">{{category.name}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="image">Ảnh</label>
                    <div v-if="categoryData.image">
                        <img src="" ref="newProductCategoryImageDisplay" width="100">
                    </div>
                    <input type="file" class="form-control" ref="newProductCategoryImage" v-on:change="newAttachImage" id="image">
                    <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                </div>
                <div class="form-group">
                    <label for="status">Trạng thái</label>
                    <div class="form-check">
                        <input class="form-check-input" v-model="categoryData.status" type="radio" value="0" checked>
                        <label class="form-check-label" for="status">Ẩn</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="categoryData.status" type="radio" value="1" checked>
                        <label class="form-check-label" for="status">Hiện</label>
                    </div>
                </div>
                <div class="float-right">
                    <button type="button" class="btn btn-danger" v-on:click="hideNewCategoryProductModal">Hủy</button>
                    <button type="submit" class="btn btn-primary">Lưu</button>
                </div>
            </form>
        </b-modal>

        <b-modal ref="editCategoryProductModal" hide-footer title="Cập nhật danh mục">
            <form v-on:submit.prevent="updateProductCategory">
                <div class="form-group">
                    <label for="name">Tên danh mục</label>
                    <input type="name" v-model="editCategoryData.name" class="form-control">
                    <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                </div>
                <div class="form-group">
                    <label for="parent_id">Danh mục cha</label>
                    <select class="form-control" v-model="editCategoryData.parent_id">
                        <option value="0">Danh mục cha</option>
                        <option v-for="(category,index) in productCategoryParent" :value="category.id" :key="index">{{category.name}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="image">Ảnh</label>
                    <div v-if="editCategoryData.image">
                        <img :src="`${$store.state.serverPath}/storage/${editCategoryData.image}`" ref="editProductCategoryImageDisplay" width="100">
                    </div>
                    <input type="file" class="form-control" ref="editProductCategoryImage" v-on:change="editAttachImage">
                    <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                </div>
                <div class="form-group">
                    <label for="status">Trạng thái</label>
                    <div class="form-check">
                        <input class="form-check-input" v-model="editCategoryData.status" type="radio" value="0" checked>
                        <label class="form-check-label" for="status">Ẩn</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="editCategoryData.status" type="radio" value="1" checked>
                        <label class="form-check-label" for="status">Hiện</label>
                    </div>
                </div>
                <div class="float-right">
                    <button type="button" class="btn btn-danger" v-on:click="hideEditCategoryProductModal">Hủy</button>
                    <button type="submit" class="btn btn-primary">Lưu</button>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
    import * as productCategoryService from '../../services/product_category_service';

    export default {
        name: "Categories",
        data() {
            return {
                productCategoryParent: {},
                categories: {},
                categoryData: {
                    parent_id: 0,
                    name: '',
                    image: '',
                    status: 1
                },
                editCategoryData: {},
                errors: {}
            }
        },
        mounted() {
            this.getProductCategoryParent();
            this.getCategories();
        },
        methods: {
            getCategories: async function()
            {
                try {
                    const response = await productCategoryService.getCategories();
                    this.categories = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Một số lỗi đã xảy ra, xin vui lòng tải lại',
                        time: 5000
                    });
                }
            },
            showNewCategoryProductModal() {
                this.$refs['newCategoryProductModal'].show();
            },
            hideNewCategoryProductModal() {
                this.$refs['newCategoryProductModal'].hide();
            },
            getProductCategoryParent: async function() {
                try {
                    const response = await productCategoryService.getProductCategoryParent();
                    this.productCategoryParent = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Một số lỗi đã xảy ra, xin vui lòng tải lại',
                        time: 5000
                    });
                }
            },
            newAttachImage() {
                this.categoryData.image = this.$refs.newProductCategoryImage.files[0];

                const reader = new FileReader();
                reader.addEventListener('load',function () {
                    this.$refs.newProductCategoryImageDisplay.src = reader.result;
                }.bind(this),false);

                reader.readAsDataURL(this.categoryData.image);
            },
            createProductCategory: async function() {
                try {
                    const formData = new FormData();
                    formData.append('parent_id',this.categoryData.parent_id);
                    formData.append('name',this.categoryData.name);
                    formData.append('image',this.categoryData.image);
                    formData.append('status',this.categoryData.status);

                    const response = await productCategoryService.createProductCategory(formData);

                    this.categories.unshift(response.data);

                    this.hideNewCategoryProductModal();
                    this.errors = {};
                    this.categoryData = {
                        parent_id: 0,
                        name: '',
                        image: '',
                        status: 1
                    };

                    this.flashMessage.success({
                        message: 'Thêm danh mục sản phẩm thành công',
                        time: 5000
                    });
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: 'Thêm danh mục không thành công, xin vui lòng thử lại!',
                                time: 5000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'Một số lỗi đã xảy ra, xin vui lòng tải lại',
                                time: 5000
                            });
                            break;
                    }
                }
            },
            showEditCategoryProductModal() {
                this.$refs['editCategoryProductModal'].show();
            },
            hideEditCategoryProductModal() {
                this.$refs['editCategoryProductModal'].hide();
            },
            editProductCategory(category) {
                this.editCategoryData = {...category};
                this.showEditCategoryProductModal();
            },
            editAttachImage() {
                this.editCategoryData.image = this.$refs.editProductCategoryImage.files[0];

                const reader = new FileReader();
                reader.addEventListener('load',function () {
                    this.$refs.editProductCategoryImageDisplay.src = reader.result;
                }.bind(this),false);

                reader.readAsDataURL(this.editCategoryData.image);
            },
            updateProductCategory: async function() {
                try {
                    const formData = new FormData();
                    formData.append('parent_id',this.editCategoryData.parent_id);
                    formData.append('name',this.editCategoryData.name);
                    formData.append('image',this.editCategoryData.image);
                    formData.append('status',this.editCategoryData.status);
                    formData.append('_method','put');

                    const response = await productCategoryService.updateProductCategory(this.editCategoryData.id, formData);

                    this.categories.map(category => {
                        if (category.id == response.data.id) {
                            for (let key in response.data) {
                                category[key] = response.data[key];
                            }
                        }
                    });

                    this.hideEditCategoryProductModal();
                    this.errors = {};

                    this.flashMessage.success({
                        message: 'Cập nhật danh mục sản phẩm thành công',
                        time: 5000
                    });
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: 'Cập nhật sản phẩm không thành công!',
                                time: 5000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'Một số lỗi đã xảy ra, xin vui lòng tải lại',
                                time: 5000
                            });
                            break;
                    }
                }
            },
            deleteProductCategory: async function(category) {
                if (!confirm('Bạn có chất muốn xóa danh mục này')) {
                    return
                }

                try {
                    await productCategoryService.deleteProductCategory(category.id);

                    this.categories = this.categories.filter(obj => {
                        return obj.id != category.id;
                    });
                    this.flashMessage.success({
                        message: 'Xóa danh mục thành công',
                        time: 5000
                    });
                } catch (error) {
                    switch (error.response.status) {
                        case 501:
                            this.flashMessage.error({
                                message: 'Vui lòng xóa danh mục con trước!',
                                time: 5000
                            });
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: 'Xóa danh mục sản phẩm không thành công, xin vui lòng thử lại!',
                                time: 5000
                            });
                        default:
                            this.flashMessage.error({
                                message: 'Một số lỗi đã xảy ra,xin vui lòng thử lại!',
                                time: 5000
                            });
                            break;
                    }

                }
            }
        }
    }
</script>

<style scoped>

</style>
