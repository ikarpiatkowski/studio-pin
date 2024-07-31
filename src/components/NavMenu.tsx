'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Kuchnie</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem
                key="kitchen-photo"
                title="Zdjęcia kuchni"
                href="/kuchnie/zdjęcia"
              >
                Zdjęcia wykonanych projektów kuchni.
              </ListItem>
              <ListItem
                key="kitchen-visualization"
                title="Wizualizacje kuchni"
                href="/kuchnie/wizualizacje"
              >
                Wizualizacje 3D projektów kuchni.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Szafy</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem
                key="cabinets-photo"
                title="Zdjęcia Szaf"
                href="/szafy/zdjęcia"
              >
                Zdjęcia wykonanych projektów szaf wnękowych.
              </ListItem>
              <ListItem
                key="cabinets-visualization"
                title="Wizualizacje Szaf"
                href="/szafy/wizualizacje"
              >
                Wizualizacje 3D projektów szaf wnękowych.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Łazienki</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem
                key="bathroom-photos"
                title="Zdjęcia łazienek"
                href="/łazienki/zdjęcia"
              >
                Zdjęcia wykonanych projektów łazienek.
              </ListItem>
              <ListItem
                key="bathroom-visualizations"
                title="Wizualizacje łazienek"
                href="/łazienki/wizualizacje"
              >
                Wizualizacje 3D projektów łazienek.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
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
ListItem.displayName = 'ListItem';
