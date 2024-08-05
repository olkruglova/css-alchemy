import { Link, useLocation } from "react-router-dom";
import { SidebarItem } from "./Sidebar";
import { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

interface SidebarItemProps {
  item: SidebarItem;
}

function SidebarMenuItem({ item }: SidebarItemProps) {
  const location = useLocation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { name, url, children, notClickable } = item;

  const isActive = location.pathname === url;

  return (
    <li className="mt-2">
      <Link
        className={`${isActive ? "text-white" : "text-lightBlue"}  hover:text-white`}
        to={url!}
        onClick={(e) => {
          notClickable ? e.preventDefault() : null;
          setIsMenuOpened(!isMenuOpened);
        }}
      >
        <div className="flex flex-row flex-nowrap justify-between items-center">
          {name}
          {children && (
            <span>
              {isMenuOpened ? (
                <ChevronDownIcon className="text-lightBlue size-4" />
              ) : (
                <ChevronRightIcon className="text-lightBlue size-4" />
              )}
            </span>
          )}
        </div>
      </Link>

      {children && isMenuOpened && (
        <ul className="ml-4">
          {children.map((child, childIndex) => (
            <li key={childIndex} className="mt-2">
              <Link className="text-lightBlue hover:text-white" to={child.url!}>
                {child.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default SidebarMenuItem;
