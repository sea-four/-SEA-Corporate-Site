"use client";

import styles from "@/components/Slider/BusinessSlider.module.css";
import Image from "next/image";
import Slider from "react-slick";

const slides = [
  {
    image: "/sample.png",
    title: "Web開発事業",
    description: "モダンな技術で信頼性の高いWebアプリケーションを構築します。",
  },
  {
    image: "/sample2.jpg",
    title: "クラウドソリューション",
    description: "AWSやAzureを活用したインフラの設計・運用を提供します。",
  },
  {
    image: "/sample.png",
    title: "IoT・デバイス連携",
    description:
      "センサーと連動したデータ取得・可視化サービスを展開しています。",
  },
];

const BusinessSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dotsClass: styles.customDots,
  };

  return (
    <section className={styles.sliderSection}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image
                src={slide.image}
                alt={slide.title}
                width={1020}
                height={400}
                className={styles.image}
              />
            </div>
            <div className={styles.textWrapper}>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BusinessSlider;
