function Team() {
  return (
    <div>
      <section className="team">
        <h1>
          Our <span>Team</span>
        </h1>
        <div className="team-members">
          <div className="cheif-pic-box">
            {' '}
            <img
              src="chef1.png"
              alt="an image"
              className="cheif-pic"
              data-aos="zoom-in-up"
            />{' '}
          </div>
          <div className="cheif-pic-box">
            <img
              src="chef2.png"
              alt="an image"
              className="cheif-pic"
              data-aos="zoom-in-up"
            />
          </div>
          <div className="cheif-pic-box">
            <img
              src="chef3.jpg"
              alt="an image"
              className="cheif-pic"
              data-aos="zoom-in-up"
            />
          </div>
          <div className="cheif-pic-box">
            <img
              src="chef4.jpg"
              alt="an image"
              className="cheif-pic"
              data-aos="zoom-in-up"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
