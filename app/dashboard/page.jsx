import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import BreweryDashboard from "@/components/BreweryDashboard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function () {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main>
      {user ? (
        <div>
          <div className="container mx-auto p-4 bg-white">
            <h1 className="text-black text-5xl">Hello !!, {user?.email}</h1>

            <div className=" mt-10">
              <form action="/auth/logout" method="post">
                <button className="text-black p-5 border border-black">
                  Log Out
                </button>
              </form>
            </div>
            <BreweryDashboard />
          </div>
        </div>
      ) : (
        <div>
          <div className="container mx-auto p-4  h-screen">
            <h1 className="text-black-300 text-5xl">Hello !!, Random User</h1>
            <br />
            <br />
            <Link href={"/login"}>
              <Button> Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
