// AboutMe.js
import React from "react";

const AboutMe = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h2 className="mb-4">About Me</h2>
        <p className="lead">
          Hi there! I'm <strong>Mahesh Bedade</strong>, an aspiring software
          developer with a passion for building innovative solutions. I've
          completed my bachelor's degree in <strong>computer science</strong>{" "}
          from <strong>Savitribai Phule Pune University</strong>. I'm eager to
          contribute to the ever-evolving world of technology.
        </p>
      </div>

      <div className="row mt-5 justify-content-center">
        <div className="col-md-9 skills-section">
          <h2 className="mb-4 text-center">Technical Skills</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, Redux
              Toolkit, React Router, Tailwind CSS, Bootstrap
            </li>
            <li className="list-group-item">
              <strong>Backend:</strong> Node.js, Express.js, RESTful APIs, AWS
              (S3), EC2
            </li>
            <li className="list-group-item">
              <strong>Database:</strong> MySQL, MongoDB, Mongoose (ODM),
              Sequelize (ORM)
            </li>
            <li className="list-group-item">
              <strong>Testing:</strong> Jest, React Testing Library, Postman
            </li>
            <li className="list-group-item">
              <strong>Version Control:</strong> Git
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="mb-4">Projects</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card project-card mb-3">
              <div className="card-body">
                <h5 className="card-title">
                  End-to-End-Expense-Tracking-System
                </h5>
                <p className="card-text">
                  Developed dynamic Full Stack Expense Tracker
                </p>
                <a
                  href="https://github.com/maheshWebDev/End-to-End-Expense-Tracking-System"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card project-card mb-3">
              <div className="card-body">
                <h5 className="card-title">Video-Streaming-Application</h5>
                <p className="card-text">
                  Developed an online video streaming platform leveraging
                  YouTube Live API
                </p>
                <a
                  href="https://github.com/maheshWebDev/video_streaming_application"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="mb-4">Learning Experiences</h2>
        <p className="learning-text">
          Over the past year, I've undergone comprehensive training with
          Sharpener Tech, enhancing my skills in various aspects of software
          development. Additionally, I've actively pursued learning on platforms
          like Udemy, gaining proficiency in the mentioned technologies.
        </p>
      </div>

      <div className="mt-5">
        <h2 className="mb-4">Future Goals</h2>
        <p className="goals-text">
          Looking forward, my primary goal is to delve deeper into the world of
          full-stack development. I am excited about the prospect of seamlessly
          working across both frontend and backend technologies to create
          holistic and efficient software solutions.
        </p>
      </div>

      <div className="mt-5">
        <h2 className="mb-4">Contact Information</h2>
        <p className="contact-text">
          Feel free to connect with me! You can reach me via email at{" "}
          <strong>bedade.mahesh@outlook.com</strong>. Let's connect on{" "}
          <a
            href="https://www.linkedin.com/in/mahesh-bedade-898aaa17a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
            style={{ marginInlineEnd: "10px" }} // Adjust the value as needed
          >
            LinkedIn
          </a>
          and explore the possibilities together.
        </p>
      </div>

      <div className="text-center mt-5">
        <p className="closing-text">
          Thank you for taking the time to learn more about me. I'm enthusiastic
          about contributing to the tech community and eager to embark on new
          challenges. Let's build something amazing together!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
