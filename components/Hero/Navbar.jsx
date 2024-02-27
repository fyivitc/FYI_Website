import React, { useEffect } from 'react'

function Navbar() {
    useEffect(() => {
        var variable = document.querySelector(':root');

        var left = getComputedStyle(variable).getPropertyValue('--left');

        var color = {
            left: ["#FE8984", "#42a5f2", "#49bcae", "#ffbb47"],
            right: ["#16A8AC", "#e3b7f5", "#72cf6b", "#c7543e"]
        }
        var i = 0;
        setInterval(() => {
            i = i % 4;
            if (i == 0 || i == 3) {
                variable.style.setProperty('--color', "#FFFFFF");
            }
            else {
                variable.style.setProperty('--color', "black");
            }
            variable.style.setProperty('--left', color.left[i]);
            variable.style.setProperty('--right', color.right[i]);
            i++;
        }, 6000);

    }, [])
  return (
    <div className='nav'>
                <div className="svg">
                    <svg >
                        <line className='line1' x1="3%" y1="3%" x2="97%" y2="3%" stroke="white" strokeWidth="2"  />
                        <circle r=".6%" cx="3%" cy="3%" fill="white" />
                        <line className='line2' x1="97%" y1="3%" x2="83%" y2="45%" stroke="white" strokeWidth="2"  />
                        <circle r=".6%" cx="83%" cy="45%" fill="white" />
                        <line className='line3' x1="97%" y1="3%" x2="97%" y2="95%" stroke="white" strokeWidth="2"  />
                        <circle r=".6%" cx="97%" cy="95%" fill="white" />
                    </svg>
                </div>
                <div className="logo">
                    <img src="/images/Frame 109.png" alt="" />
                </div>
                <div className="head">
                    <a href="#" style={{ color: '#EDC63C' }}>Home</a>
                    <a href="#">Events</a>
                    <a href="#">Gallery</a>
                    <a href="#About">About</a>
                </div>
                <div className="hamburger">
                    <img src="/images/hamburger.png" alt="" />
                </div>
                <div className="heading">
                    <h1>FYI CLUB</h1>
                </div>
                <div className="label">
                    <h2>Be Smart</h2>
                    <h2>Be the Exception</h2>
                </div>
            </div>
  )
}

export default Navbar