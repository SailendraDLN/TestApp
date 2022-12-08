<script>
  import { supabase } from "../../supabase.js";

  let pushups;
  let pullups;
  let newdata;

  async function sendData(){
    const { data, error } = await supabase
    .from('exercise_master')
    .insert([
      { pushup_count: pushups, pullup_count: pullups },
    ])

    console.log(data)
  }

  async function getData(){
    const { data, error } = await supabase
    .from('exercise_master')
    .select('*')
    if(data){
      newdata = data
    }
    console.log(data)
  }


</script>
<style>
  .input-bar {
    width: 100px;
    display: "block";
    margin: 10px;
    padding: 10px;
  }

  .button {
    width : 150px;
    margin: 10px;
    padding: 10px;
    background-color: #FF1744;
    color: #FFEBEE;
    font-size: 18px;
    border: 2px solid black;
    border-radius: 10px;
  }

  .nav-link {
    margin: 10px;
    padding: 10px;
  }

  .box {
    width: 300px;
    height: 100px;
    background-color: rgb(88, 180, 240);
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
  }
</style>
<nav style="display : flex">
  <a class="nav-link" href={'/'}>Home</a>
  <a class="nav-link" href={'/api/add'}>Names</a>
  <a class="nav-link" href={'/about'}>About</a>
</nav>

<h1>Enter your exercise data</h1>
<input type="number" bind:value={pushups} placeholder="pushpa" class="input-bar">
<input type="number" bind:value={pullups} placeholder="the rise" class="input-bar">

<button on:click={sendData} class="button">Push data to server</button>
<button on:click={getData} class="button">Pull latest data</button>

{#if newdata}
  {#each newdata as item}
    <div class="box">
      <pre>pushups : {item.pushup_count}</pre>
      <pre>pushups : {item.pullup_count}</pre>
      <br />
      <pre>Power Level = {(item.pushup_count * item.pullup_count).toString()}</pre>
    </div>
  {/each}
{/if}