import blogPosts from '../data/blog/posts.json';

/**
 * Get all blog posts
 * @returns {Array} Array of all blog posts
 */
export function getAllPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get a single blog post by slug
 * @param {string} slug - Post slug
 * @returns {Object|null} Blog post or null if not found
 */
export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug) || null;
}

/**
 * Get posts by category
 * @param {string} category - Category name
 * @returns {Array} Array of posts in the category
 */
export function getPostsByCategory(category) {
  return blogPosts
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get all unique categories
 * @returns {Array} Array of unique category names
 */
export function getAllCategories() {
  return [...new Set(blogPosts.map(post => post.category))];
}

/**
 * Get recent posts
 * @param {number} limit - Number of posts to return
 * @returns {Array} Array of recent posts
 */
export function getRecentPosts(limit = 5) {
  return getAllPosts().slice(0, limit);
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Generate SEO meta tags for a blog post
 * @param {Object} post - Blog post object
 * @returns {Object} SEO meta tags object
 */
export function generateSEOTags(post) {
  return {
    title: `${post.title} — Infin8 Automation Blog`,
    description: post.excerpt,
    keywords: `E-2 visa, business automation, ${post.category.toLowerCase()}`,
    ogTitle: post.title,
    ogDescription: post.excerpt,
    ogType: 'article',
  };
}

