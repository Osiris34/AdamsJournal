import Head from "next/head";
import Link from "next/link";
import { FeatureSection } from "@/components/sections/FeatureSection";
import {
  Header,
  HeroSection,
  TestimonialSection,
  FaqSection,
  Footer,
  LargeFeatureSection,
  CtaSection,
} from "../components/sections";
import { articles } from "@/data/articles";
import {
  header,
  faqs,
  testimonials,
  features,
  clients,
  footer,
} from "@/data";

import { TopArtistsSection } from "@/components/sections/TopArtistsSection";
import { highlightedArtists } from "@/data/features";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinyl Vault – Deep Cuts & Honest Reviews</title>
        <meta
          name="description"
          content="Honest vinyl reviews, retro vibes, and audiophile-approved picks. Discover your next favorite record at Vinyl Vault."
        />
      </Head>

      {/* Background wrapper for entire page */}
      <div
        style={{
           position: "relative",
    backgroundImage: "url('./ADAMS JOURNAL.png')",
    minHeight: "100vh",
   // optional: default text color on dark background
        }}
      >
        
        <Header
          logo={header.logo}
          links={[
            { label: "Home", href: "#home" },
            //{ label: "Reviews", href: "#featured-reviews" },
            { label: "Top Picks", href: "#top-picks" },
            { label: "About", href: "#about" },
            { label: "Blog", href: "#blog" },
            { label: "Articles", href: "#articles" },
            { label: "Contact", href: "#footer" },
          ]}
          buttons={header.buttons}
        />

        {/* Hero Section */}
        <HeroSection
          id="home"
          badge={{
            href: "#reviews",
            icon: "tabler:vinyl",
            label: "Latest Reviews Out Now!",
          }}
          title="The Adams Journal"
          titleClassName="text-gray-900 dark:text-gray-100"
          description="Dig through the crates with us – honest reviews, rare finds, and sonic treasures. Whether you're a crate-digger or a casual spinner, we've got your groove."
           className = "text-gray-300 dark:text-gray-100"
          buttons={[
            {
              href: "#newsletter",
              label: "Join the Vault",
              color: "dark",
            },
            {
              href: "#articles",
              label: "Read Reviews",
              color: "dark",
              variant: "link",
              icon: "tabler:arrow-right",
            },
          ]}
          // image={{
          //   src: "./vinyl-collection.jpg",
          //   alt: "Vinyl collection",
          //   className: "w-full h-auto",
          // }}
          clientsLabel="Trusted by Music Lovers Everywhere"
          clients={clients}
        />

        {/* Featured Reviews */}
        <FeatureSection
          id="featured-reviews"
          title="Featured Reviews"
          description="New spins and deep cuts. Here's what's on our turntable this week."
          features={features}
        />

        {/* Top Picks */}
        <section id="top-picks" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center mb-10">
            <h2 className="text-4xl font-bold">Top 3 Picks This Month</h2>
            <p className="text-gray-600 mt-2">Our current obsessions – carefully spun and selected.</p>
          </div>
          <LargeFeatureSection
            reverse
            title={"Spread"}
            list={highlightedArtists.slice(0, 1)} // use top 3 albums
            image={{
              src: "./outkast.jpg",
              alt: "Top Picks Album Stack",
              className: "w-full object-contain rotate-3 hover:rotate-0 transition-all",
            }}
          />
          <LargeFeatureSection
            id="about-me"
            title="Sweet Leaf"
            list={highlightedArtists.slice(1, 2)} // again, use album data
            image={{
              src: "./black-sabbath-sweet-leaf-enamel-pin.webp",
              alt: "Turntable",
              className: "w-full object-contain rotate-3 hover:rotate-0 transition-all",
            }}
          />
          <LargeFeatureSection
            reverse
            id="blog"
            title="MUTT"
            list={highlightedArtists.slice(2, 3)} // use blog post titles & blurbs
            image={{
              src: "./muttleonthomas.jpg",
              alt: "Vinyl stack",
              className: "w-full object-contain -rotate-3 hover:rotate-0 transition-all",
            }}
          />
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Author - Matthew Adams</h2>
            <p className="text-lg text-gray-700">
              Welcome to the Vinyl Vault (not the original name). Vinyl Vault was started to share my love for music with the masses. It includes in-depth reviews, articles on the musical landscape, and a myriad of other mediums.
              <br />
              <br />
              The goal of this publication is to enrich readers with knowledge they may not have had before and provide information they can share with others.
            </p>
            <div className="mt-8 flex justify-center">
              <img
                src="./mattuglyahh.png"
                alt="Author"
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section id="blog" className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6"> The Blog</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Tips, stories, and behind-the-scenes from the music world.
            </p>
            <LargeFeatureSection
              reverse
              list={features.slice(3, 6)}
              image={{
                src: "./vinly-pic.jpg",
                alt: "Blog Feature",
                className: "w-full object-contain -rotate-3 hover:rotate-0 transition-all",
              }}
            />
          </div>
        </section>

        {/* Articles Section */}
        <section className="bg-gray-100 py-16" id="articles">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Read Our Latest Vinyl Articles</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Deep dives into classic albums, hidden gems, and fresh spins from today's artists.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {articles.slice(0, 3).map((article) => (
                <div
                  key={article.slug}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <Link href={`/articles/${article.slug}`} className="text-blue-600 font-medium">
                    Read More →
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/articles" className="text-black font-bold underline">
                View All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <CtaSection
          id="newsletter"
          title="Get the Drop on New Vinyl Reviews"
          description="Subscribe to our newsletter for weekly drops, discounts, and exclusive vinyl picks."
          
          
        />

        {/* Footer */}
        <Footer
          id="footer"
          copyright="2025 Vinyl Vault. All rights reserved."
          logo={footer.logo}
          social={footer.social}
          links={footer.links}
        />
      </div>
    </>
  );
}
