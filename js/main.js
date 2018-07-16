


Vue.component('vue-maps', {
    props: ['lat', 'long','zoom'],
    template: `
      <div>
        
        <h2>{{ zoom }}</h2>  
        <h2>{{ long }}</h2>  
        <h2>{{ lat }}</h2>  
      </div>
    `,
  })








var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!okokok'
    }



  })