import type { Metadata } from "next";
import { siteConfig } from "./constants";

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  path = "",
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  path?: string;
} = {}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title: title === siteConfig.name ? title : `${title} | ${siteConfig.name}`,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@nextwebhosting",
    },
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
