import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
  return (
    // <form action="/auth/login" method="post">
    //   <label htmlFor="email">Email</label>
    //   <input name="email" />
    //   <label htmlFor="password">Password</label>
    //   <input type="password" name="password" />
    //   <button>Sign In</button>
    //   <button formAction="/auth/sign-up">Sign Up</button>
    //   <button formAction="/auth/logout">Sign Out</button>
    // </form>

    <Card className="w-[350px] mx-auto mt-20">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="/auth/sign-up" method="post">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Please enter your email"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="**********" />
            </div>
          </div>
          <CardFooter className="flex justify-between pt-6">
            <Link href={"/"}>
              <Button variant="outline">Cancel</Button>
            </Link>

            <Button type="submit">Sign Up</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
