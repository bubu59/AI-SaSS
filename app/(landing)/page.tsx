import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
   <div>
    <Link href='sign-in'>
        <Button>
            Log In
        </Button>
    </Link>
   </div>
  )
}