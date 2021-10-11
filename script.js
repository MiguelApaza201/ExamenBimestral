let clap_btn = document.getElementById("clap-btn");
let hihat_btn = document.getElementById("hihat-btn");
let kick_btn = document.getElementById("kick-btn");
let openhat_btn = document.getElementById("openhat-btn");
let boom_btn = document.getElementById("boom-btn");
let ride_btn = document.getElementById("ride-btn");
let snare_btn = document.getElementById("snare-btn");
let tom_btn = document.getElementById("tom-btn");
let tink_btn = document.getElementById("tink-btn");

let clap_song = document.getElementById("clap-song");
let hihat_song = document.getElementById("hihat-song");
let kick_song = document.getElementById("kick-song");
let openhat_song = document.getElementById("openhat-song");
let boom_song = document.getElementById("boom-song");
let ride_song = document.getElementById("ride-song");
let snare_song = document.getElementById("snare-song");
let tom_song = document.getElementById("tom-song");
let tink_song = document.getElementById("tink-song");

  clap_btn.addEventListener("click", () =>{
    clap_song.play();
  })
  hihat_btn.addEventListener("click", () =>{
    hihat_song.play();
  })
  kick_btn.addEventListener("click", () =>{
    kick_song.play();
  })
  openhat_btn.addEventListener("click", () =>{
    openhat_song.play();
  })
  boom_btn.addEventListener("click", () =>{
    boom_song.play();
  })
  ride_btn.addEventListener("click", () =>{
    ride_song.play();
  })
  snare_btn.addEventListener("click", () =>{
    snare_song.play();
  })
  tom_btn.addEventListener("click", () =>{
    tom_song.play();
  })
  tink_btn.addEventListener("click", () =>{
    tink_song.play();
  })

