import React from "react";
import "./style.css";

//The layout of the front page with jumbotron, hero image and buttons with links

function Home() {
  return (
    <section className="jumbotron jumbotron-fluid hero">
    <div className="container text-center text-lg-left">
        <div className="row">
            <div className="col-lg-8 heroCopy">
                <h1 className="display-4">Maciek Klimowicz</h1>
                <p className="lead">Looking for a passionate front-end developer? Need an experienced SEO professional
                    to boost your business? You're after some quality content for your website? Look no further!
                </p>
                <span className="text-center d-inline-block">
                        <a className="button btn-primary btn-lg w-100 heroButton" href="https://github.com/manonthemon" role="button">GitHub</a>
                    </span>
                    <span className="text-center d-inline-block">
                        <a className="button btn-primary btn-lg w-100 heroButton" href="https://www.linkedin.com/in/maciek-klimowicz/" role="button">LinkdIn</a>
                    </span>
                    <span className="text-center d-inline-block">
                        <a class="button btn-primary btn-lg w-100 heroButton" href="mailto: abc@example.com" role="button">email me</a>
                    </span>
                    <span className="text-center d-inline-block">
                        <a className="button btn-primary btn-lg w-100 heroButton" href="https://drive.google.com/file/d/1_Wn25qeTscIHbRt_DzlKggkDEQOf5MEr/view?usp=share_link" role="button">resume</a>
                    </span>
            </div>
            <div className="col-lg-4 heroPhoto">
            <img src="https://media.licdn.com/dms/image/D4D03AQGmFxwUV1qYwA/profile-displayphoto-shrink_800_800/0/1664317835109?e=2147483647&v=beta&t=66mc2UBSDdgjRXmCDz110qoc53yp1Of4Wq-BPi2bSDU"alt="Portrait of the page author" className="img-fluid" />
            </div>
        </div>
    </div>
    </section>
  )
}

export default Home;




