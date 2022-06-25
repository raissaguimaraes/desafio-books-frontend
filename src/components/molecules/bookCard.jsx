import React from 'react';

const bookInfomation = {
    description: string,
    author: string,
    title: string,
    image: 

}

export function BookCard(){
    
    return(
        <div className="list-card">
            <div className='book-card'>
                <img src="" className="book-image"/>
            </div>
            <div className='infomation-card'>
            <h1 className="title-book"></h1>
            <h1 className="author"></h1>
            <h1 className="description"></h1>
            </div>

            
        </div>
    )
}