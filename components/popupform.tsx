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

export default function OrderCakeModal() {
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
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
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
