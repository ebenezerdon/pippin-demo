import React, { Fragment } from 'react';
import { Navbar } from '../navBar';
import './home.css';

const HomeComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <div id="landingPage">
        <div className="title-div">
          <div>
            <div>
              <h1>Learning made easy with learnGround</h1>
            </div>
            <div className="get-started">
              <p> Get Started </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-div">
        <div style={{ width: '65%', margin: '0 auto' }}>
          <h2> ABOUT LEARNGROUD </h2>
          <h3 style={{ fontSize: '18px', fontWeight: 'bolder' }}>
            Learnground brings the digital experience that comes with learning
            to secondary school students. It is a platform where students from
            various secondary schools learning different things can interact
            with each other while uploading what they have learnt recently. With
            Learnground learning is fun!
          </h3>
        </div>
        <div className="about-content-div">
          <div className="about-text">
            <i className="fas fa-pencil-alt" />
            <div>
              <p>
                I believe myself that a good writer doesn’t really need to be
                told anything except to keep at it.
                <i style={{ color: '#03d6f5' }}> -Chinua Achebe</i>. &nbsp;
              </p>
            </div>
          </div>
          <div className="about-text">
            <i className="fas fa-book-open" />
            <div>
              <p>
                "Read a thousand books, and your words will flow like a river"
                <i style={{ color: '#03d6f5' }}> - Lisa See</i>. &nbsp; At learn
                ground we are inspired by our world through words, words that
                bring about innovation, spur great revolution in our lives.
                Reading is our habit here, we are future leaders. "A reader
                lives a thousand lives before he dies . The man who never reads
                lives only one.”{' '}
                <i style={{ color: '#03d6f5' }}> – George R.R. Martin.</i>.
                &nbsp;
              </p>
            </div>
          </div>
          <div className="about-text">
            <i className="fas fa-users" />
            <div>
              <p>
                Learners do not exist in isolation. At LeanGround, we create an
                enabling environment for like minded learners to collaborate and
                bring out the potentials in them.
              </p>
            </div>
          </div>
        </div>
        <div className="interested-in-learnground">
          <p>
            INTERESTED IN LEARNGROUND? DONT BE LEFT{' '}
            <span className="out">OUT </span>{' '}
          </p>
          <span className="register">REGISTER</span>
        </div>
        <hr
          style={{ width: '80%', marginTop: '70px', backgroundColor: '#eee' }}
        />
        <div className="top-learners-div-container">
          <div>
            <h3>TOP LEARNERS</h3>
            <p>LearnGround's most influencial learners of the year.</p>
          </div>
          <dir className="top-learners-div">
            <div className="top-learners-profile">
              <img
                src="https://previews.123rf.com/images/rahultiwari3190/rahultiwari31901605/rahultiwari3190160500123/57910047-a-young-beautiful-indian-college-student-isolated-white-background.jpg"
                alt="Top learner"
                className="top-learners-profile-pix"
              />
              <p> ANI JASMINE</p>
            </div>

            <div className="top-learners-profile">
              <img
                src="https://previews.123rf.com/images/rahultiwari3190/rahultiwari31901605/rahultiwari3190160500123/57910047-a-young-beautiful-indian-college-student-isolated-white-background.jpg"
                alt="Top learner"
                className="top-learners-profile-pix"
              />
              <p> ANI JASMINE</p>
            </div>

            <div className="top-learners-profile">
              <img
                src="https://previews.123rf.com/images/rahultiwari3190/rahultiwari31901605/rahultiwari3190160500123/57910047-a-young-beautiful-indian-college-student-isolated-white-background.jpg"
                alt="Top learner"
                className="top-learners-profile-pix"
              />
              <p> ANI JASMINE</p>
            </div>
          </dir>
        </div>
        <div className="landingPage-video-div">
          <h4>WHAT YOU NEED TO KNOW ABOUT LEARNING</h4>
          <div>
            <iframe
              width="760"
              height="415"
              src="https://www.youtube.com/embed/5JKgUoY9pTg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;
                            picture-in-picture"
              allowFullScreen
              title="Learning simplified"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeComponent;
