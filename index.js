
function slideListPlugin (activeSlide) {
  const slideList =  document.querySelectorAll('.slide');
console.log(slideList);

slideList[activeSlide].classList.add('active')

slideList.forEach(slide => {
 slide.addEventListener('click', () => {
  cleanActiveClass ()

  slide.classList.add('active');
 })
}) 

function cleanActiveClass () {
  slideList.forEach(slide =>{
    slide.classList.remove('active')
  })
}
}

slideListPlugin(1)