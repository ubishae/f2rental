/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Pp8kGYdL4Sv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="flex h-14 items-center bg-background px-4 lg:px-6">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <CarIcon className="h-6 w-6 text-primary" />
          <span className="sr-only">Car Rental</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
            prefetch={false}
          >
            Rent a Car
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full bg-primary py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                    Find Your Perfect Ride
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Discover the best car rental deals and enjoy hassle-free
                    transportation.
                  </p>
                </div>
                <form className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Search by location or model"
                    className="max-w-lg flex-1 bg-primary-foreground text-primary"
                  />
                  <Button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Search
                  </Button>
                </form>
              </div>
              <Image
                src="https://moodyins.com/wp-content/uploads/2021/12/Rental-cars.jpg"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                width="550"
                height="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary-foreground">
                  Featured Cars
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
                  Explore Our Top Picks
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our selection of premium vehicles for your next
                  adventure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-between space-y-4 rounded-lg bg-card p-6 shadow-sm">
                <div className="space-y-2">
                  <Image
                    src="https://dam.alfuttaim.com/dx/api/dam/v1/collections/dc9b6eaa-cc71-4e6b-b9a8-2ede7939749f/items/636636eb-97a8-4c33-9018-dd9aeeee4cb3/renditions/3a456e07-36a8-45e0-a80f-0cec233d81bd?binary=true"
                    alt="Car"
                    className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"
                    width="300"
                    height="200"
                  />
                  <h3 className="text-xl font-bold text-foreground">
                    Toyota Camry
                  </h3>
                  <p className="text-muted-foreground">
                    Comfortable and reliable sedan.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">$50/day</div>
                  <Button className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Rent Now
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg bg-card p-6 shadow-sm">
                <div className="space-y-2">
                  <Image
                    src="https://dam.alfuttaim.com/dx/api/dam/v1/collections/64cc24aa-9710-4429-b8ee-1f0fe366dcba/items/344d52e3-cf37-4d69-9bfd-806217eabadb/renditions/de6f8ecc-4897-420e-b494-7b6785fbcc28?binary=true"
                    alt="Car"
                    className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"
                    width="300"
                    height="200"
                  />
                  <h3 className="text-xl font-bold text-foreground">
                    Honda Civic
                  </h3>
                  <p className="text-muted-foreground">
                    Compact and fuel-efficient sedan.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">$45/day</div>
                  <Button className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Rent Now
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg bg-card p-6 shadow-sm">
                <div className="space-y-2">
                  <Image
                    src="https://i.pinimg.com/originals/af/8b/2b/af8b2bddab3f12fe5117e814535bf0f8.png"
                    alt="Car"
                    className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"
                    width="300"
                    height="200"
                  />
                  <h3 className="text-xl font-bold text-foreground">
                    Ford Mustang
                  </h3>
                  <p className="text-muted-foreground">
                    Powerful and stylish sports car.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">$75/day</div>
                  <Button className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Rent Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from real people who have had a great experience with our
                  car rental platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-between space-y-4 rounded-lg bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <Avatar className="h-11 w-11 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                    <div className="font-semibold text-foreground">
                      John Doe
                    </div>
                    <div className="text-sm text-muted-foreground">
                      San Francisco, CA
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-px">
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                  </div>
                </div>
                <div className="text-muted-foreground">
                  &quot;I had a fantastic experience renting a car from this\n
                  platform. The process was seamless, and the car was in\n
                  excellent condition. Highly recommended!&quot;
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <Avatar className="h-11 w-11 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                    <div className="font-semibold text-foreground">
                      Sarah Anderson
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Los Angeles, CA
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-px">
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                  </div>
                </div>
                <div className="text-muted-foreground">
                  &quot;I was impressed by the wide selection of cars and the\n
                  competitive prices. The rental process was a breeze, and\n the
                  customer service was excellent. I&apos;ll definitely be\n
                  using this platform again.&quot;
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Car Rental. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            href="#"
            className="text-xs text-muted-foreground underline-offset-4 hover:underline"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs text-muted-foreground underline-offset-4 hover:underline"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

interface Props {
  className: string;
}

function CarIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function StarIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
