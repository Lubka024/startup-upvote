import { DataGridScope, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Startups
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="user/startup/create">
					Create new startup
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Startup" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="user/startup/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell field="name" header="Name" />
				<TextCell field="description" header="Description" />
				<HasOneSelectCell field="createdBy" header="createdBy" options="User.name" />
			</DataGridScope>
		</>
	)
}
