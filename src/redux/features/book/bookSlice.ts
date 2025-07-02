import type { IBook } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    books: IBook[];
}

const initialState: InitialState = {
    books: [
        {
            id: "1",
            title: "Sample Book",
            author: "John Doe",
            genre: "Fiction",
            isbn: "123-4567890123",
            description: "This is a sample book description.",
            copies: 5,
            available: true,
        },
        {
            id: "2",
            title: "Another Book",
            author: "Jane Smith",
            genre: "Non-Fiction",
            isbn: "987-6543210987",
            description: "This is another sample book description.",
            copies: 3,
            available: true,
        }
    ]
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
});

export default bookSlice.reducer;