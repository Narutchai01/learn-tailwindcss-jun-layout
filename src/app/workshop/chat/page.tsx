"use client";
import { ChatList } from "@/components/chat/ChatList";
import { Input } from "@/components/chat/Input";
import { createMockChats } from "@/app/chat/_data/mock-chats";
import { createMockMessages } from "@/app/chat/_data/mock-messages";
import { createMockSettings } from "@/app/chat/_data/mock-settings";
import { Conversation } from "@/components/chat/Conversation";
import { ChatSetting } from "@/components/chat/ChatSetting";
import { Button } from "@/components/ui/button";
import {
  UserPlus,
  MoreVertical,
  PanelBottomClose,
  PanelLeftClose,
  MenuSquare,
  PanelRightClose,
  PanelLeftOpen,
} from "lucide-react";
import {
  triggerEdgeCollapse,
  triggerEdgeCollapseRight,
  triggerEdgeDrawer,
} from "tailwindcss-jun-layout";
import { Tooltip } from "@radix-ui/react-tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";

// Create mock data once
const mockChats = createMockChats();
const mockMessages = createMockMessages();
const mockSettings = createMockSettings();

export default function ChatPage() {
  return (
    <TooltipProvider>
      <div className="jun-layout jun-layout-standalone">
        <header className="jun-header flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className=" jun-edgeCollapseTrigger"
              onClick={(event) => triggerEdgeCollapse({ event })}
            >
              <PanelLeftOpen className=" jun-edgeCollapsed-visible" />
              <PanelLeftClose className=" jun-edgeUncollapsed-visible" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className=" jun-edgeDrawerTrigger"
              onClick={() => triggerEdgeDrawer()}
            >
              <MenuSquare className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-semibold">Messages</h1>
            <span className="text-sm text-muted-foreground">
              {mockChats.length} conversations
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <UserPlus className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="jun-edgeCollapseTriggerR"
              onClick={(event) => triggerEdgeCollapseRight({ event })}
            >
              <PanelLeftOpen className=" jun-edgeUncollapsed-visible" />
              <MoreVertical className=" jun-edgeCollapsed-visible" />
            </Button>
          </div>
        </header>

        <aside
          className="
      jun-edgeSidebar
      jun-edgeSidebar-drawer
      md:jun-edgeSidebar-permanent
      jun-edgeSidebar-collapsed-w-[80px]
      jun-edgeSidebar-permanent-autoCollapse-xl
      "
        >
          <button
            className=" jun-sidebarRail"
            onClick={(event) => triggerEdgeCollapse({ event })}
          ></button>
          <div className="jun-edgeContent">
            <ChatList
              chats={mockChats}
              onSelect={(id) => console.log("Selected chat:", id)}
            />
          </div>
        </aside>

        <main className="jun-content">
          <Conversation messages={mockMessages} />
        </main>

        <aside
          className="
        jun-edgeSidebarR
        jun-edgeSidebarR-drawer
        jun-edgeSidebarR-w-[100vw]
        md:jun-edgeSidebarR-permanent
        md:jun-edgeSidebarR-w-[256px]
        xl:jun-edgeSidebarR-w-[320px]
        jun-edgeSidebarR-permanent-autoCollapse-xl
        jun-edgeSidebarR-collapsed-w-[0px] 
      "
        >
          <div className="jun-edgeContent">
            <ChatSetting
              participant={mockSettings.participant}
              sharedMedia={mockSettings.sharedMedia}
            />
          </div>
        </aside>

        <footer className="jun-footer">
          <Input onSend={(message) => console.log("Sent message:", message)} />
        </footer>
      </div>
    </TooltipProvider>
  );
}
