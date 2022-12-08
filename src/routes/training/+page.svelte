<script lang="ts">
	import Exerciser from "../../lib/Exerciser.svelte";

  interface ExerciseObj {
    pushups: number;
    pullups: number;
    squats: number;
    shoulder_crunches: number;
  }

  let sampleObj:ExerciseObj = {
	  pushups: 6,
	  pullups: 7,
	  squats: 9,
	  shoulder_crunches: 10
  }

</script>
<style>
  .container {
    display: flex;
  }
  .box {
    width: 400px;
  }
</style>

<div class="container">
  <div class="box">
    <Exerciser type="pushups"/>
  </div>
  <div class="box">
    <Exerciser type="pullups"/>
  </div>
</div>