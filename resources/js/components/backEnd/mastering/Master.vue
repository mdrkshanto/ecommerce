<template>
  <div class="wrapper">
    <Navbar />
    <MainMenu />
    <div class="content-wrapper bg-gray-dark">
        <div class="container-fluid"><router-view /></div>
    </div>
  </div>
</template>
<script>
import Navbar from "./includes/Navbar";
import MainMenu from "./includes/MainMenu";
export default {
  components: {
    Navbar,
    MainMenu,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");
@import "../../../../../public/backEnd/assets/dist/css/adminlte.min.css";
</style>
