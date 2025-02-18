import { assets } from '../../assets/assets';
function Customer() {
  return (
    <div>
      <section className="customer-reviews font-outfit" id="Review">
        <h1>
          Customer <span>Review</span>
        </h1>
        <div className="review-block">
          <div
            className="review-card"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <img src="review_1.png" alt="an image" className="cust-img" />
            <h2>John Deo</h2>
            <img src={assets.rating_stars}></img>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              ipsam similique inventore reprehenderit nesciunt, officia esse
              saepe illum
            </p>
          </div>

          <div
            className="review-card"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <img src="review_4.png" alt="an image" className="cust-img" />
            <h2>Smith John</h2>
            <img src={assets.rating_stars}></img>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              ipsam similique inventore reprehenderit nesciunt, officia esse
              saepe illum
            </p>
          </div>

          <div
            className="review-card"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <img src="review_3.png" alt="an image" className="cust-img" />
            <h2>john Maxewal</h2>
            <img src={assets.rating_stars}></img>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              ipsam similique inventore reprehenderit nesciunt, officia esse
              saepe illum
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Customer;
