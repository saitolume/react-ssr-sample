import { Request, Response } from 'express'
import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import Router from '../client/Router'

const render = (req: Request, res: Response) => {
  const jsx = (
    <StaticRouter context={{}} location={req.url}>
      {Router}
    </StaticRouter>
  )

  // Update head contents
  renderToStaticMarkup(jsx)

  const helmet = Helmet.renderStatic()
  const markup = renderToString(jsx)
  const styleSheet = new ServerStyleSheet()

  res.send(
    `
    <!DOCTYPE html>
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${styleSheet.getStyleTags()}
      </head>
      <body>
        <div id="root">${markup}</div>
        <script src="/public/bundle.js"></script>
      </body>
    </html>
  `.trim()
  )
}

export default render
