import { EntityAccessor, Membership, useProjectSlug, useShowToast } from '@contember/admin'
import * as React from 'react'

import { useInvite } from './useInvite'

export const useInviteUser = (memberships: Membership[]) => {
	const invite = useInvite()
	const project = useProjectSlug()
	const toast = useShowToast()

	return React.useCallback(async (getAccessor: () => EntityAccessor) => {
		const accessor = getAccessor()
		const personId = accessor.getField<string>('personId')
		const email = accessor.getField<string>('email')

		if (personId.value || !email.value) {
			return
		}

		const result = await invite({
			email: email.value,
			projectSlug: project!,
			memberships,
			method: 'RESET_PASSWORD',
		})

		if (!result.ok) {
			toast({
				message: `Unable to invite new member: \${result.error.developerMessage}`,
				dismiss: true,
				type: 'error',
			})
			return
		}

		return () => {
			personId.updateValue(result.result.person.id)
		}
	}, [invite, memberships, project, toast])
}
