import { SidebarDemo } from "@/components/CustomSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarDemo>{children}</SidebarDemo>
      </body>
    </html>
  );
}
