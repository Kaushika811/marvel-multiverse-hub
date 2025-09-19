import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const Media = () => {
  const mediaItems = [
    {
      title: "Avengers: Endgame - Final Battle",
      description: "The epic conclusion to the Infinity Saga featuring all our favorite heroes in their ultimate battle against Thanos.",
      videoId: "TcMBFSGVi1c", // Official Marvel trailer
      category: "Movie Scene"
    },
    {
      title: "Spider-Man: No Way Home Trailer",
      description: "The multiverse collides as Spider-Men from different dimensions unite to face their greatest challenge yet.",
      videoId: "JfVOs4VSpmA", // Official trailer
      category: "Trailer"
    },
    {
      title: "Marvel Studios Behind the Scenes",
      description: "Go behind the cameras and see how Marvel brings these incredible stories and characters to life on the big screen.",
      videoId: "6ZfuNTqbHE8", // Marvel BTS content
      category: "Behind the Scenes"
    },
    /*{
      title: "Marvel Comics History",
      description: "Explore the rich 80+ year history of Marvel Comics and how it evolved from a small publishing house to a global phenomenon.",
      videoId: "C4rQX6w5DfA", // Marvel history documentary
      category: "Documentary"
    }*/
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="font-orbitron font-black text-5xl md:text-6xl mb-6">
              <span className="text-gradient">MEDIA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dive into the Marvel Cinematic Universe with exclusive trailers, behind-the-scenes content, 
              and iconic moments that have captivated audiences worldwide.
            </p>
          </div>

          {/* Media Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {mediaItems.map((item, index) => (
              <Card key={item.title} className="card-gradient border-border hover-lift group overflow-hidden">
                <CardContent className="p-0">
                  {/* Video Container */}
                  <div className="aspect-video bg-black relative overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      title={item.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-secondary bg-secondary/20 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="font-orbitron font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-block p-8 card-gradient border border-border rounded-2xl">
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-gradient">
                Want More Marvel Content?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Subscribe to Marvel's official channels for the latest trailers, 
                exclusive content, and behind-the-scenes footage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.youtube.com/c/marvel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Marvel YouTube
                </a>
                <a 
                  href="https://www.marvel.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors"
                >
                  Official Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Media;