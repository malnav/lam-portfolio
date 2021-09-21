import React from 'react'
import './home.scss'
import mainphoto from '../../images/mc.png'
import { useState, useRef, useEffect } from 'react'

let isLeft = false

const Home = () => {

    const [theme,setTheme] = useState("theme1")
    const themeToggle = useRef(document.createElement("div"))

    useEffect(() => {
        document.body.dataset.theme= theme
    }, [theme])

    const toggleTheme = () => {
        
        if (theme === "theme1"){
            console.log("run1-2")
            themeToggle.current.style.transform = `translateX(17px)`
            setTheme("theme2")
            
        } else if (theme === "theme2"){
            if(isLeft === true){
                console.log("run2.1")
                themeToggle.current.style.transform = `translateX(0px)`
                setTheme("theme1")
                isLeft =  !isLeft
            }else{
                console.log("run2.3")
                themeToggle.current.style.transform = `translateX(36px)`
                setTheme("theme3")
            }
        } else if (theme === "theme3"){
            if(isLeft === true){
                console.log("run3.2")
                themeToggle.current.style.transform = `translateX(17px)`
                setTheme("theme2")
            }else{
                console.log("run3.4")
                themeToggle.current.style.transform = `translateX(55px)`
                setTheme("theme4")
            }
        } else if (theme === "theme4"){
            console.log("run4-3")
            themeToggle.current.style.transform = `translateX(36px)`
            setTheme("theme3")
            isLeft =  !isLeft
        }
    }

    return (
        <>
            <div className="grid">
                <div className="logo">
                    <h1>Lam.</h1>
                    <span><strong>Frontend Dev</strong></span>
                </div>
                <div className="social">
                       
                    <ul>
                        <li><a href="https://www.facebook.com/lamhv89">fb</a></li>
                        <li><a href="https://twitter.com/lamhv89">tw</a></li>
                        <li><a href="#">in</a></li>
                    </ul>
                </div>
                <div className="nav">
                     <div className="theme">
                            <div onClick={toggleTheme} className="theme__toggle">
                                <div ref={themeToggle} ></div>
                            </div>
                        </div>
                    {/* <a className="nav-icon"><span></span></a> */}
                    {/* <ul>
                        <li>latest work</li>
                        <li>blog</li>
                        <li>schedule call</li>
                    </ul> */}
                </div>
                <div className="name">
                    <p>LAM</p>
                    <p>DEV</p>
                </div>
                <div className="photo">
                    <div className="photo__top">
                        
                    </div>
                    <div className="photo__bottom">
                        <img src={mainphoto} />
                    </div>
                    
                </div>
                <div className="content">
                    <h1>
                        Breathing in the aroma of creative
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ex expedita harum quae, eaque sunt qui deserunt amet, vero asperiores, animi iste! Aspernatur distinctio, minus nobis ab dolorem quae voluptatum.
                    </p>
                    <a>Learn more</a>
                </div>
                <div className="links">
                    <div></div>
                    <ul>
                        <li>latest work</li>
                        <li>download cv</li>
                        <li>blog</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home
