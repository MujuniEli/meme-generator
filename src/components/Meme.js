import { useState } from "react"
import memesData from "../memesData"


export default function Meme() {

    const [memeImage, setMemeImage] = useState("")

    function getMeme() {
        const memesArray = memesData.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length) 
        setMemeImage (memesArray[randomNumber].url) 
        
    }

    return (
                <main>
                    <div className="form">
                    <input type="text" placeholder="Top text" className="form--input"/>
                    <input type="text" placeholder="Bottom text" className="form--input"/>
                    <button onClick={getMeme} className="form--button">Get a new meme image</button>
                    <img src={memeImage} alt="random pic" className="meme--image" />
                    </div>
                </main>
    )
}