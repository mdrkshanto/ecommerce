<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <router-link :to="{ name: 'Dashboard' }" class="brand-link">
      <!-- <img
          src="../../../../../../public/backEnd/assets/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        /> -->
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </router-link>
    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <!-- <div class="image">
          <img
              src="../../../../../../public/backEnd/assets/dist/img/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
        </div> -->
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input
            class="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-item">
            <router-link
              :to="{ name: 'Dashboard' }"
              class="nav-link"
              :class="$route.name === 'Dashboard' ? 'active bg-secondary' : ''"
            >
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </router-link>
          </li>
          <li class="nav-item">
            <a
              href="javascript:void(0);"
              class="nav-link"
              :class="$route.name === 'User list' || $route.name === 'User role list' || $route.name === 'Add user role' ? 'active bg-gradient-dark' : ''"
            >
              <i class="fas fa-users-cog"></i>
              <p>
                Users
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview ms-1">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'User list' }"
                  class="nav-link"
                  :class="
                    $route.name === 'User list' ? 'active bg-secondary' : ''
                  "
                >
                  <i class="fas fa-users"></i>
                  <p>List</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'User role list' }"
                  class="nav-link"
                  :class="
                    $route.name === 'User role list' || $route.name === 'Add user role' ? 'active bg-secondary' : ''
                  "
                >
                  <i class="fas fa-crown"></i>
                  <p>Roles</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
