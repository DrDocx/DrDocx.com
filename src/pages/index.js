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
                DrDocx was built for medical professionals to be able to use their existing templates and get up and
                running quickly with minimal configuration.
            </>
        ),
    },
    {
        title: <>Focus on What Matters</>,
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                DrDocx streamlines the most tedious parts of your workflow and lets you spend more time on meaningful
                work.
            </>
        ),
    },
    {
        title: <>You Control Your Data</>,
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                DrDocx takes privacy seriously, so your data never leaves your computer. We don't collect usage data, we don't track you, and we don't have access to your patient data.
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
    let isMac;
    if (typeof window !== `undefined`) {
        isMac = window.navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    } else {
        isMac = false;
    }
    return (
        <Layout
            title={`Home`}
            description="Quickly organize patient data and generate reports">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        {!isMac &&
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={'https://github.com/DrDocx/DrDocx-Desktop/releases/download/v0.1.4-alpha/DrDocx-Setup-0.1.4-alpha.exe'}>
                            Download
                            <br/>
                            <div className={styles.versionInfo}>
                                DrDocx 0.1.4-alpha - Windows
                            </div>
                        </Link>}
                        {isMac &&
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={'https://github.com/DrDocx/DrDocx-Desktop/releases/download/v0.1.4-alpha/DrDocx-0.1.4-alpha.dmg'}>
                            Download
                            <br/>
                            <div className={styles.versionInfo}>
                                DrDocx 0.1.4-alpha - Mac
                            </div>
                        </Link>}
                    </div>
                    {/*<br />*/}
                    <Link className={styles.otherReleases} to={'https://github.com/DrDocx/DrDocx-Desktop/releases'}>
                        Other Releases and Platforms
                    </Link>
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
