import { User, Listing } from "@prisma/client";

export type SafeListing = Omit<
    Listing,
    "createdAt"
>& {
    createdAt:string;
}

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updateAt: string;
    emailVerified: string | null;
};