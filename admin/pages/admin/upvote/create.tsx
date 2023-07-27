import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { UpvoteForm } from '../../../components/forms/UpvoteForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create upvote
			</SlotSources.Title>
			<CreateScope entity="Upvote" redirectOnSuccess="admin/upvote/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create upvote" labelSaved="Create upvote" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/upvote/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Upvotes
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<UpvoteForm />
				</>
			</CreateScope>
		</>
	)
}
