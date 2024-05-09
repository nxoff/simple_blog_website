async function getBlogs() {
  const res = await fetch('http://localhost:4000/blogs', {
    next: {
      revalidate: 0
    }
  })

  return res.json()
}

export default async function BlogList() {
  const blogs = await getBlogs()

  return (
    <section className="blogs-container">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-box">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      ))}
      {blogs.length === 0 && (
        <p className="error">No data lol</p>
      )}
    </section>
  )
}
