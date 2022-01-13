<template>
  <div class="container-fluid">

    <img src="./assets/site9.png"  width="100px"  class="img-fluid img mb-5" alt="">

    
<router-view></router-view>



 </div>
</template>

<script>

export default {
  
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
