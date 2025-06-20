import "./../styles/globals.css";

export const metadata = {
  title: "Nomiqon",
  description: "Your brand. One click away.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}