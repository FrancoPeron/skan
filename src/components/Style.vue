<template>
  <div class="hello">

    <div class="flex-row-wrap">
      <div class="scale-brand1 bg-scolor1-50 shadow-sm m-16 br-8"></div>
      <div class="scale-brand1 bg-scolor1-100 shadow-sm m-16 br-8"></div>
      <div class="scale-brand1 bg-scolor1-200 shadow-sm m-16 br-8"></div>
      <div class="scale-brand1 bg-scolor1-300 shadow-sm m-16 br-8"></div>
      <div class="scale-brand1 bg-scolor1-400 shadow-sm m-16 br-8"></div>
      <div class="scale-brand1 bg-scolor1-500 shadow-sm m-16 br-8"></div>
      <div class="scale-brand1 bg-scolor1-600 shadow-sm m-16 br-8"></div>
      <div class="scale-brand1 bg-scolor1-700 shadow-sm m-16 br-8"></div>
      <div class="scale-brand1 bg-scolor1-800 shadow-sm m-16 br-8"></div>
      <div class="scale-brand1 bg-scolor1-900 shadow-sm m-16 br-8"></div>
    </div>

    <div class="">
      <p class="f-big">hola</p>
      <p class="f-h1">f-h1</p>
      <p class="f-h2">f-h2</p>
      <p class="f-h3">f-h3</p>
      <p class="f-h4">f-h4</p>
      <p class="f-h5">f-h5</p>
      <p class="f-h6">f-h6</p>
      <p class="f-t">f-t</p>
      <p class="f-st1">f-st1</p>
      <p class="f-st2">f-st2</p>
      <p class="f-b1">f-b1</p>
      <p class="f-b2">f-b2</p>
      <p class="f-c">f-c</p>
      <p class="f-o">f-o</p>

    </div>

   <!--  <ul>
      <li v-for="user in users" :key="user.id" >
        <img :src="user.avatar" width="200" height="200"><br>
        Name: {{ user.name }}<br>
        Username: {{ user.username }}
      </li>
    </ul> -->
    
  </div>
</template>

<script>

export default {
  name: 'Componentes',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.scale-brand1{
  height: 100px;
  width: 100px;
}

</style>
