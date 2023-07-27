import { AclDefinition as acl } from '@contember/schema-definition'


export const userRole = acl.createRole('user', { stages: '*', s3: { ['**']: { upload: true, read: true } } })
export const personIdUserVariable = acl.createPredefinedVariable('personId', 'personID', userRole)
