  const sound = document.getElementById("clickSound");

  function playSoundOnce() {
    sound.currentTime = 0; 
    sound.play();
  }

  document.querySelectorAll("a, button, summary")
    .forEach(el => {
      el.addEventListener("click", playSoundOnce);
    });

      const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.addEventListener("volumechange", () => {
      videos.forEach(v => {
        if (v !== video) {
          v.volume = video.volume;
          v.muted = video.muted;
        }
      });
    });
  });