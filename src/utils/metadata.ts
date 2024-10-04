import { pageIndex } from './robots';

const COMMON_META = {
  url: 'https://xcidic.com',
  title: 'Xcidic',
  description: 'Xcidic',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqGJX5W0ut9DOGdCXpO3o5ogBjrUoMRexmA&s',
};

const initMeta = {
  metadataBase: new URL(COMMON_META.url),
  title: COMMON_META.title,
  description: COMMON_META.description,
  alternates: {
    languages: {
      'id-ID': '/id',
      'en-US': '/en',
    },
    canonical: '',
  },
  openGraph: {
    title: COMMON_META.title,
    description: COMMON_META.description,
    url: COMMON_META.url,
    images: [
      {
        url: COMMON_META.logo,
        width: 1200,
        height: 628,
        secure_url: COMMON_META.logo,
      },
    ],
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    title: COMMON_META.title,
    description: COMMON_META.description,
    card: 'summary_large_image',
    images: [COMMON_META.logo],
  },
  other: {
    'og:locale:alternate': 'en_US',
  },
  robots: pageIndex(),
};

type ImageSnippet = {
  url: string;
  width?: number;
  height?: number;
};

type Meta = {
  title?: string;
  description?: string;
  openGraph?: object;
  twitter?: object;
  other?: object;
  canonical?: string;
  imageSnippet?: ImageSnippet;
};

export default function populateMetaData({
  title,
  description,
  openGraph,
  twitter,
  other,
  canonical,
  imageSnippet,
}: Meta) {
  const result = { ...initMeta };

  // replace metadata title
  if (title) {
    result.title = title;
    result.openGraph.title = title;
    result.twitter.title = title;
  }

  // replace metadata description
  if (description) {
    result.description = description;
    result.openGraph.description = description;
    result.twitter.description = description;
  }

  // replace metadata openGraph
  if (openGraph) {
    result.openGraph = { ...result.openGraph, ...openGraph };
  }

  // replace metadata twitter
  if (twitter) {
    result.twitter = { ...result.twitter, ...twitter };
  }

  if (canonical) {
    result.alternates.canonical = canonical;
  }

  // add metadata other
  if (other) {
    result.other = { ...result.other, ...other };
  }

  // replace metadata image snippet
  if (imageSnippet) {
    result.openGraph = {
      ...result.openGraph,
      images: [
        {
          url: imageSnippet.url,
          width: imageSnippet.width || 1200,
          height: imageSnippet.height || 628,
          secure_url: imageSnippet.url,
        },
      ],
    };
    result.twitter = { ...result.twitter, images: [imageSnippet.url] };
  }

  return result;
}
