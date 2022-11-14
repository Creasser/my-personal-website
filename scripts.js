const body = document.querySelector(".body")
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const aboutMe = document.querySelector('.aboutMe')
const lang = document.querySelector('.lang')
const project = document.querySelector('.projects')
const darkBtn = document.querySelector('#dark')
const lightBtn = document.querySelector('#light')
const link = document.querySelectorAll('.link')

function darkMode() {
    document.body.style.backgroundColor = '#3f3f40'
    header.style.backgroundColor = '#3c3b58'
    footer.style.backgroundColor = '#3c3b58'
    aboutMe.style.border = 'solid 5px #f6f8ff'
    lang.style.border = 'solid 5px #f6f8ff'
    project.style.border = 'solid 5px #f6f8ff'
    document.body.style.color = 'white'
    darkBtn.style.color = 'white'
    lightBtn.style.color = 'white'
    linkColorChange()
}

function lightMode() {
    document.body.style.backgroundColor = '#f6f8ff'
    header.style.backgroundColor = '#acabc5'
    footer.style.backgroundColor = '#acabc5'
    aboutMe.style.border = 'solid 5px black'
    lang.style.border = 'solid 5px black'
    project.style.border = 'solid 5px black'
    document.body.style.color = 'black'
    darkBtn.style.color = 'black'
    lightBtn.style.color = 'black'
    reverseLinkColor()
}

function linkColorChange(){
    link.forEach(function(el){
        el.style.color = 'white'
    })
}

function reverseLinkColor(){
    link.forEach(function(el){
        el.style.color = 'black'
    })
}

darkBtn.addEventListener('click', darkMode)
lightBtn.addEventListener('click', lightMode)
