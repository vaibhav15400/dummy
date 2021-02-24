import React from 'react';
import './OnlineStore.css'


const OnlineStore =()=>{
const [Total ,setTotal]=React.useState(0);



const AddValue=(a)=>{
    setTotal(prev=>prev+a)
    console.log(
    (a)
        
    )
}

const DecValue = (d) => {
    setTotal(prev=>{
      return prev===1 ? 0: prev-d
    })
    }

    const products=[
        {"Product": "A pillow",
        "Product_Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe16bdkXQ9EVLYjGrWodHEzm4vfrU5vqtyQGiZnxPh2hxaUkrgEhIYFbeTYajOUgaTXowBns&usqp=CAc",
        price:99,},
        {"Product": "A pillow",
        "Product_Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe16bdkXQ9EVLYjGrWodHEzm4vfrU5vqtyQGiZnxPh2hxaUkrgEhIYFbeTYajOUgaTXowBns&usqp=CAc",
        price:199,},
        {"Product": "A pillow",
        "Product_Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe16bdkXQ9EVLYjGrWodHEzm4vfrU5vqtyQGiZnxPh2hxaUkrgEhIYFbeTYajOUgaTXowBns&usqp=CAc",
        price:299,},
        {"Product": "A pillow",
        "Product_Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe16bdkXQ9EVLYjGrWodHEzm4vfrU5vqtyQGiZnxPh2hxaUkrgEhIYFbeTYajOUgaTXowBns&usqp=CAc",
        price:399,},
        {"Product": "A pillow",
        "Product_Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe16bdkXQ9EVLYjGrWodHEzm4vfrU5vqtyQGiZnxPh2hxaUkrgEhIYFbeTYajOUgaTXowBns&usqp=CAc",
        price:499,},{"Product": "A pillow",
        "Product_Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe16bdkXQ9EVLYjGrWodHEzm4vfrU5vqtyQGiZnxPh2hxaUkrgEhIYFbeTYajOUgaTXowBns&usqp=CAc",
        price:599,},
        {"Product": "A pillow",
        
        "Product_Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe16bdkXQ9EVLYjGrWodHEzm4vfrU5vqtyQGiZnxPh2hxaUkrgEhIYFbeTYajOUgaTXowBns&usqp=CAc",
        price:699,}
    ];

return(
    <>
        <section className="cart">
            <h2>{Total}</h2>
            <button>Order Now!</button>
            </section>
            <div className="product">
            {products.map((product,i)=>{
                return(
                    
                    < div className="product-item" key={i}>
                        
                         <img src= {product['Product_Image']} />
                        <div className="product-item__content">
                        <h3>{product.price}</h3>
                        <button onClick={()=>{AddValue(product.price)}}>ADD TO CART</button>
                        <button onClick={()=>{DecValue(product.price)}}>REMOVE TO CART</button>
                        </div>
                    
                    </div>
                )
            })}
             </div>


            
    </>)}    
export default OnlineStore;