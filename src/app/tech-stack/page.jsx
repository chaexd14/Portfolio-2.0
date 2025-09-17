import ClientPage from './ClientPage';

export const metadata = {
  title: 'Tech Stack | King Amato aka <Chae />',
  description:
    'Discover the complete tech stack of King Amato aka <Chae />, including frontend, backend, database, and developer tools used in modern web development.',
  keywords: [
    'King Amato',
    'Chae',
    'Tech Stack',
    'Frontend',
    'Backend',
    'Database',
    'Developer Tools',
    'Portfolio',
    'Web Development',
    'Full Stack',
  ],
  authors: [{ name: 'King Amato', url: 'https://your-website.com' }],
  creator: 'King Amato aka <Chae />',
  publisher: 'King Amato aka <Chae />',
  metadataBase: new URL('https://your-website.com'), // your site URL

  openGraph: {
    title: 'Tech Stack | King Amato aka <Chae />',
    description:
      'Explore the frontend, backend, and developer tools used by King Amato for building modern web applications.',
    url: 'https://your-website.com/tech-stack',
    siteName: 'King Amato Portfolio',
    images: [
      {
        url: 'https://your-website.com/preview-image.png',
        width: 1200,
        height: 630,
        alt: 'Tech Stack Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

function Page() {
  return <ClientPage />;
}

export default Page;
