"use client";
import { Plus } from "lucide-react";
import { triggerEdgeCollapse, triggerEdgeDrawer } from "tailwindcss-jun-layout";
import { menuGroups } from "@/app/dashboard/_data/menu";
import { useEffect, useState } from "react";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";

export default function WorkshopDashboard() {

  const [sidebar , setSidebar] = useState<null | Element>(null);

  useEffect(() => {
    setSidebar(document.querySelector('.jun-edgeSidebar'));
  }, []);

  return (
    <>
      <TooltipProvider>
        <div className="jun-layout">
          <header className=" jun-header">
            <button
              className=" jun-edgeDrawerTrigger"
              onClick={() => triggerEdgeDrawer()}
            >
              Toggle
            </button>
            <button
              className="jun-edgeCollapseTrigger"
              onClick={(
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => triggerEdgeCollapse({ event })}
            >
              Collapse
            </button>
            Header
          </header>
          <aside
            //   className="
            // jun-edgeSidebar
            // jun-edgeSidebar-w-[265px]
            // jun-edgeSidebar-drawer
            // sm:jun-edgeSidebar-permanent
            // sm:jun-edgeSidebar-collapsed-w-48px]
            // sm:jun-edgeSidebar-permanent-hoverUncollapse
            // jun-edgeSidebar-permanent-autoCollapse-lg
            // "
            className="
        jun-edgeSidebar
        jun-edgeSidebar-w-[265px]
        jun-edgeSidebar-permanent
        jun-edgeSidebar-collapsed-w-[64px]
        jun-edgeSidebar-permanent-autoCollapse-lg
        "
          >
            <div className=" jun-edgeContent ">
              <div className=" jun-sidebarContainer">
                {menuGroups.map((group) => (
                  <div className="jun-sidebarGroup" key={group.label}>
                    <div className="jun-sidebarGroupLabel">{group.label}</div>
                    <ul className="jun-sidebarMenu">
                      {group.items.map((menu) => {
                        const Icon = menu.icon;
                        return (
                          <li className="jun-sidebarMenuItem" key={menu.label}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <label className="jun-sidebarMenuButton jun-collapsibleTrigger">
                                  <Icon className="jun-sidebarIcon jun-sidebarIcon-shrink-size-6" />
                                  <span className="jun-sidebarText">
                                    {menu.label}
                                  </span>
                                  {/* <ChevronDown className="size-4 jun-collapsibleIcon jun-collapsibleIcon-rotate-180"/> */}
                                  <Plus className="jun-collapsibleIcon jun-collapsibleIcon-rotate-45" />
                                  <input
                                    className="sr-only"
                                    type="checkbox"
                                    defaultChecked
                                  />
                                </label>
                              </TooltipTrigger>
                              <TooltipContent container={sidebar} className=" jun-sidebarTooltip" side="right">{menu.label}</TooltipContent>
                            </Tooltip>

                            {menu.menus && (
                              <div className=" jun-sidebarGroupText jun-collapsibleContent">
                                <ul className=" jun-sidebarMenu jun-sidebarMenu-nested">
                                  {menu.menus.map((submenu) => (
                                    <li
                                      key={submenu.title}
                                      className=" jun-sidebarMenuItem"
                                    >
                                      <button className=" jun-sidebarMenuButton">
                                        <span className="jun-sidebarText">
                                          {submenu.title}
                                        </span>
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <main className=" jun-content">Content</main>
          <footer className=" jun-footer">footer</footer>
        </div>
      </TooltipProvider>
    </>
  );
}
