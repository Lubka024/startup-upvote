import { useEffect } from 'react'
import { useProjectUserRoles, useRedirect } from '@contember/admin'

export default () => {
	const redirect = useRedirect()
	const roles = useProjectUserRoles()
	useEffect(() => {
		if (roles.has('admin')) {
			redirect('admin/user/list'), [redirect]
		} else if (roles.has('user')) {
			redirect('user/user/list'), [redirect]
		}
	})
	return null
}
