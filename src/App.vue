<template>
  <div id="nav">
    <nav class="container-fluid navbar navbar-expand-lg navbar-dark text-light bg-dark p-3">
    
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item px-5">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
            </li>
            <li class="nav-item px-5">
          <router-link to="/cities" class="nav-item nav-link">Cities</router-link>
            </li>
            <li class="nav-item px-5">
          <router-link to="/search" class="nav-item nav-link">Search</router-link>
            </li>
          </ul>
        </div>
    </nav>
  </div>
  <router-view :key="$route.fullPath"></router-view>

</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
body {
  display: flex;
  justify-content: space-between;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  font-weight: bold;
}
#nav {
  padding: 0;
  text-align: center;
  justify-content: space-between;
  width: 100%;
}

a {
  font-weight: bold;
  /* color: #2c3e50; */
  text-align: center;
  line-height: 60px;
  border-radius: 0.5rem;
  font-size: 30px;
  color: #666;
  transition: .5s;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: #ffa502;
  border-radius: 0.5rem;
}

a:before {
  content: '';
  width:100%;
  height:100%;
  border-radius: 0.5rem;
  background: #d35400;
  transition: .5s;
  transform: scale(.9);
  z-index: -1;
  }

a:hover:before {
  transform: scale(1.2);
  box-shadow: 0 0 15px #d35400;
  filter: blur(3px);
}

a:hover {
  color: #ffa502;
  box-shadow: 0 0 15px #d35400;
  text-shadow: 0 0 15px #d35400;
}
</style>