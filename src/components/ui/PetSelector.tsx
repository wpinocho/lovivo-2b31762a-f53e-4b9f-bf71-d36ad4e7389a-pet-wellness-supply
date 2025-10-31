import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dog, Cat } from 'lucide-react';

interface PetSelectorProps {
  onSelect?: (petType: string, age: string, breed: string) => void;
}

export const PetSelector = ({ onSelect }: PetSelectorProps) => {
  const [petType, setPetType] = useState<'dog' | 'cat' | null>(null);
  const [age, setAge] = useState<string>('');
  const [breed, setBreed] = useState<string>('');

  const dogBreeds = ['Labrador', 'Golden Retriever', 'German Shepherd', 'Bulldog', 'Poodle', 'Beagle', 'Other'];
  const catBreeds = ['Persian', 'Maine Coon', 'Siamese', 'British Shorthair', 'Ragdoll', 'Bengal', 'Other'];
  const ageGroups = ['Puppy/Kitten', 'Adult', 'Senior'];

  const handleSubmit = () => {
    if (petType && age && breed && onSelect) {
      onSelect(petType, age, breed);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-sm japanese-shadow-lg p-8 md:p-12">
      <h3 className="text-2xl font-light text-center mb-8 text-foreground">
        Find Perfect Nutrition
      </h3>
      
      {/* Pet Type Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-muted-foreground mb-3">
          Pet Type
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setPetType('dog')}
            className={`p-6 rounded-sm border-2 zen-transition ${
              petType === 'dog'
                ? 'border-primary bg-accent'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <Dog className={`h-8 w-8 mx-auto mb-2 ${petType === 'dog' ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className={`text-sm font-medium ${petType === 'dog' ? 'text-primary' : 'text-foreground'}`}>
              Dog
            </span>
          </button>
          <button
            onClick={() => setPetType('cat')}
            className={`p-6 rounded-sm border-2 zen-transition ${
              petType === 'cat'
                ? 'border-primary bg-accent'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <Cat className={`h-8 w-8 mx-auto mb-2 ${petType === 'cat' ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className={`text-sm font-medium ${petType === 'cat' ? 'text-primary' : 'text-foreground'}`}>
              Cat
            </span>
          </button>
        </div>
      </div>

      {/* Age Selection */}
      {petType && (
        <div className="mb-8 animate-fade-in">
          <label className="block text-sm font-medium text-muted-foreground mb-3">
            Age Group
          </label>
          <div className="grid grid-cols-3 gap-3">
            {ageGroups.map((ageGroup) => (
              <button
                key={ageGroup}
                onClick={() => setAge(ageGroup)}
                className={`py-3 px-4 rounded-sm border zen-transition text-sm ${
                  age === ageGroup
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border hover:border-primary/50 text-foreground'
                }`}
              >
                {ageGroup}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Breed Selection */}
      {petType && age && (
        <div className="mb-8 animate-fade-in">
          <label className="block text-sm font-medium text-muted-foreground mb-3">
            Breed
          </label>
          <select
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="w-full p-3 rounded-sm border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 zen-transition"
          >
            <option value="">Select breed</option>
            {(petType === 'dog' ? dogBreeds : catBreeds).map((breedOption) => (
              <option key={breedOption} value={breedOption}>
                {breedOption}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Submit Button */}
      {petType && age && breed && (
        <Button
          onClick={handleSubmit}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-sm zen-transition animate-fade-in"
        >
          Show Recommendations
        </Button>
      )}
    </div>
  );
};