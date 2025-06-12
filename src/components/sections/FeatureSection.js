import { SectionHeading } from "#/SectionHeading";
import { FeatureCard } from "../cards/FeatureCard";
import { features } from "@/data/features"; // Assuming you have a features data file

export function FeatureSection(){
  return (
    <section className="bg-base-100 dark:bg-base-900 py-24">
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title="Featured Reviews"
          description="Standout albums of the moment"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
