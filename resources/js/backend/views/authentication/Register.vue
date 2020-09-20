<template>
    <div class="container">
        <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3 card o-hidden border-0 shadow-lg my-5">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Đăng ký</h1>
                            </div>
                            <form v-on:submit.prevent="register" class="user">
                                <div class="form-group">
                                    <input type="name" v-model="user.name" class="form-control form-control-user" id="name" placeholder="Nhập tên tài khoản">
                                    <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                                </div>
                                <div class="form-group">
                                    <input type="email" v-model="user.email" class="form-control form-control-user" id="email" placeholder="Nhập email">
                                    <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" v-model="user.password" class="form-control form-control-user" id="password" placeholder="Nhập mật khẩu">
                                        <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" v-model="user.password_confirmation" class="form-control form-control-user" id="password_confirmation" placeholder="Nhập lại mật khẩu">
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary btn-user btn-block">Đăng ký</button>
                            </form>
                            <hr>
                            <div class="text-center">
                                <router-link to="/login" class="small">Quên mật khẩu?</router-link>
                            </div>
                            <div class="text-center">
                                <router-link to="/admin-login" class="small">Bạn đã có tài khoản? Đăng nhập!</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as auth from '../../services/auth_service';

    export default {
        created() {
            document.querySelector('body').style.backgroundColor = '#4e73df';
        },
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                errors: {}
            }
        },
        methods: {
            register: async function() {
                try {
                    await auth.register(this.user);
                    this.errors = {};
                    this.$router.push('/admin-login')
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: error.response.data.errors,
                                time: 5000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'Đăng ký không thành công, vui lòng thử lại!',
                                time: 5000
                            });
                            break;
                    }
                }
            }
        }
    }
</script>
