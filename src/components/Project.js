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
                        <img src={pokedex} height="225"></img>
                        <p className="bodyP">PokeDex</p>
                        <p className="smallP">HTML      CSS     JavaScript</p>
                    </div>
                    <div className="project">
                        <img src={trilogy} height="225"></img>
                        <p className="bodyP">Trilogy</p>
                        <p className="smallP">HTML      CSS</p>
                    </div>
                    <div className="project">
                        <img src={macro} height="225"></img>
                        <p className="bodyP">MacroCounter</p>
                        <p className="smallP">Java Android Studio</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project