import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const CompactReviews = () => {
  const featuredReviews = [
    {
      id: 1,
      name: "Surinder Malhotra",
      rating: 5,
      review: "Receiving a Pavitra Uphaar box felt like receiving a sacred blessing.",
      location: "Delhi"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 5,
      review: "The quality and authenticity exceeded all my expectations. Perfect for daily prayers.",
      location: "Pune"
    },
    {
      id: 3,
      name: "Meera Patel",
      rating: 5,
      review: "Such attention to detail! Every item feels blessed and carefully selected.",
      location: "Ahmedabad"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-background via-accent/5 to-background scroll-animate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
              <Quote className="w-5 h-5 text-primary" />
              <div className="w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-foreground">What Our</span>{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.8</span>
            <span className="text-muted-foreground text-sm">from verified customers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {featuredReviews.map((review, index) => (
            <Card 
              key={review.id} 
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm animate-stagger"
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground text-sm italic mb-4 leading-relaxed line-clamp-2">
                  "{review.review}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link 
            to="/reviews" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
          >
            Read All Reviews
            <Quote className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompactReviews;