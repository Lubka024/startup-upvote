import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { UserForm } from '../../../components/forms/UserForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create user
			</SlotSources.Title>
			<CreateScope entity="User" redirectOnSuccess="user/user/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create user" labelSaved="Create user" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="user/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<UserForm />
				</>
			</CreateScope>
		</>
	)
}
