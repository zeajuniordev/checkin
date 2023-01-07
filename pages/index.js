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
        <h2 className={utilStyles.headingLg}>MAO | Transformación y Desarrollo Personal</h2>
        <h3 className={utilStyles.subtittle}>Quiero ser siempre alguien nuevo</h3>
        <h4 className={utilStyles.subtittle}>&#9889; Conferencista-Coach</h4>
        <h4 className={utilStyles.subtittle}>&#9889; Oficio tu Boda Espiritual</h4>
        <p className={utilStyles.paragraph}>Vamos hacer el trabajo de transformanos y brillar como una &#11088;</p>
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
