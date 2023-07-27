import { DataGridScope, DeleteEntityButton, GenericCell, HasOneSelectCell, ImageFieldView, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'
import { getImageResizeUrl } from '../../../scripts/getImageResizeUrl'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Startups
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="admin/startup/create">
					Create new startup
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Startup" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/startup/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<GenericCell>
					<ImageFieldView srcField='logo.url' width={100} />
				</GenericCell>
				<TextCell field="name" header="Name" />
				<TextCell field="description" header="Description" />
				<HasOneSelectCell field="createdBy" header="createdBy" options="User.name" />
				<NumberCell field="stats.totalUpvotes" header="Total upvotes" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
