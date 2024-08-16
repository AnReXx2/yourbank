"use client";

import { useState, useCallback, useEffect } from "react";
import styles from "./Testimonials.module.css";
import { TextTabContainer, TabsComp, TestimonialsCard } from "@/components";
import useEmblaCarousel from "embla-carousel-react";

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState<string>("Businesses");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Initial call
  }, [emblaApi, onSelect]);

  return (
    <section className={styles.testimonials}>
      <div className={styles.textConts}>
        <TextTabContainer
          title="Our"
          span="Testimonials"
          text="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey."
        />
        <TabsComp activeTab={activeTab} onTabClick={handleTabClick} />
      </div>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          <div
            className={`${styles.cardWrapper} ${
              selectedIndex === 0 ? styles.isActive : ""
            }`}
          >
            <TestimonialsCard
              text="I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable."
              name="John D"
            />
          </div>
          <div
            className={`${styles.cardWrapper} ${
              selectedIndex === 1 ? styles.isActive : ""
            }`}
          >
            <TestimonialsCard
              text="YourBank's customer service is outstanding! They always go the extra mile to ensure I'm happy and that my financial needs are met. I couldn't be more pleased with their service."
              name="Sarah K"
            />
          </div>
          <div
            className={`${styles.cardWrapper} ${
              selectedIndex === 2 ? styles.isActive : ""
            }`}
          >
            <TestimonialsCard
              text="Switching to YourBank was the best financial decision I've made. Their online banking platform is user-friendly and has made managing my finances so much easier."
              name="Michael R"
            />
          </div>
        </div>
        <div className={styles.butts}>
          <button className={styles.prevButton} onClick={scrollPrev}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2083 10H1.5M1.5 10L10 1.5M1.5 10L10 18.5"
                stroke="#CAFF33"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className={styles.nextButton} onClick={scrollNext}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.50016 10H19.2085M19.2085 10L10.7085 1.5M19.2085 10L10.7085 18.5"
                stroke="#CAFF33"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
