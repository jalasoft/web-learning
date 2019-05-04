<template>
  <div class="row">
    <form class="offset-md-4 col-4 bg-success"> 
      <div class="form-group">
        <input type="text" class="form-controll form-controll-sm" v-bind:value="message">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        message: 'Ahoj Honzo...'
      }
    }
  }
</script>
