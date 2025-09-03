import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = [
    "/",
    "/contact-us",
    "/login",
    "/register",
    "/verify",
];

const PUBLIC_API_PREFIXES = [
    "/api/register",
    "/api/login",
    "/api/verify",
];

const PUBLIC_FILES = [
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml",
];

async function isAuthenticated(req: NextRequest): Promise<boolean> {
    const token = req.cookies.get("auth_token")?.value;
    return Boolean(token);
}

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Allow static files and Next internals
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/static/") ||
        pathname.startsWith("/images/") ||
        pathname.startsWith("/api/health") ||
        PUBLIC_FILES.includes(pathname)
    ) {
        return NextResponse.next();
    }

    // Allow public pages
    if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
        return NextResponse.next();
    }

    // Allow specific public APIs
    if (pathname.startsWith("/api")) {
        if (PUBLIC_API_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}`))) {
            return NextResponse.next();
        }
        // For other APIs, require auth
        const ok = await isAuthenticated(req);
        if (!ok) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        return NextResponse.next();
    }

    // For all other app routes, require auth
    const ok = await isAuthenticated(req);
    if (!ok) {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        url.searchParams.set("next", pathname);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/(.*)"],
};
