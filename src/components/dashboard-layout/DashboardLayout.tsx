'use client'

import { type PropsWithChildren } from 'react'
import { ProfileSection } from './profile/ProfileSection'
import { Sidebar } from './sidebar/Sidebar'

export function DashboardLayout({ children }: PropsWithChildren) {
	return (
		<div>
			<Sidebar />
			<ProfileSection />
			<main>{children}</main>
		</div>
	)
}
