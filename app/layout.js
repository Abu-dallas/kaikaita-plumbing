import "./globals.css";
export const metadata = {
  title: "Kaikaita Plumbing Services",
  description:
    "Kaikaita Plumbing services is one of the best plumbing company, provide a wide range of services in Nigeria, based in Gombe state",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
