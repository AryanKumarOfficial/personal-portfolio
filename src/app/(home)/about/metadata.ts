import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Aryan Kumar - Full-Stack Developer',
  description: 'Learn about Aryan Kumar\'s background, skills, education, and experience as a Full-Stack Developer and UI/UX Designer specializing in modern web technologies.',
  openGraph: {
    title: 'About Aryan Kumar | Full-Stack Developer & UI/UX Designer',
    description: 'Learn about Aryan Kumar\'s background, skills, education, and experience as a Full-Stack Developer and UI/UX Designer.',
    url: 'https://www.aryankumarofficial.tech/about',
    type: 'profile',
    images: [
      {
        url: '/assets/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aryan Kumar - About Page',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Aryan Kumar | Full-Stack Developer & UI/UX Designer',
    description: 'Learn about Aryan Kumar\'s background, skills, education, and experience as a Full-Stack Developer and UI/UX Designer.',
    images: ['/assets/images/about-og-image.jpg'],
  },
  keywords: ['Aryan Kumar', 'Full-Stack Developer', 'UI/UX Designer', 'Web Developer', 'React Developer', 'Next.js Developer', 'Portfolio', 'Skills', 'Education', 'Experience'],
  alternates: {
    canonical: 'https://www.aryankumarofficial.tech/about',
  },
};
