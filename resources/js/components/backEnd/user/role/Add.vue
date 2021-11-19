<template>
  <div class="card bg-gradient-dark card-dark">
    <div class="card-header row justify-content-between">
      <div class="col">
        <span class="card-title">{{ $route.name }}</span>
      </div>
      <div class="col text-end">
        <router-link
          :to="{ name: 'User role list' }"
          class="btn btn-sm btn-secondary"
          ><i class="fas fa-arrow-circle-left" title="Back"></i
        ></router-link>
      </div>
    </div>
    <form @submit.prevent="">
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-sm-4">
            <label class="form-label">Role name</label>{{ roleName }}
            <div class="input-group input-group-sm">
              <span class="input-group-text"><i class="fas fa-mask"></i></span>
              <input
                type="text"
                class="form-control text-capitalize"
                placeholder="Role name"
                v-model="roleName">
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-center">
        <button type="submit" class="btn btn-secondary btn-sm">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
    data(){
        return{
            roleName: null
        }
    }
}
</script>
<style scoped>
::placeholder{
    text-transform: capitalize;
}
</style>
