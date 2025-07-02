import BookCard from "@/components/module/books/BookCard";
import { useAppSelector } from "@/redux/hook";

export default function Books() {
    const books = useAppSelector((state) => state.library.books);

    return (
        <div className="space-y-4 p-4">
            <div className="text-2xl font-semibold tracking-tight">📚 All Books</div>
            <BookCard books={books} />
        </div>
    );
}
