import useLocation from '../hooks/useLocation'

import routes from './routes'

const Fixtures = () => {
  const { pathname } = useLocation()
  const getFixtureContent = (route) => {
    return routes.find((item) => route === item.path)?.component ?? <p>404</p>
  }
  return <div className="main">{getFixtureContent(pathname)}</div>
}

export default Fixtures
