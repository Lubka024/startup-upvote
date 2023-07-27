import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { userRole } from './acl'
import { User } from './User'
import { Startup } from './Startup'


@acl.allow(userRole, {
	read: true,
	create: true,
})
export class Upvote {
	user = def.manyHasOne(User, 'upvotes').notNull()
	startup = def.manyHasOne(Startup, 'upvotes').notNull()
}
