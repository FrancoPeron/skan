<template>
  <div id="app" class="bg-g1">
    <div class="container header flex-row-wrap p-12 mb-16 shadow">
      
      <router-link class="btn-5" to="/">Style</router-link>
      <router-link class="btn-5" to="/componentes">Componentes</router-link>
      
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function(){
    console.log('montado');

    const el = document.documentElement;

    let cbrand = getComputedStyle(el).getPropertyValue("--cBrand1");
    cbrand = cbrand.substring(1,8);

    var color_scale = chroma.scale(['white',cbrand,'black']).colors(13);

    el.style.setProperty('--cBrand1-50', color_scale[1]);
    el.style.setProperty('--cBrand1-100', color_scale[2]);
    el.style.setProperty('--cBrand1-200', color_scale[3]);
    el.style.setProperty('--cBrand1-300', color_scale[4]);
    el.style.setProperty('--cBrand1-400', color_scale[5]);
    el.style.setProperty('--cBrand1-500', color_scale[6]);
    el.style.setProperty('--cBrand1-600', color_scale[7]);
    el.style.setProperty('--cBrand1-700', color_scale[8]);
    el.style.setProperty('--cBrand1-800', color_scale[9]);
    el.style.setProperty('--cBrand1-900', color_scale[10]);
   
  },
}
</script>

<style>


    .header {
        height: 62px;
    }

    #app a.router-link-exact-active {
        color: var(--cBrand1);
    }


</style>
