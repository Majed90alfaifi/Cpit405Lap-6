const initLikes = 100;
const initDislikes = 20;

let upCount = initLikes;
let downCount = initDislikes;

let likeBtn = document.getElementById("likeBtn");
let dislikeBtn = document.getElementById("dislikeBtn");
likeBtn.innerText = "👍" + initLikes;
dislikeBtn.innerText = "👎" + initDislikes;


//Check for cookies
window.onload = function() {
  if (document.cookie && document.cookie.indexOf("voted")>-1) {
    disableButtons();
  }
}

function doLike() {
  upCount++;
  likeBtn.innerText = "👍" + upCount;
  disableButtons();
  setCookie();
}

function doDislike() {
  downCount--;
  dislikeBtn.innerText = "👎" + downCount;
  disableButtons();
  setCookie();
}

function disableButtons() {
  likeBtn.disabled = true;
  dislikeBtn.disabled = true;
}

function setCookie() {
  document.cookie ="voted=true; SameSite=Strict; Max-Age=" + 60;
}