import { NextSeo, ArticleJsonLd } from 'next-seo';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Lodha Villa Royale Palava | 3 & 4 BHK Luxury Villas in Dombivli West, Thane",
  description = "Book your dream home at Lodha Villa Royale Palava Dombivli West. Spacious 3 & 4 BHK luxury villas and land starting at ₹2 Crores*. 20.32 acres with world-class amenities. Spot booking offers available.",
  image = "/og-image.jpg",
  url = "https://lodha-villa-royale-palava.com",
  type = "website"
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: 'Lodha Villa Royale Palava - Luxury Villas in Dombivli',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Lodha Villa Royale Palava',
          type,
        }}
        twitter={{
          handle: '@lodhagroup',
          site: '@lodhagroup',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'Lodha Villa Royale Palava, Lodha Group, luxury villas Dombivli, 3 BHK villas Thane, 4 BHK villas Dombivli West, real estate Dombivli, premium housing Thane, residential projects Dombivli',
          },
          {
            name: 'author',
            content: 'Lodha Group',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'theme-color',
            content: '#A38022',
          },
        ]}
        robotsProps={{
          nosnippet: false,
          notranslate: false,
          noimageindex: false,
          nofollow: false,
          maxVideoPreview: -1,
          maxImagePreview: 'large',
          maxSnippet: -1,
        }}
      />
      
      <ArticleJsonLd
        url={url}
        headline={title}
        images={[image]}
        datePublished="2025-01-18T00:00:00+00:00"
        dateModified="2025-01-18T00:00:00+00:00"
        authorName={{
          type: 'Organization',
          name: 'Lodha Group',
        }}
        description={description}
        isAccessibleForFree={true}
      />
    </>
  );
};

export default SEO;
