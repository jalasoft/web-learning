<template>
  <div class="row">
    <form class="offset-md-4 col-4 bg-light border rounded"> 
      <RedirectUrisField/>
    </form>
  </div>
</template>

<script>
  import RedirectUrisField from './RedirectUrisField.vue';
  export default {
    data: function() {
      return {
        message: 'Ahoj Honzo...'
      }
    },
    components: {
      RedirectUrisField
    }
  }
</script>
