import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Section ",
  description: "Shows form entries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
