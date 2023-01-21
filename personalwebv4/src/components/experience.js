function Experience() {
    function DisplayCodePath(){
        const title = document.getElementById("experienceTitle");
        const date = document.getElementById("experienceDate");
        const company = document.getElementById("company");
        const bulletOne = document.getElementById("bulletOne");
        const bulletTwo = document.getElementById("bulletTwo");
        const bulletThree = document.getElementById("bulletThree")
        const experienceOne = document.getElementById("experienceOne");
        const experienceTwo = document.getElementById("experienceTwo");
        const experienceThree = document.getElementById("experienceThree");
        const barOne = document.getElementById("barOne");
        const barTwo = document.getElementById("barTwo");
        const barThree = document.getElementById("barThree");


        let titleCodePath = "Android Development Fellow";
        let dateCodePath = "Jan 2021 - May 2021";
        let companyCodePath = "@ CodePath";
        let bulletOneCodePath = "Worked in a team of four to develop an Android application using Agile practices.";
        let bulletTwoCodePath = "Developed 5+ Android applications using Android Studio, Java, Github and other in-demand technologies."
        let bulletThreeCodePath = "Worked on around 3 features in a fast-paced setting in biweekly sprints.";

        date.innerHTML = dateCodePath;
        company.innerHTML = companyCodePath;
        title.innerHTML = titleCodePath;
        bulletOne.innerHTML = bulletOneCodePath;
        bulletTwo.innerHTML = bulletTwoCodePath;
        bulletThree.innerHTML = bulletThreeCodePath;

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
    }
    function DisplayCUNY(){
        const title = document.getElementById("experienceTitle");
        const date = document.getElementById("experienceDate");
        const company = document.getElementById("company");
        const bulletOne = document.getElementById("bulletOne");
        const bulletTwo = document.getElementById("bulletTwo");
        const bulletThree = document.getElementById("bulletThree")
        const experienceOne = document.getElementById("experienceOne");
        const experienceTwo = document.getElementById("experienceTwo");
        const experienceThree = document.getElementById("experienceThree");
        const barOne = document.getElementById("barOne");
        const barTwo = document.getElementById("barTwo");
        const barThree = document.getElementById("barThree");

        let titleCUNY = "Website Developer";
        let dateCUNY = "June 2022 - Present";
        let companyCUNY = "@ Research Foundation CUNY";
        let bulletOneCUNY = "Update and maintain the CEESP program website using WordPress, CSS, and HTML.";
        let bulletTwoCUNY = "Troubleshoot bugs from the existing website to decrease load times by 10%.";
        let bulletThreeCUNY = "Improved user experience and increased applications by 16% by experimenting with design changes.";
        
        date.innerHTML = dateCUNY;
        company.innerHTML = companyCUNY;
        title.innerHTML = titleCUNY;
        bulletOne.innerHTML = bulletOneCUNY;
        bulletTwo.innerHTML = bulletTwoCUNY;
        bulletThree.innerHTML = bulletThreeCUNY;

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
    }
    function DisplayMeta(){
        const title = document.getElementById("experienceTitle");
        const date = document.getElementById("experienceDate");
        const company = document.getElementById("company");
        const bulletOne = document.getElementById("bulletOne");
        const bulletTwo = document.getElementById("bulletTwo");
        const bulletThree = document.getElementById("bulletThree")
        const experienceOne = document.getElementById("experienceOne");
        const experienceTwo = document.getElementById("experienceTwo");
        const experienceThree = document.getElementById("experienceThree");
        const barOne = document.getElementById("barOne");
        const barTwo = document.getElementById("barTwo");
        const barThree = document.getElementById("barThree");

        let titleMeta = "ABCS Program";
        let dateMeta = "Aug 2022 - Nov 2022";
        let companyMeta = "@ Meta";
        let bulletOneMeta = "Participated in a 9-week program focused on mastering critical data structures and algorithms.";
        let bulletTwoMeta = " Engaged by answering interview-type questions with peers and engineers.";
        let bulletThreeMeta = "Networked with Meta engineers to learn best practices in software engineering.";

        date.innerHTML = dateMeta;
        company.innerHTML = companyMeta;
        title.innerHTML = titleMeta;
        bulletOne.innerHTML = bulletOneMeta;
        bulletTwo.innerHTML = bulletTwoMeta;
        bulletThree.innerHTML = bulletThreeMeta;

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
                            <p className="bodyP" id="experienceTitle">Website Developer </p>
                            <span id="company"> @ Research Foundation CUNY</span>
                        </div>
                        <p className="smallP" id="experienceDate">June 2022 - Present</p>
                        <ul className="experienceDescription">
                                <li className="experienceBullet" id="bulletOne">
                                Update and maintain the CEESP program website using WordPress, CSS, and HTML.
                                </li>
                                <li className="experienceBullet" id="bulletTwo">
                                Troubleshoot bugs from the existing website to decrease load times by 10%.
                                </li>
                                <li className="experienceBullet" id="bulletThree">
                                Improved user experience and increased applications by 16% by experimenting with design changes.
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience