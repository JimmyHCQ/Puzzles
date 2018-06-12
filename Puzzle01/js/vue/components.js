Vue.component('vpuzzle1', {
  template:`
  <div class="vue">
    <div class="containerPuzzle">
      <div id="divBox"></div>
      <div class="pannelLetter">
       <div id="divButton"></div>
      </div>
    </div>
  </div>`
});

var vuePUZZLE = new Vue({
  el: '#puzzle'
});
