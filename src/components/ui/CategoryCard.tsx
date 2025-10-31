import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export const CategoryCard = ({ title, description, image, href }: CategoryCardProps) => {
  return (
    <Link to={href} className="group block">
      <div className="bg-white rounded-sm overflow-hidden japanese-shadow zen-transition hover:japanese-shadow-lg">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover zen-transition group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary zen-transition">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-1 zen-transition">
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};