import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { UserForm } from '../../../components/forms/UserForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit user
			</SlotSources.Title>
			<EditScope entity="User(id=$id)" redirectOnSuccess="admin/user/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/user/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<UserForm />
			</EditScope>
		</>
	)
}
