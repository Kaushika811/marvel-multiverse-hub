import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Zap, Shield } from "lucide-react";
import { useState } from "react";
import ironManImage from "@/assets/iron-man.jpg";
import captainAmericaImage from "@/assets/captain-america.jpg";
import thorImage from "@/assets/thor.jpg";
import blackWidowImage from "@/assets/black-widow.jpg";
import spiderManImage from "@/assets/spider-man.jpg";
import hulkImage from "@/assets/hulk.jpg";
import doctorStrangeImage from "@/assets/doctor-strange.jpg";
import scarletWitchImage from "@/assets/scarlet-witch.jpg";

const Characters = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const characters = [
    {
      name: "Iron Man",
      realName: "Tony Stark",
      powers: "Genius intellect, Powered armor suit with repulsors and flight",
      description: "Billionaire genius inventor who uses his advanced technology to protect the world as Iron Man.",
      image: ironManImage,
      rating: 9.2,
      category: "Tech Hero",
      abilities: ["Flight", "Repulsors", "AI Assistant", "Advanced Weapons"],
      weakness: "Dependent on arc reactor technology",
      firstAppearance: "Tales of Suspense #39 (1963)",
      colorAnimation: "iron-man-glow"
    },
    {
      name: "Captain America", 
      realName: "Steve Rogers",
      powers: "Super soldier serum enhanced strength, agility, and endurance",
      description: "A World War II super-soldier who embodies the ideals of courage, honor, and justice.",
      image: captainAmericaImage,
      rating: 9.5,
      category: "Super Soldier",
      abilities: ["Enhanced Strength", "Tactical Mind", "Shield Combat", "Leadership"],
      weakness: "Overly trusting nature",
      firstAppearance: "Captain America Comics #1 (1941)",
      colorAnimation: "captain-america-shield"
    },
    {
      name: "Thor",
      realName: "Thor Odinson", 
      powers: "Asgardian god powers, Mjolnir hammer, lightning control",
      description: "The God of Thunder from Asgard, wielding the mighty hammer Mjolnir to protect the Nine Realms.",
      image: thorImage,
      rating: 9.8,
      category: "Asgardian God",
      abilities: ["Lightning Control", "Mjolnir", "Super Strength", "Flight"],
      weakness: "Pride and impulsiveness",
      firstAppearance: "Journey into Mystery #83 (1962)",
      colorAnimation: "thor-lightning"
    },
    {
      name: "Black Widow",
      realName: "Natasha Romanoff",
      powers: "Master spy and assassin, expert in combat and espionage",
      description: "A highly trained spy and master assassin with a mysterious past and unwavering dedication to justice.",
      image: blackWidowImage,
      rating: 8.7,
      category: "Super Spy",
      abilities: ["Stealth", "Combat Expert", "Espionage", "Weapons Master"],
      weakness: "No superhuman abilities",
      firstAppearance: "Tales of Suspense #52 (1964)",
      colorAnimation: "black-widow-stealth"
    },
    {
      name: "Spider-Man",
      realName: "Peter Parker",
      powers: "Spider powers including wall-crawling, web-shooting, and spider-sense",
      description: "A young hero with spider powers who protects New York City with his web-slinging abilities and quick wit.",
      image: spiderManImage,
      rating: 9.4,
      category: "Web-Slinger",
      abilities: ["Wall Crawling", "Web Shooting", "Spider Sense", "Super Agility"],
      weakness: "Vulnerable to pesticides and loud sounds",
      firstAppearance: "Amazing Fantasy #15 (1962)",
      colorAnimation: "spider-man-pulse"
    },
    {
      name: "Hulk",
      realName: "Bruce Banner",
      powers: "Incredible strength and durability that increases with anger",
      description: "A brilliant scientist transformed into a green-skinned behemoth with incredible strength when angered.",
      image: hulkImage,
      rating: 9.6,
      category: "Gamma Monster",
      abilities: ["Incredible Strength", "Regeneration", "Damage Resistance", "Leaping"],
      weakness: "Loss of control when angry",
      firstAppearance: "The Incredible Hulk #1 (1962)",
      colorAnimation: "hulk-smash"
    },
    {
      name: "Doctor Strange",
      realName: "Stephen Strange",
      powers: "Master of the mystic arts with reality-bending magical abilities",
      description: "Former surgeon turned Sorcerer Supreme, protecting Earth from mystical and interdimensional threats.",
      image: doctorStrangeImage,
      rating: 9.3,
      category: "Sorcerer Supreme",
      abilities: ["Astral Projection", "Time Manipulation", "Teleportation", "Reality Alteration"],
      weakness: "Physical vulnerability without magic",
      firstAppearance: "Strange Tales #110 (1963)",
      colorAnimation: "doctor-strange-mystic"
    },
    {
      name: "Scarlet Witch",
      realName: "Wanda Maximoff",
      powers: "Reality-warping chaos magic and probability manipulation",
      description: "A powerful mutant with reality-altering abilities stemming from chaos magic and emotional trauma.",
      image: scarletWitchImage,
      rating: 9.7,
      category: "Chaos Magic User",
      abilities: ["Reality Warping", "Telekinesis", "Energy Manipulation", "Hex Bolts"],
      weakness: "Emotional instability affects powers",
      firstAppearance: "The X-Men #4 (1964)",
      colorAnimation: "scarlet-witch-chaos"
    }
  ];

  const toggleFavorite = (characterName: string) => {
    setFavorites(prev => 
      prev.includes(characterName) 
        ? prev.filter(name => name !== characterName)
        : [...prev, characterName]
    );
  };

  const toggleExpanded = (characterName: string) => {
    setExpandedCard(prev => prev === characterName ? null : characterName);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-orbitron font-black text-5xl md:text-6xl mb-6">
              <span className="text-gradient animate-glow">HEROES</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the legendary heroes who have defined generations of Marvel comics and movies. 
              Each possessing unique powers and an unwavering commitment to protect humanity.
            </p>
          </div>

          {/* Characters Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {characters.map((character, index) => (
               <Card 
                key={character.name} 
                className={`card-gradient border-border hover-lift group cursor-pointer transform transition-all duration-500 animate-fade-in`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both',
                  animation: `fade-in 0.5s ease-out ${index * 150}ms both, ${character.colorAnimation} 3s ease-in-out infinite 1s`
                }}
                onClick={() => toggleExpanded(character.name)}
              >
                <CardContent className="p-6 relative">
                  {/* Favorite Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(character.name);
                    }}
                  >
                    <Heart 
                      className={`h-4 w-4 transition-all duration-300 ${
                        favorites.includes(character.name) 
                          ? 'fill-red-500 text-red-500 animate-pulse' 
                          : 'hover:scale-110'
                      }`} 
                    />
                  </Button>

                  {/* Character Image */}
                  <div className="aspect-square mb-6 rounded-lg overflow-hidden bg-muted relative">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <Badge className="absolute bottom-2 left-2 bg-primary/90 text-primary-foreground backdrop-blur-sm">
                      {character.category}
                    </Badge>
                    
                    {/* Rating */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{character.rating}</span>
                    </div>
                  </div>

                  {/* Character Info */}
                  <div className="space-y-3">
                    <h3 className="font-orbitron font-bold text-xl text-primary group-hover:text-gradient transition-all duration-300">
                      {character.name}
                    </h3>
                    
                    <p className="text-sm text-secondary font-medium">
                      {character.realName}
                    </p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {character.description}
                    </p>
                    
                    {/* Expandable Content */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      expandedCard === character.name 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 space-y-4 border-t border-border">
                        {/* Abilities */}
                        <div>
                          <h4 className="font-medium text-accent mb-2 flex items-center gap-2">
                            <Zap className="h-4 w-4" />
                            Abilities:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {character.abilities.map((ability, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {ability}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Weakness */}
                        <div>
                          <h4 className="font-medium text-destructive mb-1 flex items-center gap-2">
                            <Shield className="h-4 w-4" />
                            Weakness:
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {character.weakness}
                          </p>
                        </div>

                        {/* First Appearance */}
                        <div>
                          <h4 className="font-medium text-accent mb-1">First Appearance:</h4>
                          <p className="text-xs text-muted-foreground">
                            {character.firstAppearance}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Powers (Always Visible) */}
                    <div className="pt-2">
                      <h4 className="font-medium text-accent mb-2">Powers & Abilities:</h4>
                      <p className="text-xs text-muted-foreground">
                        {character.powers}
                      </p>
                    </div>

                    {/* Expand/Collapse Indicator */}
                    <div className="flex justify-center pt-2">
                      <Button variant="ghost" size="sm" className="text-xs hover:text-primary">
                        {expandedCard === character.name ? 'Show Less' : 'Show More'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Favorites Counter */}
          {favorites.length > 0 && (
            <div className="fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full px-4 py-2 shadow-lg animate-fade-in">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium">{favorites.length} Favorite{favorites.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Characters;