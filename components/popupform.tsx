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
import { Loader2 } from "lucide-react"; // Loading icon

interface Product {
  title: string;
  description: string;
  imageUrl: string;
  prices: {
    small: number;
    medium: number;
    large: number;
  };
}

type ProductCardProps = {
  product: Product;
};

type CakeSize = "small" | "medium" | "large";

export default function OrderCakeModal({ product }: ProductCardProps) {
  const [cake, setCake] = useState(product.title);
  const [name, setName] = useState(""); // 👈 new field
  const [phone, setPhone] = useState("");
  const [cakeSize, setCakeSize] = useState<CakeSize | "">("");
  const [notes, setNotes] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<null | { type: "success" | "error"; text: string }>(null);

  useEffect(() => {
    if (cakeSize) {
      setPrice(product.prices[cakeSize]);
    }
  }, [cakeSize]);

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
      cake_size: cakeSize,
      notes,
      cake_title: cake,
      cake_price: price,
    };

    try {
      const result = await emailjs.send(
        "service_ir8jeuv",
        "template_fug9cuv",
        templateParams,
        "OX3nBhCcVYrmxMZAk"
      );
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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="buy-btn text-sm my-1 font-semibold w-6/10 mx-auto rounded-full">
          Order Cake
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Order a Cake</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold">{product.title}</p>
            <Image
              src={product.imageUrl}
              width={100}
              height={100}
              alt="cake"
              className="rounded-2xl object-cover w-[150px] h-[100px]"
            />
          </div>

          {/* Name Field */}
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

          {/* Phone Field */}
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

          {/* Cake Size */}
          <div className="grid gap-2">
            <Label htmlFor="size">Cake Size</Label>
            <Select onValueChange={(value: CakeSize) => setCakeSize(value)} required>
              <SelectTrigger id="size">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small - Rs {product.prices.small}</SelectItem>
                <SelectItem value="medium">Medium - Rs {product.prices.medium}</SelectItem>
                <SelectItem value="large">Large - Rs {product.prices.large}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Notes */}
          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Add any specific instructions..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Feedback Message */}
          {message && (
            <div
              className={`text-sm text-center font-medium ${
                message.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Footer */}
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
  );
}
