import OwlCarousel from "react-owl-carousel";

const HeroSection = () => {
  const heroItems = [
    {
      text: "For website development, IoT projects, robotics, and electronics",
      title: "Developer’s Portfolio",
      img: "img/vector-may-2021-42.jpg", // Update this image to something more relevant if needed
      link: "/developer", // Change this to the appropriate route in your app
    },
  ];

  return (
    <section className="hero">
      <OwlCarousel
        className="hero__slider owl-carousel"
        items={1}
        loop
        autoplay
      >
        {heroItems.map((item, index) => (
          <div
            key={index}
            className="hero__item set-bg"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero__text">
                    <span>{item.text}</span>
                    <h2>{item.title}</h2>
                    <a href={item.link} className="primary-btn">
                      See more about us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
};

export default HeroSection;
