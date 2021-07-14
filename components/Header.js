import Image from 'next/image'
import {MenuIcon,SearchIcon,ShoppingCartIcon} from '@heroicons/react/outline'
const Header = () => {
  return (
    <header>
      {/* top header */}
      <div className="flex items-center bg-amazon_blue-light p-1 flex-grow py-1">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* serach */}
        <div className=" hidden md:flex bg-yellow-400 items-center h-10 rounded-md flex-grow cursor-pointer hover:bg-yellow-500">
            <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"/>
            <SearchIcon className="h-12 p-4" />
        </div>

        {/* rights */}
        <div className="text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap">
            <div className="cursor-pointer hover:underline link">
                <p>Hello Ali Alzubair</p>
                <p className="font-extrabold">Account & List</p>

            </div>
            <div className="cursor-pointer hover:underline link">
                <p>Returns</p>
                <p className="font-extrabold">&Driven</p>
            </div>
            <div className="relative flex items-center cursor-pointer hover:underline link">
                <span className="absolute top-0 right-0 md:right-12 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">2</span>
                <ShoppingCartIcon className="h-10" />
                <p className="hidden md:inline font-extrabold text-sm">Basket</p>
            </div>
        </div>
      </div>

      {/* bottom header */}
      <div className="flex items-center bg-amazon_blue-DESFUALT text-white text-sm space-x-3 p-2 pl-6 ">
          <p className="cursor-pointer hover:underline flex items-center">
          <MenuIcon className="h-6 mr-1"/>
        All
          </p>
          <p className="cursor-pointer hover:underline">
              Prive Video
          </p>
          <p className="cursor-pointer hover:underline">
              Amazon Businsess
          </p>
          <p className="cursor-pointer hover:underline">
            Today's Doals
          </p>
          <p className="cursor-pointer hover:underline hidden md:inline-flex">Electrenics</p>
          <p className="cursor-pointer hover:underline hidden md:inline-flex">Food & carersy</p>
          <p className="cursor-pointer hover:underline hidden md:inline-flex">Price</p>
          <p className="cursor-pointer hover:underline hidden md:inline-flex">Buy again</p>
          <p className="cursor-pointer hover:underline hidden md:inline-flex">Shopper ToolKit</p>
      </div>
    </header>
  )
}

export default Header
