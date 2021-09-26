import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Event.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Event({ evt }) {
   const router = useRouter()

   return (
      <Layout title='My Event'>
         <div className={styles.event}>
            <span>
               {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
            </span>
            <h1>{evt.name}</h1>
            <ToastContainer />
            {evt.image && (
               <div className={styles.image}>
                  <Image src={evt.image ? evt.image.formats.medium.url : '/images/event-default.png'} alt={evt.name} width={960} height={600} />
               </div>
            )}

            <h4>Performers:</h4>
            <p>{evt.performers}</p>
            <h4>Description:</h4>
            <p>{evt.description}</p>
            <h4>Venue: {evt.venue}</h4>
            <p>Address : {evt.address}</p>

            <Link href='/events'>
               <a className={styles.back}> {'>>'} Go Back </a>
            </Link>
         </div>
      </Layout>
   )
}

export async function getServerSideProps({ query: { slug } }) {
   const res = await fetch(`${API_URL}/events?slug=${slug}`)
   const events = await res.json()
   return { props: { evt: events[0] } }
}
