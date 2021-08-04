import '../styles/globals.css'
import '../styles/login.css'
import Loader from '../components/Loader'
import { useState } from 'react'
 import Router  from "next/router"
 import Head from 'next/head'
 import NProgress from 'nprogress'
function MyApp({ Component, pageProps }) {
const [loading,setLoading ] = useState(false)
Router.events.on('routeChangeStart',(url)=>{

  console.log("Route is changing") ;
  NProgress.start()
  setLoading(true)
})
Router.events.on('routeChangeComplete',(url)=>{
  console.log("Route is changing is complete..") 
  NProgress.done()
  setLoading(false)
})
  return(<>
  <Head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
  </Head>
   {loading && <Loader /> } <Component {...pageProps} /> </>)


}

export default MyApp
