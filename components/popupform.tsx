"use client";

import { useState } from "react";
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
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
  product:Product;
}
  
//take all product details a props a
//  display product image , titile and description on top
// show total price for option selected at the bottom.
//create states for total .
// send all data  to email js.
export default function OrderCakeModal({product}:ProductCardProps) {
  const [phone, setPhone] = useState("");
  const [cakeSize, setCakeSize] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    console.log({ phone, cakeSize, notes });
    // TODO: Add your form submission logic here
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="buy-btn text-sm my-1 font-semibold w-6/10 mx-auto rounded-full" variant="default">Order Cake</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Order a Cake</DialogTitle>
        </DialogHeader>
        <div className="flex justify-between items-center">
          <p>{product.title}</p>
          <Image
            src={product.imageUrl}
            width={100}
            height={100}
            alt="cake"
            className="rounded-2xl object-cover w-[150px] h-[100px]"
          />
        </div>
        <div className="grid gap-4 py-4">
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
            <Label htmlFor="size">Cake Size</Label>
            <Select onValueChange={(value:string) => setCakeSize(value)}>
              <SelectTrigger id="size">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small - (10 pax) - Rs {product.prices.small}</SelectItem>
                <SelectItem value="medium">Medium - (15 pax) -Rs {product.prices.medium}</SelectItem>
                <SelectItem value="large">Large - (20 pax)- Rs {product.prices.large}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Add any specific instructions..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
