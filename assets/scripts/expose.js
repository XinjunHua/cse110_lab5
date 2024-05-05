// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // change the image and audio source based on the horn selected
  const hornSelect = document.getElementById('horn-select');
  const imageElement = document.querySelector('img');
  const audioElement = document.querySelector('audio');

  const volumeInput = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();
  
  hornSelect.addEventListener("change", changeHorn);
  
  // Update image and audio file upon list selection
  function changeHorn() {
    const selectedHorn = hornSelect.value;
    const imagePath = `assets/images/${selectedHorn}.svg`;
    const audioPath = `assets/audio/${selectedHorn}.mp3`;

    // Update image and audio source
    imageElement.src = imagePath;
    audioElement.src = audioPath;
  }

  volumeInput.addEventListener("change", changeVolume); 

  // Update volume upon slider selection
  function changeVolume() {
    const volume = volumeInput.value;

    const volumeLevels = [
      { level: 0, icon: 'volume-level-0.svg' },
      { level: 1, icon: 'volume-level-1.svg' },
      { level: 2, icon: 'volume-level-2.svg' },
      { level: 3, icon: 'volume-level-3.svg' }
    ];
    
    let volumeIconIndex = 0;
    if (volume >= 67) {
      volumeIconIndex = 3;
    } else if (volume >= 33) {
      volumeIconIndex = 2;
    } else if (volume >= 1) {
      volumeIconIndex = 1;
    }
    volumeIcon.src = `assets/icons/${volumeLevels[volumeIconIndex].icon}`;
    
    // Set volume for audio element
    audioElement.volume = volume / 100;

  }

  playButton.addEventListener("click", playAudio);
  
  // Play updated audio file upon button click
  function playAudio(){
    audioElement.play();

    if (hornSelect.value === "party-horn" ){
      jsConfetti.addConfetti();
    }
  }

}
