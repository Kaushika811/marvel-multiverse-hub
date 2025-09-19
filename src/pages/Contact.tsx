import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Zap } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all fields before sending.",
        variant: "destructive"
      });
      return;
    }

    // Show success message
    toast({
      title: "Message Sent Successfully! 📧",
      description: "Your message has been sent to R.M.K Engineering College. We'll respond within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="font-orbitron font-black text-5xl md:text-6xl mb-6">
              <span className="text-gradient">CONTACT R.M.K ENGINEERING COLLEGE</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interested in AI & Data Science research? Want to collaborate with our team? 
              Get in touch with our Artificial Intelligence and Data Science department.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="card-gradient border-border">
              <CardHeader>
                <CardTitle className="font-orbitron font-bold text-2xl text-primary flex items-center gap-2">
                  <Mail className="w-6 h-6" />
                  Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your inquiry or research interest..."
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full hero-gradient text-white font-medium py-3 animate-glow"
                  >
                    Send Message 📧
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-gradient border-border">
                <CardContent className="p-6">
                  <h3 className="font-orbitron font-bold text-xl mb-6 text-primary">
                    College Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground text-sm">
                          R.M.K ENGINEERING COLLEGE<br />
                          RSM Nagar, Kavaraipettai<br />
                          Gummidipoondi Taluk, Tiruvallur District<br />
                          Tamil Nadu, India - 601 206
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <p className="font-medium">Department</p>
                        <p className="text-muted-foreground text-sm">
                          Artificial Intelligence and Data Science<br />
                          Available for research collaborations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <p className="font-medium">Contact Email</p>
                        <p className="text-muted-foreground text-sm">
                          contact@rmkec.ac.in<br />
                          aids@rmkec.ac.in
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border border-primary/30 animate-glow">
                <CardContent className="p-6">
                  <h3 className="font-orbitron font-bold text-xl mb-4 text-primary">
                    📚 Academic Notice
                  </h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>• All inquiries are reviewed by faculty members</p>
                    <p>• Response time: 24-48 hours for academic queries</p>
                    <p>• Research collaboration proposals welcome</p>
                    <p>• Student project guidance available</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border">
                <CardContent className="p-6">
                  <h3 className="font-orbitron font-bold text-xl mb-4 text-secondary">
                    Research Team
                  </h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Team Members:</strong> Chelvachezhiyan, Kaushika</p>
                    <p><strong>Department:</strong> Artificial Intelligence and Data Science</p>
                    <p><strong>Institution:</strong> R.M.K Engineering College</p>
                    <p><strong>Focus:</strong> AI Research & Data Science Projects</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;