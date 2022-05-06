import React, { FunctionComponent } from "react";
import NextHead from "next/head";
import Script from 'next/script'



interface IProps {
  title: string;
  description: string;
  author?: string;
  keywords?: string[];
}

const Head: FunctionComponent<IProps> = ({
  title,
  description,
  author = "",
  keywords,
}) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords?.join(",")} />
      <meta name="robots" content="index, follow" />
      <Script src="https://bootstrap/dist/js/bootstrap.js" />
      <link rel="icon" href="/images/favicon/favicon.svg" />
      
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"/>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"/>

      {/* Google Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
      <link
        rel="preconnect"
        crossOrigin={""}
        href="https://fonts.gstatic.com"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/5.15.4/css/font-awesome.min.css"
      />
    </NextHead>
  );
};

export { Head };
