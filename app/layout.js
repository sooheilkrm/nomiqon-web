import "../styles/globals.css";

export const metadata = {
  title: "Nomiqon",
  description: "Your Brand. One Click Away.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}