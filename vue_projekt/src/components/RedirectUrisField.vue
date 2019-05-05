<template>
  <div class="form-group mt-2">
    <div class="form-row">
      <label for="url" class="col-md-2 col-form-label col-form-label-sm">Url</label>
      <input type="url" id="url" class="col form-control form-control-sm" v-model="currentUri" @input="resolveButtonTitle" @focus="resolveButtonTitle">
      <button type="button" class="btn btn-sm btn-success col-md-2" v-on:click="onAdd">{{btnTitle}}</button>
    </div>
    <div class="form-row">
      <select class="col form-control form-control-sm mt-1" size="3" @change="onSelect" v-model="selected">
        <option v-for="item in items">{{item}}</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        items: [],
        btnTitle: 'Add'
      }
    },
    methods: {
      onAdd: function() {
        if (this.btnTitle == 'Add') {
          this.items.push(this.currentUri);
        } else {
          this.items = this.items.filter(i => i !== this.currentUri);
        }
        this.currentUri = '';
      },
      onSelect: function() {
        console.log(this.selected);
        this.currentUri = this.selected;
        
        this.resolveButtonTitle();
      },
      resolveButtonTitle: function() {
        if (this.items.includes(this.currentUri)) {
          this.btnTitle = 'Remove';
        } else {
          this.btnTitle = 'Add';
        }
      }
    }
  }
</script>
