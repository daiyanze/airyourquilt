<template>
  <div class="main">
    <h2>
      Pick a good day for laundry
    </h2>
    <div class="main__content box">
      <div class="main__status box">
        <DateLocation
          :curDate="curDate"
          :timezone="timezone"
        />
        <Weather
          :averageTemperature="averageTemperature"
          :temperatureHigh="temperatureHigh"
          :temperatureLow="temperatureLow"
          :humidity="humidity"
          :wind="10"
          :summary="summary"
          :isWeatherGood="isWeatherGood"
        />
        <add-to-calendar
          title="This is your laundry day!"
          :start="start"
          :end="end"
          inline-template
          >
          <div>
            <google-calendar id="google-calendar">
              Add to Google calendar &#8594;
            </google-calendar>
          </div>
        </add-to-calendar>
      </div>
      <vue-calendar
        @day-changed="handleDayChanged"
      />
    </div>
  </div>
</template>
<script>
import DateLocation from '../DateLocation'
import Weather from '../Weather'
import moment from 'moment'

const api = 'https://airyourquilt-server.herokuapp.com/weather'

const today = moment().format('MMM Do YYYY')

export default {
  name: 'Main',
  components: {
    DateLocation,
    Weather
  },
  data () {
    return {
      start: new Date(),
      end: new Date((new Date()).setDate((new Date()).getDate() + 1)),
      timezone: '',
      humidity: null,
      averageTemperature: null,
      temperatureLow: null,
      temperatureHigh: null,
      windSpeed: null,
      isWeatherGood: true,
      summary: '',
      curDate: today,
      coordinates: {
        lat: 35.68,
        lng: 139.76
      }
    }
  },
  async created () {
    this.$getLocation().then(coordinates => {
      this.coordinates = coordinates
      console.log(coordinates)
    })
    this.getWeatherData()
  },
  methods: {
    handleDayChanged (data) {
      if (this.curDate !== data.date) {
        this.curDate = this.formatDate(data.date)
        this.start = new Date(this.curDate)
        this.end = new Date(this.start.setDate(this.start.getDate() + 1))
        this.getWeatherData(this.curDate)
      }
    },
    formatDate (dt, format = 'YYYY/MM/DD') {
      return moment(dt, 'YYYY/MM/DD').format('MMM Do YYYY')
    },
    formatDateToUnix (dt, format = 'YYYY/MM/DD') {
      return moment(dt, format).unix()
    },
    checkWeather (icon) {
      return !(icon.includes('rain') ||
          icon.includes('wind') ||
          icon.includes('hot'))
    },
    getWeatherData (date = today) {
      this.$http.get(`${api}?latitude=${this.coordinates.lat}&longitude=${this.coordinates.lng}&time=${this.formatDateToUnix(date, 'MMM Do YYYY')}`, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(res => {
          this.timezone = res.data.timezone
          this.humidity = res.data.humidity
          this.temperatureLow = res.data.temperatureLow
          this.temperatureHigh = res.data.temperatureHigh
          this.windSpeed = res.data.windSpeed
          this.averageTemperature = res.data.average_temperature
          this.summary = res.data.summary
          this.isWeatherGood = this.checkWeather(res.data.icon)
        })
    }
  }
}
</script>
<style scoped>
.main__content {
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}

.main__status {
  flex-direction: column;
  align-items: center;
}
</style>
