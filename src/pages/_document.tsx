import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

 

  return (
    <Html lang="en" className='rootStyle'>
      
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
      
      <meta name="description" content="next.js portfolio" />
      </Head>
      <body className='bg-gradient-to-r  from-green to-blue-400 dark:text-white dark:from-dark-500 dark:to-dark-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
