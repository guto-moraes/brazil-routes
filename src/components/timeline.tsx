"use client";

// import lodashThrottle from "https://esm.sh/lodash.throttle@4.1.1";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineSlide from "./timeline-slide";

gsap.registerPlugin(Draggable,ScrollTrigger)

const Timeline = () => {

useGSAP(() => {

// const scrollContainer = document.querySelector<HTMLDivElement>('[data-scroller]')
const sections = gsap.utils.toArray<HTMLElement>('section')
const track = document.querySelector<HTMLDivElement>('[data-draggable]')
const navLinks = gsap.utils.toArray<HTMLAnchorElement>('[data-link]')
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

const lastItemWidth = () => navLinks[navLinks.length - 1].offsetWidth

const getUseableHeight = () => document.documentElement.offsetHeight - window.innerHeight

const getDraggableWidth = () => {
	return ((track!.offsetWidth * 0.5) - lastItemWidth())
}

const updatePosition = () => {
	const left = track!.getBoundingClientRect().left * -1
	const width = getDraggableWidth()
	const useableHeight = getUseableHeight()
	const y = gsap.utils.mapRange(0, width, 0, useableHeight, left)

	st.scroll(y)
}

const tl = gsap.timeline()
	.to(track, {
		x: () => getDraggableWidth() * -1,
		ease: 'none'
	})

const st = ScrollTrigger.create({
	animation: tl,
	scrub: 0,
})

Draggable.create(track, {
	type: 'x',
	inertia: true,
	bounds: {
		minX: 0,
		maxX: getDraggableWidth() * -1
	},
	edgeResistance: 1,
	onDragStart: () => st.disable(),
	onDragEnd: () => st.enable(),
	onDrag: updatePosition,
	onThrowUpdate: updatePosition
})

const initSectionAnimation = () => {
	/* Do nothing if user prefers reduced motion */
	if (prefersReducedMotion.matches) return
	
	sections.forEach((section, index) => {
		const heading = section.querySelector('h2')
		const image = section.querySelector('.section__image')
		
		/* Set animation start state */
		gsap.set(heading, {
			opacity: 0,
			y: 50
		})
		gsap.set(image, {
			opacity: 0,
			rotateY: 15
		})

		/* Create the timeline */
		const sectionTl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: () => 'top center',
				end: () => `+=${window.innerHeight}`,
				toggleActions: 'play reverse play reverse',
				// toggleClass: 'is-active',
				// markers: true,
			}
		})
		
		/* Add tweens to the timeline */
		sectionTl.to(image, {
			opacity: 1,
			rotateY: -5,
			duration: 6,
			ease: 'elastic'
		})
		.to(heading, {
			opacity: 1,
			y: 0,
			duration: 2
		}, 0.5)
		
		/* Create a new timeline to add an active class to the nav link for the current section */
		gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: 'top 20px',
				end: () => `bottom top`,
				toggleActions: 'play none play reverse',
				onToggle: ({ isActive }) => {
					const sectionLink = navLinks[index]
					
					if (isActive) {
						sectionLink.classList.add('is-active')
					} else {
						sectionLink.classList.remove('is-active')
					}
				}
			}
		})
	})
}

initSectionAnimation()



/* Allow navigation via keyboard */
const navigation = (event: React.KeyboardEvent) => {
	const id = event.currentTarget.getAttribute('href')
	if (!id || event.key !== 'Tab') return
	
	const section = document.querySelector(id)
	const y = section!.getBoundingClientRect().top + window.scrollY
	
	st.scroll(y)
}

track!.addEventListener('keyup', () => navigation )
        
})

interface TimelineCSS extends React.CSSProperties {
  '--i': number;
}

  return (
    <>
      <nav>
        <div className="marker"></div>
        {/* Shows our position on the timeline */}

        <div className="nav__track" data-draggable>
          {/* Draggable element */}
          <ul className="nav__list">
            <li>
              <a href="#section_1" className="nav__link" data-link>
                <span>1993</span>
              </a>
            </li>
            <li>
              <a href="#section_2" className="nav__link" data-link>
                <span>1995</span>
              </a>
            </li>
            <li>
              <a href="#section_3" className="nav__link" data-link>
                <span>1997</span>
              </a>
            </li>
            <li>
              <a href="#section_4" className="nav__link" data-link>
                <span>2000</span>
              </a>
            </li>
            <li>
              <a href="#section_5" className="nav__link" data-link>
                <span>2001</span>
              </a>
            </li>
            <li>
              <a href="#section_6" className="nav__link" data-link>
                <span>2003</span>
              </a>
            </li>
            <li>
              <a href="#section_7" className="nav__link" data-link>
                <span>2007</span>
              </a>
            </li>
            <li>
              <a href="#section_8" className="nav__link" data-link>
                <span>2011</span>
              </a>
            </li>
            <li>
              <a href="#section_9" className="nav__link" data-link>
                <span>2016</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="h-full w-full overflow-hidden">
        <section id="1930" className="h-svh w-full p-8" style={{ "--i": 0 } as TimelineCSS}>
          <div className="flex justify-between items-center">
            <h2 className="section__heading">
              <span>1930</span>
              <span>Pablo Honey</span>
            </h2>
            <div className="size-120">
              <img src="https://assets.codepen.io/85648/radiohead_pablo-honey.jpg" width="1200" height="1200" />
            </div>
          </div>
        </section>
        <section id="1931" className="h-svh w-full p-8" style={{ "--i": 1 } as TimelineCSS}>
          <div className="flex justify-between items-center">
            <h2 className="section__heading">
              <span>1931</span>
              <span>The Bends</span>
            </h2>
            <div className="size-120">
              <img src="https://assets.codepen.io/85648/radiohead_the-bends.webp" width="1200" height="1200" />
            </div>
          </div>
        </section>
        <section id="1932" className="h-svh w-full p-8" style={{ "--i": 2 } as TimelineCSS}>
          <div className="flex justify-between items-center">
            <h2 className="section__heading">
              <span>1932</span>
              <span>OK Computer</span>
            </h2>
            <div className="size-120">
              <img src="https://assets.codepen.io/85648/radiohead_ok-computer.webp" width="1200" height="1200" />
            </div>
          </div>
        </section>
        <section id="1933" className="h-svh w-full p-8" style={{ "--i": 3 } as TimelineCSS}>
          <div className="flex justify-between items-center">
            <h2 className="section__heading">
              <span>1933</span>
              <span>Kid A</span>
            </h2>
            <div className="size-120">
              <img src="https://assets.codepen.io/85648/radiohead_kid-a.webp" width="1200" height="1200" />
            </div>
          </div>
        </section>
        <TimelineSlide id="1934" />
        <section id="1935" className="h-svh w-full p-8" style={{ "--i": 4 } as TimelineCSS}>
          <div className="flex justify-between items-center">
            <h2 className="section__heading">
              <span>1935</span>
              <span>Amnesiac</span>
            </h2>
            <div className="size-120">
              <img src="https://assets.codepen.io/85648/radiohead_amnesiac.webp" width="1200" height="1200" />
            </div>
          </div>
        </section>
        <section id="1936" className="h-svh w-full p-8" style={{ "--i": 5 } as TimelineCSS}>
          <div className="flex justify-between items-center">
            <h2 className="section__heading">
              <span>1936</span>
              <span>Hail to the Thief</span>
            </h2>
            <div className="size-120" style={{ "--i": 0 } as TimelineCSS}>
              <img src="https://assets.codepen.io/85648/radiohead_hail-to-the-thief.webp" width="1200" height="1200" />
            </div>
          </div>
        </section>
        <section id="1937" className="h-svh w-full p-8" style={{ "--i": 6 } as TimelineCSS}>
          <div className="flex justify-between items-center">
            <h2 className="section__heading">
              <span>1937</span>
              <span>In Rainbows</span>
            </h2>
            <div className="size-120">
              <img src="https://assets.codepen.io/85648/radiohead_in-rainbows.webp" width="1200" height="1200" />
            </div>
          </div>
        </section>
        <section id="1938" className="h-svh w-full p-8" style={{ "--i": 7 } as TimelineCSS}>
          <div className="flex justify-between items-center">
            <h2 className="section__heading">
              <span>1938</span>
              <span>The King of Limbs</span>
            </h2>
            <div className="size-120">
              <img src="https://assets.codepen.io/85648/radiohead_king-of-linbs.webp" width="1200" height="1200" />
            </div>
          </div>
        </section>
        <section id="1939" className="h-svh w-full p-8" style={{ "--i": 8 } as TimelineCSS}>
          <div className="flex justify-between items-center">
            <h2 className="section__heading">
              <span>1939</span>
              <span>A Moon Shaped Pool</span>
            </h2>
            <div className="size-120">
              <img src="https://assets.codepen.io/85648/radiohead_a-moon-shaped-pool.webp" width="1200" height="1200" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Timeline;
