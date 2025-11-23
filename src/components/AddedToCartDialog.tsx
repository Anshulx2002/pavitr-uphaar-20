import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowRight } from "lucide-react";

interface AddedToCartDialogProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export const AddedToCartDialog = ({ isOpen, onClose, productName }: AddedToCartDialogProps) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4">
            <ShoppingCart className="w-6 h-6 text-primary" />
          </div>
          <AlertDialogTitle className="text-center">
            Added to Cart!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            {productName} has been added to your cart
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Keep Shopping
          </Button>
          <Button 
            onClick={handleCheckout}
            className="w-full sm:w-auto"
          >
            Proceed to Checkout
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
