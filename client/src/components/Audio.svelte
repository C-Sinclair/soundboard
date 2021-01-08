<script context="module">
  const elements = new Set();

  export const play = id => {
    Array.from(elements.values()).map((item) => {
      if (item.id === id) {
        item.audio.play();
      }
    })
  }
</script>

<script>
  import { onMount } from "svelte";

  export let src;
  export let name;
  export let id;
  export let send;

  let audio;
  let paused = true;

  const playThis = () => {
    send({ action: 'play', id });
    audio.play();
  }

  const pause = () => {
    audio.pause();
    audio.currentTime = 0;
  }

  onMount(() => {
    const item = { id, audio }
    elements.add(item);
    return () => elements.delete(item);
  })
</script>

<article class:playing={!paused} on:mousedown={playThis} on:mouseup={pause}>
  <h2>{name}</h2>
  <audio 
    bind:this={audio}
    bind:paused
    {src}
  >
    <track kind="captions" />
  </audio>
</article>

<style>
  article {
    background-color: rgb(43, 21, 70);
    width: 100px;
    height: 100px;
    transition: all 0.1s;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px;
    margin: 10px;
    font-size: 10px;
  }
  audio { 
    width: 100%; 
    margin: 0.5em 0 1em 0; 
  }
  .playing {
    background-color: green; 
    transform: scale(1.05);
  }

</style>