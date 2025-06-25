import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Segment Analytics Script */}
      <Script
        id="segment-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)
            if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");
            else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];
            analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};
            for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}
            analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;
            e.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";
            var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};
            analytics.SNIPPET_VERSION="4.15.3";
            analytics.load("p3a8KheCjPOGwyYjzJd9Pn4RFQlXqS4a");
            analytics.page();
            }}();
          `,
        }}
      />
      {/* Google Analytics Script */}
      <Script id="google-analytics-header-tag" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Component {...pageProps} />
    </>
  )

}