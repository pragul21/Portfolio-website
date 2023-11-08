import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
    return (
        <div>
            <section id='intro'>
                <div className='introContent'>
                    <span className='hello'>Hello,</span>
                    <span className='introText'>I'm <span className='introName'>Pragneshc Singh </span><br />Fullstack Developer</span>
                    <p className='introPara'>I'm a 2023 graduated fresher web Developer looking for  <br /> opportunities to enhance & practice my skills. </p>
                    <Link><button className='btn'><img src={btnImg} alt="" className='btnImg' />Hire Me</button></Link>
                </div>
                <img src={bg} alt="programming" className='bg' />
            </section>
        </div>
    )
}

export default Intro;