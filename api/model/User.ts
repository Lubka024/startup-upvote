import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { userRole } from './acl'
import { Startup } from './Startup'
import { Upvote } from './Upvote'

@acl.allow(userRole, {
	read: true,
	create: true,
	update: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	startups = def.oneHasMany(Startup, 'createdBy')
	upvotes = def.oneHasMany(Upvote, 'user')
}
