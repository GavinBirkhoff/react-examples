import { useHistory } from "../hooks";

const menus = [
  { path: "/state", label: "state", name: "state" },
  { path: "/id", label: "id", name: "id" },
];
const Side = () => {
  const { push } = useHistory();
  const handleClick = (item) => {
    const { path } = item;
    push({ id: 1 }, null, path);
  };
  return (
    <div>
      <ul>
        {menus.map((menu) => (
          <li key={menu.name} onClick={() => handleClick(menu)}>
            {menu.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Side;
