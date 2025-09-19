import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Film, Brain, Mail, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import marvelComicBg from "@/assets/marvel-comic-bg.jpg";

const Index = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-reveal-id');
            if (elementId) {
              setVisibleElements(prev => new Set([...prev, elementId]));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const elementsToObserve = document.querySelectorAll('[data-reveal-id]');
    elementsToObserve.forEach(el => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Heroes Gallery",
      description: "Explore detailed profiles of Marvel's greatest heroes and their incredible powers.",
      link: "/characters"
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Epic Media",
      description: "Watch exclusive trailers, behind-the-scenes content, and iconic Marvel moments.",
      link: "/media"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Knowledge Quiz", 
      description: "Test your Marvel expertise with our timed interactive quiz challenge.",
      link: "/quiz"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Contact Lab",
      description: "Send secure messages to Hawkins Lab for special investigations.",
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Background with Marvel comic image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 brightness-125 contrast-110"
          style={{ backgroundImage: `url(${marvelComicBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 
              className={`font-orbitron font-black text-6xl md:text-8xl mb-8 scroll-reveal-hidden ${visibleElements.has('hero-title') ? 'scroll-reveal-visible' : ''}`}
              data-reveal-id="hero-title"
            >
              <span className="text-gradient">MARVEL</span>
              <br />
              <span className="text-foreground">UNIVERSE</span>
            </h1>
            
            <p 
              className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed scroll-reveal-hidden ${visibleElements.has('hero-description') ? 'scroll-reveal-fade' : ''}`}
              data-reveal-id="hero-description"
            >
              Step into the extraordinary world of Marvel heroes, where legends are born and 
              epic adventures unfold across the multiverse. Discover the stories that have 
              captivated generations of fans worldwide.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 scroll-reveal-hidden ${visibleElements.has('hero-buttons') ? 'scroll-reveal-scale' : ''}`}
              data-reveal-id="hero-buttons"
            >
              <Button asChild className="hero-gradient text-white font-medium text-lg px-8 py-4 animate-glow">
                <Link to="/characters">
                  <Shield className="w-5 h-5 mr-2" />
                  Meet the Heroes
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="font-medium text-lg px-8 py-4 hover-lift">
                <Link to="/quiz">
                  <Zap className="w-5 h-5 mr-2" />
                  Test Your Knowledge
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-secondary rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            className={`text-center mb-16 scroll-reveal-hidden ${visibleElements.has('features-title') ? 'scroll-reveal-visible' : ''}`}
            data-reveal-id="features-title"
          >
            <h2 className="font-orbitron font-black text-4xl md:text-5xl mb-6 text-gradient">
              EXPLORE THE UNIVERSE
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive deep into Marvel's rich storytelling with interactive features 
              designed for true believers and newcomers alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link key={feature.title} to={feature.link} className="block">
                <Card 
                  className={`card-gradient border-border hover-lift h-full group scroll-reveal-hidden ${visibleElements.has(`feature-${index}`) ? 'scroll-reveal-scale' : ''}`}
                  data-reveal-id={`feature-${index}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl text-primary group-hover:text-secondary transition-colors">
                      {feature.icon}
                    </div>
                    
                    <h3 className="font-orbitron font-bold text-xl text-primary group-hover:text-secondary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team & College Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`scroll-reveal-hidden ${visibleElements.has('hawkins-title') ? 'scroll-reveal-visible' : ''}`}
              data-reveal-id="hawkins-title"
            >
              <h2 className="font-orbitron font-black text-4xl md:text-5xl mb-8 text-gradient">
                HAWKINS RESEARCH
              </h2>
              
              <div className="space-y-6 text-lg">
                <p 
                  className={`text-muted-foreground leading-relaxed scroll-reveal-hidden ${visibleElements.has('hawkins-description') ? 'scroll-reveal-fade' : ''}`}
                  data-reveal-id="hawkins-description"
                >
                  This Marvel Universe exploration project is conducted by the 
                  <strong className="text-primary"> Hawkins National Laboratory</strong> research team 
                  as part of our ongoing studies into extraordinary phenomena and superhuman abilities.<br></br>
                </p>
                
                <div 
                  className={`space-y-2 scroll-reveal-hidden ${visibleElements.has('research-team') ? 'scroll-reveal-visible' : ''}`}
                  data-reveal-id="research-team"
                >
                  <h3 className="font-orbitron font-bold text-xl text-secondary">Research Team:</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• <strong>Dr. Martin Brenner</strong> - Project Lead</li>
                    <li>• <strong>Joyce Byers</strong> - Field Research Specialist</li>
                    <li>• <strong>Jim Hopper</strong> - Security & Investigation</li>
                    <li>• <strong>Dustin Henderson</strong> - Technology Integration</li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Institution:</strong> Hawkins University<br />
                    <strong>Event:</strong> Marvel Universe Symposium 2024<br />
                    <strong>Classification:</strong> Educational Research Project
                  </p>
                </div>
              </div>
            </div>

            <Card className="card-gradient border-border">
              <CardContent className="p-8">
                <h3 className="font-orbitron font-bold text-2xl mb-6 text-primary">
                  Project Objectives
                </h3>
                
                <ul className="space-y-4">
                  {[
                    "Analyze Marvel character development and storytelling impact",
                    "Study the cultural influence of superhero narratives",
                    "Explore multimedia storytelling techniques in modern media", 
                    "Research fan engagement and community building strategies"
                  ].map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-orbitron font-bold text-xl mb-4 text-gradient">
                MARVEL UNIVERSE
              </h3>
              <p className="text-muted-foreground text-sm">
                Exploring the extraordinary world of Marvel heroes, stories, and legends 
                that continue to inspire fans across the globe.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/characters" className="hover:text-primary transition-colors">Characters</Link></li>
                <li><Link to="/media" className="hover:text-primary transition-colors">Media Gallery</Link></li>
                <li><Link to="/quiz" className="hover:text-primary transition-colors">Knowledge Quiz</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Lab</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Contact Information</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📞 Emergency: +1 (555) HAWKINS</p>
                <p>📧 contact@hawkinslab.gov</p>
                <p>🔗 Social: @HawkinsLab</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Hawkins National Laboratory. All rights reserved. 
              Marvel characters and content are property of Marvel Entertainment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
