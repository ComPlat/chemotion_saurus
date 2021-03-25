import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    imageUrl: 'img/chemeln.jpg',
    title: 'Chemotion ELN',
    mainLink: 'http://eln.chemotion.net',
  },

  {
    imageUrl: 'img/chemrepo.png',
    title: 'Repository',
    mainLink: 'https://www.chemotion-repository.net/welcome',
  },

  {
    imageUrl: 'img/chemeln.jpg',
    title: 'SciMotion ELN',
    mainLink: 'http://eln.chemotion.net',
  },

  {
    imageUrl: 'img/spectraviewer.png',
    title: 'ChemSpectra',
    mainLink: 'http://eln.chemotion.net/chemspectra-editor',
    mainTitle: ' Try our ChemSpectra'
  },

  {
    imageUrl: 'img/chemscanner.png',
    title: 'ChemScanner',
    mainLink: 'http://eln.chemotion.net/chemscanner',
  },
];

function Feature({imageUrl, title, mainLink}) {
  const {siteConfig = {}} = useDocusaurusContext();
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('card_u col col--2 margin--md margin--md')}>
      <h3 style={{textAlign: "center", color:"#337ab7"}}>
        {/*comment out to disable Chemotion icon over software tool images*/}
        {/*<img src={siteConfig.favicon} alt="Chemotion Icon" style={{verticalAlign: "bottom", width: "26px"}}/>*/}
        {' '+title}</h3>
        {imgUrl && (
            <img className={styles.featureImage} src={imgUrl} alt={title} />
        )}
        <div className={styles.link}>
        <Link className={clsx('button button--primary button--lg')}
              to={mainLink}
        >
          Demo Version
        </Link>
      </div>
    </div>
  );
}

function Home() {
  const {siteConfig = {}} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="row">
        <div style={{margin: "1rem", textAlign: "center"}}>
          <h1 className="hero__title">
            <img src={'img/chemotion_full.svg'} alt="Chemotion Icon" style={{width: "40%", height: "40%"}}/>
          </h1>
          <h2>{siteConfig.tagline}</h2>
        </div>
        </div>

      </header>
      <video style={{display: "block", margin: "2rem auto 0 auto"}} src="videos/2021-02-24_CHEMOTION_FINALE_low.m4v#t=12"  controls playsInline></video>
      <main style={{ backgroundColor: "#f5f6f7"}}>
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

      <div className="row" style={{marginLeft: "5px", height:"50%"}}>
          <p className={clsx('fund col col--3')} style={{marginBottom: "0"}}>Funded By</p>
        <Link to='https://www.dfg.de/' className={clsx('col col--3 margin-top--sm margin-bottom--sm')}>
          <img className={styles.fundImg} src={'img/dfg_logo.png'} alt="DFG Logo"/>
        </Link>

        <Link to='https://www.kit.edu/' className={clsx('col col--3 margin-top--sm margin-bottom--sm')}>
          <img className={styles.fundImg} src='img/KIT_logo.png' alt="KIT Logo"/>
        </Link>

        <Link to='https://mwk.baden-wuerttemberg.de/' className={clsx('col col--3 margin-top--sm margin-bottom--sm')}>
          <img  className={styles.fundImg} src='img/csm_LogoMWK_2_Zeilen_220px.png' alt="Kultusministerium Baden-Würtemberg Logo"/>
        </Link>
      </div>

    </Layout>
  );
}

export default Home;
