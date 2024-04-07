import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		name: 'Dashboard',
		icon: 'layout-dashboard',
		link: DASHBOARD_PAGES.HOME
	},
	{
		name: 'Tasks',
		icon: 'square-kanban',
		link: DASHBOARD_PAGES.TASKS
	},
	{
		name: 'Timer',
		icon: 'timer',
		link: DASHBOARD_PAGES.TIMER
	},
	{
		name: 'Habits',
		icon: 'circle-dot-dashed',
		link: DASHBOARD_PAGES.HABITS
	},
	{
		name: 'Time managment',
		icon: 'calendar-range',
		link: DASHBOARD_PAGES.TIME_MANAGMENT
	},
	{
		name: 'Settings',
		icon: 'settings',
		link: DASHBOARD_PAGES.SETTINGS
	}
]
