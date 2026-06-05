export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Enterprise Software",
    excerpt: "How large language models are transforming everyday business operations.",
    content: [
      "Artificial Intelligence is no longer just a buzzword; it's a fundamental shift in how businesses operate, scale, and deliver value to their customers.",
      "The Rise of Large Language Models",
      "In recent years, the capabilities of Large Language Models (LLMs) have expanded exponentially. What started as simple text completion has evolved into complex reasoning, code generation, and sophisticated semantic understanding.",
      "Key Areas of Transformation",
      "As we move forward, the competitive advantage will heavily tilt towards organizations that not only adopt AI but seamlessly weave it into their organizational DNA."
    ],
    category: "Artificial Intelligence",
    author: "Tural Valizada",
    date: "Oct 24, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "Building Scalable Data Pipelines",
    excerpt: "A comprehensive guide to modern data engineering practices.",
    content: [
      "Data pipelines are the lifelines of modern businesses.",
      "Understanding modern data architecture and cloud integration is critical to unlocking the potential of unstructured data.",
      "In this guide, we explore the best tools available in 2026 for building fault-tolerant architectures."
    ],
    category: "Data Engineering",
    author: "Tech Team",
    date: "Oct 18, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "UI/UX Trends for 2027",
    excerpt: "What to expect in user interface design next year.",
    content: [
      "The UI/UX landscape is constantly shifting.",
      "Next year, we expect hyper-personalized interfaces powered by real-time analytics to dominate.",
      "Glassmorphism and neo-brutalism are evolving into more mature, accessible design languages."
    ],
    category: "Design",
    author: "Design Team",
    date: "Oct 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
  }
];
