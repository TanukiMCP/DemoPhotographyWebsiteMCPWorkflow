export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'behind-the-lens-morocco',
    title: 'Behind the Lens in Morocco',
    excerpt: 'Exploring the vibrant markets of Marrakech taught me that the best photographs emerge from genuine connections with the people who call these ancient spaces home.',
    content: `# Behind the Lens in Morocco

The call to prayer echoes across Marrakech's medina as I adjust my camera settings for the golden hour light. After three weeks documenting Morocco's markets, I've learned that the most powerful photographs aren't captured—they're gifted.

## The Art of Patience

In the spice markets, I met Hassan, a third-generation merchant. When I first approached with my camera, he politely declined. But after sharing mint tea and learning about his family's trade, he invited me to document his morning ritual.

The resulting photograph—Hassan's hands cupping golden turmeric as morning light streams through the souk—became one of my most celebrated images. More importantly, it represents genuine human connection that transcends cultural boundaries.

## Technical Insights

**Camera Settings:** f/2.8, ISO 800-1600, 1/60s minimum for low light conditions. Shoot in RAW for color accuracy with warm tungsten lighting.

**Essential Gear:** 35mm f/1.4 for environmental shots, 85mm f/1.8 for portraits, circular polarizer for reflections.

## Cultural Sensitivity

Photography in Morocco requires deep respect for local customs. I always ask permission, learn basic Arabic phrases, offer to share images with subjects, dress modestly, and hire local guides.

*Next month: insights from documenting temple ceremonies in Kyoto.*`,
    author: 'Elena Vasquez',
    publishDate: '2024-01-15',
    readTime: '6 min read',
    category: 'Photography Insights',
    tags: ['Morocco', 'Cultural Photography', 'Travel', 'Techniques'],
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
    featured: true
  },  {
    id: 'art-of-cultural-sensitivity',
    title: 'The Art of Cultural Sensitivity',
    excerpt: 'Eight years of travel photography have taught me that the most important skill isn\'t technical—it\'s the ability to approach each culture with humility, respect, and genuine curiosity.',
    content: `# The Art of Cultural Sensitivity

In my eight years documenting cultures across 40+ countries, I've learned that the camera is the least important tool in my kit. The most crucial skill is something no photography school teaches: cultural sensitivity.

## Beyond the Tourist Gaze

Too often, travel photography perpetuates what Susan Sontag called "the tourist gaze"—reducing complex cultures to exotic stereotypes. When I first started photographing in India, I was guilty of this myself.

It was an elderly woman in a Rajasthani village who changed my perspective. After I photographed her without permission, she gently but firmly explained how my actions made her feel like a museum exhibit rather than a human being. That conversation transformed my approach forever.

## Building Genuine Connections

In Peru's Sacred Valley, I spent three days with a Quechua family before taking a single photograph. We shared meals, I helped with daily chores, and slowly, trust developed. When I finally did photograph their traditional weaving ceremony, it wasn't as an outsider looking in—it was as someone who had been welcomed into their world.

## Key Principles

- **Collaborative storytelling**: Subjects have input on how they're portrayed
- **Fair compensation**: When appropriate, I pay for people's time and stories  
- **Image sharing**: Subjects receive copies of their photographs
- **Context preservation**: I never remove images from their cultural context
- **Ongoing relationships**: Many subjects have become lifelong friends

## The Responsibility of the Lens

Every photograph we take as cultural outsiders carries responsibility. We have the power to either perpetuate harmful stereotypes or contribute to genuine cross-cultural understanding.

When I photograph a temple ceremony in Japan, a festival in Peru, or daily life in an Indian village, I ask myself: "Does this image honor the dignity and complexity of these people?"

*Next post: specific techniques for building trust with subjects in unfamiliar cultural contexts.*`,
    author: 'Elena Vasquez',
    publishDate: '2024-01-08',
    readTime: '8 min read',
    category: 'Cultural Insights',
    tags: ['Ethics', 'Cultural Photography', 'Travel', 'Respect'],
    coverImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=600&fit=crop',
    featured: true
  },  {
    id: 'capturing-authentic-moments-peru',
    title: 'Capturing Authentic Moments in Peru',
    excerpt: 'My recent expedition to document traditional festivals in Peru\'s Sacred Valley revealed how ancient traditions adapt and thrive in the modern world.',
    content: `# Capturing Authentic Moments in Peru

The sound of panpipes echoes across the Sacred Valley as dancers in vibrant costumes prepare for the Inti Raymi celebration. After six weeks documenting traditional festivals throughout Peru, I've witnessed how ancient traditions don't just survive in the modern world—they evolve and thrive.

## The Living Culture

Many travelers expect to find Peru's indigenous cultures frozen in time, unchanged since the Inca empire. The reality is far more dynamic and inspiring. In Cusco, I met Carlos, a 28-year-old software developer who also serves as a traditional dance instructor.

"Culture isn't a museum piece," Carlos told me. "It's alive, breathing, changing. We honor our past by making it relevant to our present."

## Festival Photography Challenges

**Technical Considerations:**
- **Movement**: Dancers move quickly; use 1/250s minimum shutter speed
- **Costumes**: Vibrant colors can fool camera meters; shoot in manual mode
- **Crowds**: 70-200mm lens essential for intimate shots from distance
- **Altitude**: At 11,000+ feet, both photographer and equipment need adjustment

**Cultural Considerations:**
- **Sacred elements**: Some ceremonies are not meant to be photographed
- **Permission protocols**: Work with community leaders, not just individuals
- **Timing**: Arrive early to understand the ceremony's spiritual significance

## The Weaving Stories

In the village of Chinchero, I spent time with master weaver Esperanza, whose hands carry 60 years of textile knowledge. Each pattern tells a story—mountains, rivers, agricultural cycles, family histories. Watching her teach her granddaughter while discussing the girl's university plans revealed the beautiful complexity of modern indigenous life.

## Lessons in Resilience

What struck me most was the resilience of Peruvian culture. Despite centuries of colonization and globalization pressures, communities have found ways to maintain their identity while embracing beneficial changes.

*Next week: technical tips for high-altitude photography and extreme weather conditions.*`,
    author: 'Elena Vasquez',
    publishDate: '2024-01-22',
    readTime: '7 min read',
    category: 'Project Stories',
    tags: ['Peru', 'Festivals', 'Cultural Photography', 'Travel'],
    coverImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&h=600&fit=crop',
    featured: true
  },  {
    id: 'sacred-spaces-japan',
    title: 'The Sacred Spaces of Japan',
    excerpt: 'Photographing in Japan\'s temples and shrines requires more than technical skill—it demands an understanding of spiritual etiquette and the patience to wait for authentic moments.',
    content: `# The Sacred Spaces of Japan

The morning mist rises from the temple gardens as monks begin their daily meditation. In Japan, I've learned that photographing sacred spaces isn't just about capturing beautiful architecture—it's about understanding the spiritual rhythms that give these places meaning.

## Respect First, Photography Second

Japanese temples and shrines operate on principles of respect, mindfulness, and spiritual harmony. Before I photograph in any sacred space, I seek proper permission, learn the etiquette, observe quietly, follow photography restrictions, and make appropriate donations.

## The Rhythm of Sacred Life

At Kiyomizu-dera in Kyoto, I spent three days observing before photographing. The temple has different energies throughout the day: contemplative mornings, bustling midday tourist periods, and peaceful evening ceremonies.

The most powerful images came during early morning hours, when local worshippers came for private prayer. These weren't tourists seeking photo opportunities—they were people engaging in genuine spiritual practice.

## Technical Approaches

**Low Light Mastery:**
- Temple interiors often prohibit flash
- Use f/1.4-2.8 lenses for available light
- ISO 1600-3200 with modern cameras
- Stabilization essential for handheld shots

## The Garden Philosophy

Japanese temple gardens embody principles of balance, impermanence, and natural harmony. In Ryoan-ji's famous rock garden, I spent hours observing how light and shadow changed the relationships between the stones.

## Lessons in Mindfulness

Working in Japanese sacred spaces has profoundly influenced my photography practice. The emphasis on mindfulness, respect for tradition, and attention to subtle details has made me a more thoughtful photographer overall.

*Upcoming: how different cultures approach the relationship between photography and spirituality.*`,
    author: 'Elena Vasquez',
    publishDate: '2024-01-29',
    readTime: '6 min read',
    category: 'Spiritual Photography',
    tags: ['Japan', 'Temples', 'Spirituality', 'Cultural Photography'],
    coverImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=600&fit=crop',
    featured: false
  }
];

export const getAllBlogPosts = (): BlogPost[] => blogPosts;
export const getBlogPostById = (id: string): BlogPost | undefined => 
  blogPosts.find(post => post.id === id);
export const getFeaturedBlogPosts = (): BlogPost[] => 
  blogPosts.filter(post => post.featured);
export const getBlogPostsByCategory = (category: string): BlogPost[] =>
  blogPosts.filter(post => post.category === category);
export const getBlogPostsByTag = (tag: string): BlogPost[] =>
  blogPosts.filter(post => post.tags.includes(tag));