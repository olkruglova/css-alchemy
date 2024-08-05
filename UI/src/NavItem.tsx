import { Link } from "react-router-dom";
import { NavItem } from "./Header";
import { useState } from "react";

interface NavItemProps {
  item: NavItem;
}

function NavigationItem({ item }: NavItemProps) {
  const { name, url, children } = item;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <li
      className="text-lightBlue hover:text-white relative"
      onMouseOver={() => setMenuOpened(true)}
      onMouseOut={() => setMenuOpened(false)}
    >
      <Link to={url!}>{name}</Link>
      {menuOpened && children && (
        <div className="absolute bg-blue w-40 px-4 pb-4 top-full left-0 rounded-md shadow-lg">
          <ul>
            {children.map((child, childIndex) => (
              <li
                key={childIndex}
                className="text-lightBlue mt-3 hover:text-white"
                onClick={() => setMenuOpened(false)}
              >
                <Link to={child.url!}>{child.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default NavigationItem;
