import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import getCurrentUser from "@/actions/getCurrentUser";

import PropertiesClient from "./PropertiesClient";
import getListings from "@/actions/getListings";

const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="Không thể xác thực"
                    subtitle="Vui lòng đăng nhập"
                />
            </ClientOnly>
        )
    }

    const listings = await getListings({ 
        userId: currentUser.id
    });

    if (listings.length == 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Không tìm thấy danh mục nào"
                    subtitle="Có vẻ như bạn không đăng bất kỳ danh mục nào."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <PropertiesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default PropertiesPage;

//7:00:17