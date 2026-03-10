let audio = document.getElementById("audio");
let playlist = document.querySelectorAll("#playlist li");

let currentSong = 0;

function loadSong(index)
{
audio.src = playlist[index].getAttribute("data-src");
}

playlist.forEach((song,index) =>
{
song.addEventListener("click", function()
{
currentSong = index;
loadSong(currentSong);
audio.play();
});
});

function playPause()
{
if(audio.paused)
{
audio.play();
}
else
{
audio.pause();
}
}

function nextSong()
{
currentSong++;

if(currentSong >= playlist.length)
{
currentSong = 0;
}

loadSong(currentSong);
audio.play();
}

function prevSong()
{
currentSong--;

if(currentSong < 0)
{
currentSong = playlist.length - 1;
}

loadSong(currentSong);
audio.play();
}

function changeVolume(value)
{
audio.volume = value;
}