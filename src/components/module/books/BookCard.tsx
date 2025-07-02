import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import type { IBook } from "@/types";

interface BookTableProps {
    books: IBook[];
}

export default function BookCard({ books }: BookTableProps) {
    return (
        <Card>
            <CardContent className="p-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Genre</TableHead>
                            <TableHead>ISBN</TableHead>
                            <TableHead>Copies</TableHead>
                            <TableHead>Availability</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {books.map((book) => (
                            <TableRow key={book.isbn}>
                                <TableCell>{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.genre}</TableCell>
                                <TableCell>{book.isbn}</TableCell>
                                <TableCell>{book.copies}</TableCell>
                                <TableCell>
                                    {book.available ? (
                                        <span className="text-green-600">Available</span>
                                    ) : (
                                        <span className="text-red-600">Checked Out</span>
                                    )}
                                </TableCell>
                                <TableCell className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                        <Pencil className="h-4 w-4 mr-1" />
                                        Edit
                                    </Button>
                                    <Button size="sm" variant="destructive">
                                        <Trash2 className="h-4 w-4 mr-1" />
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
