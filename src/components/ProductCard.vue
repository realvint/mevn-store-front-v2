<template>
  <div class="card">
    <div class="card_header">{{title}} {{price}} руб.</div>
    <hr/>
    <img :src="imageUrl" alt="фотокарточка"/>
    <div class="card_footer">
      <button class="btn btn-info" @click="$emit('add-to-cart')" v-if="!inCart">Добавить</button>
      <button class="btn btn-danger" @click="$emit('add-to-cart')" v-else>Удалить</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    inCart: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    width: 150px;
    height: 150px;
    padding: 10px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 8px;

    img {
      width: 100%;
    }
    &_footer {
      margin-top: 20px;
    }
  }
</style>