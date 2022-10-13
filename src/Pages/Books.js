import React from 'react'
import { Link } from 'react-router-dom';

function Books() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div>
        <div>
          <button onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://www.goodreads.com/book/show/82256.The_Sovereign_Individual?ac=1&from_search=true&qid=BYOpAxCt9p&rank=1';
          }} className='px-1 text-2xl font-light dark:text-black hover:bg-orange-300'>
            The Sovereign Individual
          </button>
        </div>

        <div>
          <button onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://www.goodreads.com/book/show/52962238-the-changing-world-order?ac=1&from_search=true&qid=wO9AJUfB4D&rank=1';
          }} className='px-1 text-2xl font-light dark:text-black hover:bg-red-300'>
            The Changing World Order
          </button>
        </div>

        <div>
          <button onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://www.goodreads.com/book/show/41881472-the-psychology-of-money#';
          }} className='px-1 text-2xl font-light dark:text-black hover:bg-violet-300'>
            The Psychology of Money
          </button>
        </div>

        <div>
          <button onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://www.goodreads.com/book/show/10127019-the-lean-startup?ac=1&from_search=true&qid=FnHxbW68ii&rank=1';
          }} className='px-1 text-2xl font-light dark:text-black hover:bg-blue-300'>
            The Lean Startup
          </button>
        </div>

        <div>
          <button onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://www.amazon.com/GreenPilled-How-Crypto-Regenerate-World/dp/1034928163';
          }} className='px-1 text-2xl font-light dark:text-black hover:bg-green-300'>
            GreenPilled
          </button>
        </div>

        <div>
          <button className='px-2 hover:scale-y-50 text-2xl font-light text-gray-900 dark:text-black'>
            <Link to='/'>⬅</Link>
          </button>
        </div>

      </div>


    </div>
  );

}

export default Books;