import {HeroSectionView} from "@/features/hero";
import {InvitationSectionView} from "@/features/invitation";
import {alcoholService} from "@/features/invitation/services/alcohol.service";
import {PlaceSectionView} from "@/features/place";
import {HopeSectionView} from "@/features/hope";
import {PlanSectionView} from "@/features/plan";
import {MenuSectionView} from "@/features/menu";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ guests?: string }>
}) {
    const alcohols = await alcoholService.list().catch(() => [])
    const { guests: guestsParam } = await searchParams
    const guests = guestsParam
        ? guestsParam.split(',').map(g => g.trim()).filter(Boolean).slice(0, 3)
        : undefined

    return (
        <>
            <HeroSectionView />
            <MenuSectionView guests={guests} />
            <PlaceSectionView />
            <PlanSectionView />
            <InvitationSectionView alcohols={alcohols} />
            <HopeSectionView />
        </>
    );
}
