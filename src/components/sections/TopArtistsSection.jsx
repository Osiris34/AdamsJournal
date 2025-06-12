import { SectionHeading } from "#/SectionHeading";
import { HighlightedArtistCard } from "../cards/HighlightedArtistCard";
import { highlightedArtists } from "@/data/features";

export function TopArtistsSection() {
  return (
    <section className="bg-base-200 dark:bg-base-800 py-24">
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title="Top Artists of the Month"
          description="Shining stars in the music world"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          {highlightedArtists.map((artist, index) => (
            <HighlightedArtistCard key={index} {...artist} />
          ))}
        </div>
      </div>
    </section>
  );
}
