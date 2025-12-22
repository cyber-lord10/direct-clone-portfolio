import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export const SEO = ({ title, description, canonical = "/" }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
    
    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", description);
    
    // Update Twitter tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", description);
    
    // Update canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute("href", `https://nzenongbraxton.com${canonical}`);
  }, [title, description, canonical]);

  return null;
};
