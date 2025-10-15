import { BleedGroup } from "@/components/landingPage/BleedGroup";
import { CTA } from "@/components/landingPage/CTA";
import { DashboardShowcase } from "@/components/landingPage/Dashboard";
import {
  Feature,
  FeatureBulletsShowcase,
} from "@/components/landingPage/FeatureBullet";
import { FeatureChecklistBowl } from "@/components/landingPage/FeatureChecklistBowl";
import { Footer } from "@/components/landingPage/Footer";
import { Hero } from "@/components/landingPage/Hero";
import { NavBar } from "@/components/landingPage/Navbar";
import { SecurityFeatures } from "@/components/landingPage/SecurityFeatures";
import { FeatureStats } from "@/components/landingPage/Stats";
import { Supporters } from "@/components/landingPage/Supporters";
import { Testimonials } from "@/components/landingPage/Testimonial";

const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    role: "Founder, Papercut",
    avatar: "/Images/Ellipse 1.svg",
    quote:
      "Magnis lacus laoreet pharetra commodo ac semper nam. Malesuada viverra mattis pellentesque consectetur nunc dignissim gravida duis.",
  },
  {
    id: 2,
    name: "Esther Howard",
    role: "Ops Lead",
    avatar: "/Images/Ellipse 1 (2).svg",
    quote: "Arcu augue egestas nec facilisis volutpat tortor tempus vitae sit.",
  },
  {
    id: 3,
    name: "Erat consectetur",
    role: "Product @ Delta",
    avatar: "/Images/Ellipse 1 (1).svg",
    quote:
      "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit.",
  },
  {
    id: 6,
    name: "Erat consectetur",
    role: "Product @ Delta",
    avatar: "/Images/Ellipse 1 (2).svg",
    quote:
      "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit.",
  },
  {
    id: 4,
    name: "Erat consectetur",
    role: "Product @ Delta",
    avatar: "/Images/Ellipse 1 (3).svg",
    quote:
      "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit.",
  },
  {
    id: 5,
    name: "Erat consectetur",
    role: "Product @ Delta",
    avatar: "/Images/Ellipse 1.svg",
    quote:
      "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit.",
  },
];
export default function Home() {
  const featureBullets: Feature[] = [
    {
      id: 1,
      title: "Feature 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.",
      imageSrc: "/images/financial-dashboard.png",
      imageAlt: "Full dashboard",
    },
    {
      id: 2,
      title: "Feature 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.",
      imageSrc: "/images/financial-dashboard.png",
      imageAlt: "Deposits and withdrawals",
    },
    {
      id: 3,
      title: "Feature 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.",
      imageSrc: "/images/financial-dashboard.png",
      imageAlt: "Charts and KPIs",
    },
  ] as const;
  return (
    <main className="min-h-dvh bg-[#0b0c10] text-white">
      <NavBar />
      <Hero />
      <BleedGroup>
        <Supporters />
        <DashboardShowcase
          imageSrc="/images/financial-dashboard.png"
          imageAlt="Financial dashboard"
        />
        <FeatureStats />
        <SecurityFeatures />
        <FeatureChecklistBowl
          leftScreenshots={["/Images/Frame 1707479353.svg"]}
          left={{
            titleA: "Lorem Ipsum",
            titleB: "Dolar Sed",
            titleC: "congue",
            bullets: [
              "Pellentesque odio sit sem nulla fringilla cum diam morbi at.",
              "Consectetur enim nulla risus elementum mattis.",
              "Pellentesque odio sit sem nulla fringilla cum diam morbi at.",
              "Consectetur enim nulla risus elementum mattis.",
            ],
          }}
          rightScreenshots={[
            "/Images/Frame 17074793532.svg",
          ]}
          right={{
            titleA: "Lorem Ipsum",
            titleB: "Dolar Sed",
            titleC: "congue",
            bullets: [
              "Pellentesque odio sit sem nulla fringilla cum diam morbi at.",
              "Consectetur enim nulla risus elementum mattis.",
              "Pellentesque odio sit sem nulla fringilla cum diam morbi at.",
              "Consectetur enim nulla risus elementum mattis.",
            ],
          }}
        />
        <FeatureBulletsShowcase
          heading="Lorem ipsum dolor"
          features={featureBullets}
          defaultImageSrc="/images/financial-dashboard.png"
          defaultImageAlt="Product screenshot"
        />
        <Testimonials items={testimonials} />
        <CTA />
      </BleedGroup>
      <Footer />
    </main>
  );
}
