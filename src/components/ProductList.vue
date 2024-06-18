<script setup>
import axios from 'axios'
import { ref } from 'vue'
import '@/assets/styles/home.scss'

const products = ref([])
const loading = ref(false)

const fetchProducts = async () => {
  loading.value = true
  const response = await axios.get(`https://fakestoreapi.com/products`)
  loading.value = false
  products.value = response.data
}
fetchProducts()
</script>

<template>
  <div v-if="loading">
    <div>Loading...</div>
  </div>
  <div v-else>
    <div class="home">
      <div class="products">
        <div v-for="(product, index) in products" :key="index" class="product">
          <div
            class="product-image"
            :style="{ backgroundImage: 'url(' + product.image + ')' }"
          ></div>
          <h4>{{ product.title }}</h4>
          <router-link :to="`/item/${product.id}`"><button>View Details</button></router-link>
          <p class="price">{{ product.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
