import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website' 
}) {
  const siteTitle = 'PR Fiber - Internet Fibra Óptica no Paraná';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription = description || 'Internet fibra óptica de verdade no Paraná. Velocidade real, sinal estável e atendimento que resolve. Conheça nossos planos!';
  const siteImage = image || 'https://prfiber.com.br/og-image.jpg';
  const siteUrl = url || 'https://prfiber.com.br';

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={keywords || 'internet fibra óptica, PR Fiber, internet Paraná, fibra óptica, internet rápida'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="PR Fiber" />
      <meta property="og:locale" content="pt_BR" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />
      
      <meta name="theme-color" content="#0066CC" />
    </Helmet>
  );
}