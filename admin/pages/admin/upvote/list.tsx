import { DataGridScope, DeleteEntityButton, GenericCell, LinkButton } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Upvotes
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="admin/upvote/create">
					Create new upvote
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Upvote" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/upvote/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
