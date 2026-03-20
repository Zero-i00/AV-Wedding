import {HeroSectionView} from "@/features/hero";
import {InvitationSectionView, alcoholQueries} from "@/features/invitation";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {PlaceSectionView} from "@/features/place";
import {HopeSectionView} from "@/features/hope";
import {PlanSectionView} from "@/features/plan";

export default async function Home() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(alcoholQueries.list())

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <HeroSectionView />
            <PlanSectionView />
            <PlaceSectionView />
            <InvitationSectionView />
            <HopeSectionView />
        </HydrationBoundary>
    );
}
