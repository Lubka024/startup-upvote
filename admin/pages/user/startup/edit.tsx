import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { StartupForm } from '../../../components/forms/StartupForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit startup
			</SlotSources.Title>
			<EditScope entity="Startup(id=$id)" redirectOnSuccess="user/startup/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="user/startup/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<StartupForm />
			</EditScope>
		</>
	)
}
