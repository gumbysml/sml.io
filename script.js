const videoLinks = [
  "https://www.youtube.com/watch?v=lKqoN2sskK4",
  "https://www.youtube.com/watch?v=_D2GzIV3YvQ",
  "https://www.youtube.com/watch?v=5H1SVzcBTk4",
  "https://www.youtube.com/watch?v=YjHcwx5Ix-Y",
  "https://www.youtube.com/watch?v=JxOXw7Bkb_I",
  "https://www.youtube.com/watch?v=8_H4t3A8cyY",
  "https://www.youtube.com/watch?v=KCxjYfYpjQo",
  "https://www.youtube.com/watch?v=4fThXHu7uG0",
  "https://www.youtube.com/watch?v=SzsNXJuNreo",
  "https://www.youtube.com/watch?v=0MjdVCqohrI",
  "https://www.youtube.com/watch?v=Og9cAoYnE2c",
  "https://www.youtube.com/watch?v=_D2GzIV3YvQ",
  "https://www.youtube.com/watch?v=1ycRS3XrOtk",
  "https://www.youtube.com/watch?v=4fThXHu7uG0",
  "https://www.youtube.com/watch?v=xHMX6NIPZ9I",
  "https://www.youtube.com/watch?v=3EziKhGt4GE",
  "https://www.youtube.com/watch?v=8TCt48cMLyA"
];

const videoListDiv = document.getElementById("videoList");
const player = document.getElementById("videoPlayer");

// Extract video ID and create UI
videoLinks.forEach(link => {
  const videoId = new URL(link).searchParams.get("v");
  const title = `Video ID: ${videoId}`;
  
  const item = document.createElement("div");
  item.className = "video-item";
  item.textContent = title;
  item.onclick = () => {
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  videoListDiv.appendChild(item);
});

// Auto-load the first video
if (videoLinks.length > 0) {
  const firstId = new URL(videoLinks[0]).searchParams.get("v");
  player.src = `https://www.youtube.com/embed/${firstId}`;
}
