(async () => {
  const audioUrl = await fetch('https://cdn.assets.scratch.mit.edu/internalapi/asset/5e5e942bd134d10d446e7f8ed1a3bfbb.wav/get/').then(res => res.blob()).then(URL.createObjectURL)
  const play = () => {
    const audio = new Audio()
    audio.src = audioUrl
    audio.play()
  }
  console.log(audioUrl)
  window.addEventListener('keydown', () => {
    play()
  })
  setInterval(() => {
    for (const iframe of document.getElementsByTagName('iframe')) {
      iframe.onkeydown = () => play()
    }
  })
})()
