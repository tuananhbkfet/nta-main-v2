import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nim-fawn.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Tuấn Anh - Website',
    template: '%s | Tuấn Anh'
  },
  description: 'Web cá nhân của TA',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://nim-fawn.vercel.app/',
    title: 'Tuấn Anh - Website',
    description: 'Website cá nhân của TA',
    siteName: 'Tuấn Anh',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Tuấn Anh - Website'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tuấn Anh - Website',
    description: 'Website cá nhân',
    images: ['/cover.jpg']
  },
  keywords: ['Kỹ sư', 'AI Applications', 'Software Development', 'Viettel', 'Portfolio', 'Vietnam'],
  authors: [{ name: 'Tuấn Anh' }],
  creator: 'Tuấn Anh',
  publisher: 'Tuấn Anh',
  robots: {
    index: true,
    follow: true
  }
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
