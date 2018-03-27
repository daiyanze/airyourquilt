<template>
  <nav class="nav box">
    <div class="nav__title box">
      <img src="@/assets/washing-machine.svg" />
      <h3>
        <a href="/">AirYourQuilt</a>
      </h3>
    </div>
    <ul class="nav__menu">
      <li>
        <a href="#" @click.prevent="popWhatModal">What is "AirYourQuilt"</a>
      </li>
      <li>
        <a href="#" @click.prevent="popAboutModal">About</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    popAboutModal () {
      this.$modal.show('dialog', {
        title: 'About this website creator',
        text: 'Find me on github. <a href="https://github.com/daiyanze">https://github.com/daiyanze</a>'
      })
    },
    popWhatModal () {
      this.$modal.show('dialog', {
        title: 'What is "AirYourQuilt"?',
        text: '"AirYourQuilt" is another a small web application to help you find a proper day to do the laundry. It is powered by Vue.js and Flask. Thank you for visiting'
      })
    }
  }
}
</script>
<style scoped>
.nav {
  padding: 0 15px;
  align-items: center;
}

.nav__title h3 {
  padding-left: 5px;
}

.nav__menu {
  margin-left: auto;

}

.nav__menu li {
  display: inline-block;
  padding-left: 15px;
  font-size: 14px;
}
</style>
