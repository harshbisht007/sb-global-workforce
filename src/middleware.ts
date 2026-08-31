
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Maintenance page ko khud se redirect hone se bachao
  if (pathname === "/under-maintenance") {
    return NextResponse.next();
  }

  // Static/internal Next.js files ko allow karo
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/manifest.webmanifest"
  ) {
    return NextResponse.next();
  }

  // Baaki pages ko maintenance page par bhejo
  const maintenanceUrl = request.nextUrl.clone();
  maintenanceUrl.pathname = "/under-maintenance";

  return NextResponse.rewrite(maintenanceUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
