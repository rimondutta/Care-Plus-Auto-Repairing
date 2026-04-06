import { Metadata } from "next";
import PageHeroBanner from "../../components/services/PageHeroBanner";
import ServicesContainer from "../../components/services/ServicesContainer";
import ServiceProcess from "../../components/services/ServiceProcess";
import ServiceCTABanner from "../../components/services/ServiceCTABanner";
import ServiceFAQ from "../../components/services/ServiceFAQ";
import ServiceGuarantee from "../../components/services/ServiceGuarantee";

export const metadata: Metadata = {
  title: "Our Services | Care Plus Auto Repairing",
  description: "Expert car repair services including engine repair, tire change, denting repair, ceramic coating and more. Certified mechanics, 6-month guarantee.",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services" }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#110E10] min-h-screen">
      <main>
        {/* Top Hero Breadcrumbs Block */}
        <PageHeroBanner
          title="Services"
          breadcrumbs={breadcrumbs}
          tag="OUR SERVICES"
        />

        {/* Client side container handling Tabs + Grid + State */}
        <ServicesContainer />

        {/* How it Works section */}
        <ServiceProcess />

        {/* Pre-footer Call to action red banner */}
        <ServiceCTABanner />

        {/* Accordions */}
        <ServiceFAQ />

        {/* Final Guarantee Badges */}
        <ServiceGuarantee />

      </main>
    </div>
  );
}
