import { 
  Check, 
  Activity, 
  Store, 
  Settings, 
  Cpu, 
  Droplets, 
  Wrench, 
  Hammer, 
  Battery, 
  Disc, 
  Layers, 
  AlignCenter, 
  Aperture, 
  Sparkles, 
  Circle, 
  Settings2,
  LucideIcon 
} from "lucide-react";
import ChevronIcon from "./ChevronIcon";
import MechanicsGrid from "./MechanicsGrid";
import ServiceTestimonials from "./ServiceTestimonials";
import { Service } from "../../types/service";

// Icon mapping for dynamic rendering
const ICON_MAP: Record<string, LucideIcon> = {
  Activity,
  Store,
  Settings,
  Cpu,
  Droplets,
  Wrench,
  Hammer,
  Battery,
  Disc,
  Layers,
  AlignCenter,
  Aperture,
  Sparkles,
  Circle,
  Settings2,
};

interface ServiceDetailsProps {
  service: Service;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <div className="w-full flex-1">
      
      {/* SERVICE IMAGE */}
      <div className="w-full aspect-video bg-[#1B1B1B] rounded-xl flex items-center justify-center mb-10 overflow-hidden relative border border-[#222]">
        {service.image ? (
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url('${service.image}')` }}
          />
        ) : (
          <span className="text-[#444] font-bold tracking-widest uppercase text-xl md:text-2xl z-10 scale-100 hover:scale-105 transition-transform duration-500 cursor-default">
            {service.title}
          </span>
        )}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#2e2e2e_1px,transparent_1px)] [background-size:12px_12px] opacity-10"></div>
      </div>

      {/* SERVICE TITLE & DESCRIPTION */}
      <h2 className="text-white font-black heading-font text-3xl mb-4 uppercase">
        {service.title}
      </h2>
      <div className="w-16 h-1 bg-[var(--color-primary)] mb-8"></div>

      {/* Render detailed content paragraphs */}
      {service.detailedContent?.map((paragraph, idx) => (
        <p key={idx} className="text-[#999] text-base leading-relaxed mb-6 font-medium">
          {paragraph}
        </p>
      )) || (
        <p className="text-[#999] text-base leading-relaxed mb-6 font-medium">
          {service.description}
        </p>
      )}

      {/* TWO-COLUMN CHECKLIST */}
      {service.checklist && service.checklist.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-16">
          {/* Split checklist into two columns */}
          {[0, 1].map((colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {service.checklist!
                .filter((_, i) => i % 2 === colIdx)
                .map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="text-[var(--color-primary)] w-4 h-4 flex-shrink-0" strokeWidth={3} />
                    <span className="text-[#CCC] text-sm font-semibold">{item}</span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}

      {/* ICON BOXES GRID */}
      {service.iconBoxes && service.iconBoxes.length > 0 && (
        <>
          <div className="flex items-center gap-3 mb-4">
            <ChevronIcon className="w-8 h-3" />
            <h3 className="text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase">
              List Of Services Included
            </h3>
          </div>
          <div className="h-[1px] w-full bg-[#222] mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {service.iconBoxes.map((box, idx) => {
              const Icon = ICON_MAP[box.iconName] || Settings;
              return (
                <div key={idx} className="flex items-start gap-5 bg-[#1B1B1B] p-6 rounded-xl border border-[#222] hover:border-[var(--color-primary)] transition-colors duration-300 group">
                  <div className="w-[52px] h-[52px] flex items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex-shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-white font-bold text-base mb-2">{box.title}</h4>
                    <p className="text-[#888] text-sm leading-relaxed">{box.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* MECHANICS GRID */}
      {service.mechanics && service.mechanics.length > 0 && (
        <MechanicsGrid mechanics={service.mechanics} />
      )}

      {/* CLIENT TESTIMONIALS */}
      <div className="flex items-center gap-3 mb-4 mt-16">
        <ChevronIcon className="w-8 h-3" />
        <h3 className="text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase">
          Client&apos;s Testimonial
        </h3>
      </div>
      <div className="h-[1px] w-full bg-[#222] mb-6"></div>
      <p className="text-[#999] text-sm leading-relaxed mb-8 italic">
        &quot;We&apos;ve helped over ten thousand satisfied vehicle owners since our launch. It brings us great pride knowing our repair mechanisms successfully bring cars back to pristine life. Our team is dedicated to providing the highest level of craftsmanship and technical expertise to every customer.&quot;
      </p>
      <ServiceTestimonials />

      {/* HOW IT WORKS / PROCESS SECTION */}
      <div className="mt-20">
        <div className="flex items-center gap-3 mb-4">
          <ChevronIcon className="w-8 h-3" />
          <h3 className="text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase">
            Our Work Process
          </h3>
        </div>
        <div className="h-[1px] w-full bg-[#222] mb-8"></div>
        <div className="space-y-8">
          <p className="text-[#999] text-base leading-relaxed">
            Understanding our repair process helps you feel confident about the care your vehicle receives. At Care Plus Auto Repairing, we follow a rigorous multi-step protocol for every service we provide, ensuring that nothing is overlooked and every component is treated with precision.
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex gap-6">
              <div className="text-2xl font-black text-[var(--color-primary)] opacity-30 mt-1">01</div>
              <div>
                <h5 className="text-white font-bold text-lg mb-2 uppercase">Initial Assessment & Diagnostics</h5>
                <p className="text-[#888] text-sm">Every vehicle undergoes a comprehensive digital scan and visual inspection. Our technicians use state-of-the-art tools to identify both obvious and hidden mechanical issues before drafting a precise repair plan.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-2xl font-black text-[var(--color-primary)] opacity-30 mt-1">02</div>
              <div>
                <h5 className="text-white font-bold text-lg mb-2 uppercase">Transparent Estimation</h5>
                <p className="text-[#888] text-sm">Once the diagnostic phase is complete, we provide a detailed breakdown of the necessary repairs, including parts and labor costs. We believe in complete transparency and only proceed once you fully understand the scope of work.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-2xl font-black text-[var(--color-primary)] opacity-30 mt-1">03</div>
              <div>
                <h5 className="text-white font-bold text-lg mb-2 uppercase">Premium Execution</h5>
                <p className="text-[#888] text-sm">Our certified mechanics carry out the repairs using genuine spare parts and high-quality consumables. We follow factory-standard torque specifications and installation sequences to ensure long-term reliability.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-2xl font-black text-[var(--color-primary)] opacity-30 mt-1">04</div>
              <div>
                <h5 className="text-white font-bold text-lg mb-2 uppercase">Quality Control & Testing</h5>
                <p className="text-[#888] text-sm">Before your car leaves our workshop, it undergoes a final quality check and road test. We verify that all systems are functioning perfectly and that the initial issue has been completely resolved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-20 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <ChevronIcon className="w-8 h-3" />
          <h3 className="text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="h-[1px] w-full bg-[#222] mb-8"></div>
        <div className="space-y-6">
          {(service.faqs && service.faqs.length > 0 ? service.faqs : [
            {
              question: "How long does a standard vehicle repair take?",
              answer: "The duration depends on the complexity of the issue. Routine maintenance typically takes 2-4 hours, while complex engine or transmission work might require 2-3 business days. We always provide an estimated timeline during the diagnostic phase."
            },
            {
              question: "Do you use genuine parts for all repairs?",
              answer: "Yes, we prioritize the use of 100% genuine OEM (Original Equipment Manufacturer) parts. This ensures the best compatibility, safety, and longevity for your vehicle, while also maintaining your manufacturer's warranty where applicable."
            },
            {
              question: "Can I get a price estimate over the phone?",
              answer: "While we can provide general starting prices for standard services like oil changes or tire rotations, a precise quote requires a physical inspection of your vehicle to identify its specific needs and condition."
            },
            {
              question: "Is there a warranty on your repair services?",
              answer: "We stand behind our work with a comprehensive service warranty. Most major repairs come with a dedicated parts and labor guarantee, giving you peace of mind that your vehicle was serviced correctly."
            }
          ]).map((faq, index) => (
            <div key={index} className="bg-[#161616] p-6 rounded-xl border border-[#222]">
              <h5 className="text-white font-bold text-base mb-3 leading-tight">{faq.question}</h5>
              <p className="text-[#888] text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
