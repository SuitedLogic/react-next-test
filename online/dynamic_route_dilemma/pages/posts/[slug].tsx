import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostBySlug, Post } from '../../lib/posts';
import { JSX } from 'react';

interface PostPageProps {
  post: Post | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);
  return { props: { post } };
};

export default function PostPage({ post }: PostPageProps): JSX.Element {
  return (
    <article>
      <h1>{post?.title || 'Untitled Post'}</h1>
      <p>{post?.content}</p>
    </article>
  );
}