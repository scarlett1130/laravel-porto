<template>
    <main class="main">
        <div class="container skeleton-body skel-shop-products">
            <shop-breadcrumb-component :categories="parentCategories"></shop-breadcrumb-component>

            <div class="row">
                <div class="col-lg-9">
                    <owl-carousel-component
                        class="boxed-slider owl-theme owl-theme-light mb-2"
                        :options="{
							loop: false,
							autoplay: false,
							dots: false,
							items: 1,
						}"
                    >
                        <img
                            class="slide-bg"
                            v-lazy="
								$root.getUrl(
									'client/images/banners/banner-fashion-1.jpg'
								)
							"
                            alt="banner"
                            width="870"
                            height="300"
                        />
                        <img
                            class="slide-bg"
                            v-lazy="
								$root.getUrl(
									'client/images/banners/banner-fashion-2.jpg'
								)
							"
                            alt="banner"
                            width="870"
                            height="300"
                        />
                    </owl-carousel-component>
                    <template v-if="products.length > 0">
                        <sticky-header-component
                            wrapperClass="toolbox-wrapper"
                            class="toolbox-wrapper"
                            :top="650"
                        >
                            <nav class="toolbox toolbox-sticky sticky-header mb-lg-2">
                                <div class="toolbox-left">
                                    <a
                                        href="#"
                                        class="sidebar-toggle d-inline-flex d-lg-none"
                                        @click.prevent="toggleSidebar"
                                    >
                                        <svg
                                            data-name="Layer 3"
                                            id="Layer_3"
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <line class="cls-1" x1="15" x2="26" y1="9" y2="9" />
                                            <line class="cls-1" x1="6" x2="9" y1="9" y2="9" />
                                            <line class="cls-1" x1="23" x2="26" y1="16" y2="16" />
                                            <line class="cls-1" x1="6" x2="17" y1="16" y2="16" />
                                            <line class="cls-1" x1="17" x2="26" y1="23" y2="23" />
                                            <line class="cls-1" x1="6" x2="11" y1="23" y2="23" />
                                            <path
                                                class="cls-2"
                                                d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                                            />
                                            <path
                                                class="cls-2"
                                                d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"
                                            />
                                            <path
                                                class="cls-3"
                                                d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z"
                                            />
                                            <path
                                                class="cls-2"
                                                d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                                            />
                                        </svg>
                                        <span>Filter</span>
                                    </a>
                                    <div class="toolbox-item toolbox-sort">
                                        <label>Sort By:</label>

                                        <div class="select-custom">
                                            <select
                                                name="orderby"
                                                class="form-control"
                                                v-model="orderBy"
                                                @change.prevent="getProducts"
                                            >
                                                <option value="default">Default sorting</option>
                                                <option value="popularity">Sort by popularity</option>
                                                <option value="rating">
                                                    Sort by average
                                                    rating
                                                </option>
                                                <option value="date">Sort by newness</option>
                                                <option value="price">
                                                    Sort by price: low to
                                                    high
                                                </option>
                                                <option value="price-desc">
                                                    Sort by price: high to
                                                    low
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="toolbox-right">
                                    <div class="toolbox-item toolbox-show">
                                        <label>Show:</label>

                                        <div class="select-custom">
                                            <select
                                                name="count"
                                                class="form-control"
                                                v-model.number="perPage"
                                                @change="getProducts"
                                            >
                                                <option value="8">8</option>
                                                <option value="12">12</option>
                                                <option value="24">24</option>
                                                <option value="36">36</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="toolbox-item layout-modes">
                                        <router-link
                                            to="/shop/default"
                                            class="layout-btn btn-grid active"
                                            title="Grid"
                                        >
                                            <i class="icon-mode-grid"></i>
                                        </router-link>
                                        <router-link
                                            to="/shop/list"
                                            class="layout-btn btn-list"
                                            title="List"
                                        >
                                            <i class="icon-mode-list"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </nav>
                        </sticky-header-component>
                        <div class="row">
                            <div
                                class="col-6 col-sm-4"
                                :class="{ 'col-lg-4 col-xl-3': cols === 4 }"
                                v-for="product in products"
                                :key="product.id"
                            >
                                <div class="skel-pro skel-pro-grid skel-padding-161"></div>
                                <transition name="fade" mode="out-in">
                                    <keep-alive>
                                        <component
                                            :is="productComponent"
                                            v-bind="{ product: product }"
                                        ></component>
                                    </keep-alive>
                                </transition>
                            </div>
                        </div>
                        <nav class="toolbox toolbox-pagination">
                            <div class="toolbox-item toolbox-show">
                                <label>Show:</label>

                                <div class="select-custom">
                                    <select
                                        name="count"
                                        class="form-control"
                                        v-model.number="perPage"
                                        @change="getProducts"
                                    >
                                        <option value="8">8</option>
                                        <option value="12">12</option>
                                        <option value="24">24</option>
                                        <option value="36">36</option>
                                    </select>
                                </div>
                            </div>
                            <pagination-component :per-page="perPage" :total="totalCount"></pagination-component>
                        </nav>
                    </template>
                    <div class="info-box with-icon px-1 skel-hide" v-else>
                        <p class="porto-info">No product matching your selection.</p>
                    </div>
                </div>

                <div class="sidebar-overlay" @click="toggleSidebar"></div>
                <aside class="sidebar-shop col-lg-3 order-lg-first mobile-sidebar" sticky-container>
                    <shop-sidebar-one-component v-sticky="shouldSticky" sticky-offset="{ top: 69 }"></shop-sidebar-one-component>
                </aside>
            </div>
        </div>

        <div class="mb-3"></div>
    </main>
</template>

<script>
import { mapGetters } from "vuex";
import Sticky from "vue-sticky-directive";

import OwlCarouselComponent from "../shared/OwlCarouselComponent";
import PaginationComponent from "../shared/PaginationComponent";
import ShopBreadcrumbComponent from "./shared/ShopBreadcrumbComponent";
import ShopSidebarOneComponent from "./shared/ShopSidebarOneComponent";
import StickyHeaderComponent from "../shared/headers/shared/StickyHeaderComponent";

function loadProduct(name) {
    return () =>
        import(`../shared/products/${name}.vue`).then((m) => m.default || m);
}

export default {
    components: {
        PaginationComponent,
        ShopBreadcrumbComponent,
        ShopSidebarOneComponent,
        OwlCarouselComponent,
        StickyHeaderComponent,
    },
    directives: {
        Sticky,
    },
    data: function () {
        return {
            products: [],
            parentCategories: [],
            orderBy: "default",
            perPage: 12,
            totalCount: 10,
            cols: 4,
            shouldSticky: true,
        };
    },
    computed: {
        ...mapGetters("setting", ["getShopSettings"]),
        productComponent: function () {
            return (
                this.getShopSettings.productType &&
                loadProduct(this.getShopSettings.productType)
            );
        },
    },
    watch: {
        $route: function () {
            this.getProducts();
            if (document.querySelector(".skeleton-body")) {
                window.scrollTo({
                    top:
                        document.querySelector(".skeleton-body").offsetTop - 51,
                    behavior: "smooth",
                });
            }
        },
    },
    created: function () {
        this.getProducts();
        this.stickyHandle();
        window.addEventListener("resize", this.stickyHandle, { passive: true });
    },
    destroyed: function () {
        window.removeEventListener("resize", this.stickyHandle);
    },
    methods: {
        getProducts: function () {
            if (document.querySelector(".skeleton-body"))
                document
                    .querySelector(".skeleton-body")
                    .classList.remove("loaded");
            window.axios
                .get("/web/shop/", {
                    params: {
                        ...this.$route.query,
                        orderBy: this.orderBy,
                        per_page: this.perPage,
                    },
                })
                .then((response) => {
                    this.products = response.data.products;
                    this.totalCount = response.data.totalCount;
                    this.parentCategories = response.data.parentCategories;

                    if (document.querySelector(".skeleton-body"))
                        document
                            .querySelector(".skeleton-body")
                            .classList.add("loaded");
                })
                .catch((error) => {});
        },
        toggleSidebar: function () {
            document.querySelector("body").classList.toggle("sidebar-opened");
        },
        stickyHandle: function () {
            if (window.innerWidth > 992) this.shouldSticky = true;
            else this.shouldSticky = false;
        },
    },
};
</script>