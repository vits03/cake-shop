"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import emailjs from "emailjs-com";
import { Loader2 } from "lucide-react";
import { AllProducts } from "@/constants/constants";
import ProductSection from "./products";
type ProductCardProps = {
  product: keyof typeof AllProducts; // 'cake' | 'cakesicles' | 'strawberryDipped'
}

type CakeSize = "Bento" | "Classic" | "Deluxe";
type Flavour = "vanilla" | "chocolate" | "almond" | "lemon";

export default function OrderCakeModal({ product }: ProductCardProps) {
    const data = AllProducts[product]
  
  const [cake, setCake] = useState(data.title);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cakeSize, setCakeSize] = useState<string| "">("");
  const [notes, setNotes] = useState("");
  const [price, setPrice] = useState(0);
  const [flavour,setFlavour] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<null | { type: "success" | "error"; text: string }>(null);

  const [isMainDialogOpen, setIsMainDialogOpen] = useState(false);
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);

  useEffect(() => {
    if (cakeSize) {
     // check f cake // cake - set 
     console.log(cakeSize)
    }
  }, [cakeSize]);

  useEffect(() => {
    if (message) {
      setIsStatusDialogOpen(true);
      const timeout = setTimeout(() => {
        setIsStatusDialogOpen(false);
        setIsMainDialogOpen(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cakeSize || !name.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setMessage(null);

  const templateParams = {
  user_name: name,
  user_phone: phone,
  cake_size: product === "cake" ?cakeSize :`Box of ${cakeSize}` , // Use cakeSize for non-cake products too
  notes,
  cake_title: cake,
  cake_flavour:flavour,
  cake_price: price,
};

     
    try {
      await emailjs.send("service_ir8jeuv", "template_fug9cuv", templateParams, "OX3nBhCcVYrmxMZAk");
      setMessage({ type: "success", text: "Order sent successfully!" });
      setName("");
      setPhone("");
      setCakeSize("");
      setNotes("");
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Main Order Dialog */}
      <Dialog open={isMainDialogOpen}  onOpenChange={(open) => {
    setIsMainDialogOpen(open);
    if (!open) {
      // Reset all states when dialog closes
      setName("");
      setPhone("");
      setCakeSize("");
      setFlavour("");
      setNotes("");
      setPrice(0);
      setMessage(null);
      setLoading(false);
    }
  }}
>
        <DialogTrigger asChild>
          <Button className="buy-btn text-sm my-1 bg-pink-950/80 font-semibold w-7/10 mx-auto rounded-full">
            Order Cake
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Order a Cake</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-primary">{data.title}</p>
              <Image
                src={AllProducts[product].images[0]}
                width={100}
                height={100}
                alt="cake"
                className="rounded-2xl object-cover w-[75px] h-[50px]"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number (Mauritius)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="5XXX XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
pattern="^5\d{7}$"
                maxLength={8}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="size"> Size</Label>
            <Select
onValueChange={(value: string) => {
  setCakeSize(value);

  if (product !== "cake") {
    const sizes = AllProducts[product].sizes as Record<string, string>;
    const selectedPrice = sizes[value];
    const priceNumber = Number((selectedPrice).replace(/[^\d]/g, ""));
    setPrice(priceNumber);
  }
}}

  required
>
                <SelectTrigger id="size">
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
{product === "cake" ? (
  <>
    <SelectItem value="Bento">
      Bento (5 pax) – As from {AllProducts.cake.sizes.Bento.vanilla}
    </SelectItem>
    <SelectItem value="Classic">
      Classic (10–12 pax) – As from {AllProducts.cake.sizes.Classic.vanilla}
    </SelectItem>
    <SelectItem value="Deluxe">
      Deluxe (15–20 pax) – As from {AllProducts.cake.sizes.Deluxe.vanilla}
    </SelectItem>
  </>
) : (
  Object.entries(AllProducts[product].sizes).map(([boxSize, price]) => (
    <SelectItem key={boxSize} value={boxSize}>
      Box of {boxSize} – {price}
    </SelectItem>
  ))
)}

              
                  </SelectContent>
              </Select>
            </div>
    {product === "cake" && (
  <div className="grid gap-2">
    <Label htmlFor="flavour">Flavour</Label>
 <Select
  onValueChange={(value) => {
    setFlavour(value as Flavour); // Cast value to Flavour type
    if (cakeSize) {
      const selectedPrice = AllProducts.cake.sizes[cakeSize as CakeSize][value as Flavour];
      const priceNumber = Number(selectedPrice.replace(/[^\d]/g, ""));
      setPrice(priceNumber);
    }
  }}
  required
>

      <SelectTrigger id="flavour">
        <SelectValue placeholder="Choose your flavour" />
      </SelectTrigger>
      <SelectContent>
        {cakeSize ? (
          Object.entries(AllProducts.cake.sizes[cakeSize as keyof typeof AllProducts.cake.sizes]).map(
            ([flavour, price]) => (
              <SelectItem key={flavour} value={flavour}>
                {flavour} – {price}
              </SelectItem>
            )
          )
        ) : (
          <SelectItem value="nosize" disabled>
            Select a cake size first.
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  </div>
)}



            <div className="grid gap-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Tell us how to customize your cake..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div>
              <p className="font-semibold text-base text-gray-800">
                Total:<span className="text-primary"> Rs {price}</span>
              </p>

              <div className="rounded-xl bg-primary/5 p-3 mt-3 text-xs text-primary text-center">
                <p> Please note that Additional decoration will be charged.</p>
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Status Feedback Dialog */}
      <Dialog open={isStatusDialogOpen} onOpenChange={setIsStatusDialogOpen}>
        <DialogContent className="sm:max-w-xs text-center">
          <DialogHeader>
            <DialogTitle className={message?.type === "success" ? "text-green-600" : "text-red-600"}>
              {message?.type === "success" ? "Order Sent!" : "Error"}
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm">{message?.text}</p>
        </DialogContent>
      </Dialog>
    </>
  );
}
