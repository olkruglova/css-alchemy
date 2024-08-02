import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import NavigationItem from "./NavItem";

export interface NavItem {
  name: string;
  url?: string;
  visible?: boolean;
  children?: NavItem[];
}

function Header() {
  const items = [
    {
      name: "Home",
      url: "/",
      visible: true,
    },
    {
      name: "Guides",
      visible: true,
      children: [
        {
          name: "Shadows",
          url: "/guides/shadows",
          visible: true,
        },
        {
          name: "Text",
          url: "/guides/text",
          visible: true,
        },
        {
          name: "Animations",
          url: "/guides/animations",
          visible: true,
        },
      ],
    },
    {
      name: "Articles",
      url: "/articles",
      visible: true,
    },
    {
      name: "About",
      url: "/about",
      visible: true,
    },
  ];

  return (
    <div className="bg-blue py-4 m-0 px-0 select-none">
      <div className="flex flex-row items-center w-3/5 mx-auto">
        <Link to="/">
          <div className="bg-logo-bg bg-contain bg-no-repeat bg-center w-20 h-12 opacity-30 ml-6 mr-12 hover:opacity-75"></div>
        </Link>

        <ul className="flex flex-row items-center justify-around w-full">
          {items.map((item, index) =>
            item.visible ? <NavigationItem key={index} item={item} /> : null,
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
