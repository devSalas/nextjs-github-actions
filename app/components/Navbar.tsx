
import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

async function Navbar() {
    const session = await auth();


    return (
        <header className="w-full bg-red-500 text-white">
            <nav>
                <Link href={"/"}>
                    Gigamas
                </Link>
                <div>
                    {
                        
                        (session && session?.user) ? (
                           <>
                            <form action={async()=>{
                                "use server";
                                await signOut()
                            }} >
                               <button type="submit"> Logout</button>
                            </form>  
                            <div>
                                {session?.user?.name}
                            </div>
                           </>
                           

                        ) : (<form action={async () => {
                            "use server";
                            await signIn('github')
                        }}>
                           <button type="submit"> Login</button>
                        </form>
                        )
                    }


                </div>
            </nav>
        </header >
    );
}

export default Navbar;