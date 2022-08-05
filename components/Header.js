import Head from "next/head";

export const Header = () => {
  return (
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <title>Leandro Pereyra</title>
        <meta name="description" content="Desarrollador Web v1.0 Trainee" />

        <meta property="og:url" content="https://leandropereyra.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Leandro Pereyra" />
        <meta property="og:description" content="Desarrollador Web v1.0 Trainee" />
        <meta property="og:image" itemProp="image" content="/SEO.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          name="keywords"
          content="Desarrollo Web, Web Developer, React,
      React.JS, React JS, HTML, CSS, JavaScript"
        />

        <meta name="msapplication-TileImage" content="/SEO.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="leandropereyra.com" />
        <meta property="twitter:url" content="https://leandropereyra.com/" />
        <meta name="twitter:title" content="Leandro Pereyra" />
        <meta name="twitter:description" content="Desarrollador Web v1.0 Trainee" />
        <meta name="twitter:image" content="/SEO.jpg" />
      </Head>
  )
}
