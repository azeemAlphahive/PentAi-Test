import Image from "next/image";
import { Container } from "@/components/ui/Container";
// import { CheckCircle2 } from "lucide-react";

type ColumnContent = {
  titleA: string;
  titleB: string;
  titleC: string;
  bullets: string[];
};

type Props = {
  leftScreenshots: string[];
  left: ColumnContent;
  rightScreenshots: string[];
  right: ColumnContent;
  cardAspectClass?: string;
};

export function FeatureChecklistBowl({
  leftScreenshots,
  rightScreenshots,
  left,
  right,
  cardAspectClass = "aspect-[4/3]",
}: Props) {
  return (
    <section className="relative isolate py-14 sm:py-16">
      {/* ===== Bowl / Ellipse under content ===== */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-x-1/2 bottom-[-220px] z-0
          h-[560px] w-[1500px] -translate-x-1/2 rounded-[9999px]
          border-t border-white/15
          [background:radial-gradient(125%_100%_at_50%_15%,rgba(255,255,255,0.18),rgba(255,255,255,0.08)_45%,transparent_75%)]
          shadow-[0_-60px_120px_-40px_rgba(0,0,0,0.6)_inset]
        "
      />
      {/* ===== Stars below the bowl (pure CSS) ===== */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[480px]
          [background:
            radial-gradient(120%_120%_at_50%_10%,rgba(255,255,255,0.10),transparent 60%),
            radial-gradient(2px_2px_at_8%_28%,rgba(255,255,255,0.28),transparent 55%),
            radial-gradient(2px_2px_at_20%_64%,rgba(255,255,255,0.24),transparent 56%),
            radial-gradient(2px_2px_at_32%_56%,rgba(255,255,255,0.22),transparent 57%),
            radial-gradient(2px_2px_at_44%_86%,rgba(255,255,255,0.22),transparent 58%),
            radial-gradient(2px_2px_at_58%_72%,rgba(255,255,255,0.26),transparent 59%),
            radial-gradient(2px_2px_at_72%_80%,rgba(255,255,255,0.24),transparent 60%),
            radial-gradient(2px_2px_at_86%_64%,rgba(255,255,255,0.25),transparent 61%),
            radial-gradient(2px_2px_at_14%_88%,rgba(255,255,255,0.25),transparent 62%),
            radial-gradient(2px_2px_at_36%_92%,rgba(255,255,255,0.22),transparent 63%),
            radial-gradient(2px_2px_at_64%_90%,rgba(255,255,255,0.22),transparent 64%),
            radial-gradient(2px_2px_at_78%_86%,rgba(255,255,255,0.26),transparent 65%)
          ]
          opacity-70
        "
      />{" "}
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* left ss */}
          <div className="space-y-[30px]">
            <FrameCard cardAspectClass={cardAspectClass}>
              <SingleShot src={leftScreenshots[0]} />
            </FrameCard>
            <ColumnCopy {...left} />
          </div>

          {/* right multiple ss */}
          <div className="space-y-[30px]">
            <FrameCard cardAspectClass={cardAspectClass}>
              {rightScreenshots.length <= 1 ? (
                <SingleShot src={rightScreenshots[0]} />
              ) : (
                <GridShots
                  shots={rightScreenshots}
                  cardAspectClass={cardAspectClass}
                />
              )}
            </FrameCard>
            <ColumnCopy {...right} />
          </div>
        </div>
      </Container>
    </section>
  );
}
function FrameCard({
  children,
  cardAspectClass,
}: {
  children: React.ReactNode;
  cardAspectClass: string;
}) {
  return (
    <div className="relative w-full max-w-[560px] overflow-hidden ">
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          [background:radial-gradient(3px_3px_at_18px_18px,rgba(255,255,255,0.15),transparent_55%)]
          [background-size:120px_120px]
          opacity-30
        "
      />
      <div
        className={`relative w-full ${cardAspectClass} overflow-hidden rounded-xl bg-zinc-800`}
      >
        {children}
      </div>
    </div>
  );
}

function SingleShot({ src }: { src?: string }) {
  if (!src) return null;
  return (
    <Image
      src={src}
      alt="Feature screenshot"
      fill
      className="object-cover object-right"
      priority
    />
  );
}
function GridShots({
  shots,
  cardAspectClass,
}: {
  shots: string[];
  cardAspectClass: string;
}) {
  const list = shots.filter(Boolean).slice(0, 4);
  return (
    <div className="absolute inset-0 p-2">
      <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-3">
        {list.map((src, i) => (
          <div
            key={i}
            className={`relative w-full ${cardAspectClass} rounded-lg bg-zinc-900/30`}
          >
            <Image
              src={src}
              alt={`Screenshot ${i + 1}`}
              fill
              className="object-cover object-right"
              priority={i < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ColumnCopy({ titleA, titleB, titleC, bullets }: ColumnContent) {
  return (
    <>
      <h3 className="text-[36px] font-[dm-semibold] leading-tight">
        <span className="text-[#9BA1A6]">{titleA} </span>
        <span className="text-white">{titleB}</span>
        <br />
        <span className="text-[#9BA1A6]">{titleC}</span>
      </h3>

      <ul className="space-y-[30px]">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-center gap-[10px] text-[14px] leading-relaxed text-zinc-300/90"
          >
              <Image src='/Images/CheckCircle.svg' className="h-[30px] w-[30px] text-white" alt="CheckCircle" width={30} height={30} />

            <span className="text-[#ECEDEE] font-[dm] text-[20px]">{b}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
