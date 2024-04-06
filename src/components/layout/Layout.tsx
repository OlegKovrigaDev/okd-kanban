'use client'

import { type PropsWithChildren } from 'react'
import { ProfileSection } from './profile/ProfileSection'
import { Sidebar } from './sidebar/Sidebar'

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div>
			<Sidebar />
			<ProfileSection />
			<main>{children}</main>
		</div>
	)
}
