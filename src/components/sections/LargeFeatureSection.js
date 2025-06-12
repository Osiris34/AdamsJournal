/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { SectionHeading } from "#/SectionHeading";
import { FeatureCard } from "../cards/FeatureCard";
import { HighlightedArtistCard } from "../cards/HighlightedArtistCard"; // Capitalized to match convention

export function LargeFeatureSection({
  reverse = false,
  title,
  description,
  list,
  highlightedList = [], // new prop for highlighted artists
  image,
}) {
  return (
    <section className="bg-base-100 dark:bg-base-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-10">
          <div className="py-10">
            <SectionHeading
              align="left"
              title={title}
              description={description}
            />

            {/* Main Features */}
            <div className="flex flex-col gap-4 mt-4 lg:mt-10">
              {list.map((item, index) => (
                <FeatureCard
                  key={index}
                  {...item}
                  className="p-0 bg-transparent"
                  iconClass="size-8 p-1"
                />
              ))}
            </div>

            {/* Highlighted Artists */}
            {highlightedList.length > 0 && (
              <div className="flex flex-col gap-4 mt-10">
                {highlightedList.map((item, index) => (
                  <HighlightedArtistCard
                    key={index}
                    {...item}
                    className="p-0 bg-transparent"
                    iconClass="size-8 p-1"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Image Section */}
          <div
            className={cn("group relative flex items-center isolate", {
              "md:order-first": reverse,
            })}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 group-hover:w-2/3 aspect-square rounded-full bg-base-200 dark:bg-base-800 duration-200 ease-in-out"></div>
            <img src={image.src} alt={image.alt} className={image.className} />
          </div>
        </div>
      </div>
    </section>
  );
}
