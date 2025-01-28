"use client";

import {
  Languages,
  MonitorCog,
  Moon,
  Settings,
  Sun,
  SunMoon,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";

export const DropMenu = () => {
  const { setTheme } = useTheme();
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const t = useI18n();

  const handleLanguageChange = (lang: "fr" | "en") => {
    changeLocale(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="bg-white/5">
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("Settings")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* Theme Selection */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SunMoon />
              <span className="hover:cursor-pointer">Theme</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun />
                  <span className="hover:cursor-pointer">Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon />
                  <span className="hover:cursor-pointer">Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <MonitorCog />
                  <span className="hover:cursor-pointer">System</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          {/* Language Selection */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Languages />
              <span>{t("Language")}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onClick={() => handleLanguageChange("en")}
                  className="flex items-center justify-between"
                >
                  <span>English</span>
                  {locale === "en" && <Check className="ml-2" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleLanguageChange("fr")}
                  className="flex items-center justify-between"
                >
                  <span>Français</span>
                  {locale === "fr" && <Check className="ml-2" />}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
