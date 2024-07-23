import type { Metadata } from "next";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
    title: "Ivy - Convert Machine Learning Code Between Frameworks",
    description: "",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/spiral_logo.svg" />
            </head>
            <body>
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    )
}
