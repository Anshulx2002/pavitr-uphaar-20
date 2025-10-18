import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Package, LogOut, Edit, MapPin, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Profile {
  name: string;
  phone: string;
  addresses?: Address[];
}

interface Address {
  street?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
});

const addressSchema = z.object({
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  pincode: z.string().min(6, "Pincode must be 6 digits"),
});

interface Order {
  id: string;
  order_ref: string;
  created_at: string;
  amount_paise: number;
  status: string;
  meta: any;
}

const Account = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [email, setEmail] = useState<string>("");
  const [editingProfile, setEditingProfile] = useState(false);
  const [addingAddress, setAddingAddress] = useState(false);

  const profileForm = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const addressForm = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      navigate("/auth");
      return;
    }

    setEmail(user.email || "");
    await Promise.all([fetchProfile(user.id), fetchOrders(user.id)]);
    setLoading(false);
  };

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase.from("profiles").select("name, phone, addresses").eq("id", userId).single();

    if (error) {
      console.error("Error fetching profile:", error);
      return;
    }

    setProfile({
      name: data.name,
      phone: data.phone,
      addresses: (data.addresses ? (data.addresses as any as Address[]) : []),
    });
    profileForm.reset({
      name: data.name,
      phone: data.phone,
    });
  };

  const handleProfileUpdate = async (values: z.infer<typeof profileSchema>) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { error } = await supabase.from("profiles").update(values).eq("id", user.id);

    if (error) {
      toast.error("Failed to update profile");
      return;
    }

    setProfile({ ...profile!, ...values });
    setEditingProfile(false);
    toast.success("Profile updated successfully");
  };

  const handleAddAddress = async (values: z.infer<typeof addressSchema>) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const currentAddresses = profile?.addresses || [];
    const updatedAddresses = [...currentAddresses, values];

    const { error } = await supabase.from("profiles").update({ addresses: updatedAddresses as any }).eq("id", user.id);

    if (error) {
      toast.error("Failed to add address");
      return;
    }

    setProfile({ ...profile!, addresses: updatedAddresses });
    setAddingAddress(false);
    addressForm.reset();
    toast.success("Address added successfully");
  };

  const handleDeleteAddress = async (index: number) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const currentAddresses = profile?.addresses || [];
    const updatedAddresses = currentAddresses.filter((_, i) => i !== index);

    const { error } = await supabase.from("profiles").update({ addresses: updatedAddresses as any }).eq("id", user.id);

    if (error) {
      toast.error("Failed to delete address");
      return;
    }

    setProfile({ ...profile!, addresses: updatedAddresses });
    toast.success("Address deleted successfully");
  };

  const fetchOrders = async (userId: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Fetch orders that match either user_id OR customer_email
    const { data, error } = await supabase
      .from("orders")
      .select("id, order_ref, created_at, amount_paise, status, meta")
      .or(`user_id.eq.${userId},customer_email.eq.${user?.email}`)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching orders:", error);
      return;
    }

    setOrders(data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "text-green-600 bg-green-50";
      case "shipped":
        return "text-blue-600 bg-blue-50";
      case "paid":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="space-y-6">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">My Account</h1>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>

          {/* Profile Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Profile Details
                  </CardTitle>
                  <CardDescription>Your account information</CardDescription>
                </div>
                {!editingProfile && (
                  <Button variant="outline" size="sm" onClick={() => setEditingProfile(true)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {editingProfile ? (
                <form onSubmit={profileForm.handleSubmit(handleProfileUpdate)} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" {...profileForm.register("name")} />
                    {profileForm.formState.errors.name && (
                      <p className="text-sm text-destructive mt-1">{profileForm.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" {...profileForm.register("phone")} />
                    {profileForm.formState.errors.phone && (
                      <p className="text-sm text-destructive mt-1">{profileForm.formState.errors.phone.message}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">Save Changes</Button>
                    <Button type="button" variant="outline" onClick={() => setEditingProfile(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="text-lg font-medium">{profile?.name || "Not set"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg font-medium">{email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-lg font-medium">{profile?.phone || "Not set"}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Saved Addresses Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Saved Addresses
                  </CardTitle>
                  <CardDescription>Manage your shipping addresses</CardDescription>
                </div>
                {!addingAddress && (
                  <Button variant="outline" size="sm" onClick={() => setAddingAddress(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Address
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {addingAddress && (
                <form onSubmit={addressForm.handleSubmit(handleAddAddress)} className="space-y-4 mb-6 p-4 border rounded-lg">
                  <div>
                    <Label htmlFor="street">Street Address</Label>
                    <Input id="street" {...addressForm.register("street")} />
                    {addressForm.formState.errors.street && (
                      <p className="text-sm text-destructive mt-1">{addressForm.formState.errors.street.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" {...addressForm.register("city")} />
                      {addressForm.formState.errors.city && (
                        <p className="text-sm text-destructive mt-1">{addressForm.formState.errors.city.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" {...addressForm.register("state")} />
                      {addressForm.formState.errors.state && (
                        <p className="text-sm text-destructive mt-1">{addressForm.formState.errors.state.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input id="pincode" {...addressForm.register("pincode")} maxLength={6} />
                    {addressForm.formState.errors.pincode && (
                      <p className="text-sm text-destructive mt-1">{addressForm.formState.errors.pincode.message}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">Add Address</Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setAddingAddress(false);
                        addressForm.reset();
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              )}

              {(!profile?.addresses || profile.addresses.length === 0) && !addingAddress ? (
                <p className="text-muted-foreground text-center py-8">No saved addresses</p>
              ) : (
                <div className="space-y-4">
                  {(profile?.addresses || []).map((address, index) => (
                    <div key={index} className="border rounded-lg p-4 flex justify-between items-start">
                      <div>
                        <p className="font-medium">{address.street}</p>
                        <p className="text-sm text-muted-foreground">
                          {address.city}, {address.state} - {address.pincode}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteAddress(index)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Orders Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order History
              </CardTitle>
              <CardDescription>View and track your orders</CardDescription>
            </CardHeader>
            <CardContent>
              {orders.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No orders yet</p>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => navigate(`/order/${order.id}`)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">
                            {order.meta?.cart_items?.map((item: any) => item.name).join(", ") || "Order items"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(order.created_at).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold">₹{(order.amount_paise / 100).toLocaleString("en-IN")}</p>
                        <Button variant="ghost" size="sm">
                          View Details →
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
