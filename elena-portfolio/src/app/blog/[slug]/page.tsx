import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Typography, Container } from '@/components/ui';
import { getBlogPostById, getAllBlogPosts } from '@/lib/blog-data';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostById(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 h-full flex items-center">
          <Container size="lg" padding="lg">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 text-white/80 mb-4">
                <span className="bg-terracotta-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}</span>
              </div>
              
              <Typography variant="h1" className="text-white mb-4">
                {post.title}
              </Typography>
              
              <Typography variant="lead" className="text-white/90 max-w-3xl">
                {post.excerpt}
              </Typography>
            </div>
          </Container>
        </div>
      </section>      {/* Article Content */}
      <section className="section-padding">
        <Container size="md" padding="lg">
          <article className="prose prose-lg prose-charcoal max-w-none">
            <div className="whitespace-pre-line leading-relaxed">
              {post.content}
            </div>
          </article>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-charcoal/20">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-cream px-3 py-1 rounded-full text-sm text-charcoal-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-charcoal/20">
            <Link 
              href="/blog"
              className="inline-flex items-center text-terracotta-600 hover:text-terracotta-700 font-medium"
            >
              ← Back to all stories
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}