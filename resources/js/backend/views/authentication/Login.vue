<template>
    <div class="container">
        <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3 card o-hidden border-0 shadow-lg my-5">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Đăng nhập</h1>
                                </div>
                                <form v-on:submit.prevent="login" class="user">
                                    <div class="form-group">
                                        <input type="email" v-model="user.email" class="form-control form-control-user" id="email" placeholder="Nhập email">
                                        <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" v-model="user.password" class="form-control form-control-user" id="password" placeholder="Nhập mật khẩu">
                                        <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="small">
                                            <input type="checkbox" v-model="user.remember_me" id="remember_me">
                                            <label class="" for="customCheck">Remember Me</label>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-user btn-block">Đăng nhập</button>
                                </form>
                                <hr>
                                <div class="text-center">
                                    <router-link to="/register" class="small">Quên mật khẩu?</router-link>
                                </div>
                                <div class="text-center">
                                    <router-link to="/register" class="small">Tạo tài khoản mơi!</router-link>
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
                    email: '',
                    password: '',
                    remember_me: false
                },
                errors: {}
            }
        },
        methods: {
            login: async function() {
                try {
                    await auth.login(this.user);
                    this.errors = {};
                    this.$router.push('/admin');
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                        case 500:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                        default:
                            this.flashMessage.error({
                                message: 'Đăng nhập không thành công, xin vui lòng thử lại!',
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
