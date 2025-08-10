const clubs = {
  drama: {
    name: "Drama Club",
    announcements: ["Auditions on Friday", "Rehearsal moved to Room 101"],
    members: ["Alice", "Bob", "Charlie"],
    events: ["Shakespeare Night - Sept 1", "Improv Workshop - Sept 10"],
    media: ["img/drama1.jpg", "img/drama2.jpg"]
  },
  science: {
    name: "Science Club",
    announcements: ["Lab cleanup day on Aug 15"],
    members: ["Dana", "Eli", "Fiona"],
    events: ["Rocket Launch - Sept 3", "Chemistry Fair - Sept 12"],
    media: ["img/science1.jpg", "img/science2.jpg"]
  }
};

function getClubFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("club");
}

function renderClubPage() {
  const clubKey = getClubFromURL();
  const club = clubs[clubKey];

  if (!club) {
    document.getElementById("club-container").innerHTML = "<p>Club not found.</p>";
    return;
  }

  document.getElementById("club-name").innerText = club.name;

  const createList = (items, elementId) => {
    const list = document.getElementById(elementId);
    items.forEach(item => {
      const li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });
  };

  createList(club.announcements, "announcement-list");
  createList(club.members, "member-list");
  createList(club.events, "event-list");

  const gallery = document.getElementById("media-gallery");
  club.media.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });
}
