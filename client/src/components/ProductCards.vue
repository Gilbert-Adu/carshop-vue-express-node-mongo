<script>
export default{
    props: {
        product: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    methods: {
      debug(e, item) {
        console.log(item);
      },
  
    }
}  

</script>

<template>
    <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name">
    </div>
    <div class="product-info">
      <h3 class="product-name">{{ product.title }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-price">${{ product.price }}</div>
    </div>
  </div>

  <!--
    <div class="product-cards">
    <div v-for="product in products" :key="product._id" class="card">
      <img :src="product.image" :alt="product.make + ' ' + product.model + ' ' + product.year" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">Reason: {{ product.description }}</p>
        <p class="card-text">Mileage: {{ product.mileage }} miles</p>
        <p class="card-text">Make: {{ product.make }}</p>
        <p class="card-text">Model: {{ product.model }}</p>
        <p class="card-text">Year: {{ product.year }}</p>
        <p class="card-text">Color: {{ product.color }}</p>
        <p class="card-price">${{ product.price }}</p>

        <button @click="debug(product._id)">Buy now</button>
      </div>
    </div>
  </div>

  -->
  
</template>

<style>
.product-card {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin: 20px;
}
.product-card:hover{
  cursor: pointer;
}
.product-image {
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
  overflow: hidden;
}

.product-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  flex: 1;
  padding: 20px;
}

.product-name {
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: bold;
}

.product-description {
  margin: 0 0 10px;
  font-size: 14px;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
}

@media (min-width: 768px) {
  .product-card {
    flex-wrap: nowrap;
    max-width: 50%;
  }

  .product-image {
    width: 40%;
    height: auto;
  }

  .product-info {
    padding: 20px 30px;
  }
}
/**
.product-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: calc(33.33% - 1rem);
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-price {
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
}

button {
  background-color: #ffcc00;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ffb300;
}

@media screen and (max-width: 768px) {
  .product-cards, .card {
    flex-direction: row;
    height: auto;
    border: none;
  }

  .card-image {
    width: 40%;
    height: auto;
    border-right: 1px solid #dbdbdb;
  }

  .card-image img {
    height: 100%;
  }

  .card-content {
    width: 60%;
    padding: 1rem 1rem 1rem 2rem;
  }

  .buttons {
    flex-direction: column;
    margin-top: 0.5rem;
  }

  .buttons button {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}

 */

</style>