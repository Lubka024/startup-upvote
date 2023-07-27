import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { userRole } from './acl'
import { Image } from './Image'
import { User } from './User'
import { Upvote } from './Upvote'


@acl.allow(userRole, {
	read: true,
	create: true,
})
export class Startup {
	name = def.stringColumn()
	description = def.stringColumn()
	logo = def.manyHasOne(Image, 'startupLogo').setNullOnDelete()
	createdBy = def.manyHasOne(User, 'startups')
	upvotes = def.oneHasMany(Upvote, 'startup')
}
