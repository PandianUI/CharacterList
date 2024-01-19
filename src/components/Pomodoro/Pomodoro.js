import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Pomodoro() {
    const[minutes, Setminutes] = useState(25)
    const[seconds, Setseconds] = useState(0)
    const[active, Setactive] = useState(false)
    const[activelink, Setactivelink] = useState(null)

    useEffect(() => {
        if(active) {
        let interval = setInterval(() => {
            if(seconds === 0) {
                if(minutes === 0) {
                    Setminutes(25)
                }
                else {
                    Setminutes(minutes - 1)
                    Setseconds(59)
                }
            }
            else {
                Setseconds(seconds - 1)
            }

        }, 1000)

        return () => clearInterval(interval)
    }
    }, [seconds, minutes, active])


    const startClick = () => {
        Setactive(!active)
    }

    useEffect(() => {
        const firstelem = document.querySelector('.links')
        firstelem.classList.add('active')
        Setactivelink(firstelem)
        if(activelink){
            activelink.classList.remove('active')
        }

    }, [])

    const pomoBreak = (event) => {
        Setminutes(25);
        Setseconds(0)
        Setactive(false)

        const clickedelem = event.target;
        clickedelem.classList.add('active')
        const bgelem = document.querySelector('.container')
        bgelem.classList.add('red')
        Setactivelink(clickedelem)
        if(activelink) {
            activelink.classList.remove('active')
            const bgelem = document.querySelector('.container')
            bgelem.classList.remove('blue')
            bgelem.classList.remove('purple')
        }

    }

    const shortBreak = (event) => {
        Setminutes(5);
        Setseconds(0)
        Setactive(false)

        const clickedelem = event.target;
        clickedelem.classList.add('active')
        const bgelem = document.querySelector('.container')
        bgelem.classList.add('purple')
        Setactivelink(clickedelem)
        if(activelink) {
            activelink.classList.remove('active')
            const bgelem = document.querySelector('.container')
            bgelem.classList.remove('red')
            bgelem.classList.remove('blue')
        }

    }

    const longBreak = (event) => {
        Setminutes(15);
        Setseconds(0)
        Setactive(false)
        const clickedelem = event.target;
        clickedelem.classList.add('active')
        const bgelem = document.querySelector('.container')
        bgelem.classList.add('blue')
        Setactivelink(clickedelem)
        if(activelink) {
            activelink.classList.remove('active')
            const bgelem = document.querySelector('.container')
            bgelem.classList.remove('red')
            bgelem.classList.remove('purple')
        }

    }

    return (
        <div className="container">
            <h2>Pomodoro App</h2>
            <div className="btnlinks">
                <button className="links" onClick={pomoBreak} >Pomodoro</button>
                <button className="links" onClick={shortBreak}>Short Break</button>
                <button className="links" onClick={longBreak}>Long Break</button>
            </div>
            <p className="timer"> {minutes.toString().padStart(2,0)}:{seconds.toString().padStart(2,0)} </p>
            <button className="btnClick" onClick={startClick}>{active ? "Stop" : "Start"}</button>
        </div>
    )
}


export default Pomodoro