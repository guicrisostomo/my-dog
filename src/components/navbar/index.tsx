"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  return (
    <NavigationMenu className="sticky top-0 z-40 max-w-full !justify-between border-b bg-background p-5">
      <NavigationMenuList className="mx-auto flex max-w-7xl items-center">
        <NavigationMenuItem className="flex">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Configurações
          </NavigationMenuLink>

          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Relatórios
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className="mx-auto flex max-w-7xl items-center">
        <NavigationMenuItem className="flex ml-auto">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Cadastrar
          </NavigationMenuLink>

          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Entrar
          </NavigationMenuLink>

          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "gap-2")}
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <span>Avatar</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
