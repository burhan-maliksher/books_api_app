import React from 'react'

type Book={
    id:number;
    name:string;
    type:string;
    available:boolean;
};

async function getAllFictionBooks() {
    const response=await fetch("https://simple-books-api.glitch.me/books?type=fiction",{
        cache:'no-store'
    });
    const data=response.json();
    return data;
}

async function getAllNonFictionBooks() {
    const response=await fetch("https://simple-books-api.glitch.me/books?type=non-fiction",{
        cache:'no-store'
    });
    const data=response.json();
    return data;
}

export default async function parallelPage() {
    const fictionBooksList=getAllFictionBooks();
    const nonFictionBooksList= getAllNonFictionBooks();
    
    const [fiction,nonfiction]=await Promise.all([fictionBooksList,nonFictionBooksList])
    return (
    <div>
      <h1>parallel page</h1>
      <h3>fiction books</h3>

      {fiction.map((book:Book)=>
        <ul key={book.id}>
            <li>Name:{book.name} -Type:{book.type}-<br></br>Status:{`${book.available}`}</li>
        </ul>
      )}

      <h3>non-fiction books</h3>

      {nonfiction.map((book:Book)=>
        <ul key={book.id}>
            <li>Name:{book.name} -Type:{book.type}-<br></br>Status:{`${book.available}`}</li>
        </ul>
      )} 
    </div>
  )
}
