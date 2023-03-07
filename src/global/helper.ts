import path from "path";

export function parsePathname(pathname : string) {
    if(pathname.endsWith('/')) return pathname.substring(0 , pathname.length - 1)
    return pathname
}