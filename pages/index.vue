<template>
  <section class="section">
    <Chart />
    <br>
    <Chart2 />
    <br>
  </section>
</template>

<script>
import Card from '~/components/Card';
import Chart from '~/components/Chart.vue';
import Chart2 from '~/components/Chart2.vue';
import MapChart from '~/components/MapChart.vue';

export default {
  name: 'HomePage',

  components: {
    Card,
    Chart,
    Chart2,
    MapChart
  }
}
</script>
