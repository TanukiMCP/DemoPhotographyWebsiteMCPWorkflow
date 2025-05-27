import Image from 'next/image';
import Link from 'next/link';
import { Typography, Container } from '@/components/ui';
import { getAllBlogPosts } from '@/lib/blog-data';

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-cream to-warm-white">
        <Container size="lg" padding="lg">
          <div className="text-center">
            <Typography variant="h1" className="mb-4">
              Stories from the Road
            </Typography>
            <Typography variant="lead" className="text-charcoal-600 mb-8 max-w-3xl mx-auto">
              Travel stories, photography insights, and cultural reflections from Elena&apos;s journeys around the world
            </Typography>
            <div className="w-24 h-1 bg-terracotta-600 mx-auto mb-12"></div>
          </div>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <Container size="lg" padding="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative overflow-hidden rounded-lg mb-6 aspect-[16/10]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-charcoal-600">
                      <span className="bg-terracotta-100 text-terracotta-700 px-3 py-1 rounded-full font-medium">
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
                    
                    <Typography variant="h3" className="group-hover:text-terracotta-600 transition-colors duration-300">
                      {post.title}
                    </Typography>
                    
                    <Typography variant="body" className="text-charcoal-600 leading-relaxed">
                      {post.excerpt}
                    </Typography>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}