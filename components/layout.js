import Head from "next/head";
import Link from "next/link";

const name = "Al Haniel Baya";
export const siteTitle = "Al Haniel Baya Blog";

function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Al Haniel Baya's Blog" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className="header">
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className="headerHomeImage borderCircle"
              alt={name}
            />
            <h1 className="heading2Xl">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className="headerImage borderCircle"
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="headingLg">
              <Link href="/">
                <a className="colorInherit">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className="container">
        {children}

        {!home && (
          <div className="backToHome">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </main>

      <style jsx>
        {`
          .container {
            max-width: 36rem;
            padding: 0 1rem;
            margin: 3rem auto 6rem;
          }

          .header {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
          }

          .headerImage {
            width: 6rem;
            height: 6rem;
          }

          .headerHomeImage {
            width: 8rem;
            height: 8rem;
          }

          .backToHome {
            margin: 3rem 0 0 0;
          }
        `}
      </style>
    </>
  );
}

export default Layout;
