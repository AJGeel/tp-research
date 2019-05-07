// Initialize quote audio
const q_01 = document.getElementById('q_01'),
      q_02 = document.getElementById('q_02'),
      q_01_audio = document.getElementById("q_01_audio"),
      q_02_audio = document.getElementById("q_02_audio");


q_01.addEventListener("click", function(){
  toggleAudio(q_01_audio);
});

q_02.addEventListener("click", function(){
  toggleAudio(q_02_audio);
});

function toggleAudio(target){
  // Function to toggle playback of a HTML5 audio element.

  // Checks if the targeted audio is not currently playing. (.paused = true; .currentTime is more/equal 0 and .ended is false)
  if (target.paused && target.currentTime >= 0 && !target.ended) {
    target.play();
    console.log(`${this} Should start playing.`)
  } else {
    // If the targeted audio is already playing, clicking it should pause the playback.
    target.pause();
    console.log("Should pause.")
  }
}

// BasicLightBox API to create full-screen popups of stakeholder interviews.
document.querySelector('img.profile-picture').onclick = () => {
    basicLightbox.create(`
    <video controls data-id="2">
        <source src="i/interview-placeholder.mp4" type="video/mp4">
    </video>
    `).show()
}


document.addEventListener("keypress", function(event) {
// console.log('$DEBUG: KeyPressed = ' + event.keyCode);
if (event.keyCode == 65 || event.keyCode == 97) {
  console.log("$DEBUG — Going to previous page");
  window.open("briefing.html", target="_self");
} else if (event.keyCode == 83 || event.keyCode == 115) {
  console.log("$DEBUG — Going to next page");
  window.open("briefing.html", target="_self");
}
});
