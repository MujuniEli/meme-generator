
import trollface from "../images/trollface-shades.png"

export default function Header() {
    return (

            <header className="header">
                    <img src={trollface} alt="navigation icon" className="header--image"/>
                    <h2 className="header--title">Meme Generator</h2>
                    
            </header>
    )
}