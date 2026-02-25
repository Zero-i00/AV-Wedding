import {HeroSection} from "@/features/core/components/sections/hero";
import {InvitationSection} from "@/features/core/components/sections/invitation";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {alcoholQueries} from "@/features/core/queries/alcohol.queries";

export default async function Home() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(alcoholQueries.list())

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <HeroSection />
            <InvitationSection />
        </HydrationBoundary>
    );
}
