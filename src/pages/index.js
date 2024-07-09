import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { YouTubeFrame } from "@site/src/js/layout";

const features = [
  {
    imageUrl: 'img/chemeln.jpg',
    title: 'Chemotion ELN',
    mainLink: '/docs/eln',
    btnText: 'Get Started',
  },
  {
    imageUrl: 'img/chemeln.jpg',
    title: 'Demo',
    mainLink: 'https://demo.chemotion.ibcs.kit.edu/',
    btnText: 'Try',
  },
  {
    imageUrl: 'img/chemrepo.png',
    title: 'Chemotion Repository',
    mainLink: 'https://www.chemotion-repository.net/welcome',
    btnText: 'Explore ↗',
  },
];

function Feature({
  imageUrl, title, mainLink, btnText,
}) {
  const { siteConfig = {} } = useDocusaurusContext();
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('card_u col col--2 margin--md margin--md')}>
      <h3 style={{ textAlign: 'center', color: '#337ab7' }}>
        {/* comment out to disable Chemotion icon over software tool images */}
        {/* <img src={siteConfig.favicon} alt="Chemotion Icon" style={{verticalAlign: "bottom", width: "26px"}}/> */}
        {` ${title}`}
      </h3>
      {imgUrl && (
        <img className={styles.featureImage} src={imgUrl} alt={title} />
      )}
      <div className={styles.link}>
        <Link
          className={clsx('button button--primary button--lg')}
          to={mainLink}
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
}

function Home() {
  const { siteConfig = {} } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div
          className="row"
          style={{ textAlign: 'center', alignItems: 'center' }}
        >
          <div className="column">
            <div style={{ margin: '1rem', textAlign: 'left' }}>
              <h1 className="hero__title">
                <img
                  src="img/logos/Chemotion_full.svg"
                  alt="Chemotion Icon"
                  style={{ width: '80%', height: '80%' }}
                />
              </h1>
              <h2>
                Electronic Laboratory Notebook (ELN) &
                <br />
                Repository for Research Data
              </h2>
            </div>
          </div>
          <div className="column">
            <div style={{ margin: '2rem auto 0 auto', textAlign: 'center' }}>
              <YouTubeFrame
                width="640"
                height="360"
                src="https://www.youtube-nocookie.com/embed/tZHaP6DW-Dw"
                title="Chemotion ELN and repository"
              />
            </div>
          </div>
        </div>
      </header>

      <main style={{ backgroundColor: '#f5f6f7' }}>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </section>
        )}
      </main>
      <div
        className="row"
        style={{ marginLeft: '5px', height: '50%', WebkitAlignItems: 'center' }}
      >
        <p
          className={clsx('fund col col--1')}
          style={{ marginBottom: '0', fontSize: 'large' }}
        >
          Funded By
        </p>
        <Link to="https://www.dfg.de/" className={clsx('col col--2')}>
          <img
            className={styles.fundImg}
            src="img/logos/DFG_logo.png"
            alt="DFG Logo"
          />
        </Link>

        <Link
          to="https://www.kit.edu/"
          className={clsx('col col--2 margin-top--sm margin-bottom--sm')}
        >
          <img
            className={styles.fundImg}
            src="img/logos/KIT_logo.png"
            alt="KIT Logo"
          />
        </Link>

        <Link
          to="https://mwk.baden-wuerttemberg.de/"
          className={clsx('col col--2 margin-top--sm margin-bottom--sm')}
        >
          <img
            className={styles.fundImg}
            src="img/logos/MWKBW_logo.png"
            alt="Kultusministerium Baden-Würtemberg Logo"
          />
        </Link>
      </div>
    </Layout >
  );
}

export default Home;
