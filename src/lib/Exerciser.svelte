<script>
import { supabase } from '../supabase.js';
import { onDestroy } from 'svelte';
import dayjs  from 'dayjs';
	import { object_without_properties } from 'svelte/internal';

async function submitData(){
  const { data, error} = await supabase.from('tester').insert([
        { counter: count }
      ])
  // let { data, error } = await supabase
  // .from('tester')
  // .select('created_at')
  console.log(data)
}

async function updateCounts(params){
  const { data, error } = await supabase
  .from('exercises')
  .update({...params})
  .eq('name', 'Beerus')
  count = 0;
}

onDestroy(() => {

  console.log('the component is being destroyed and update function will be called');

});

let count = 0;

export let type;
</script>
<style>
  .buttons-bar {
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .button-primary {
    width: 18%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #FF1744;
    cursor: pointer;
    color: aliceblue;
  }
  .button-secondary {
    width: 22%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #D32F2F;
    cursor: pointer;
    color: white;
  }
  .counter {
    width: 20%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: monospace;
    font-weight: 600;
    font-size: 20px;
  }
  .button:hover {
    color: black;
  }
  /* .container {
    border: 2px solid black;
  } */
  .svg {
    margin-bottom: -12%;
    margin-right: -11%;
  }

  .header {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2rem;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    background-color: black;
    color: azure;
    border-radius: 20px 20px 0 0;
  }
  .footer {
    margin-top: -2px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.5rem;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    background-color: black;
    color: azure;
    cursor: pointer;
    border-radius: 0px 0px 20px 20px;
  }
  .footer:hover {
    background-color: white;
    color: black;
  }
</style>
<div class="container">
  <div class="header">
    {type == "pushups" ? 'Push-Ups' : 'Pull-Ups'}
  </div>
  <div>
    {#if type==="pushups"}
    <svg class="svg" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" ><path d="M61.81 54.085C54.261 52.136 45.912 54.092 40 60h-3.333l5-30 3.34-1.667a15.361 15.361 0 0 0 8.333 8.333A30.676 30.676 0 0 0 70 20c-7.36-7.36-17.012-10-26.667-10C26.27 27.067 10 50.638 10 76.667c14.702 14.703 36.947 17.207 54.258 7.591L70 90h9.427L65.176 75.749c-6.628 4.896-14.59 7.584-22.988 7.584-9.452 0-18.387-3.353-25.451-9.492.83-16.598 8.833-31.842 18.237-44.225l-6.177 37.051H42.76l1.953-1.95A16.053 16.053 0 0 1 56.1 60.01a16.05 16.05 0 0 1 11.383 4.707L72.197 60a22.824 22.824 0 0 0-3.916-3.118c4.893-4.88 12.399-6.67 19.17-3.867L90 54.069v-7.217c-10.205-4.219-21.602-.955-28.19 7.233zm-.215-32.425a23.82 23.82 0 0 1-7.988 7.461 8.625 8.625 0 0 1-2.441-3.34l-3.671-8.864c5.447.534 10.193 2.087 14.1 4.743z"/></svg>
    {:else if type==="pullups"}
    <svg class="svg" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" xml:space="preserve"><path d="M80 20 66.667 10c-7.81 0-14.883 3.822-20 10a24.555 24.555 0 0 0 13.336 13.333L70 26.667c-3.841 9.247-5 19.383-5 30h-1.667A43.562 43.562 0 0 0 50 53.486V50H30v2.142c-5.89-4.316-13.066-6.048-20-5.237v6.709a21.807 21.807 0 0 1 3.333-.28c5.774 0 11.203 2.25 15.285 6.335L30 61.048V80H10v6.667h20V90h20v-6.667c15.618 0 29.763-3.821 40-10L80 20zm-13.698 1.12-6.725 4.486a17.763 17.763 0 0 1-4.691-4.463c2.92-2.435 6.247-3.927 9.724-4.351l3.851 2.887-2.159 1.441zM43.333 83.333h-6.667V56.667h6.667v26.666zM50 60.156a36.984 36.984 0 0 1 10.781 2.669l1.224.508h9.662v-6.666c0-10.289 1.172-18.417 3.675-25.34l7.214 38.471c-9.111 4.45-20.482 6.869-32.556 6.869V60.156z"/></svg>
    {/if}
  </div>
  <div class="buttons-bar">
    <div class="button button-primary" style="border-radius: 20px 0px 0px 0px;" on:click={() => count-=5}>--</div>
    <div class="button button-secondary" on:click={() => count-=1}>-</div>
    <div class="counter">{count}</div>
    <div class="button button-secondary" on:click={() => count+=1}>+</div>
    <div class="button button-primary" style="border-radius: 0px 20px 0px 0px;" on:click={() => count+=5}>++</div>
  </div>
  <div class="footer" on:click={() => {
    const paramsObj = {}
    paramsObj[`${type}`] = count
    console.log(paramsObj)
    return (
      updateCounts(paramsObj)
    )
  }}>
    Submit
  </div>
</div>

