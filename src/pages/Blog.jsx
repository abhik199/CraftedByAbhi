import OwlCarousel from "react-owl-carousel";

const Blog = () => {
  const blogPosts = [
    {
      title: "What Makes Users Want to Share a Video on Social Media?",
      date: "Jan 03, 2020",
      comments: "05 Comment",
      excerpt:
        "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...",
      link: "#",
    },
    {
      title: "Bumper Ads: How to Tell a Story in 6 Seconds",
      date: "Jan 03, 2020",
      comments: "05 Comment",
      excerpt:
        "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...",
      link: "#",
    },
    {
      title: "Bumper Ads: How to Tell a Story in 6 Seconds",
      date: "Jan 03, 2020",
      comments: "05 Comment",
      excerpt:
        "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...",
      link: "#",
    },
    {
      title: "Bumper Ads: How to Tell a Story in 6 Seconds",
      date: "Jan 03, 2020",
      comments: "05 Comment",
      excerpt:
        "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...",
      link: "#",
    },
    {
      title: "Bumper Ads: How to Tell a Story in 6 Seconds",
      date: "Jan 03, 2020",
      comments: "05 Comment",
      excerpt:
        "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...",
      link: "#",
    },
    // Add more blog posts as needed
  ];

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <section className="latest spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-title">
                <span>Our Blog</span>
                <h2>Blog Update</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <OwlCarousel className="latest__slider owl-carousel" {...options}>
              {blogPosts.map((post, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="blog__item latest__item">
                    <h4>{post.title}</h4>
                    <ul>
                      <li>{post.date}</li>
                      <li>{post.comments}</li>
                    </ul>
                    <p>{post.excerpt}</p>
                    <a href={post.link}>
                      Read more <span className="arrow_right" />
                    </a>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
