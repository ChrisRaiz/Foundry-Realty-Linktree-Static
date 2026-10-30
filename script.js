// Opens YouTube videos in a popup. Any button with a data-video-id attribute
// gets this behavior. Add data-video-vertical for Shorts.

const closeVideo = (modal, opener) => {
  modal.remove();
  opener.focus();
};

const openVideo = (opener) => {
  const { videoId, videoVertical } = opener.dataset;

  const modal = document.createElement("div");
  modal.className = "modal-overlay";

  const closeButton = document.createElement("button");
  closeButton.className = "close-button";
  closeButton.setAttribute("aria-label", "Close video");
  closeButton.textContent = "×";

  const frame = document.createElement("iframe");
  frame.className = videoVertical === undefined ? "video" : "video-vertical";
  frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
  frame.title = "YouTube video player";
  frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
  frame.referrerPolicy = "strict-origin-when-cross-origin";

  const content = document.createElement("div");
  content.className = "modal-content";
  content.append(frame);
  modal.append(closeButton, content);

  const close = () => {
    document.removeEventListener("keydown", closeOnEscape);
    closeVideo(modal, opener);
  };
  const closeOnEscape = (event) => {
    if (event.key === "Escape") close();
  };

  closeButton.addEventListener("click", close);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  document.addEventListener("keydown", closeOnEscape);

  document.body.append(modal);
  closeButton.focus();
};

document.querySelectorAll("[data-video-id]").forEach((button) => {
  button.addEventListener("click", () => openVideo(button));
});
