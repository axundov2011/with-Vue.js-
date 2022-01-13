<template>
  <div class="container-fluid">
    <menyu></menyu>
    <footer></footer>
    


<router-view></router-view>



 </div>
</template>


<script>

import menyu from './components/navbar.vue'



export default {

components: {
menyu,
  }
}

</script>

<style scoped>

*{
  margin: 0;
  box-sizing: border-box;
}

img{
  width: 10300px;
   height: 600px;
  object-fit: cover;
  }

   body{
    background-image: url("./assets/site9.png");
    background-attachment:fixed;
    background-size: cover;
  }
</style>