<script>
  import Layout from '$components/Layout.svelte'
  import Audio, { play } from '$components/Audio.svelte'
  import { onMount } from 'svelte';

  let ws;

  onMount(() => {
    ws = new WebSocket("ws://localhost:5000")
    ws.onmessage = (msg) => {
      try {
        console.log({ msg })
        const { data } = msg;
        const { action, id } = JSON.parse(data); 
        if (action === 'play') {
          play(id);
        }
      } catch (err) {
        console.error(err)
      }
    }
    ws.onopen = () => {
      ws.send("test")
    }
  });

  const send = (msg) => ws && ws.send(JSON.stringify(msg));
</script>

<Layout>
  <p>Here's all your sounds</p>

  <section>
    <Audio src="/boat_horn.mp3" name="Boat Horn" id="boat" {send} />
    <Audio src="/boing.mp3" name="Boing" id="boing" {send} />
    <Audio src="/cardiogram.mp3" name="Cardiogram" id="cardio" {send} />
  </section>
</Layout>

<style>
  section {
    background-color: var(--dark-colour);
    border-radius: 5px;
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
  }
</style>