import type { Metadata } from 'next'
import { Zen_Kaku_Gothic_Antique } from 'next/font/google'
import './globals.scss'

const zen = Zen_Kaku_Gothic_Antique({
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal']
})

export const metadata: Metadata = {
	title: 'OKD Kanban',
	description: 'Best one for planning'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={zen.className}>{children}</body>
		</html>
	)
}
