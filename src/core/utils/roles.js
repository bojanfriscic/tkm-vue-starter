import { ROLES } from '@types/roles';

export function isCompanyAdmin(sessionRoles) {
    return sessionRoles.includes(ROLES.ROLE_COMPANY_ADMIN);
}
