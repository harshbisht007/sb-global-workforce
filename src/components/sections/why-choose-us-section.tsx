import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { reasons } from "@/data/why-choose-us";

interface WhyChooseUsSectionProps {
  withHeading?: boolean;
}

export function WhyChooseUsSection({
  withHeading = true,
}: WhyChooseUsSectionProps) {
  return (
    <section id="why-us" className="section">
      <div className="container-wide">
        {withHeading && (
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                Everything you need for a{" "}
                <span className="text-gradient">safe, successful</span> placement
              </>
            }
            description="We combine deep market experience with rigorous compliance and genuine care for every candidate and employer we work with."
            className="mb-14"
          />
        )}

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="group h-full rounded-3xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <reason.icon className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-ink">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
