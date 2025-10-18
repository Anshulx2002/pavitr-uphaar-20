import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2, Plus, MapPin, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const addressSchema = z.object({
  address_line1: z.string().min(10, "Please enter your complete address"),
  address_line2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z
    .string()
    .min(6, "Pincode must be 6 digits")
    .max(6, "Pincode must be 6 digits")
    .refine((pin) => /^\d{6}$/.test(pin), "Pincode must be exactly 6 digits"),
});

type AddressFormData = z.infer<typeof addressSchema>;

export interface Address {
  id: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state: string;
  pincode: string;
  is_default: boolean;
}

interface SavedAddressesProps {
  userId: string;
  onSelectAddress?: (address: Address) => void;
  mode?: "manage" | "select";
}

export const SavedAddresses = ({ userId, onSelectAddress, mode = "manage" }: SavedAddressesProps) => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
  });

  useEffect(() => {
    fetchAddresses();
  }, [userId]);

  const fetchAddresses = async () => {
    try {
      const { data, error } = await supabase
        .from("addresses")
        .select("*")
        .eq("user_id", userId)
        .order("is_default", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) throw error;
      setAddresses(data || []);
    } catch (error) {
      console.error("Error fetching addresses:", error);
      toast.error("Failed to load addresses");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: AddressFormData) => {
    try {
      const { error } = await supabase.from("addresses").insert([{
        user_id: userId,
        address_line1: data.address_line1,
        address_line2: data.address_line2 || null,
        city: data.city,
        state: data.state,
        pincode: data.pincode,
        is_default: addresses.length === 0,
      }]);

      if (error) throw error;

      toast.success("Address added successfully");
      reset();
      setShowAddForm(false);
      fetchAddresses();
    } catch (error) {
      console.error("Error adding address:", error);
      toast.error("Failed to add address");
    }
  };

  const handleDelete = async (addressId: string) => {
    try {
      const { error } = await supabase.from("addresses").delete().eq("id", addressId);

      if (error) throw error;

      toast.success("Address deleted");
      fetchAddresses();
    } catch (error) {
      console.error("Error deleting address:", error);
      toast.error("Failed to delete address");
    }
  };

  const handleSetDefault = async (addressId: string) => {
    try {
      // First, unset all default addresses
      await supabase.from("addresses").update({ is_default: false }).eq("user_id", userId);

      // Then set the selected one as default
      const { error } = await supabase.from("addresses").update({ is_default: true }).eq("id", addressId);

      if (error) throw error;

      toast.success("Default address updated");
      fetchAddresses();
    } catch (error) {
      console.error("Error setting default address:", error);
      toast.error("Failed to update default address");
    }
  };

  const handleSelectForCheckout = (address: Address) => {
    setSelectedAddressId(address.id);
    if (onSelectAddress) {
      onSelectAddress(address);
    }
  };

  if (isLoading) {
    return <div className="text-center py-4">Loading addresses...</div>;
  }

  return (
    <div className="space-y-4">
      {mode === "select" && addresses.length > 0 && (
        <div className="space-y-2">
          {addresses.map((address) => (
            <Card
              key={address.id}
              className={`p-4 cursor-pointer transition-all ${
                selectedAddressId === address.id ? "border-primary ring-2 ring-primary/20" : "hover:border-primary/50"
              }`}
              onClick={() => handleSelectForCheckout(address)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm">
                      {address.address_line1}
                      {address.address_line2 && `, ${address.address_line2}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {address.city}, {address.state} - {address.pincode}
                    </p>
                    {address.is_default && (
                      <span className="text-xs text-primary font-medium">Default Address</span>
                    )}
                  </div>
                </div>
                {selectedAddressId === address.id && <Check className="h-5 w-5 text-primary flex-shrink-0" />}
              </div>
            </Card>
          ))}
        </div>
      )}

      {mode === "manage" && addresses.length > 0 && (
        <div className="space-y-2">
          {addresses.map((address) => (
            <Card key={address.id} className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm">
                      {address.address_line1}
                      {address.address_line2 && `, ${address.address_line2}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {address.city}, {address.state} - {address.pincode}
                    </p>
                    <div className="flex gap-2 mt-2">
                      {!address.is_default && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSetDefault(address.id)}
                          className="text-xs h-7"
                        >
                          Set as Default
                        </Button>
                      )}
                      {address.is_default && (
                        <span className="text-xs text-primary font-medium py-1">Default Address</span>
                      )}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(address.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {addresses.length === 0 && !showAddForm && (
        <p className="text-muted-foreground text-center py-8">No saved addresses yet</p>
      )}

      {showAddForm && (
        <Card className="p-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="address_line1">Address Line 1</Label>
              <Input
                id="address_line1"
                {...register("address_line1")}
                placeholder="Street address"
                className={errors.address_line1 ? "border-destructive" : ""}
              />
              {errors.address_line1 && <p className="text-sm text-destructive mt-1">{errors.address_line1.message}</p>}
            </div>

            <div>
              <Label htmlFor="address_line2">Address Line 2 (Optional)</Label>
              <Input id="address_line2" {...register("address_line2")} placeholder="Apartment, suite, etc." />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  {...register("city")}
                  placeholder="City"
                  className={errors.city ? "border-destructive" : ""}
                />
                {errors.city && <p className="text-sm text-destructive mt-1">{errors.city.message}</p>}
              </div>

              <div>
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  {...register("state")}
                  placeholder="State"
                  className={errors.state ? "border-destructive" : ""}
                />
                {errors.state && <p className="text-sm text-destructive mt-1">{errors.state.message}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="pincode">Pincode</Label>
              <Input
                id="pincode"
                {...register("pincode")}
                placeholder="6-digit pincode"
                maxLength={6}
                className={errors.pincode ? "border-destructive" : ""}
              />
              {errors.pincode && <p className="text-sm text-destructive mt-1">{errors.pincode.message}</p>}
            </div>

            <div className="flex gap-2 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowAddForm(false);
                  reset();
                }}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                Save Address
              </Button>
            </div>
          </form>
        </Card>
      )}

      {!showAddForm && (
        <Button onClick={() => setShowAddForm(true)} variant="outline" className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add New Address
        </Button>
      )}
    </div>
  );
};
