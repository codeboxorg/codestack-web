export {}

type RoutePaths = import('constant/routePath').ROUTE_PATH
type OAuthRedirectCallback = (authorizationCode: string) => void

interface Opener {
    oAuthRedirectCallback?: OAuthRedirectCallback
}

declare global {
    interface Window {
        oAuthRedirectCallback?: OAuthRedirectCallback
        // eslint-disable-next-line @typescript-eslint/ban-types
        gtag: Function
    }
    interface Location {
        replace(url: RoutePaths): void
    }
}
