<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <div class="wrapper-left">
          <RouterLink id="left" to="/">
            <p id="name">Ashley Chan</p>
            <p id="job">Software Engineer</p>
          </RouterLink>
        </div>
        <div class="warpper-right">
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5% 8%;
    margin: 2rem 3rem;
    align-items: center;
  }
  a{
    text-decoration: none;
    color: var(--primary-color);
  }
  #left{
    line-height: 2.5rem;
  }
  #name{
    font-size: 3rem;
  }
  #job{
    font-size: 1rem;
  }
  .wrapper-right{
    /* width: 50%; */
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  a {
    padding-left: 3rem;
  }
</style>
