import { DataGridScope, GenericCell, LinkButton } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Upvotes
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="user/upvote/create">
					Create new upvote
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Upvote" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="user/upvote/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
			</DataGridScope>
		</>
	)
}
