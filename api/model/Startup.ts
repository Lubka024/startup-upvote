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
	stats = def.oneHasOneInverse(StartUpStats, 'startup')
}

@def.View(`SELECT 
	gen_random_uuid() as id,
	id AS startup_id,
	(SELECT COUNT(*) FROM upvote WHERE startup.id = startup_id) AS total_upvotes
	FROM startup`)
@acl.allow(userRole, {
	read: true,
	create: true,
})
export class StartUpStats {
	startup = def.oneHasOne(Startup, 'stats')
	totalUpvotes = def.intColumn().default(0)
}
