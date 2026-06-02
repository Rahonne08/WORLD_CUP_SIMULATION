# Firebase Security Specification

## Data Invariants
1. A User Profile can only be created and updated by the owner (matching request.auth.uid).
2. A Simulation can only exist if its `userId` matches the authenticated `request.auth.uid`.
3. Timestamps `createdAt` must match `request.time` exactly on creation.
4. Timestamps `updatedAt` must match `request.time` exactly on update.
5. All IDs must be valid alphanumeric strings.
6. A User Profile cannot change its `createdAt` after creation.
7. A Simulation cannot change its `userId` or `createdAt` after creation.

## The "Dirty Dozen" Payloads
1. Create profile: Missing required field `email`.
2. Create profile: Spoofed `email` without verification validation in client request, though rules check auth.
3. Update profile: Trying to modify `createdAt`.
4. Update profile: Missing `updatedAt`.
5. Update profile: `updatedAt` is not server time.
6. Create simulation: `userId` doesn't match `request.auth.uid`.
7. Create simulation: `state` exceeds maximum string length (e.g. DoS attack with huge string).
8. Update simulation: Trying to update `userId`.
9. Update simulation: Trying to update `createdAt`.
10. Update simulation: Missing `updatedAt`.
11. Update simulation: `updatedAt` is not server time.
12. Shadow Update: Adding an undefined field (e.g., `isAdmin: true` or `ghostField: "boo"`).

## The Test Runner
A `firestore.rules.test.ts` will be created to verify these invariants.
