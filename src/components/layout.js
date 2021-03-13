import Loadable from '@loadable/component'
import * as React from "react"
import { Link } from "gatsby"

const Search = Loadable(() => 
  import("./search")
)

const searchIndices = [{ name: `Pages`, title: `Pages` }]


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header"><Search indices={searchIndices} />{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> and hosted on <a href="https://www.gatsbyjs.com/cloud/">Gatsby Cloud</a>
      </footer>
    </div>
  )
}

export default Layout
