import { DataGridScope, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Users
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="user/user/create">
					Create new user
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="User" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="user/user/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell field="name" header="Name" />
				<TextCell field="email" header="Email" />
			</DataGridScope>
		</>
	)
}
