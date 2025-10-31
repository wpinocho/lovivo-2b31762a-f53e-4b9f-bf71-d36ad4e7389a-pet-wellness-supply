import { ProductCardUI } from '@/components/ui/ProductCardUI';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PetSelector } from '@/components/ui/PetSelector';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { Link } from 'react-router-dom';

interface IndexUIProps {
  products: any[];
  collections: any[];
}

export const IndexUI = ({ products, collections }: IndexUIProps) => {
  const categories = [
    {
      title: 'Premium Food',
      description: 'Nutritionally balanced meals',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&h=400&fit=crop',
      handle: 'premium-food'
    },
    {
      title: 'Supplements',
      description: 'Health & wellness support',
      image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=400&fit=crop',
      handle: 'supplements'
    },
    {
      title: 'Treats',
      description: 'Natural & delicious rewards',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop',
      handle: 'treats'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600&h=900&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Everybody loves pets!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Premium wellness products for dogs and cats
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-sm zen-transition"
          >
            Explore Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Pet Selector Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <PetSelector />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Carefully curated for your pet's wellbeing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.handle} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Premium nutrition and supplements
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 8).map((product) => (
              <ProductCardUI key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-sm zen-transition"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-light text-primary mb-4">100%</div>
              <h3 className="text-xl font-medium mb-2">Natural Ingredients</h3>
              <p className="text-muted-foreground font-light">
                Only the finest natural ingredients
              </p>
            </div>
            <div>
              <div className="text-4xl font-light text-primary mb-4">24/7</div>
              <h3 className="text-xl font-medium mb-2">Expert Support</h3>
              <p className="text-muted-foreground font-light">
                Pet wellness specialists available
              </p>
            </div>
            <div>
              <div className="text-4xl font-light text-primary mb-4">10k+</div>
              <h3 className="text-xl font-medium mb-2">Happy Pets</h3>
              <p className="text-muted-foreground font-light">
                Trusted by pet parents worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};