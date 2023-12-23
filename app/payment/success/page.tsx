import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

const emailAddress = "pengfeihuan@gmail.com";

const page = () => {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 2-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Sayment Success
          </h3>
          <p className="text-gray-600 my-2">Thank you for your test</p>
          <p className="my-2">
            <a
              href={`mailto:${emailAddress}`}
              className="text-primary hover:underline"
            >
              Contact Me
            </a>{" "}
            if you want a website like this!
          </p> 
          <Button asChild className="mt-6">
            <Link href='/'>
                Shop More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
