import React from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../utils/posts";
import { Breadcrumb } from "./Breadcrumb";
import sloganImage from "../assets/slogan.png";

export const BlogList: React.FC = () => {
  const posts = getAllPosts();
  
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Blog" }
  ];
  
  return (
    <div className="max-w-6xl  pr-8 py-10">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex gap-8">
        {/* Left column with logo/slogan */}
        <div className="w-64 flex-shrink-0 opacity-30">
          <img src={sloganImage} alt="Logo" className="w-full h-auto mb-4" />
        </div>
        
        {/* Right column with content */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-8 text-primary">Blog</h2>
          <ul className="space-y-8">
            {posts.map(({ slug, meta }) => (
              <li
                key={slug}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-primary">{meta.title}</h3>
                <time className="block text-sm text-secondary">{meta.date}</time>
                <Link
                  to={`/blog/${slug}`}
                  className="mt-2 inline-block text-primary font-medium hover:underline"
                >
                  Read more →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
