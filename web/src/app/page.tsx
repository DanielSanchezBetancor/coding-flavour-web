"use client";
import LanguageSelector from "@/presentation/components/LanguageSelector/LanguageSelector";
import Logo from "@/presentation/components/Logo/Logo";
import Navbar from "@/presentation/components/Navbar/Navbar";
import Value from "@/presentation/components/Value/Value";
import growthIcon from "@/presentation/assets/icons/growth.png";
import communityIcon from "@/presentation/assets/icons/community.png";
import boldnessIcon from "@/presentation/assets/icons/boldness.png";
import creativityIcon from "@/presentation/assets/icons/creativity.png";
import responsibilityIcon from "@/presentation/assets/icons/responsibility.png";
import { useState } from "react";
import Visit from "@/presentation/components/Visit/Visit";
import ArticleCard from "@/presentation/components/ArticleCard/ArticleCard";
import ImagePreview from "@/presentation/assets/images/image-preview.jpg";
import ImagePreviewTwo from "@/presentation/assets/images/image-preview-2.png";

export default function Home() {
  const menuOptions = ["home", "about", "projects", "articles", "contact"];
  const activeId = 0;
  const [isLeftActive, setIsLeftActive] = useState(false);
  const handleNewLanguage = (lang: string) => {
    setIsLeftActive(!isLeftActive);
  };
  const values = [
    {
      id: "Growth",
      title: "Growth",
      description:
        "Commitment to continuous learning, development, and advancement for both our team and our solutions.",
      image: growthIcon,
    },
    {
      id: "Creativity",
      title: "Creativity",
      description:
        "We thrive on thinking beyond the conventional, embracing fresh perspectives and imaginative solutions.",
      image: creativityIcon,
    },
    {
      id: "Boldness",
      title: "Boldness",
      description:
        "Drives us to pioneer innovative solutions and overcome challenges with unwavering determination.",
      image: boldnessIcon,
    },
    {
      id: "Responsibility",
      title: "Responsibility",
      description:
        "We understand the impact of our work on the world. We prioritize well-being of individuals and environment.",
      image: responsibilityIcon,
    },
    {
      id: "Community",
      title: "Community",
      description:
        "Fostered through collaboration, knowledge-sharing, and mutual support, creating an ecosystem to drive collective growth.",
      image: communityIcon,
    },
  ];

  const articles = [
    {
      image: ImagePreview,
      imageAlt: "Article about Sass",
      date: "09/2023",
      title: "Injecting Sass @use via webpack",
      description:
        "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias",
      articleId: "sass-prepend-via-webpack",
    },
    {
      image: ImagePreviewTwo,
      imageAlt: "Article about NextJS architecture",
      date: "10/2023",
      title: "Constructing NextJS monorepo",
      description:
        "Today, we are constructing our new application with a monorepo, with the intention of keeping scaling and building a TurboRepo in next projects, connecting all the mainframes, utilities and libraries developed by Coding Flavour",
      articleId: "nextjs-monorepo-from-scratch",
    },
  ];
  return (
    <section>
      <h1>Bienvenidos todos</h1>
      <h2>
        Vamos a empezar a trabajar en componentes y aqui tenemos el muestrario
      </h2>
      <p>El logo no se ve bien asi que lo envuelvo en oscuro jejej</p>

      <div
        style={{
          backgroundColor: "black",
          padding: 16,
        }}
      >
        <Logo />

        <Navbar menuOptions={menuOptions} activeId={activeId} />

        {values.map((value) => (
          <Value value={value} key={value}/>
        ))}

        <LanguageSelector
          isLeftActive={isLeftActive}
          handleNewLanguage={handleNewLanguage}
        />

        <Visit text="See more" href="/" />

        {articles.map((article) => (
          <ArticleCard
            image={article.image}
            imageAlt={article.imageAlt}
            date={article.date}
            title={article.title}
            description={article.description}
            articleId={article.articleId}
            key={article.articleId}
          />
        ))}
      </div>
    </section>
  );
}
