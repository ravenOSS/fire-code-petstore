<template>
  <div class="container">
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
    <br />
    <hr />
    <div v-for="product in products" :key="product.id">
      <h1>{{ product.title }}</h1>
    <figure>
      <img
        class="product"
        :src="product.image"
      >
    </figure>
      <p>Description: {{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
      <p>Rating: {{ product.rating }}</p>
      <p>Available: {{ product.availableInventory }}</p>
      <button @click="deleteProduct(product.id)">Delete Product</button>
      <hr />
    </div>

    <div>
      <hr />
      <form
        @submit.prevent="
          addProduct(title, image, description, availableInventory, price, rating)
        "
      >
        <div>
          <input type="text" v-model="title" placeholder="Name" />
        </div>
        <div>
          <input type="text" v-model="image" placeholder="Path to image" />
        </div>
        <div>
          <input type="text" v-model="description" placeholder="Description" />
        </div>
        <div>
          <input
            type="number"
            v-model.number="availableInventory"
            placeholder="Inventory"
          />
        </div>
        <div>
          <input type="number" v-model.number="price" placeholder="Price" />
        </div>
        <div>
          <input type="number" v-model.number="rating" placeholder="Rating" />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>

  </div>  
</template>

<script>
import { db } from "../db2";

export default {
  name: "Products",
  props: {
    msg: String
  },
  data() {
    return {
      products: [],
      title: "",
      image: "",
      description: "",
      availableInventory: null,
      price: null,
      rating: null,
    }
  },

  firestore() {
    return {
      products: db.collection("koder-products")
    };
  },

  methods: {
    addProduct(title, image, description, availableInventory, price, rating) {
    db.collection("koder-products")
    .add({
      title,
      image,
      description,
      availableInventory,
      price,
      rating
    })
    .then(function(docRef) {
      console.log("Document written:", docRef.id);
    })
    .catch(function(error) {
      console.error("error adding document: ", error);
    })
    },

    // postProduct() {
    //   db.collection("koder-products")
    //     .add({
    //       title: "Hampster Pup",
    //       description: "Live fun for your cat",
    //       availableInventory: 20,
    //       price: 1499,
    //       rating: 5
    //     })
    //     .then(function(docRef) {
    //       console.log("Document written:", docRef.id);
    //     })
    //     .catch(function(error) {
    //       console.error("error adding document: ", error);
    //     });
    // },

    deleteProduct(id) {
      db.collection("koder-products")
        .doc(id)
        .delete();
    },

    // readProducts() {
    //   db.collection("koder-products").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.data());
    // })
    // })
    // }
  }

}
</script>
