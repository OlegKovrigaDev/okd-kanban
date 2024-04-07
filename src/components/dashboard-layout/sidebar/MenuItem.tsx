import { Icon } from '@/components/ui/Icon'
import Link from 'next/link'
import { IMenuItem } from './menu.interface'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div>
			<Link href={item.link}>
				<Icon name={item.icon} />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
