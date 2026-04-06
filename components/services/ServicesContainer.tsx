"use client";

import { useState } from "react";
import ServiceFilterBar from "./ServiceFilterBar";
import ServiceGrid from "./ServiceGrid";
import { ServiceCategory } from "../../types/service";
import { servicesData } from "../../data/services";

export default function ServicesContainer() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");

  const resultsCount = activeCategory === "all" 
    ? servicesData.length 
    : servicesData.filter(s => s.category === activeCategory).length;

  return (
    <>
      <ServiceFilterBar 
        activeCategory={activeCategory} 
        onFilterChange={setActiveCategory} 
        resultsCount={resultsCount}
      />
      <ServiceGrid 
        services={servicesData} 
        activeCategory={activeCategory} 
      />
    </>
  );
}
