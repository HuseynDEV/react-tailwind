import React from 'react'

const Header = () => {
    return (
        <header className='flex justify-between border-2  border-black '>
            <div className='md:hidden block px-9 py-5 border-r-2 border-black '>
                Menu
            </div>
            <div className='md:flex hidden'>
                <div className='px-9 py-5 border-r-2 border-black'>Shop</div>
                <div className='px-9 py-5 border-r-2 border-black'>Contact</div>
            </div>
            <div className='md:hidden block px-9 py-5 border-l-2 border-black   '>Shop</div>
            <div className='md:flex hidden '>
                <div className='px-9 py-5 border-l-2 border-black'>Sign in</div>
                <div className='px-9 py-5 border-l-2 border-black'>Cart</div>
            </div>
        </header>
    )
}

export default Header