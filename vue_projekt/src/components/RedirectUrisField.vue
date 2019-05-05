<template>
  <div class="form-group form-row mt-2">
    <label for="url" class="col-md-2 col-form-label col-form-label-sm">Url</label>
    <input type="url" id="url" class="col form-control form-control-sm">
    <button type="button" class="btn btn-sm btn-success col-md-2" v-on:click="onAdd">Add</button>
  </div>
</template>

<script>
  export default {
    methods: {
      onAdd: function() {
        window.alert("Ahoj!!!!");
      }
    }
  }
</script>
