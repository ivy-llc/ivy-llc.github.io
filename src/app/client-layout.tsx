"use client";

import React from "react";
import Footer from "src/components/Footer";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div id="root">{children}</div>
            <Footer />
        </>
    );
}
