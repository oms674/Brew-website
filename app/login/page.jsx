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
import Messages from "@/components/Messages";

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

    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mx-auto mt-20 p-10 border">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action="/auth/login"
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
          Sign In
        </button>
        <button
          formAction="/auth/sign-up"
          className="border border-gray-700 rounded px-4 py-2 text-black mb-2"
        >
          Sign Up
        </button>
        <Messages />
      </form>
    </div>

    // <Card className="w-[350px] mx-auto mt-20">
    //   <button formAction="/auth/logout">Sign Out</button>
    //   <CardHeader>
    //     <CardTitle>Login</CardTitle>
    //     <CardDescription>Please login into your account</CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <form action="/auth/login" method="post">
    //       <div className="grid w-full items-center gap-4">
    //         <div className="flex flex-col space-y-1.5">
    //           <label htmlFor="email">
    //             <Label htmlFor="email">Email</Label>
    //           </label>
    //           <input type="text" />

    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="Please enter your email"
    //           />
    //         </div>
    //         <div className="flex flex-col space-y-1.5">
    //           <Label htmlFor="password">Password</Label>
    //           <Input id="password" type="password" placeholder="**********" />
    //         </div>
    //       </div>
    //       <CardFooter className="flex justify-between pt-6">
    //         <Link href={"/"}>
    //           <Button variant="outline">Cancel</Button>
    //         </Link>

    //         <Button type="submit">Login</Button>
    //       </CardFooter>
    //     </form>
    //   </CardContent>
    // </Card>
  );
}
