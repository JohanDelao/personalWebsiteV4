import myImage from "../images/project/mePic.jpg"

function AboutMe(){
    return (
        <div className="aboutMe">
            <div className="inner">
                <div className="aboutMeFlex">
                    <div className="leftAboutMe">
                        <img id="myPic" src={myImage} alt="picture of myself" width="300"></img>
                    </div>
                    <div className="rightAboutMe">
                        <p className="mediumHeader sectionHeader">About Me</p>
                        <p className="smallP">
                            Hello! I am a rising junior at the City College of New York, majoring in CS. I focus on front-end development but I am willing to work on new fields to expand my knowledge. I am involved in organizations such as All Star Code, CodePath, and ColorStack. In my spare time, I enjoy playing basketball, weightlifting, and MMA training.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe