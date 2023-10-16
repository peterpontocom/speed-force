const background = [
  `../../assets/wallpaper/wallpaper-${randomBackground(0,24)}.jpg`
]

function randomBackground(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

document.body.style = `background-image: url(${background})`

/*  

  "../../assets/wallpaper/wallpaper-1.jpg",
  "../../assets/wallpaper/wallpaper-2.jpg",
  "../../assets/wallpaper/wallpaper-3.jpg",
  "../../assets/wallpaper/wallpaper-4.jpg",
  "../../assets/wallpaper/wallpaper-5.jpg",
  "../../assets/wallpaper/wallpaper-6.jpg",
  "../../assets/wallpaper/wallpaper-7.jpg",
  "../../assets/wallpaper/wallpaper-8.jpg",
  "../../assets/wallpaper/wallpaper-9.jpg",
  "../../assets/wallpaper/wallpaper-10.jpg",
  "../../assets/wallpaper/wallpaper-12.jpg",
  "../../assets/wallpaper/wallpaper-13.jpg",
  "../../assets/wallpaper/wallpaper-14.jpg",
  "../../assets/wallpaper/wallpaper-15.jpg",
  "../../assets/wallpaper/wallpaper-16.jpg",
  "../../assets/wallpaper/wallpaper-17.jpg",
  "../../assets/wallpaper/wallpaper-18.jpg",
  "../../assets/wallpaper/wallpaper-19.jpg",
  "../../assets/wallpaper/wallpaper-20.jpg"
*/