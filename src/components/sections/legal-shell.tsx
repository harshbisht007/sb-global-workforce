import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";

export interface LegalBlock {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

interface LegalShellProps {
  title: string;
  crumbName: string;
  intro: string;
  updated: string;
  blocks: LegalBlock[];
}

export function LegalShell({
  title,
  crumbName,
  intro,
  updated,
  blocks,
}: LegalShellProps) {
  return (
    <>
      <PageHero
        align="left"
        eyebrow="Legal"
        crumbs={[{ name: crumbName }]}
        title={title}
        description={intro}
      >
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {updated}
        </p>
      </PageHero>

      <section className="section">
        <div className="container-wide max-w-3xl">
          <div className="flex flex-col gap-10">
            {blocks.map((block, i) => (
              <Reveal key={block.heading} delay={Math.min(i * 0.03, 0.15)}>
                <article>
                  <h2 className="text-xl font-bold text-ink sm:text-2xl">
                    {block.heading}
                  </h2>
                  {block.paragraphs?.map((p, j) => (
                    <p
                      key={j}
                      className="mt-3 text-[15px] leading-relaxed text-muted-foreground"
                    >
                      {p}
                    </p>
                  ))}
                  {block.list && (
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {block.list.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-[15px] leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
