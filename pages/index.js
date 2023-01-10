import Head from 'next/head';
import Layout, { siteTitle } from '../components/layaout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Asesorías turísticas y planeación de viajes</h2>
        <h3 className={utilStyles.subtittle1}>Empresas de turismo que buscan ser más sostenibles y competitivas. 🧐♻️🔝</h3>
        <h4 className={utilStyles.subtittle}>&#9889; Efectividad</h4>
        <h4 className={utilStyles.subtittle}>&#9889; Seguridad</h4>
        <h4 className={utilStyles.subtittle}>&#9889; Mejor precio</h4>
        <p className={utilStyles.paragraph}>Planeación de viajes para metaviajeros nacionales e internacionales 😎🏝️🏕️ &#11088;</p>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
