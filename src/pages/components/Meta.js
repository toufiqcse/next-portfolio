import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Toufiqul Islam" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-781TZL953Q`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
             gtag('config', 'G-781TZL953Q');`,
        }}
      />
    </Head>
  );
};

Meta.defaultProps = {
  title: " Frontend Web Developer and Designer - Toufiqul Islam",
  keywords:
    "Portfolio Website, email template , E-Commerce Website, Online shop, eCommerce Website Developer , Frontend developer, react developer, next developer, redux developer",
  description:
    "Freelance frontend  developer specializing in completely custom frontend website development for web development agencies, designers, small businesses &amp; more.",
};

export default Meta;
