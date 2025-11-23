import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { AddedToCartDialog } from "./AddedToCartDialog";

export const CartDialogWrapper = () => {
  const navigate = useNavigate();
  const { showAddedDialog, setShowAddedDialog, addedProductName } = useCart();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <AddedToCartDialog
      isOpen={showAddedDialog}
      onClose={() => setShowAddedDialog(false)}
      onCheckout={handleCheckout}
      productName={addedProductName}
    />
  );
};
