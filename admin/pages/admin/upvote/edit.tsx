import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { UpvoteForm } from '../../../components/forms/UpvoteForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit upvote
			</SlotSources.Title>
			<EditScope entity="Upvote(id=$id)" redirectOnSuccess="admin/upvote/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/upvote/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<UpvoteForm />
			</EditScope>
		</>
	)
}
