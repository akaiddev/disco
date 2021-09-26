import Showcase from '@/components/Showcase'
import styles from '@/styles/Layout.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ title, keywords, description, children }) {
   const router = useRouter()
   return (
      <div>
         <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
         </Head>
         <Header />
         {router.pathname === '/' && <Showcase />}
         <div className={styles.container}>{children}</div>
         <Footer />
      </div>
   )
}

Layout.defaultProps = {
   title: 'Dhaka Nightlife | Find the hottest parties',
   description: 'Find the lates and other musical Dhaka Nightlife',
   keywords: 'music, edm, Dhaka Nightlife',
}
