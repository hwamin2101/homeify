import { SafeListing, SafeUser } from "@/types";
import Container from "@/components/Container"
import React from "react";
import Heading from "@/components/Heading";
import { list } from "postcss";
import ListingCard from "@/components/listings/ListingCard";

interface FavoritesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
    listings,
    currentUser
}) => {
    return (
        <Container>
            <Heading 
                title="Yêu thích"
                subtitle="Danh sách những địa điểm bạn đã yêu thích!"
            />
            <div
                className="
                    mt-10
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    2cl:grid-cols-6
                    gap-8
                "
            >
                {listings.map((listing) => (
                    <ListingCard
                        currentUser={currentUser}
                        key={listing.id}
                        data={listing}
                    />
                ))}
            </div>
        </Container>
    );
}

export default FavoritesClient;