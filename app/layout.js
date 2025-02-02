import "./globals.css";


export const metadata = {
  title: "MBBS",
  description: "MBBS Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
