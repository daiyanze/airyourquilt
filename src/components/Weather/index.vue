<template>
  <div class="weather">
    <div class="weather__detail">
      <b>temperature: {{ temperature }}</b>
      <b>humidity: {{ humidity }}</b>
      <b>wind: {{ wind }}</b>
    </div>
    <h2 class="weather__summary">
      It is
      <b style="color: darkorange;">
        Sunny
      </b>today.
      <br>
      Why not do some laundry?
    </h2>
  </div>
</template>
<script>

export default {
  name: 'Weather',
  props: {
    temperature: {
      required: true,
      type: Number,
      default: null
    },
    humidity: {
      required: true,
      type: Number,
      default: null
    },
    wind: {
      required: true,
      type: Number,
      default: null
    }
  }
}
</script>
<style>
.weather {
  padding: 10px;
  text-align: left;
}

.weather__detail b {
  display: block;
}
</style>
