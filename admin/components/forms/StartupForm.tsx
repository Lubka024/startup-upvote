import { Component, ImageUploadField, SelectField, TextField } from '@contember/admin'

export const StartupForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="description" label="Description" />
	<ImageUploadField
		baseEntity="logo"
		urlField="url"
		fileSizeField="size"
		fileTypeField="type"
		heightField="height"
		widthField="width"
		label="Logo"
	/>
	<SelectField field="createdBy" label="Created by" lazy options="User.name" allowNull />
</>)
