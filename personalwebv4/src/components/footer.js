import email from "../images/icons/icons8-envelope-50.png";
import linkedIn from "../images/icons/icons8-linkedin-50.png"
import github from "../images/icons/github-mark-white.png"


function Footer(){
    return(
        <div className="footer">
            <div className="inner">
                <div className="footerInner">
                    <p className="bodyP">johandelao</p>
                    <p className="bodyP" style={{margin: "0 .5rem"}}>|</p>
                    <p className="bodyP" style={{fontSize: 18}}>@ 2023 Johan Delao</p>
                </div>
                <div className="iconLinks">
                    <img className="icon" src={email} width="35" height="30"></img>
                    <img className="icon" src={linkedIn} width="30" height="30"></img>
                    <img className="icon" src={github} width="30" height="30"></img>
                </div>
            </div>
        </div>
    )
}
export default Footer