import React from 'react'
import { Link } from 'react-router-dom';

function Contact() {

    return (
        <div className='flex items-center justify-center h-screen'>
            <div>
                <div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'mailto: mike@mrcis.me';
                    }} className='px-1 hover:scale-y-150 text-2xl font-light text-gray-900 dark:text-black'>
                        Electronic Mail
                    </button>
                </div>

                <div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://github.com/MichaelCutro';
                    }} className='px-1 hover:rotate-180 text-2xl font-light text-gray-900 dark:text-black'>
                        Github
                    </button>
                </div>

                <div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://twitter.com/MichaelCutro';
                    }} className='px-1 hover:skew-y-12 text-2xl font-light text-gray-900 dark:text-black'>
                        Twitter
                    </button>
                </div>

                <div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://t.me/mrcisme';
                    }} className='px-1 hover:translate-x-6 text-2xl font-light text-gray-900 dark:text-black'>
                        Telegram
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

export default Contact