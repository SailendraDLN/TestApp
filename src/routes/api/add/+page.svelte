<script>
  let firstName = "";
  let lastName = "";
  let name = "";
  let age = 0;
  async function add() {
    const response = await fetch('/api/add', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName }),
      headers: {
        'content-type': 'application/json'
      }
    });
    name = await response.json();
  }

  async function consoler() {
    const response = await fetch('/api/add?' + new URLSearchParams({
      name,
      age
    }), {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });
    let data = await response.json();
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
</style>

<input type="text" bind:value={firstName} placeholder="enter firstname" class="input-bar">
<input type="text" bind:value={lastName} placeholder="enter lastname" class="input-bar">


<button on:click={add} class={'button'}>FULL NAME</button>

{ #if name !== ""}
  <h3>{name}</h3>
{ /if }

<hr />
<input type="text" placeholder="enter name" bind:value={name} >
<input type="number" placeholder="choose age" bind:value={age}>
<button on:click={consoler}>print message</button>