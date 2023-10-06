import type { BlockSchemaType } from '@sanity/types';

export type Author = {
  name: {
    given: string;
    family: string;
  };
  work: {
    company: string;
    org: string;
    title: string;
  };
  image?: string;
};

export type Tag = {
  title: string;
  slug: string;
};

export type Image = {
  image: string;
  alt: string;
};

export type YouTube = {
  youtube: string;
};

export type Backgrounds = {
  large: string;
  small: string;
};

export type Theme = {
  icon: string;
  slug: string;
  eyebrow: string;
  backgrounds: Backgrounds;
};

export type Featured = {
  title: string;
  description: string;
  media?: Image;
};

export type Hero = YouTube | Image;

// Meta attributes assigned to all content
interface CoreContentMeta {
  _slug: string;
  _type: string;
  _lang: string;
  _langCode: string;
  _section: string;
  _path: string;
}

// Core fields shared by all content types
interface CoreContent extends CoreContentMeta {
  title: string;
  description: string;
  body: BlockSchemaType;
  category: Tag;
  tags: Tag[];
  dates: {
    published: Date;
    updated?: Date;
  };
}

export interface Post extends CoreContent {
  author: Author[];
  hero?: Hero;
  theme: Theme;
  featured?: Featured;
}

export interface Documentation extends CoreContent {
  theme: Theme;
}

export interface Story extends CoreContent {
  theme: Theme;
}

export type CMSLinkReference = {
  url: {
    slug: string;
    type: string;
  };
};

export type CMSLink = {
  text: string;
  url: string | CMSLinkReference;
};

export type Microcopy = {
  _lang: string; // Full language code, with country, if applicable
  accessibility: {
    skip: {
      toc: string; // Skip to table of contents
      content: string; // Skip to main content
    };
    authorAlt: string; // ((a)) - Replace author name
  };
  actions: {
    reset: string;
    loadVideo: string;
    remove: string;
    required: string;
    add: string;
    subscribe: string;
    more: string; // Read More
    back: string; // Breadcrumb back ((a)) - Replace with page title
  };
  meta: {
    authored: string;
    toc: string;
    updated: string;
    posted: string;
    tools: {
      title: string;
      versions: {
        singular: string;
        plural: string;
      };
    };
  };
  network: {
    offline: {
      title: string;
      description: string;
    };
    sw: {
      reload: {
        message: string;
        action: string;
      };
      refresh: {
        message: string;
        action: string;
      };
    };
    notFound: string;
  };
  topics: {
    title: string;
    related: string;
    section: string;
  };
  footer: {
    links: CMSLink[];
    help: CMSLink;
    language: string;
  };
  pagination: {
    next: string;
    previous: string;
    current: string;
    first: string;
    last: string;
    page: string;
    title: string;
  };
  locale: {
    code: string;
    name: string;
    dir: string;
    vertical: boolean;
  };
};
