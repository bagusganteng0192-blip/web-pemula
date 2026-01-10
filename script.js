    const bgm = document.getElementById('bgm');
const muteButton = document.querySelector('.mute');

function toggleMusic() {
    if (bgm.paused) {
        bgm.play();
        muteButton.textContent = '🔊 Mute Music';
    } else {
        bgm.pause();
        muteButton.textContent = '▶ Play Music';
    }
}

function setVolume(value) {
    bgm.volume = value / 200;
}