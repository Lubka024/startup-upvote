import { Box, DataGrid, DeleteEntityButton, DetailScope, DisplayTextField, GenericCell, ImageFieldView , LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { getImageResizeUrl } from '../../../scripts/getImageResizeUrl'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				User detail
			</SlotSources.Title>
			<DetailScope entity="User(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/user/edit(id: $entity.id)">
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
								<LinkButton to="admin/startup/create">
									Create new startup
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Startup[createdBy.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/startup/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell field="name" header="Name" />
							<TextCell field="description" header="Description" />
							<GenericCell shrunk>
								<ImageFieldView 
									srcField="logo.url"
									formatUrl={srcFieldValue => getImageResizeUrl(srcFieldValue, { width: 100 })}
									width={100}
								/>
							</GenericCell>
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
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
								<LinkButton to="admin/upvote/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
