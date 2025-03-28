import { useState } from "react";
import blogData from "../../data/blogData";
import "./Blog.css";

function Blog() {
  const [activePost, setActivePost] = useState(null);

  const handlePostClick = (post) => {
    setActivePost(post);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActivePost(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="blog" id="blog">
      <h1 className="blog__title">my writings</h1>

      <div className="blog__grid">
        {blogData.map((post) => (
          <article
            key={post.id}
            className="blog__card"
            onClick={() => handlePostClick(post)}
          >
            <h2 className="blog__card-title">{post.title}</h2>
            <p className="blog__card-date">
              {post.date} • {post.readTime}
            </p>
            <p className="blog__card-excerpt">{post.excerpt}</p>
            <div className="blog__card-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog__tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {activePost && (
        <div className="blog__modal-overlay" onClick={closeModal}>
          <div className="blog__modal" onClick={(e) => e.stopPropagation()}>
            <button className="blog__modal-close" onClick={closeModal}>
              ×
            </button>
            <h2 className="blog__modal-title">{activePost.title}</h2>
            <p className="blog__modal-meta">
              {activePost.date} • {activePost.readTime}
            </p>
            <div
              className="blog__modal-content"
              dangerouslySetInnerHTML={{ __html: activePost.content }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Blog;
