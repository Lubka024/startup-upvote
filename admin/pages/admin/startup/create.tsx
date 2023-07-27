import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { StartupForm } from '../../../components/forms/StartupForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create startup
			</SlotSources.Title>
			<CreateScope entity="Startup" redirectOnSuccess="admin/startup/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create startup" labelSaved="Create startup" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/startup/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Startups
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<StartupForm />
				</>
			</CreateScope>
		</>
	)
}
