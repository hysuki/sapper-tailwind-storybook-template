<button
        class="button {roundedClass} bg-orange-400"
        on:click={onClick()}>
  <strong>{rounded ? 'Round' : 'Square'} corners</strong><br>
  {text}
  <slot></slot>
</button>

<style>
  .rounded {
    border-radius: 35px;
  }
  .button {
    border: 3px solid;
    padding: 10px 20px;
    outline: none;
  }
</style>

<script>
  export let roundedClass = false
  export let rounded = false
  export let text = 'text'

  const onClick = (e) => {
    console.log(e)
  }
</script>
