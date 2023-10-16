const profilePhoto = document.querySelector(".profile-photo > img"),
  username = document.querySelector(".username")

localStorage.getItem("username")
  ? (username.textContent = localStorage.getItem("username"))
  : (username.textContent = "User" + randomId(0, 900))

function randomId(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
localStorage.getItem("profilePhoto")
  ? (profilePhoto.src = localStorage.getItem("profilePhoto"))
  : (profilePhoto.src =
      "../../assets/profile-icon/cyber/cyber-character-5.jfif")
