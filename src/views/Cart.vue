<template>
  <div class="container">
    <template v-if="cartItems.length > 0">
      <template v-if="!paymentIntent">
        <ul class="list-group">
          <li class="list-group-item" v-for="(item, key) in cartItems" :key="key" >
            {{ item.title }} - {{ item.price }}
          </li>
        </ul>
        <div class="panel">
          Quantity: {{ cartCount }}
          <br />
          Total: {{ cartTotalPrice }}
          <hr />
        </div>
      </template>
      <template v-if="!paymentIntent">
        <button class="btn btn-success" @click="handleGetPaymentIntent">Потратить денег</button>
      </template>


      <template v-if="paymentIntent">
        <card
            ref="card"
            class='stripe-card'
            :class='{ complete }'
            stripe='pk_test_51INFpPIfqLEQ1vOsuELnTyIvIeQoP6y37a0ohJcyZun4v4TFAukesDc7SQ7r1tbXoqn0A2TWr3LJLJRLgQsh3Hy100NqiM4AJI'
            :options='stripeOptions'
            @change='complete = $event.complete'
        />
        <button class='btn btn-success' @click='pay' :disabled='!complete'>Pay with credit card</button>
      </template>
    </template>
    <template v-else>
      <div>
        Cart is empty
      </div>
    </template>
  </div>
</template>

<script>
import{ mapGetters, mapActions, mapMutations } from 'vuex'
import { Card, handleCardPayment } from 'vue-stripe-elements-plus'

export default {
  name: 'Cart',
  components: {
   Card
  },
  data: () => ({
    complete: false,
    stripeOptions: {},
    paymentIntent: null
  }),
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
      cartTotalPrice: 'cartTotalPrice',
      cartCount: 'cartCount'
    })
  },
  methods: {
    ...mapActions({
      handleBuy: 'handleBuy'
    }),
    ...mapMutations({
      clearCart: 'clearCart'
    }),
    async handleGetPaymentIntent() {
      try {
        const intent = await this.handleBuy()
        this.paymentIntent = intent.client_secret
      } catch (err) {
        console.log(err)
      }
    },
    async pay() {
      try {
        await handleCardPayment(this.paymentIntent)
        this.clearCart()
      } catch (err) {
        console.log(err)
      }
    }
  },
}
</script>

<style>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style>