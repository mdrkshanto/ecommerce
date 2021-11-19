<template>
  <nav class="main-header navbar navbar-expand navbar-dark">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link
          :to="{ name: 'Dashboard' }"
          class="nav-link" :class="$route.name === 'Dashboard'?'active':''"
          >Home</router-link
        >
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <button type="button" class="nav-link btn">Logout</button>
      </li>
    </ul>
  </nav>
</template>
