import React from 'react'

type Book={
    id:number;
    name:string;
    type:string;
    available:boolean;
};

async function getAllBooks() {
    const response=await fetch("https://simple-books-api.glitch.me/books");
    const data=response.json();
    return data;
}

async function getQuote() {
    const response= await fetch('https://api.quotable.io/random?tags=technology',{
        cache:'no-store'
    });
    if(!response.ok){
        throw new Error('failed to fetch data')
    }
    return response.json();
}

export default async function serverPage() {
    const allBooksList=await getAllBooks();
    const quote=await getQuote();
    
    return (
    <div>
      <h1>server page</h1>
      <h3>Quote of the day:{quote.content}</h3>
      {allBooksList.map((book:Book)=>
        <ul key={book.id}>
            <li>Name:{book.name} -Type:{book.type}-<br></br>Status:{`${book.available}`}</li>
        </ul>
      )} 
    </div>
  )
}
