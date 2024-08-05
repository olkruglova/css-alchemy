import { useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import SidebarMenuItem from "./SidebarItem";

export interface SidebarItem {
  name: string;
  url?: string;
  children?: SidebarItem[];
  notClickable?: boolean;
}

function Sidebar() {
  const items: SidebarItem[] = [
    {
      name: "Shadows",
      url: "/guides/shadows",
      notClickable: true,
      children: [
        {
          name: "Box Shadow",
          url: "/guides/shadows/box-shadow",
        },
        {
          name: "Drop Shadow",
          url: "/guides/shadows/drop-shadow",
        },
        {
          name: "Text Shadow",
          url: "/guides/shadows/text-shadow",
        },
      ],
    },
    {
      name: "Text",
      url: "/guides/text",
    },
    {
      name: "Animations",
      url: "/guides/animations",
    },
  ];

  return (
    <div className="min-w-72 max-w-72 w-72 h-[calc(100vh-80px)] border-r-2 p-6">
      <ul>
        {items.map((item, index) => (
          <SidebarMenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
