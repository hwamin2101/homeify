import { User } from "@prisma/client";

export type SafeUser = Omit<
    User,
    "createdAT" | "updatedAT" | "emailVerfied"
> & {
    createdAT: string;
    updateAT: string;
    emailVerified: string | null;
}