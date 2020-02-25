<html>

</html>

<script>
var firebaseConfig = {
  apiKey: "AIzaSyAWjTqxahIILfU3q_kRqNuqfdTIkdRLT4g",
  authDomain: "via-2020-mtnkoder.firebaseapp.com",
  databaseURL: "https://via-2020-mtnkoder.firebaseio.com",
  projectId: "via-2020-mtnkoder",
  storageBucket: "via-2020-mtnkoder.appspot.com",
  messagingSenderId: "436235734926",
  appId: "1:436235734926:web:776e755f41925dc1919edf",
  measurementId: "G-RZNXP70TZQ"
};

<!-- <form
@submit.prevent="postProduct()">
<button type="submit">Post Product</button>
</form>

<form
@submit.prevent="readProducts()">
<button type="submit">Read Products</button>
</form> -->

data() {
  return {
    products: [],
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    availableInventory: {
      type: Number,
      default: null
    },
    price: {
    type: Number,
    default: null
    },
    rating: {
      type: Number,
      default: null
    },
  };
},

</script>