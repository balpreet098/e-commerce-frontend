import React from 'react'
import Offers from '../../../Components/Offers/Offers'
import Category from '../../../Components/Category/Category'
// import Deals from '../../../Components/Deals/Deals'
import Data from '../../../Components/Deals/Data'
// import ProductCard from '../../../Components/Deals/ProductCard'

function Home() {
  return (
    <div>

<Offers/>
<Category/>
<br />
{/* <Deals/> */}

<Data/>
    

    </div>
  )
}

export default Home