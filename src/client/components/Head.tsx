import React from 'react'
import Helmet from 'react-helmet'

interface Props {
  ogImageUrl?: string
  title?: string
}

const Head = ({ ogImageUrl, title }: Props) => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta property="og:site_name" content="React SSR Sample" />
    {title && <meta property="og:title" content={title} />}
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
    <title>{title ? `${title} - React SSR Sample` : 'React SSR Sample'}</title>
  </Helmet>
)

export default Head
