import { Route } from '@angular/router';

export function getMenuItems(routes: Route[]): Route[] {
    return routes
        .map(route => route.children ?? [])
        .flat()
        .filter(route => route && route.path && route.title);
}