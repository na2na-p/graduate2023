<template>
<div class="sample_box">
    <my-button size="large" type="success" @myclick="click">Click Me！😌</my-button>
    <br>
    <br>
    <p>クリック数が表示されます</p>
    <p>カウント: {{count}}</p>
</div>
</template>

<script>
import MyButton from "./MyButton.vue";
export default {
  name: "App",
  components: {
    MyButton
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    click() {
      this.count++;
    }
  }
};
</script>

<style>
.sample_box {
    padding: 1em 1.5em;
    margin: 2em 0;
    background-color:#f4f9ff;/*背景色*/
    border:1px solid #84c1ff;/*枠線*/
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);/*影*/
    color:#000000;/*文字色*/
}
.sample_box p {
    margin: 0; 
    padding: 0.5em;
    font-size: 1.1em;
    font-family: 'Trebuchet MS','Hannotate SC','Chalkduster',sans-serif;
}
</style>