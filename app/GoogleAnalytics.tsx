"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import * as gtag from "./gtag";

const GoogleAnalytics: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    gtag.googlePageView(pathname);
  }, [pathname]);

  return (
    <>
      {/* Load gtag.js first */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2KS1EMSZFD`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2KS1EMSZFD');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
