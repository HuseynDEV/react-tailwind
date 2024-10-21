import React from 'react'
import Header from './component/Header'

const App = () => {
  return (
    <div>
      <Header />
      <main className='flex md:flex-row flex-col  items-center justify-between  border-2 border-black mx-auto   '>
        <div className='w-full px-10 py-[100px] '>
          <h2 className='text-5xl w-[100px] leading-[60px]'>Kyiv  LuxeBouquets</h2>
          <p className='text-md w-[90%]'>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
          <div className='w-[85%] border-[1px] mt-5 mb-3 border-black'></div>

          <div className='flex gap-2'>
            <img className='w-[300px] bg-[#FFFFFF26] h-[250px] border-r-2 border-black pr-5' src='https://s3-alpha-sig.figma.com/img/0567/a121/b59e26f48e6f23e27e3c79b3a953f5e4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q9dzYYzQBIzxfAT2kmKhNFpTQaCQR078ZzXy5GRZ475a9Q1z0PqljABMCnjgNkJ9STD9coYkJ4M9rfCEXEZqmDmRDIkSt54xXx-5r7b07Muv0Lg5dUFRUn9h266sUtSW56QZ-fTAl~uJ1Krl~KYFYg6Tw8db6p~3jrBuaJxC6D8Rg1nJHStyZwWPI-fwJ8sgyxRSqsklm9Ed6QQSgvLLve~o4mV6VvJrwNBvPfeTGpK1bUtLJwH4Gnutz-Fd24zfrNqsmxx-ukkdgwiYMYQcwhI-dzBcI0ns~-2EkbSZknAg4N5xy8601ieF7wsWQMeLd0FflZRdtM7eV4KNLmsIqA__' />
            <p className='w-[45%] flex ml-2  items-end   '>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
          </div>
        </div>

        <div className='w-full h-full border-l border-black grid grid-cols-2'>
          <div className=' border-black relative'>
            <h3 className='text-[38px] flex items-center justify-center h-full'>Fresh Flowers</h3>
            <div className=' absolute bottom-2 left-[50%] -translate-x-[50%]  '>Shop now</div>
          </div>
          <div className='border-l border-black'>
            <img src='https://s3-alpha-sig.figma.com/img/0bdb/f0ec/211d295bca21b1784c81e8cb90f83cfc?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FR-pvZOSiAtqwp2O3TtJLiJf0v3tMz48di4dMivpaSS4RanziHblUEHK0hZS1d8j86ZErDljmPPqCsjel8v9vvJvLJnldaTw0Nw4BhAVLW0E7lAp4OArhIMxMd82vOcm6BHlIYzXpifNqM~X7s7XEqFYTNF5wvvsz811RsM~i4u1vttdB0jglHsYdKpQxTeqLGJxgbtB39UqyVBtfteFokbsO5Eq93WD-imyFLgn1ttnc8ALswOHU3I805kWyn2P9lSvFqnov75UOl7i5M5SXsy3fEl-tC7UnDK~fbLYybyXGVziP5lcUkZWT47SdrwtitgDO0NYim9MdtYRBfh6Eg__' />
          </div>
          <div className='border-t border-black'>
            <img src='https://s3-alpha-sig.figma.com/img/0bdb/f0ec/211d295bca21b1784c81e8cb90f83cfc?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FR-pvZOSiAtqwp2O3TtJLiJf0v3tMz48di4dMivpaSS4RanziHblUEHK0hZS1d8j86ZErDljmPPqCsjel8v9vvJvLJnldaTw0Nw4BhAVLW0E7lAp4OArhIMxMd82vOcm6BHlIYzXpifNqM~X7s7XEqFYTNF5wvvsz811RsM~i4u1vttdB0jglHsYdKpQxTeqLGJxgbtB39UqyVBtfteFokbsO5Eq93WD-imyFLgn1ttnc8ALswOHU3I805kWyn2P9lSvFqnov75UOl7i5M5SXsy3fEl-tC7UnDK~fbLYybyXGVziP5lcUkZWT47SdrwtitgDO0NYim9MdtYRBfh6Eg__' />
          </div>
          <div className='border-l border-t border-black relative'>
            <h3 className='text-[38px] flex items-center justify-center h-full'>Fresh Flowers</h3>
            <div className=' absolute bottom-2 left-[50%] -translate-x-[50%]  '>Shop now </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default App