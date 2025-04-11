export interface Post {
    slug: string;
    title?: string;
    content: string;
  }
  
  const posts: Post[] = [
    { slug: 'hello-world', title: 'Hello World', content: 'Welcome to Next.js!' },
    { slug: 'test-post', title: 'Test Post', content: 'This is a test' }
  ];
  
  export const getPostBySlug = (slug: string): Post | null => 
    posts.find(post => post.slug === slug) || null;
  
  export const getPopularPosts = (): Post[] => posts;