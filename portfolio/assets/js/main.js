/*=============== MENU SHOW ===============*/

const navMenu = document.querySelector('.nav__menu')
const navToggle = document.querySelector('.nav__toggle')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.toggle('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLinks = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}

navLinks.forEach(n => n.addEventListener('click', linkAction))


/*=============== ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){

    const scrollY = window.pageYOffset

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 100
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

            document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.add('active-link')

        }
        else{

            document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.remove('active-link')

        }

    })

}

window.addEventListener('scroll', scrollActive)


/*=============== HEADER SHADOW ===============*/

function scrollHeader(){

    const header = document.querySelector('.header')

    if(this.scrollY >= 50){
        header.style.boxShadow = "0 5px 20px rgba(255,0,0,.2)"
    }
    else{
        header.style.boxShadow = "none"
    }

}

window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL TO TOP ===============*/

const scrollUp = document.createElement('a')

scrollUp.href = "#"
scrollUp.className = "scrollup"

scrollUp.innerHTML = '<i class="bx bx-up-arrow-alt"></i>'

document.body.appendChild(scrollUp)

function showScroll(){

    if(window.scrollY >= 350){
        scrollUp.classList.add('show-scroll')
    }
    else{
        scrollUp.classList.remove('show-scroll')
    }

}

window.addEventListener('scroll', showScroll)


/*=============== TYPING EFFECT ===============*/

const typingText = document.querySelector(".typing-text")

const words = [
    "Cloud Programmer",
    "Web Developer",
    "UI Designer",
    "Azure Enthusiast"
]

let wordIndex = 0
let charIndex = 0
let isDeleting = false

function typeEffect(){

    const currentWord = words[wordIndex]

    if(!isDeleting){

        typingText.textContent =
        currentWord.substring(0, charIndex + 1)

        charIndex++

        if(charIndex === currentWord.length){

            isDeleting = true
            setTimeout(typeEffect,1500)
            return
        }

    }
    else{

        typingText.textContent =
        currentWord.substring(0,charIndex - 1)

        charIndex--

        if(charIndex === 0){

            isDeleting = false
            wordIndex++

            if(wordIndex === words.length){
                wordIndex = 0
            }
        }

    }

    setTimeout(typeEffect,100)

}

typeEffect()


/*=============== REVEAL ANIMATION ===============*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show')

        }

    })

})

const hiddenElements = document.querySelectorAll(
'.home__content,.home__image,.about__container,.skill,.service__card,.project__card'
)

hiddenElements.forEach((el)=>observer.observe(el))


/*=============== SMOOTH FADE CLASS ===============*/

document.querySelectorAll(
'.home__content,.home__image,.about__container,.skill,.service__card,.project__card'
)
.forEach(el=>{
    el.classList.add('hidden')
})


/*=============== DARK THEME ICON ===============*/

const themeButton = document.createElement('i')

themeButton.className = 'bx bx-moon'

themeButton.style.fontSize = "1.5rem"
themeButton.style.color = "white"
themeButton.style.cursor = "pointer"

document.querySelector('.nav').appendChild(themeButton)

themeButton.addEventListener('click', ()=>{

    document.body.classList.toggle('light-theme')

})


/*=============== LOADER EFFECT ===============*/

window.addEventListener('load',()=>{

    document.body.style.opacity = "1"

})


/*=============== CONSOLE MESSAGE ===============*/

console.log(
"%cWelcome to Jaiswin Portfolio",
"color:red;font-size:20px;font-weight:bold"
)