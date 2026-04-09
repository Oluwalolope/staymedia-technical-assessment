import { useWordPress } from '../store/WordPressContext';

const BlogSection = () => {
    const { wpData, posts, loading, error } = useWordPress();

    if (loading) return <section className="blogs"><div>Loading Posts...</div></section>;
    if (error) return null;

    const acf = wpData?.acf;

    return (
      <section className="blogs" id="blogs">
        <div className="section-header">
          <p className="subtitle">{acf?.blog_subheading || "Blog"}</p>
          <h2 className="title">{acf?.blog_heading || "Our Latest Posts"}</h2>
        </div>
        
        <div className="blogs-grid">
          {posts.map((post) => {
            const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/placeholder.jpg";
            
            
            const date = new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });

            return (
              <div className="blog-card" key={post.id}>
                <img src={imageUrl} alt={post.title.rendered} className="blog-img" />
                <p className="blog-date">{date}</p>
                <h3 
                    className="blog-title" 
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
                />
                <a href={post.link} target="_blank" rel="noreferrer" className="read-more">
                    READ MORE
                </a>
              </div>
            );
          })}
        </div>
      </section>
    )
}

export default BlogSection;