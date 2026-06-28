import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

interface ProcessSectionProps {
  withHeading?: boolean;
  className?: string;
}

export function ProcessSection({
  withHeading = true,
  className,
}: ProcessSectionProps) {
  return (
    <section id="process" className={cn("section", className)}>
      <div className="container-wide">
        {withHeading && (
          <SectionHeading
            eyebrow="Our Recruitment Process"
            title={
              <>
                Seven clear steps from{" "}
                <span className="text-gradient">apply to deployment</span>
              </>
            }
            description="A transparent, proven journey — every stage handled by our team so candidates and employers always know what comes next."
            className="mb-16"
          />
        )}

        <Stagger className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-[2.75rem] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.number} className="relative">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  {/* Node */}
                  <div className="relative z-10 mb-5 flex size-[5.5rem] items-center justify-center rounded-2xl border border-border bg-white shadow-soft">
                    <step.icon className="size-8 text-primary" strokeWidth={1.6} />
                    <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-ink text-[11px] font-bold text-white shadow-soft">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-ink">
                    {step.title}
                  </h3>
                  <span className="mt-1 inline-flex rounded-full bg-primary/8 px-2.5 py-0.5 text-[11px] font-semibold text-primary-700">
                    {step.duration}
                  </span>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
