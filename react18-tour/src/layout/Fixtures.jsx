import useLocation from "../hooks/useLocation";
import State from "../fixtures/state";
import Id from "../fixtures/id";
import SuspenseView from "../fixtures/suspense";

const Fixtures = () => {
  const { pathname } = useLocation();
  const getFixtureContent = (route) => {
    console.log(route);
    switch (route) {
      case "/state":
        return <State />;
      case "/id":
        return <Id/>;
      case "/suspense":
        return <SuspenseView/>;
      default:
        return <p>404</p>;
    }
  };
  return <div>{getFixtureContent(pathname)}</div>;
};

export default Fixtures;
