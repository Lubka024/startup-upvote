import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { RocketIcon, ThumbsUpIcon, UsersIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<UsersIcon />
				<>
					Users
				</>
			</Stack>}
			to="admin/user/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<RocketIcon />
				<>
					Startups
				</>
			</Stack>}
			to="admin/startup/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<ThumbsUpIcon />
				<>
					Upvotes
				</>
			</Stack>}
			to="admin/upvote/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('user')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<UsersIcon />
				<>
					Users
				</>
			</Stack>}
			to="user/user/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<RocketIcon />
				<>
					Startups
				</>
			</Stack>}
			to="user/startup/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<ThumbsUpIcon />
				<>
					Upvotes
				</>
			</Stack>}
			to="user/upvote/list"
		/>
	</HasRole>
</Menu>)
