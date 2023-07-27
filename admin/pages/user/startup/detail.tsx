import { Box, DataGrid, DetailScope, DisplayTextField, GenericCell, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Startup detail
			</SlotSources.Title>
			<DetailScope entity="Startup(id=$id)">
				<SlotSources.Back>
					<LinkButton to="user/startup/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Startups
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="user/startup/edit(id: $entity.id)">
						Edit startup
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="createdBy.name" label="User" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Upvotes
								</h2>
							</Stack>
						</div>
						<DataGrid entities="Upvote[startup.id=$id]">
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
