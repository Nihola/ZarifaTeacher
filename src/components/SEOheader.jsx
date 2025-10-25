import { HeadProvider, Title, Meta, Link } from "react-head";

export default function SeoHeader({
  title,
  description,
  keywords,
  image = "/preview.png",
  url = "https://zarifateacher.uz",
}) {
  return (
    <HeadProvider>
      {/* Basic SEO */}
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <Meta name="keywords" content={keywords} />
      <Meta name="robots" content="index, follow" />

      {/* Canonical link (helps avoid duplicate content issues) */}
      <Link rel="canonical" href={url} />

      {/* Open Graph (Facebook, Telegram, etc.) */}
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:image" content={image} />
      <Meta property="og:url" content={url} />

      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content={image} />
    </HeadProvider>
  );
}
