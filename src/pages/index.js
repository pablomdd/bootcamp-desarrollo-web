import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>🚀Aprende desde 0</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        No necesitas tener experiencia previa con la web. Aprenderás las bases para iniciar tu carrera en web.
      </>
    ),
  },
  {
    title: <>Aprende con proyectos 🏡</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Inicia tu portafolio y demostra lo que aprendes semana a semana.
      </>
    ),
  },
  {
    title: <>👋Comunidad</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Aprende con personas como tú. Recibe mentoría cada semana de compañeros con experienca en la industria.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Bootcamp de Desarrollo Web del DSC IPN - UPIITA`}
      description="Inicia tu carrera en web agregando proyectos a tu portafolio">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Ir al curso
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
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
