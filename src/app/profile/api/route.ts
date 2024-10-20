import { type NextRequest } from "next/server"
import { headers, cookies } from "next/headers"

export async function GET(request: NextRequest) {
    const requestHeaders1 = new Headers(request.headers)
    const requestHeaders2 = headers()
    console.log(requestHeaders1.get("Authorization"))
    console.log(requestHeaders2.get("Authorization"))
    cookies().set("result", "20")
    const requestCookies1 = request.cookies
    const requestCookies2 = cookies()
    console.log(requestCookies1.get('theme'))
    console.log(requestCookies2.get('result'))
    return new Response("<h1>Profile api data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}