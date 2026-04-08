import BLOGS from "../lib/blogs"

const BlogSection = () => {
    return (
      <section className="blogs" id="blogs">
        <div className="section-header">
          <p className="subtitle">BLOG</p>
          <h2 className="title">Our Latest Posts</h2>
        </div>
        <div className="blogs-grid">
          {BLOGS.map((post, i) => (
            <div className="blog-card" key={i}>
              <img src={post.img} alt={post.title} className="blog-img" />
              <p className="blog-date">{post.date}</p>
              <h3 className="blog-title">{post.title}</h3>
              <a href="#read" className="read-more">READ MORE</a>
            </div>
          ))}
        </div>
      </section>
    )
}

export default BlogSection;