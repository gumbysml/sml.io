const videos = [
  {
    id: "lKqoN2sskK4",
    title: "SML Movie: The Prank War"
  },
  {
    id: "_D2GzIV3YvQ",
    title: "SML Movie: Jeffy Gets a Job"
  },
  {
    id: "5H1SVzcBTk4",
    title: "SML Movie: The Pink Couch"
  },
  {
    id: "YjHcwx5Ix-Y",
    title: "SML Movie: Junior's iPad"
  },
  {
    id: "JxOXw7Bkb_I",
    title: "SML Movie: Cody's Birthday"
  },
  {
    id: "8_H4t3A8cyY",
    title: "SML Movie: Mr. Goodman's Son"
  },
  {
    id: "KCxjYfYpjQo",
    title: "SML Movie: The Baby Alien"
  },
  {
    id: "4fThXHu7uG0",
    title: "SML Movie: Scooter's Rich"
  },
  {
    id: "SzsNXJuNreo",
    title: "SML Movie: The Gun"
  },
  {
    id: "0MjdVCqohrI",
    title: "SML Movie: Jeffy's Clone"
  },
  {
    id: "Og9cAoYnE2c",
    title: "SML Movie: Jeffy's Wi-Fi Problem"
  },
  {
    id: "1ycRS3XrOtk",
    title: "SML Movie: Junior’s Trip"
  },
  {
    id: "xHMX6NIPZ9I",
    title: "SML Movie: Jeffy’s New Toy"
  },
  {
    id: "3EziKhGt4GE",
    title: "SML Movie: Cody's Remote"
  },
  {
    id: "8TCt48cMLyA",
    title: "SML Movie: Bowser Junior’s Cellphone"
  }
];

const player = document.getElementById("videoPlayer");
const videoList = document.getElementById("videoList");

function loadVideo(id) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
}

// Load first video
if (videos.length > 0) {
  loadVideo(videos[0].id);
}

videos.forEach(video => {
  const card = document.createElement("div");
  card.className = "video-card";
  card.onclick = () => loadVideo(video.id);

  const thumbnail = document.createElement("img");
  thumbnail.src = `https://img.youtube.com/vi/${video.id}/0.jpg`;
  thumbnail.alt = video.title;

  const title = document.createElement("div");
  title.className = "video-title";
  title.textContent = video.title;

  card.appendChild(thumbnail);
  card.appendChild(title);
  videoList.appendChild(card);
});

