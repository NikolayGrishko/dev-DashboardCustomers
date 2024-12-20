const hList = document.querySelectorAll('.header-nav__list li a')

hList.forEach(item =>{ 
    item.addEventListener('click', (e) =>{
    hList.forEach(el=>{ el.classList.remove('is-active'); });
    item.classList.add('is-active')
})
})

const page = document.querySelectorAll('.table-pagination li a')

page.forEach(item =>{
    item.addEventListener('click', (e) =>{
        page.forEach(el=>{ el.classList.remove('show'); });
        item.classList.add('show')
    })
})

const hamburger = document.querySelector('.hamburger')
const headerNav = document.querySelector('.header-nav')

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('is-active')
    headerNav.classList.toggle('show')
})