const likeBtn = document.querySelector('#like-btn');

likeBtn.addEventListener('click', () => {
  const isLiked = likeBtn.classList.toggle('liked');

  if (isLiked) {
    likeBtn.innerHTML = '<span>❤️</span> Liked';
  } else {
    likeBtn.innerHTML = '<span>🤍</span> Like';
  }
});