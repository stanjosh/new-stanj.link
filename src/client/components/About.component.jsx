
const About = () => {
    return (

        
        <div className="about">
          
          <div>
          <h2>about me</h2>
          
          
          <div className="textBoxBorder">
            <div className="photo" style={{ backgroundImage: "url(/assets/images/josh.jpg)" }} />
            <div>
              <p>
              Tech enthusiast motivated by solving problems for developers, 
              management, and end users. Strong experience with planning and support, 
              team skills and written communication.
              </p>

              <p>
              I&apos;m originally from Maine and I love to cook and play video games.
              
              {" "}
              
              </p>
            </div>
            </div>
          </div>
          <div className="about" style={{width: "100%"}}>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>SQL</li>
          </ul>
          </div>
        </div>


    )
}

export default About;