import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { userRole } from './acl'
import { Startup } from './Startup'


@acl.allow(userRole, {
	read: true,
	create: true,
})
export class Image {
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()
	alt = def.stringColumn()
	createdAt = def.dateTimeColumn().notNull().default('now')
	startupLogo = def.oneHasMany(Startup, 'logo')
}
