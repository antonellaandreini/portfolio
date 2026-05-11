import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../utils/posts";
import { Breadcrumb } from "./Breadcrumb";
import sloganImage from "../assets/slogan.png";

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const breadcrumbItems: { label: string; path?: string }[] = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
  ];

  if (!entry) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Breadcrumb items={breadcrumbItems} />
        <p className="p-8">Post not found.</p>
      </div>
    );
  }

  const { Component, meta } = entry;

  breadcrumbItems.push({ label: meta.title });
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pr-8 py-6 sm:py-10">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-col md:flex-row md:gap-8">
        {/* Left column with logo/slogan — hidden on mobile to free up width */}
        <div className="hidden md:block md:w-32 lg:w-64 flex-shrink-0">
          <img src={sloganImage} alt="Logo" className="w-full h-auto mb-4 opacity-30" />
        </div>

        {/* Right column with content */}
        <div className="flex-1 min-w-0">
          <article className="prose prose-base sm:prose-lg max-w-none break-words prose-headings:scroll-mt-20 prose-pre:overflow-x-auto prose-img:rounded-lg">
            <time className="text-sm sm:text-base text-gray-500 block mb-6 sm:mb-8">
              {meta.date}
            </time>
            <Component />
          </article>
        </div>
      </div>
    </div>
  );
};
