import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { PetSelector } from '@/components/ui/PetSelector';
import { CategoryCard } from '@/components/ui/CategoryCard';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { ArrowRight, Heart, Shield, Truck } from 'lucide-react';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section - Minimal Japanese Style */}
      <section className="relative bg-gradient-to-br from-accent/30 via-background to-muted/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="text-xs font-medium tracking-wider text-secondary uppercase">
                  Premium Pet Wellness
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
                Natural Care
                <br />
                <span className="font-normal">For Your Companion</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md font-light leading-relaxed">
                Thoughtfully crafted nutrition and supplements. 
                Inspired by nature, backed by science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm px-8 zen-transition"
                  onClick={() => {
                    document.getElementById('pet-selector')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Find Your Formula
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-sm px-8 zen-transition"
                  onClick={() => {
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Products
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-sm overflow-hidden japanese-shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=800&fit=crop"
                  alt="Happy dog and cat"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-sm japanese-shadow-lg">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-secondary" />
                  <div>
                    <div className="text-2xl font-medium text-foreground">10k+</div>
                    <div className="text-sm text-muted-foreground">Happy Pets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-y border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent rounded-sm">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">All-natural ingredients, no fillers</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent rounded-sm">
                <Truck className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent rounded-sm">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Satisfaction Guaranteed</h3>
                <p className="text-sm text-muted-foreground">30-day money back</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Selector Section */}
      <section id="pet-selector" className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Personalized Nutrition
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every pet is unique. Tell us about yours and we'll recommend the perfect formula.
            </p>
          </div>
          <PetSelector 
            onSelect={(petType, age, breed) => {
              console.log('Selected:', { petType, age, breed });
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </section>

      {/* Categories Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                Shop by Category
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Curated collections for every aspect of your pet's wellness journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <div key={collection.id} onClick={() => handleViewCollectionProducts(collection.id)}>
                  <CategoryCard
                    title={collection.name}
                    description={collection.description || ''}
                    image={collection.image || 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=300&fit=crop'}
                    href="#products"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-2">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name || 'Products'
                  : 'Featured Products'
                }
              </h2>
              <p className="text-muted-foreground">
                Premium nutrition and wellness solutions
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="rounded-sm zen-transition"
              >
                View All
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-sm h-96 animate-pulse japanese-shadow"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-sm japanese-shadow">
              <p className="text-muted-foreground">
                No products available in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Start Your Pet's Wellness Journey
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto font-light">
            Join thousands of pet parents who trust us for premium nutrition and care. 
            Free shipping on your first order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="rounded-sm px-8 zen-transition"
              onClick={() => {
                document.getElementById('pet-selector')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-sm px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary zen-transition"
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Browse Products
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};