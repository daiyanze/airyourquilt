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
        <a href="#">What is "AirYourQuilt"</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </ul>
  </nav>
</template>
<script>
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
