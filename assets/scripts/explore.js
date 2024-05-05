// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let speechSynthesis = window.speechSynthesis;

  // Load available voices on page load
  window.addEventListener('load', loadVoices);

  // Function to load available voices
  function loadVoices() {
    const voices = speechSynthesis.getVoices();

    // Clear previous options
    voiceSelect.innerHTML = '';

    // Populate voice options
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  // Event listener for button click to speak
  speakButton.addEventListener('click', function() {
    // Get the selected voice
    const selectedVoice = voiceSelect.value;

    // Check if text is provided
    if (!textToSpeak.value) {
      alert('Please enter some text to speak.');
      return;
    }

    // Get the speech utterance
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);

    // Find the selected voice
    const voices = speechSynthesis.getVoices();
    const selectedVoiceObj = voices.find(voice => voice.name === selectedVoice);

    if (selectedVoiceObj) {
      utterance.voice = selectedVoiceObj;
    } else {
      console.error('Selected voice not found.');
    }

    // Event listener for speech end
    utterance.onend = function() {
      // Change face image to closed mouth when speech ends
      faceImage.src = 'assets/images/smiling.png';
    };

    // Change face image to open mouth
    faceImage.src = 'assets/images/smiling-open.png';

    // Speak the text
    speechSynthesis.speak(utterance);
  });
}


