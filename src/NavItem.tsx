import { NavLink } from "react-router-dom";
import { NavItem } from "./Header";
import { useState } from "react";

interface NavItemProps {
  item: NavItem;
}

function NavigationItem({ item }: NavItemProps) {
  const { name, url, children } = item;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <NavLink
      className={({ isActive }) =>
        `text-lightBlue hover:text-white relative ${isActive ? "text-white" : ""}`
      }
      onMouseOver={() => setMenuOpened(true)}
      onMouseOut={() => setMenuOpened(false)}
      to={url!}
    >
      {name}
      {menuOpened && children && (
        <div className="absolute bg-blue w-40 px-4 pb-4 top-full left-0 rounded-md shadow-lg">
          <ul className="flex flex-col">
            {children.map((child, childIndex) => (
              <NavLink
                key={childIndex}
                className={({ isActive }) =>
                  `text-lightBlue hover:text-white relative ${isActive ? "text-white" : ""} mt-3`
                }
                to={child.url!}
                onClick={() => setMenuOpened(false)}
              >
                {child.name}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </NavLink>
  );
}

export default NavigationItem;
