import React from 'react';
import DocItem from '@theme-original/DocItem';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';

export default function DocItemWrapper(props) {
  const { pathname } = useLocation();
  const { siteConfig } = useDocusaurusContext();

  // Only add JSON-LD if we have metadata with a title
  if (props.content && props.content.metadata && props.content.metadata.title) {
    const { metadata } = props.content;

    // Create JSON-LD for article
    const articleJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: metadata.title,
      description: metadata.description || 'EMQX Guard Pro documentation',
      datePublished: metadata.lastUpdatedAt ? new Date(metadata.lastUpdatedAt).toISOString() : new Date().toISOString(),
      dateModified: metadata.lastUpdatedAt ? new Date(metadata.lastUpdatedAt).toISOString() : new Date().toISOString(),
      author: {
        '@type': 'Organization',
        name: 'EMQX',
        url: siteConfig.url,
      },
      publisher: {
        '@type': 'Organization',
        name: 'EMQX',
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}img/logo.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': siteConfig.url + pathname,
      },
    };

    return (
      <>
        <Head>
          <script type="application/ld+json">
            {JSON.stringify(articleJsonLd)}
          </script>
        </Head>
        <DocItem {...props} />
      </>
    );
  }

  // If no metadata, just render the original component
  return <DocItem {...props} />;
}
