import { Box, DataGrid, DetailScope, DisplayTextField, GenericCell, LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				User detail
			</SlotSources.Title>
			<DetailScope entity="User(id=$id)">
				<SlotSources.Back>
					<LinkButton to="user/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="user/user/edit(id: $entity.id)">
						Edit user
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="email" label="Email" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Startups
								</h2>
								<LinkButton to="user/startup/create">
									Create new startup
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Startup[createdBy.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="user/startup/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell field="name" header="Name" />
							<TextCell field="description" header="Description" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Upvotes
								</h2>
							</Stack>
						</div>
						<DataGrid entities="Upvote[user.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="user/upvote/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
