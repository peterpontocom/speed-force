const usernameResult = document.getElementById("username-result"),
  userid = document.querySelector(".userid"),
  username = document.getElementById("username"),
  usernameForm = document.getElementById("username-form"),
  avatarImg = document.querySelectorAll(".avatar > img"),
  profilePhoto = document.querySelector(".profile-photo > img"),
  sendBtn = document.querySelector('button[type="button"]')

/* Nome do usuario em realtime */
function realtimename() {
  username != 0
    ? (usernameResult.textContent = username.value)
    : alert("Please enter a username")
}
/* ----------------------------- */

/* id Aleatório */
function randomusername(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
userid.textContent = randomusername(0, 900)

/* ------------------------------------ */

username.addEventListener("input", realtimename)

/*--------------*/

/* FOTO DO USUÁRIO */

avatarImg.forEach((img) => {
  img.addEventListener("click", () => {
    profilePhoto.src = img.src
  })
})

/* ENVIO DO FORMULÁRIO */

usernameForm.addEventListener("submit", (e) => {
  e.preventDefault()
  send()
})
sendBtn.addEventListener("click", send)

function send() {
  if (usernameResult.textContent != 0) {
    localStorage.setItem("session", true)
    localStorage.setItem("username", usernameResult.textContent)
    localStorage.setItem("profilePhoto", profilePhoto.src)
    window.location = "src/pages/playmode/index.html"
  } else {
    alert("Please enter a username")
  }
}
