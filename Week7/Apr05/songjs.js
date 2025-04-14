const songs = [
  { title: "Song 1", file: "songs/s1.mp3" },
  { title: "Song 2", file: "songs/s2.mp3" },
  { title: "Song 3", file: "songs/s3.mp3" }
];

let currentIndex = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const volumeSlider = document.getElementById("volume");
const playlist = document.getElementById("playlist");

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  audio.src = song.file;
  currentIndex = index;
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audio.play();
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  audio.play();
}

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

// 🎵 Create Playlist
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.style.cursor = "pointer";
  li.onclick = () => {
    loadSong(index);
    audio.play();
  };
  playlist.appendChild(li);
});

// Load the first song
loadSong(currentIndex);
