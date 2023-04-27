import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Commvault APIs',
    imageUrl: 'img/api.png',
    url: 'docs/api/cv/commvault-rest-api',
    description: (
      <>
        Commvault API documentation. 
      </>
    ),
  },
  
];

function Feature({ imageUrl, title, description, url }) {
  const imgUrl = useBaseUrl(imageUrl);
  const internalUrl = url.indexOf("http") !== 0;

  return (
    <div className={clsx('container', styles.feature)}>
        {imgUrl && (
          <div>
            <img className={`${styles.featureImage} featured`} src={imgUrl} alt={title}/>
          </div>
        )}
      <p>Commvault REST (Representational State Transfer) APIs represent operations that are performed in the CommCell Console.
         You can use the REST APIs to create custom interfaces that focus on the operations your users need. 
         The REST APIs are implemented on the HTTP protocol, so you can use them with your preferred programming language and tools.
        </p>
        
        <br/>
        <h2>Use Version dropdown to access the OpenApi references</h2>
        <h2>Supported HTTP Methods</h2>
        <p>GET: Lists objects and includes the information needed to perform additional operations on the object. Sample use: list all of the users in the CommCell.</p>
        <p>POST: Creates or updates objects. Most requests using the POST method require XML in the request body. XML template files are provided. Sample use: create a client group.</p>
        <p>DELETE: Removes objects. Sample use: delete a storage policy.</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
