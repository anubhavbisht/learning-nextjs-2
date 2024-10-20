import { NextResponse, type NextRequest } from "next/server";

// approach 1 (using matcher)
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//     matcher: "/profile"
// }

// approach 2 (using conditional)
// export function middleware(request: NextRequest) {
//     // for redirecting
//     if(request.nextUrl.pathname === '/profile'){
//         return NextResponse.redirect(new URL("/hello", request.url))
//     }

//     // for rewriting
//     if (request.nextUrl.pathname === "/profile") {
//         return NextResponse.rewrite(new URL("/hello", request.nextUrl));
//     }
// }

// setting cookies and headers in middleware
export function middleware(request: NextRequest) {
    const themePreference = request.cookies.get("theme");
    const response = NextResponse.next();
    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }
    response.headers.set("custom-header", "custom-value");

    return response;
}