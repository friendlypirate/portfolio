// const buttonPrevious = document.getElementById('previous')
// const buttonNext = document.getElementById('next')
const buttons = document.querySelectorAll('.navButton')
const main = document.getElementById('main')
const body = document.querySelector('body')
const about = document.querySelector('.about')
const projects = document.querySelector('.projects')

const img1 = document.querySelector('.img1')
const projectInfo1 = document.querySelector('.projectInfo1')

// window.addEventListener('click', (e) => {
//     console.log(e)
// })

//Projects Page JS//

//Overlay 
const closeInfoButtons = [1, 2, 3, 4]

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
            // pic.classList.add('carouselPicHidden');
        }
    }
    
    moveToNextProject = (e) => {
       hideAllProjects()
        e.target.id == 'carouselNext'
        ? carouselPosition  == totalProjects - 1 ? carouselPosition  = 0 : carouselPosition ++
        : carouselPosition  === 0 ? carouselPosition  = totalProjects - 1 : carouselPosition --
        projects[carouselPosition].classList.add("projectVisible");
    }
    
    Array.from(document.querySelectorAll('.moveCarousel')).map(x => x.addEventListener('click', moveToNextProject))
}

carousel()



//Smooth Scroll with Nav Buttons Highlighting
const sections = document.querySelectorAll('.section')

buttons.forEach(x => x.addEventListener('click', () => {
    x.id === 'next' ? main.scrollBy(0, (70 * window.innerHeight/100)) : main.scrollBy(0, (-70 * window.innerHeight/100))
}))

sections.forEach(x => main.addEventListener('scroll', () => {
    const botNavDots = document.querySelectorAll('.botNavDots')
    var element = document.querySelector("." + x.id);
	var position = element.getBoundingClientRect();
    
	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		// console.log(element + ' is fully visible in screen');
        botNavDots.forEach(y => {
            // console.log(y)
            // console.log(element)
            // console.log('this is working')
            if (y.classList.contains(x.id + 'Nav')) {
                botNavDots.forEach(z => {
                    z.classList.remove('selectedDot')
                })
                y.classList.add('selectedDot')
            }
        })
	}
}))