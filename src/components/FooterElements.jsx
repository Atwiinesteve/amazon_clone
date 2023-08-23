import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterElements({heading, links=[]}) {
  return (
    <React.Fragment>
        <div className='w-[200px] h-auto flex flex-col justify-center items-start'>
            <h4 className='text-white font-bold text-md font-poppins mb-4'>{heading}</h4>
            {links.map(link => (
                <div key={link.id} className='flex flex-col'>
                    <Link className='text-white font-poppins mt-1 text-sm hover:underline font-light' to={`/${link}`}>{link}</Link>
                </div>
            ))}
        </div>
    </React.Fragment>
  )
}
