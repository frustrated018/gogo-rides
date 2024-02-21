import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
export default function Testimonial() {
  return (
    <section className="w-full py-12 lg:py-16 xl:py-24">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 xl:gap-12 pb-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Join thousands of satisfied sellers
          </h2>
          <p className="max-w-[500px] md:text-xl/relaxed">
            See what our users have to say about their experience selling cars
            on our platform.
          </p>
        </div>
        <div className="grid items-start justify-start gap-4 lg:items-center lg:justify-end">
          <div className="flex items-center space-x-4">
            <Button className="rounded-full" variant="outline">
              <ChevronLeftIcon className="w-4 h-4" />
              Prev
            </Button>
            <Button className="rounded-full" variant="outline">
              Next
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <section className="container grid max-w-6xl items-start gap-6 px-4 md:px-6 lg:grid-cols-1 lg:gap-10">
        <section>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src="https://source.unsplash.com/smiling-woman-wearing-white-and-black-pinstriped-collared-top-QXevDflbl8A"
                  alt="user"
                />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <p className="font-semibold">Alice Johnson</p>
            </div>
            <p className="text-sm text-muted-foreground">New York, NY</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold">
              Smooth and hassle-free selling process
            </div>
            <p className="text-muted-foreground">
              I recently sold my car on this platform, and I couldn&apos;t be
              happier with the experience. The website made it incredibly easy
              for me to list my car, connect with potential buyers, and finalize
              the sale. The entire process was smooth and hassle-free, thanks to
              the user-friendly interface and helpful features offered by the
              platform. I highly recommend this site to anyone looking to sell
              their car with confidence.
            </p>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src="https://source.unsplash.com/man-standing-in-front-of-window-8Vt2haq8NSQ"
                  alt="user"
                />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <div className="font-semibold">Brian Thompson</div>
            </div>
            <div className="text-sm text-muted-foreground">Los Angeles, CA</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold">
              Exceptional service and great results
            </div>
            <p className="text-muted-foreground">
              I was initially hesitant about selling my car online, but this
              platform exceeded my expectations. The customer service I received
              was exceptional, with the support team providing prompt assistance
              whenever I had a question. The listing process was
              straightforward, and my car was quickly discovered by interested
              buyers. I was able to sell my car for a great price, and the
              entire transaction was handled securely through the platform.
              I&apos;m grateful for the positive experience and would definitely
              recommend this site to others.
            </p>
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src="https://source.unsplash.com/woman-in-black-scoop-neck-shirt-CGKYNN3uuVo"
                  alt="user"
                />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <div className="font-semibold">Elena Rodriguez</div>
            </div>
            <div className="text-sm text-muted-foreground">Miami, FL</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold">
              Trusted platform with great buyer connections
            </div>
            <p className="text-muted-foreground">
              As a first-time seller, I was looking for a platform that would
              help me connect with serious buyers and provide the support I
              needed to navigate the selling process. I&apos;m glad I found this
              website, as it offered me a seamless experience from start to
              finish. The platform allowed me to showcase my car with
              high-quality photos and detailed descriptions, attracting the
              attention of genuine buyers. I appreciated the secure messaging
              system that allowed me to communicate with potential buyers, and
              the platform&apos;s guidance on finalizing the sale gave me
              confidence in the transaction. I successfully sold my car to a
              satisfied buyer, and I&apos;m grateful for the support and trust
              this platform provided.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}
