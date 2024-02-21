import {
  SiBentley,
  SiFerrari,
  SiLamborghini,
  SiMazda,
  SiNissan,
  SiTesla,
  SiToyota,
} from "react-icons/si";
import { SiFord } from "react-icons/si";

export default function Brands() {
  return (
    <section className="w-full py-6 md:py-12">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Shop by Brand
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-8 lg:gap-8">
          <div className="flex items-center justify-center p-4 border border-muted-foreground rounded-md hover:scale-105 hover:shadow-md transition-all">
            <SiFerrari size={50} />
          </div>
          <div className="flex items-center justify-center p-4 border border-muted-foreground rounded-md hover:scale-105 hover:shadow-md transition-all">
            <SiFord size={50} />
          </div>
          <div className="flex items-center justify-center p-4 border border-muted-foreground rounded-md hover:scale-105 hover:shadow-md transition-all">
            <SiLamborghini size={50} />
          </div>
          <div className="flex items-center justify-center p-4 border border-muted-foreground rounded-md hover:scale-105 hover:shadow-md transition-all">
            <SiToyota size={50} />
          </div>
          <div className="flex items-center justify-center p-4 border border-muted-foreground rounded-md hover:scale-105 hover:shadow-md transition-all">
            <SiBentley size={50} />
          </div>
          <div className="flex items-center justify-center p-4 border border-muted-foreground rounded-md hover:scale-105 hover:shadow-md transition-all">
            <SiNissan size={50} />
          </div>
          <div className="flex items-center justify-center p-4 border border-muted-foreground rounded-md hover:scale-105 hover:shadow-md transition-all">
            <SiMazda size={50} />
          </div>
          <div className="flex items-center justify-center p-4 border border-muted-foreground rounded-md hover:scale-105 hover:shadow-md transition-all">
            <SiTesla size={50} />
          </div>
        </div>
      </div>
    </section>
  );
}
