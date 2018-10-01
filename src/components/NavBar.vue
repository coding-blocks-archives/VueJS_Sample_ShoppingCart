<template>
  <b-navbar toggleable="md">
    <b-navbar-brand href="#">
      Shopping Cart
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/catalog">Catalog</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/cart">Cart</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/wishlist">WishList</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

