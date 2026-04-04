export const metadata = {
  title: 'QUVICai Score — Índice de Claridad Empresarial',
  description: 'Descubrí tu Índice de Claridad Empresarial en 3 minutos. Diagnóstico estratégico QUVICai.',
  openGraph: {
    title: 'Tu negocio tiene un puntaje oculto.',
    description: 'Descubrí tu Índice de Claridad Empresarial en 3 minutos. Diagnóstico QUVICai.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
