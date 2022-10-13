import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Blog() {

  const navigate = useNavigate();

  return (

    <div className='flex items-center justify-center h-screen'>
      <div>

        <div>
          <h1 className="text-3xl text-black font-bold mb-4">
            What interests me
          </h1>

          <div>
          <button className="px-1 hover:scale-75 text-2xl font-light text-gray-900 dark:text-black" onClick={() => {
            navigate("/Osmosis");
          }}>Osmosis</button>
          </div>
          
          <div>
          <button className="px-1 hover:scale-75 text-2xl font-light text-gray-900 dark:text-black" onClick={() => {
            navigate("/Lisa");
          }}>Lisa</button>
          </div>

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

export default Blog;