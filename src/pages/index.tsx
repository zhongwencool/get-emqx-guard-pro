import {useEffect} from 'react';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';

export default function Home() {
  const history = useHistory();
  const {siteConfig} = useDocusaurusContext();

  // JSON-LD for SEO
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.title,
    "url": siteConfig.url,
    "description": "EMQX Guard Pro documentation - The professional monitoring and alerting solution for EMQX clusters.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EMQX",
    "url": siteConfig.url,
    "logo": `${siteConfig.url}img/logo.png`,
    "sameAs": [
      "https://github.com/zhongwencool/get-emqx-guard-pro"
    ]
  };

  useEffect(() => {
    // Redirect to the Guard documentation page
    history.replace('/EMQX-Guard-Pro/');
  }, [history]);

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(websiteJsonLd)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </script>
    </Head>
  );
}
