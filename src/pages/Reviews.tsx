import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Shield, CheckCircle, Award } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Surinder Malhotra",
      rating: 5,
      review: "Receiving a Pavitra Uphaar box felt like receiving a sacred blessing.",
      location: "Delhi"
    },
    {
      id: 2,
      name: "Manish Mehra", 
      rating: 4.75,
      review: "Every detail carried the warmth of tradition - truly unforgettable.",
      location: "Mumbai"
    },
    {
      id: 3,
      name: "Ratna Garg",
      rating: 4.5,
      review: "It didn't feel like a gift. It felt like love wrapped in light.",
      location: "Bangalore"
    },
    {
      id: 4,
      name: "Priya Sharma",
      rating: 5,
      review: "The quality and authenticity exceeded all my expectations. Perfect for daily prayers.",
      location: "Pune"
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      rating: 5,
      review: "Fast delivery and beautiful packaging. The items are exactly as described.",
      location: "Chennai"
    },
    {
      id: 6,
      name: "Meera Patel",
      rating: 5,
      review: "Such attention to detail! Every item feels blessed and carefully selected.",
      location: "Ahmedabad"
    }
  ];

  const guaranteeFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "100% Authentic Products",
      description: "All items are sourced from trusted artisans and verified suppliers"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Secure UPI Payments", 
      description: "Pay safely using UPI - secured by Razorpay's trusted payment gateway"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Quality Guaranteed",
      description: "Every product undergoes strict quality checks before shipping"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-14 pb-4 bg-gradient-to-br from-background via-accent/5 to-background overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-radial from-accent/30 to-transparent rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
              <Quote className="w-6 h-6 text-primary animate-pulse" />
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">How Pavitra Uphaar</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-extrabold">
              Made Them Feel
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Real stories from our beloved customers who have experienced the sacred touch of tradition
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.8</span>
            <span className="text-muted-foreground">from verified customers</span>
          </div>
        </div>
      </section>

      {/* Customer Stories Video & Reviews */}
      <section className="pt-4 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">

          {/* Video and Reviews Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
            {/* Left Reviews */}
            <div className="lg:col-span-4 space-y-6">
              {reviews.slice(0, 3).map((review, index) => (
                <Card 
                  key={review.id} 
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const rating = review.rating;
                        if (star <= rating) {
                          return <Star key={star} className="w-4 h-4 fill-primary text-primary" />;
                        } else if (star - 0.5 <= rating) {
                          return (
                            <div key={star} className="relative w-4 h-4">
                              <Star className="absolute w-4 h-4 text-primary/20" />
                              <Star className="absolute w-4 h-4 fill-primary text-primary" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                            </div>
                          );
                        } else {
                          return <Star key={star} className="w-4 h-4 text-primary/20" />;
                        }
                      })}
                    </div>
                    
                    <Quote className="w-8 h-8 text-primary/20 mb-3" />
                    
                    <p className="text-foreground text-lg italic mb-6 leading-relaxed">
                      "{review.review}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                      <Badge variant="outline" className="text-primary border-primary/20">
                        Verified
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Center Video */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-sm w-full">
                <video 
                  controls 
                  autoPlay
                  muted
                  loop
                  className="w-full h-auto"
                  poster=""
                  preload="metadata"
                >
                  <source src="/customer-review-reel.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Reviews */}
            <div className="lg:col-span-4 space-y-6">
              {reviews.slice(3, 6).map((review, index) => (
                <Card 
                  key={review.id} 
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const rating = review.rating;
                        if (star <= rating) {
                          return <Star key={star} className="w-4 h-4 fill-primary text-primary" />;
                        } else if (star - 0.5 <= rating) {
                          return (
                            <div key={star} className="relative w-4 h-4">
                              <Star className="absolute w-4 h-4 text-primary/20" />
                              <Star className="absolute w-4 h-4 fill-primary text-primary" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                            </div>
                          );
                        } else {
                          return <Star key={star} className="w-4 h-4 text-primary/20" />;
                        }
                      })}
                    </div>
                    
                    <Quote className="w-8 h-8 text-primary/20 mb-3" />
                    
                    <p className="text-foreground text-lg italic mb-6 leading-relaxed">
                      "{review.review}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                      <Badge variant="outline" className="text-primary border-primary/20">
                        Verified
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 100% Satisfaction Guarantee */}
      <section className="py-16 bg-gradient-to-br from-accent/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
                <Shield className="w-6 h-6 text-primary animate-pulse" />
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                100% Satisfaction
              </span>
              <br />
              <span className="text-foreground">Guarantee</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your spiritual journey matters to us. That's why we stand behind every product with our promise of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {guaranteeFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Secure & Trusted Payments
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Experience hassle-free shopping with instant UPI payments, all transactions secured by Razorpay's 
                industry-leading payment gateway for your peace of mind.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Trusted by Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;