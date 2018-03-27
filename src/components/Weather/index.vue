<template>
  <div class="weather">
    <div class="weather__detail">
      <b>average temperature: {{ averageTemperature }} &deg;C</b>
      <b>highest temperature: {{ temperatureHigh }} &deg;C</b>
      <b>lowest temperature: {{ temperatureLow }} &deg;C</b>
      <b>humidity: {{ Math.floor(humidity * 100) }} %</b>
      <b>wind: {{ wind }} km/hr</b>
      <b>Summary: {{ summary }}</b>
    </div>
    <h2 class="weather__suggestion">
      <b :style="{ color: color }">
        {{ suggestion }}
      </b>
    </h2>
  </div>
</template>
<script>

export default {
  name: 'Weather',
  props: {
    averageTemperature: {
      type: Number,
      default: null
    },
    temperatureHigh: {
      type: Number,
      default: null
    },
    temperatureLow: {
      type: Number,
      default: null
    },
    humidity: {
      type: Number,
      default: null
    },
    wind: {
      type: Number,
      default: null
    },
    isWeatherGood: {
      type: Boolean,
      default: true
    },
    summary: {
      type: String,
      default: ''
    }
  },
  computed: {
    color () {
      return this.isWeatherGood
        ? '#ee7600' : '#0004ee'
    },
    suggestion () {
      return this.isWeatherGood
        ? 'Why not do some laundry?' : 'Just find another day for laundry...'
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
