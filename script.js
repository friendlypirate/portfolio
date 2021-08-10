const buttonPrevious = document.getElementById('previous')
const buttonNext = document.getElementById('next')
const main = document.getElementById('main')
const body = document.querySelector('body')
const about = document.querySelector('.about')
const projects = document.querySelector('.projects')



// const pageScroll = (startingTarget, target, duration) => {
//     console.log('its running')
//     let targetSection = document.querySelector(target)
//     let startingSection = document.querySelector(startingTarget)
    // let targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset

    // let startPosition = window.pageYOffset
    // let startPosition = startingSection.offsetTop - (20 * window.innerHeight/100)
    // console.log(startPosition)
    // let startPosition = startingSection.getBoundingClientRect().top + window.pageYOffset
    // let distance = targetPosition - startPosition
    // let startTime = null

    // console.log(distance, startPosition, targetPosition)

//     const animation = (currentTime) => {
//         if (startTime === null) {
//             startTime = currentTime
//         }
//         let timeElapsed = currentTime - startTime
//         const run = ease(timeElapsed, startPosition, (70 * window.innerHeight/100), duration)
//         main.scrollTo(0, run)
//         if (timeElapsed < duration) {
//             requestAnimationFrame(animation)
//         }
//     }

//     const ease = (t, b, c, d) => {
//         return -c * (t /= d) * (t - 2) + b;
//     }
//     requestAnimationFrame(animation)
// }

buttonNext.addEventListener('click', () => {
    console.log("hello")
    // pageScroll('.landing', '.about', 1250)
})

// about.addEventListener('scroll', (e) => {
//     console.log(e.target.tagName)
// })

// var observer = new IntersectionObserver(function(entries) {

// 	if(entries[0].isIntersecting === true)
// 		console.log(entries[0].target.id);
// }, { threshold: [0.49] });

// observer.observe(document.querySelector('.projects'))


const sections = document.querySelectorAll('.section')
console.log(sections[0].id)
sections.forEach(x => console.log(x.id))


// main.addEventListener('scroll', function(section) {
    
// 	var element = document.querySelector("." + sections[3].id);
// 	var position = element.getBoundingClientRect();
// 	// checking whether fully visible
// 	if(position.top >= 0 && position.bottom <= window.innerHeight) {
// 		console.log(element + ' is fully visible in screen');
//         console.log(element.id)
// 	}
// 	// checking for partial visibility
// 	// if(position.top < window.innerHeight && position.bottom >= 0) {
// 	// 	console.log('Element is partially visible in screen');
// 	// }
// });

sections.forEach(x => main.addEventListener('scroll', () => {
    const botNavDots = document.querySelectorAll('.botNavDots')
    var element = document.querySelector("." + x.id);
	var position = element.getBoundingClientRect();
    
	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		console.log(element + ' is fully visible in screen');
        botNavDots.forEach(y => {
            // console.log(y)
            // console.log(element)
            // console.log('this is working')
            if (y.classList.contains(x.id)) {
                botNavDots.forEach(z => {
                    z.classList.remove('selectedDot')
                })
                y.classList.add('selectedDot')
            }
        })
	}
}))