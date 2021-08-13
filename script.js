const buttons = document.querySelectorAll('.navButton')
const main = document.getElementById('main')
const projects = document.querySelector('.projects')
const projectInfo1 = document.querySelector('.projectInfo1')
const closeInfoButtons = [1, 2, 3, 4, 5, 6]
const sections = document.querySelectorAll('.section')

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
    let topNav = document.querySelector('.topNav')
    let openTopNav = document.querySelector('.openTopNav')
    let closeTopNav = document.querySelector('.closeTopNav')
    let navItems = Array.from(document.querySelectorAll('.topNavList'))

    openTopNav.addEventListener('click', (e) => {
        console.log("clicked I")
        // topNav.style.display = "block"
        openTopNav.style.display = "none"
        closeTopNav.style.display = "block"
        // openTopNav.classList.remove('topNavButtonVisible')
        // closeTopNav.classList.add('topNavButtonVisible')
        topNav.classList.add('topNavVisible')

    })
    closeTopNav.addEventListener('click', (e) => {
        console.log("clicked X")
        // topNav.style.display = "none"
        openTopNav.style.display = "block"
        closeTopNav.style.display = "none"
        // openTopNav.classList.add('topNavButtonVisible')
        // closeTopNav.classList.remove('topNavButtonVisible')
        topNav.classList.remove('topNavVisible')
    })
    navItems.map(x => x.addEventListener('click', () => {
        // topNav.style.display = "none"
        openTopNav.style.display = "block"
        closeTopNav.style.display = "none"
        topNav.classList.remove('topNavVisible')
    }))
}
hamburger()

//Theme Changer

// document.querySelector('.theme').onclick = () => {
//     document.querySelector('body').classList.toggle('lightMode')
// }