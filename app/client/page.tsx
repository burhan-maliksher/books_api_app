"use client"
import React from 'react'
import useSWR from "swr";

const url='https://api.quotable.io/random?tags=technology';
const fetcher=(usrl:string)=>fetch(url).then((res)=>res.json());


export default function clientPage() {
    // const allBooksList=await getAllBooks();
    // const quote=await getQuote();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data, error,isLoading}= useSWR(url,fetcher);  
    if(error)return<div>error</div>;
    if(isLoading)return<div>loading</div>;
    // if(error)return<div>error</div>;

    return (
    <div>
      <h1>client page</h1>
      {data.content}
      {/* <h3>Quote of the day:{quote.content}</h3> */}
      {/* {allBooksList.map((book:Book)=> */}
        {/* <ul key={book.id}> */}
            {/* <li>Name:{book.name} -Type:{book.type}-<br></br>Status:{`${book.available}`}</li> */}
        {/* </ul> */}
      {/* )}  */}
    </div>
  )
}
