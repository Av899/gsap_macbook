import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

const ShowCase = () => {
    const contentRef = useRef();

    const isTablet = useMediaQuery({ query: '(max-width:1024px)' })

    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            })

            timeline.to(".mask img", {
                transform: 'scale(1.2)',
            }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' })
        }
    }, [isTablet]);

    return (
        <section id="showcase">
            <div className="media w-full">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content" ref={contentRef}>
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>Introducing
                                <span className="text-white"> M4, the most powerful chip ever created for a personal computer.</span></p>
                            <p>
                                <span className="text-white-500">With up to <span className="text-white">10 CPU cores</span> and up to <span className="text-white">16 GPU cores</span>, the M4 chip can <span className="text-white">handle the most demanding tasks with ease.</span></span>
                            </p>
                            <p>
                                <span className="text-white-500">The <span className="text-white">M4 chip</span> is also <span className="text-white">the most energy-efficient chip</span> ever created for a personal computer.</span>
                            </p>

                            <p className="text-primary"><a href="#" className='underline'>Learn more about Apple Intelligence</a></p>

                        </div>

                    </div>
                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>pro rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowCase;