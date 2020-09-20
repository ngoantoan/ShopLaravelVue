<template>
    <div>
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            <hr class="sidebar-divider my-0">
            <li class="nav-item active">
                <router-link to="/admin" class="nav-link">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/admin/categories" class="nav-link">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Danh mục sản phẩm</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/admin/products" class="nav-link">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Sản phẩm</span>
                </router-link>
            </li>

            <hr class="sidebar-divider d-none d-md-block">

            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    </div>
</template>

<script>
export default {

}
</script>
