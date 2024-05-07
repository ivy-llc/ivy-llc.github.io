import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Transpile AI",
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
                <link rel="icon" type="image/svg+xml" href="/universal.svg" />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}
