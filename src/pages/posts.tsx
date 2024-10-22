import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
    
    if (error) console.log('Error fetching posts:', error)
    else setPosts(data)
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}