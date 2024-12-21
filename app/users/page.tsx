import Link from "next/link";

function UsersPage() {
    return ( 
        <div className="flex flex-col gap-4">
            Página de usuarios
           <div className="flex flex-col gap-4">
           <Link  href="/users/1">Gerson</Link>
            <Link  href="/users/2">Esteban</Link>
            <Link  href="/users/3">José</Link>
           </div>
        </div>
     );
}

export default UsersPage;