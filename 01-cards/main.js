const slidesPlugin = (activeSlide = 0) => {
  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')

  const clearAllActiveClasses = () => {
    slides.forEach(slide => {
      slide.classList.remove('active')
    })
  }

  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      clearAllActiveClasses()
      slide.classList.add('active')
    })
  })
}

const getRandomInt = (max = 4) => Math.floor(Math.random() * max)

slidesPlugin(getRandomInt())