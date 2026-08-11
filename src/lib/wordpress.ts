/**
 * Headless WordPress API Integration Helper
*/

export interface WPPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  modified: string;
  author_name?: string;
  featured_image_url?: string;
  categories_names?: string[];
}

export interface ContactFormPayload {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export interface FormSubmissionResult {
  success: boolean;
  message: string;
}

// Configurable WordPress API Base URL
const WP_BASE_URL =
  import.meta.env.PUBLIC_WORDPRESS_API_URL ||
  "https://cms.aleddotechnologies.ae/wp-json";

/**
 * Fetch published blog posts
 */
export async function getWPPosts(page = 1, perPage = 10): Promise<WPPost[]> {
  try {
    const res = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`
    );
    if (!res.ok) {
      console.warn(`[WordPress API] Failed to fetch posts: ${res.statusText}`);
      return [];
    }

    const rawPosts = await res.json();
    return rawPosts.map((post: any) => ({
      id: post.id,
      slug: post.slug,
      title: { rendered: post.title?.rendered || "" },
      excerpt: { rendered: post.excerpt?.rendered || "" },
      content: { rendered: post.content?.rendered || "" },
      date: post.date,
      modified: post.modified,
      author_name: post._embedded?.author?.[0]?.name || "Aleddo Team",
      featured_image_url:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || undefined,
      categories_names:
        post._embedded?.["wp:term"]?.[0]?.map((term: any) => term.name) || [],
    }));
  } catch (error) {
    console.error("[WordPress API Error]", error);
    return [];
  }
}

/**
 * Fetch a single blog post
 */
export async function getWPPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/posts?_embed&slug=${encodeURIComponent(slug)}`
    );
    if (!res.ok) return null;

    const rawPosts = await res.json();
    if (!rawPosts || rawPosts.length === 0) return null;

    const post = rawPosts[0];
    return {
      id: post.id,
      slug: post.slug,
      title: { rendered: post.title?.rendered || "" },
      excerpt: { rendered: post.excerpt?.rendered || "" },
      content: { rendered: post.content?.rendered || "" },
      date: post.date,
      modified: post.modified,
      author_name: post._embedded?.author?.[0]?.name || "Aleddo Team",
      featured_image_url:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || undefined,
      categories_names:
        post._embedded?.["wp:term"]?.[0]?.map((term: any) => term.name) || [],
    };
  } catch (error) {
    console.error("[WordPress API Error]", error);
    return null;
  }
}

/**
 * Submit Contact Us form entry to WordPress
 */
export async function submitWPContactForm(
  payload: ContactFormPayload,
  customEndpointUrl?: string
): Promise<FormSubmissionResult> {
  const endpoint =
    customEndpointUrl ||
    import.meta.env.PUBLIC_WP_CONTACT_ENDPOINT ||
    `${WP_BASE_URL}/wp-json/contact-form-7/v1/contact-forms/1/feedback`;

  try {
    const formData = new FormData();
    formData.append("your-name", payload.name);
    formData.append("your-email", payload.email);
    if (payload.company) formData.append("your-company", payload.company);
    if (payload.service) formData.append("your-service", payload.service);
    formData.append("your-message", payload.message);

    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      return {
        success: false,
        message: "Unable to connect to contact server. Please try again or email us directly.",
      };
    }

    const data = await res.json();
    if (data.status === "mail_sent" || data.success) {
      return {
        success: true,
        message: "Thank you for reaching out! Our team will get back to you within 24 hours.",
      };
    }

    return {
      success: false,
      message: data.message || "Message submission failed. Please verify your details.",
    };
  } catch (error) {
    console.error("[WP Contact Form Submission Error]", error);
    return {
      success: false,
      message: "Network error submitting form. Please check your connection and try again.",
    };
  }
}
