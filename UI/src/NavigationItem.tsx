import { NavLink } from "react-router-dom";
import { NavItem } from "./Header";
import { useState } from "react";

interface NavItemProps {
  item: NavItem;
}

function NavigationItem({ item }: NavItemProps) {
  const { name, url, children, notClickable } = item;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="relative" onMouseLeave={() => setMenuOpened(false)}>
      <NavLink
        to={url || "#"}
        onMouseEnter={() => setMenuOpened(true)}
        onClick={(e) => (notClickable ? e.preventDefault() : null)}
      >
        {({ isActive }) => (
          <span
            className={`text-lightBlue hover:text-white relative ${isActive ? "text-white" : ""} mt-3`}
          >
            {name}
          </span>
        )}
      </NavLink>
      {menuOpened && children && (
        <div className="submenu absolute bg-blue w-40 px-4 pb-4 left-0 top-full rounded-md shadow-lg z-50">
          <div className="flex flex-col">
            {children.map((child, childIndex) => (
              <NavLink
                end
                key={childIndex}
                className={(props) =>
                  `text-lightBlue hover:text-white relative ${props.isActive ? "text-white" : ""} mt-3`
                }
                to={child.url!}
                onClick={() => setMenuOpened(false)}
              >
                {child.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavigationItem;
