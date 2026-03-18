import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, [])

    return (
        <section id='hero'>
            <div >
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook title" />
            </div>
            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

            <button>Buy</button>
            <p>From ₹1,99,900* or ₹16,665/mo. for 24 months.<a href="#" className='underline text-primary'>Learn more</a></p>
        </section>
    )
}

export default Hero