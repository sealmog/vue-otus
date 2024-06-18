<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import '@/assets/styles/item.scss'

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
        <div class="product-item">
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
