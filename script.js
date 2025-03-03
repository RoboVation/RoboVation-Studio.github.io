const videoList = document.getElementById("video-list");

videos.forEach(video => {
  const videoItem = document.createElement("div");
  videoItem.classList.add("video-item");

  // Create buttons for each link
  const buttonsHTML = video.links
    ? video.links
        .map(
          link => `
        <a href="${link.url}" class="explore-button" target="_blank">
          <button>${link.text}</button>
        </a>
      `
        )
        .join("")
    : "";

  videoItem.innerHTML = `
    <div class="text-content">
      <h3>${video.title}</h3>
      <p>${video.description}</p>
      ${buttonsHTML}
    </div>
    <div class="video-wrapper">
      <iframe width="500" height="315" src="https://www.youtube.com/embed/${video.youtubeId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `;
  videoList.appendChild(videoItem);
});
document.querySelectorAll('button').forEach(button => {
  const textLength = button.textContent.length;
  button.style.minWidth = `${textLength * 10}px`; // Adjust multiplier as needed
});
