const header = document.querySelector('.header')
const buttons = document.querySelectorAll('.navButton')
const main = document.getElementById('main')
const projects = document.querySelector('.projects')
const projectInfo1 = document.querySelector('.projectInfo1')
const closeInfoButtons = [1, 2, 3, 4, 5, 6]
const sections = document.querySelectorAll('.section')
const topNav = document.querySelector('.topNav')
const openTopNav = document.querySelector('.openTopNav')
const closeTopNav = document.querySelector('.closeTopNav')
const navItems = Array.from(document.querySelectorAll('.topNavList'))

//Mobile Vh Sizing Issue
function resize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', resize);
window.addEventListener('load', resize);

//Overlay 
closeInfoButtons.forEach(x => {
    let projectNum = '.projectInfo' + x
    document.querySelector('.img' + x).onclick = () => {
        document.querySelector(projectNum).classList.add('visible')
    }
    document.querySelector('.closeInfo' + x).onclick = () => {
        document.querySelector(projectNum).classList.remove('visible')
    }
})

//Projects Carousel 
const carousel = () => {
    let projects = document.querySelectorAll('.project');
    let carouselPosition = 0;
    let totalProjects = projects.length;
    hideAllProjects = () => {
        for (let project of projects) {
            project.classList.remove('projectVisible');
        }
    }
    moveToNextProject = (e) => {
        hideAllProjects()
        e.target.id == 'carouselNext'
            ? carouselPosition == totalProjects - 1 ? carouselPosition = 0 : carouselPosition++
            : carouselPosition === 0 ? carouselPosition = totalProjects - 1 : carouselPosition--
        projects[carouselPosition].classList.add("projectVisible");
    }

    Array.from(document.querySelectorAll('.moveCarousel')).map(x => x.addEventListener('click', moveToNextProject))
}
carousel()

//Smooth Scroll with Nav Buttons Highlighting
buttons.forEach(x => x.addEventListener('click', () => {
    x.id === 'next' ? main.scrollBy(0, (70 * window.innerHeight / 100)) : main.scrollBy(0, (-70 * window.innerHeight / 100))
}))

//Add event listeners to figure out when Sections are visible, changes the dot navigation accordingly and header page indicator
sections.forEach((x, index) => main.addEventListener('scroll', () => {
    const pageHeading = document.querySelector('.pageHeading')
    const botNavDots = document.querySelectorAll('.botNavDots')
    var element = document.querySelector("." + x.id);
    var position = element.getBoundingClientRect();
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        botNavDots.forEach(y => {
            if (y.classList.contains(x.id + 'Nav')) {
                botNavDots.forEach(z => {
                    z.classList.remove('selectedDot')
                })
                y.classList.add('selectedDot')
                pageHeading.textContent = `0${index + 1} - ${x.id}`
                index + 1 === 1
                    ? (buttons[1].classList.add('useable'), buttons[0].classList.remove('useable'))
                    : index + 1 === 5
                        ? (buttons[0].classList.add('useable'), buttons[1].classList.remove('useable'))
                        : (buttons[0].classList.add('useable'), buttons[1].classList.add('useable'))
            }
        })
    }
}))

//Open Close Hamburger menu
const hamburger = () => {
    openTopNav.addEventListener('click', (e) => {
        console.log("clicked I")
        openTopNav.style.display = "none"
        closeTopNav.style.display = "block"
        topNav.classList.add('topNavVisible')
    })

    closeTopNav.addEventListener('click', (e) => {
        console.log("clicked X")
        openTopNav.style.display = "block"
        closeTopNav.style.display = "none"
        topNav.classList.remove('topNavVisible')
    })

    navItems.map(x => x.addEventListener('click', () => {
        openTopNav.style.display = "block"
        closeTopNav.style.display = "none"
        topNav.classList.remove('topNavVisible')
    }))
    window.onclick = (e) => {
        if (!e.target.classList.contains('closeTopNav') && !e.target.classList.contains('topNavList') && !e.target.classList.contains('openTopNav') && !e.target.classList.contains('topNavUl')) {
            openTopNav.style.display = "block"
            closeTopNav.style.display = "none"
            topNav.classList.remove('topNavVisible')
    }
    }
}

hamburger()


// Theme Changer

document.querySelector('.catchMe').onclick = () => {
    console.log('im tagged')
    document.querySelector('html').classList.toggle('lightMode')
}

//Secret Logo Theme Changer

const popUpIcon = () => {
    const catchMe = document.querySelector('.catchMe')
    let randomPopUpTime = (Math.floor(Math.random() * 4) * 1000)
    let translateX = (Math.floor(Math.random() * 30) - 15) + "rem"
    let translateY = (Math.floor(Math.random() * 30) - 15) + "rem"

    catchMe.style.display = "none"
    document.documentElement.style.setProperty("--animationDirectionVertical", translateY)
    document.documentElement.style.setProperty("--animationDirectionHorizontal", translateX)
    
    let top = Math.floor(Math.random() * window.innerHeight)
    let left = Math.floor(Math.random() * window.innerWidth)
    catchMe.style.left = left + "px"
    catchMe.style.top = top + "px"
    
    setTimeout(() => {
        catchMe.style.display = "block"
    }, randomPopUpTime)
}

setInterval(() => {
    popUpIcon()
}, 8000);
