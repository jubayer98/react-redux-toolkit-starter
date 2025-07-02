import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Library Management System</h1>
            <div className="space-x-4">
                <Button variant="ghost" asChild><a href="/">All Books</a></Button>
                <Button variant="ghost" asChild><a href="/add-book">Add Book</a></Button>
                <Button variant="ghost" asChild><a href="/borrow-summery">Borrow Summary</a></Button>
            </div>
        </nav>
    )
}
