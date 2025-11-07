import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-8 px-18'>
            <h4 className='bg-black text-white py-2 px-5 rounded-full uppercase'>Target Audience</h4>
            <button className='bg-gray-100 px-5 py-1 text-black uppercase rounded-full tracking-widest text-sm'>Digital Banking Platform</button>
        </div>
    )
}

export default Navbar;