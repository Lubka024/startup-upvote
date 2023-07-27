import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Upvote detail
			</SlotSources.Title>
			<DetailScope entity="Upvote(id=$id)">
				<SlotSources.Back>
					<LinkButton to="user/upvote/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Upvotes
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="user.name" label="User" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="startup.name" label="Startup" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
