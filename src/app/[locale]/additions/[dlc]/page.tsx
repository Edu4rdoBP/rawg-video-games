'use client';
import { DetailedGameCard } from "@/components/DetailedGameCard";
import { Main } from "@/styles/main";

interface IDLCScreen {
    params: { dlc: number }
}

export default function DLCGame({ params }: IDLCScreen) {
    return (
        <Main>
            <DetailedGameCard id={params.dlc} />
        </Main>
    );
}
