import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>Easy to Use</>,
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: <>Focus on What Matters</>,
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                ahead and move your docs into the <code>docs</code> directory.
            </>
        ),
    },
    {
        title: <>Powered by React</>,
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    return (
        <Layout
            title={`Home`}
            description="Quickly organize patient data and generate reports">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        {!isMac ?
                            <Link
                                className={clsx(
                                    'button button--outline button--secondary button--lg',
                                    styles.getStarted,
                                )}
                                to={'https://github.com/DrDocx/DrDocx-Desktop/releases/download/0.1.3-alpha/DrDocx-Setup-0.1.3-alpha.exe'}>
                                Download
                                <br/>
                                <div className={styles.versionInfo}>
                                    DrDocx 0.1.3-alpha - Windows
                                </div>
                            </Link> :
                            <Link
                                className={clsx(
                                    'button button--outline button--secondary button--lg',
                                    styles.getStarted,
                                )}
                                to={'https://github.com/DrDocx/DrDocx-Desktop/releases/download/0.1.3-alpha/DrDocx-0.1.3-alpha.dmg'}>
                                Download
                                <br/>
                                <div className={styles.versionInfo}>
                                    DrDocx 0.1.3-alpha - Mac
                                </div>
                            </Link>}
                    </div>
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
