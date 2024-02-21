import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Add = () => {
  return (
    <Card className="max-w-[95%] md:max-w-md xl:max-w-lg mx-auto my-10">
      <CardHeader>
        <CardTitle>Put your vehicle up for sale.</CardTitle>
        <CardDescription>
          Please carefully fill out the form below to submit your vehicle for
          sale.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="mb-4">
            <Label htmlFor="name">Name:</Label>
            <Input type="text" id="name" name="name" required />
          </div>

          <div className="mb-4">
            <Label htmlFor="image">Image URL (Imagebb or Unsplash):</Label>
            <Input type="text" id="image" name="image" required />
          </div>

          <div className="mb-4">
            <Label htmlFor="brand_name">Brand Name:</Label>
            <Input type="text" id="brand_name" name="brand_name" required />
          </div>

          <div className="mb-4">
            <Label htmlFor="price">Price:</Label>
            <Input type="number" id="price" name="price" required />
          </div>

          <div className="mb-4">
            <Label htmlFor="type">Type:</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Car Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Coup">Coup</SelectItem>
                <SelectItem value="Convertable">Convertable</SelectItem>
                <SelectItem value="Suv">Suv</SelectItem>
                <SelectItem value="Sedan">Sedan</SelectItem>
                <SelectItem value="exotic">Exotic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <Label htmlFor="Details">Details:</Label>
            <Textarea id="Details" name="Details" required />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Add;
