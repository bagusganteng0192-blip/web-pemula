  const sound = document.getElementById("clickSound");

  function playSoundOnce() {
    sound.currentTime = 0; 
    sound.play();
  }

  document.querySelectorAll("a, button, summary")
    .forEach(el => {
      el.addEventListener("click", playSoundOnce);
    });