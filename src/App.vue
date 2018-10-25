<template>
  <div id="app">
    <div class="contact-box">
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    Contact
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
.contact-box {
  padding: 30px 20px;
}
</style>
