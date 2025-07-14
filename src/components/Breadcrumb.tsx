import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-secondary-600 mb-10 mx-2">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <FiChevronRight className="w-4 h-4 text-secondary-400" />
          )}
          {item.path ? (
            <Link
              to={item.path}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-primary font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};