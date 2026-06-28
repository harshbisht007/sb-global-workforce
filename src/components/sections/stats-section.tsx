import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/data/stats";

export function StatsSection() {
  return (
    <section className="relative -mt-8 pb-4">
      <div className="container-wide">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-card lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1 bg-white px-4 py-8 text-center sm:py-10"
              >
                <div className="font-display text-3xl font-bold text-ink sm:text-4xl lg:text-[2.75rem]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
