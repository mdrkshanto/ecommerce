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
        <div class="row">
          <div class="col-sm-4">
            <label class="form-label">Full name</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text"
                ><i class="fas fa-user-tag"></i
              ></span>
              <input type="text" class="form-control" placeholder="Full name" />
            </div>
          </div>
          <div class="col-sm-4">
            <label class="form-label">Full name</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text">@</span>
              <input type="text" class="form-control" placeholder="Full name" />
            </div>
          </div>
          <div class="col-sm-4">
            <label class="form-label">Full name</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text">@</span>
              <input type="text" class="form-control" placeholder="Full name" />
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
