import { Component, SelectField } from '@contember/admin'

export const UpvoteForm = Component(() => <>
	<SelectField field="user" label="User" lazy options="User.name" required />
	<SelectField field="startup" label="Startup" lazy options="Startup.name" required />
</>)
