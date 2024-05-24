<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const product = ref([])
const loading = ref(false)
const route = useRoute()

const fetchProduct = async () => {
  loading.value = true
  const response = await axios.get(`https://fakestoreapi.com/products/${route.params.id}`)
  loading.value = false
  product.value = response.data
}
fetchProduct()
</script>

<template>
  <div v-if="loading">
    <div>Loading...</div>
  </div>
  <div v-else>
    <div class="home">
      <div class="products">
        <div class="product">
          <div
            class="product-image"
            :style="{ backgroundImage: 'url(' + product.image + ')' }"
          ></div>
          <h4>{{ product.title }}</h4>
          <h6>{{ product.description }}</h6>
          <p class="price">{{ product.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .product {
      flex: 0 0 30%;
      box-sizing: border-box;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 16px;
      margin: 8px;
      height: 660px;

      @media only screen and (max-width: 769px) {
        flex: 0 0 40%;
      }

      @media only screen and (max-width: 640px) {
        flex: 0 0 90%;
      }

      &.inBag {
        border: 1px solid #00b956;
      }

      .product-image {
        margin: 20px auto;
        width: 360px;
        height: 340px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      h4 {
        margin: 22px auto;
        font-size: 12px;
        max-width: 60%;
        font-weight: normal;
      }

      h6 {
        margin: 22px auto;
        font-size: 10px;
        max-width: 60%;
        font-weight: normal;
      }

      p.price {
        font-size: 20px;
        font-weight: bold;
      }

      button {
        color: #fff;
        background-color: #00b956;
        border: 1px solid #00b956;
        border-radius: 100px;
        font-weight: 400;
        text-align: center;
        padding: 8px 16px;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }

        &.remove {
          background-color: transparent;
          border: none;
          color: black;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
