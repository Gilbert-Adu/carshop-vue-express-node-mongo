<script>
    export default{
        name: 'App',
        components: {
            JumboTron,
            ProductCards,
            NavBar
        },
        data() {
            return {
                message: "",
                products: [
        {
          id: 1,
          name: 'Product 1',
          description: 'This is a description for product 1',
          price: '$10.00',
          image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'This is a description for product 2',
          price: '$20.00',
          image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        },
        {
          id: 3,
          name: 'Product 3',
          description: 'This is a description for product 3',
          price: '$30',
          image: 'https://images.unsplash.com/photo-1554223090-7e482851df45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1703&q=80'
        },

        {
          id: 4,
          name: 'Product 4',
          description: 'This is a description for product 4',
          price: '$40',
          image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        },
        {
          id: 5,
          name: 'Product 5',
          description: 'This is a description for product 5',
          price: '$50',
          image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
        },
        {
          id: 6,
          name: 'Product 6',
          description: 'This is a description for product 6',
          price: '630',
          image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
        }
    ]
            }
        },
        async mounted() {
            const headers = {
                "Content-Type": "application/json"
            };
            const response = await axios.get("http://localhost:3000/admin/", { headers });
            this.message = response.data;
        }
    }
</script>


<script setup>
import axios from "axios";
import JumboTron from "./components/JumboTron.vue";
import ProductCards from "./components/ProductCards.vue";
import NavBar from "./components/NavBar.vue";


    
</script>

<template>
    <div>
        <NavBar/>
        
        <JumboTron
        title="Lorenzo's"
        subtitle="every car needs a home..."
        buttonLabel="Learn more"
        />
        <div :style="{margin: '50px', textAlign: 'center', fontSize: '50px'}">
          Featured cars
        </div>
        <ProductCards v-for="product in message" :key="product._id" :product="product"/><br>
        <hr>

    </div>
</template>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Typography */


body {
  font-family: Arial, sans-serif;
  line-height: 1.5;
  background-color: black;
  color: white;
}
</style>