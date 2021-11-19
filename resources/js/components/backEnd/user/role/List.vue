<template>
  <div class="card bg-gradient-dark card-dark">
    <div class="card-header row justify-content-between">
      <div class="col">
        <span class="card-title">{{ $route.name }}</span>
      </div>
      <div class="col text-end">
        <router-link :to="{name:'Add user role'}" class="btn btn-sm btn-secondary"
          ><i class="fas fa-plus" title="Add new"></i
        ></router-link>
      </div>
    </div>
    <div class="card-body">
      <table
        class="
          table table-sm table-dark table-borderless table-hover table-striped
          text-center
          align-middle
          rounded
        "
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
