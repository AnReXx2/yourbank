"use client";

import { useState, useCallback, useEffect } from "react";
import styles from "./Testimonials.module.css";
import { TextContainer, TabsComp, TestimonialsCard } from "@/components";
import useEmblaCarousel from "embla-carousel-react";

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState<string>("Individuals");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
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
    const index = emblaApi.selectedScrollSnap();
    console.log("Selected index:", index); // Debug log
    setSelectedIndex(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className={styles.testimonials}>
      <div className={styles.textConts}>
        <TextContainer
          title="Our"
          span="Testimonials"
          text="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey."
        />
        <TabsComp activeTab={activeTab} onTabClick={handleTabClick} />
      </div>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`${styles.cardWrapper} ${
                selectedIndex === index ? styles.isActive : ""
              }`}
            >
              <TestimonialsCard
                text={
                  index === 0
                    ? "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable."
                    : index === 1
                    ? "YourBank's customer service is outstanding! They always go the extra mile to ensure I'm happy and that my financial needs are met. I couldn't be more pleased with their service."
                    : "Switching to YourBank was the best financial decision I've made. Their online banking platform is user-friendly and has made managing my finances so much easier."
                }
                name={
                  index === 0 ? "John D" : index === 1 ? "Sarah K" : "Michael R"
                }
              />
            </div>
          ))}
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
