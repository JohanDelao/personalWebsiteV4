import { useState } from "react";

function Experience() {
    const [experience, setExperience] = useState({title: "Website Developer", company: " @ Research Foundation CUNY", date: "June 2022 - Present", bulletOne: "Update and maintain the CEESP program website using WordPress, CSS, and HTML.", bulletTwo: "Troubleshoot bugs from the existing website to decrease load times by 10%.", bulletThree: "Improved user experience and increased applications by 16% by experimenting with design changes."});

    function DisplayCodePath(){
        const experienceOne = document.getElementById("experienceOne");
        const experienceTwo = document.getElementById("experienceTwo");
        const experienceThree = document.getElementById("experienceThree");
        const barOne = document.getElementById("barOne");
        const barTwo = document.getElementById("barTwo");
        const barThree = document.getElementById("barThree");

        if(experienceOne.classList.contains("selected")){
            experienceOne.classList.remove("selected")
            barOne.classList.remove("selected");
        }
        if(experienceTwo.classList.contains("selected")){
            experienceTwo.classList.remove("selected");
            barTwo.classList.remove("selected")
        }

        experienceThree.classList.add("selected");
        barThree.classList.add("selected")

        setExperience(prevExperience => {
            return {title: "Android Development Fellow", company: " @ CodePath", date: "Jan. 2021 - May 2021", bulletOne: "Worked in a team of four to develop an Android application using Agile practices.", bulletTwo: "Developed 5+ Android applications using Android Studio, Java, Github and other in-demand technologies.", bulletThree: "Worked on around 3 features in a fast-paced setting in biweekly sprints."};
        });
    }
    function DisplayCUNY(){
        const experienceOne = document.getElementById("experienceOne");
        const experienceTwo = document.getElementById("experienceTwo");
        const experienceThree = document.getElementById("experienceThree");
        const barOne = document.getElementById("barOne");
        const barTwo = document.getElementById("barTwo");
        const barThree = document.getElementById("barThree");

        if(experienceTwo.classList.contains("selected")){
            experienceTwo.classList.remove("selected")
            barTwo.classList.remove("selected");
        }
        if(experienceThree.classList.contains("selected")){
            experienceThree.classList.remove("selected");
            barThree.classList.remove("selected")
        }

        experienceOne.classList.add("selected");
        barOne.classList.add("selected")

        setExperience(prevExperience => {
            return {title: "Website Developer", company: " @ Research Foundation CUNY", date: "June 2022 - Present", bulletOne: "Update and maintain the CEESP program website using WordPress, CSS, and HTML.", bulletTwo: "Troubleshoot bugs from the existing website to decrease load times by 10%.", bulletThree: "Improved user experience and increased applications by 16% by experimenting with design changes."};
        });
    }
    function DisplayMeta(){
        const experienceOne = document.getElementById("experienceOne");
        const experienceTwo = document.getElementById("experienceTwo");
        const experienceThree = document.getElementById("experienceThree");
        const barOne = document.getElementById("barOne");
        const barTwo = document.getElementById("barTwo");
        const barThree = document.getElementById("barThree");

        if(experienceOne.classList.contains("selected")){
            experienceOne.classList.remove("selected")
            barOne.classList.remove("selected");
        }
        if(experienceThree.classList.contains("selected")){
            experienceThree.classList.remove("selected");
            barThree.classList.remove("selected")
        }

        experienceTwo.classList.add("selected");
        barTwo.classList.add("selected")

        setExperience(prevExperience => {
            return {title: "ABCS Program", company: "@ Meta", date: "Aug 2022 - Nov 2022", bulletOne: "Participated in a 9-week program focused on mastering critical data structures and algorithms.", bulletTwo: "Engaged by answering interview-type questions with peers and engineers.", bulletThree: "Networked with Meta engineers to learn best practices in software engineering."};
        });

    }
    return (
        <div className="ExperienceSection">
            <div className="inner">
                <p className="mediumHeader sectionHeader">Experience</p>
                <div className="ExperienceExperiment">
                    <div className="leftExperience">
                        <div className="leftBarExperience">
                            <div className="bar selected" id="barOne"></div>
                            <p className="ExperienceName selected" id="experienceOne" onClick={DisplayCUNY}>Research Foundation CUNY</p>
                        </div>
                        <div className="leftBarExperience">
                            <div className="bar" id="barTwo"></div>
                            <p className="ExperienceName" id="experienceTwo" onClick={DisplayMeta}>Meta</p>
                        </div>
                        <div className="leftBarExperience">
                            <div className="bar" id="barThree"></div>
                            <p className="ExperienceName" onClick={DisplayCodePath} id="experienceThree">CodePath </p>
                        </div>
                    </div>
                    <div className="rightExperience">
                        <div className="experienceHeader">
                            <p className="bodyP" id="experienceTitle">{experience.title}</p>
                            <span id="company">{experience.company}</span>
                        </div>
                        <p className="smallP" id="experienceDate">{experience.date}</p>
                        <ul className="experienceDescription">
                                <li className="experienceBullet" id="bulletOne">
                                    {experience.bulletOne}
                                </li>
                                <li className="experienceBullet" id="bulletTwo">
                                    {experience.bulletTwo}
                                </li>
                                <li className="experienceBullet" id="bulletThree">
                                    {experience.bulletThree}
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience