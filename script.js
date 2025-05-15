let playing = false;
let video;
let button;

document.addEventListener("DOMContentLoaded", () => {
  video = document.createElement("video");
  video.src = "./videos/prod_av.mp4";
  video.type = "video/mp4";
  video.style.width = "100%";
  video.style.maxWidth = "800px";
  video.style.display = "block";
  video.setAttribute("controls", "");
  document.getElementById("video-container").appendChild(video);


  button = document.getElementById("video-button");
  button.addEventListener("click", toggleVid);
});

function toggleVid() {
  if (playing) {
    video.pause();
    button.innerText = "Reproducir";
  } else {
    video.play();
    button.innerText = "Detener";
  }
  playing = !playing;
}