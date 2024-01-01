import { useHistory } from "../hooks";
import routes from "./routes";

const Side = () => {
  const { push } = useHistory();
  const handleClick = (item) => {
    const { path } = item;
    push({ id: 1 }, null, path);
  };
  return (
    <div className="side">
      <h2>Hook</h2>
      <ul>
        {routes.map((menu) => (
          <li key={menu.path} onClick={() => handleClick(menu)}>
            {menu.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Side;
