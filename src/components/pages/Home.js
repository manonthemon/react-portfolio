import React from "react";

// function Home() {
//   return (
//     <div>
//       <h2 classNameName="title">About Me</h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
//         varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
//         Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
//         imperdiet ac.
//       </p>
//     </div>
//   );
// }

// export default Home;

function Home() {
  return (
    <section className="jumbotro jumbotron-fluid hero">
    <div className="container text-center text-lg-left">
        <div className="row">
            <div className="col-lg-8 heroCopy">
                <h1 className="display-4">Maciek Klimowicz</h1>
                <p className="lead">Looking for a passionate front-end developer? Need an experienced SEO professional
                    to boost your business? You're after some quality content for your website? Look no further!
                </p>
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




