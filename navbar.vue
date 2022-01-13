<template>
    <div>
      
  
 
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img width="100px" src="./assets/site7.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <router-link tag="li" class="navbar-item" to="/">
              <a class="nav-link active" aria-current="page" href="#">home </a>
        </router-link>
       <router-link tag="li" class="navbar-item" to="about">
              <a class="nav-link active" aria-current="page" href="#">about </a>
        </router-link>
      
      <router-link tag="li" class="navbar-item" to="contact">
              <a class="nav-link active" aria-current="page" href="#">contact </a>
        </router-link>

          <router-link tag="li" class="navbar-item" to="footer">
              <a class="nav-link active" aria-current="page" href="#">footer </a>
        </router-link>
      
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      
    </div>
  </div>
</nav>


    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.nav-item:hover:hover{
transform: scale(1,1);
background-color: darkgreen;
border-radius: 5px;
}

 a img{
  border-radius: 30%;
}
</style>