import { match } from "@formatjs/intl-localematcher";
import {NextRequest, NextResponse} from "next/server";
import Negotiator from "negotiator";

const locales : string[] = ["es-419", "es", "en", "en-US"];
const defaultLocale: string = "es-419";

function getLocale(request: NextRequest) : string {

    const headers = { 'accept-language': request.headers.get('accept-language') ?? ''};
    const  languages = new Negotiator({headers}).languages();

    return match(locales,languages, defaultLocale);
}

export function proxy(request: NextRequest) : NextResponse | void  {
    const { pathname } = request.nextUrl

    const pathnameHasLocale : boolean = locales.some((locale : string)  =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return;

    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        '/((?!_next.*)',
        '/'
    ]
}