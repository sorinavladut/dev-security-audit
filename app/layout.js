import './globals.css';

export const metadata = {
  title: 'Dev Security Audit',
  description: 'Cybersecurity website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
