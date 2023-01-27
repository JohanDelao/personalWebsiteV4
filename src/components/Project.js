import pokedex from "../images/project/pokedex.jpg"
import trilogy from "../images/project/trilopyImage.jpg"
import macro from "../images/project/macroCounter.gif"

function Project(){
    return (
        <div className="projectSection">
            <div className="inner">
                <div className="mediumHeader sectionHeader">Projects</div>
                <div className="projects">
                    <div className="project">
                        <img src={pokedex} id="pokedex" height="225" alt="homepage of Pokedex project"></img>
                        <a href="https://github.com/JohanDelao/pokeDex"><p className="bodyP">PokeDex</p></a>
                        <p className="smallP">HTML,      CSS,     JavaScript</p>
                    </div>
                    <div className="project">
                        <img src={trilogy} id="trilogy" height="225" alt="chrome extension popup"></img>
                        <a href="https://github.com/JohanDelao/Trilogy"><p className="bodyP">Trilogy</p></a>
                        <p className="smallP">HTML,      CSS</p>
                    </div>
                    <div className="project">
                        <img src={macro} id="macrocounter" height="225" alt="gif of macrocounter"></img>
                        <a href="https://github.com/Codepath-Group-7/MacroCounterAndroid"><p className="bodyP">MacroCounter</p></a>
                        <p className="smallP">Java, Android Studio</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project