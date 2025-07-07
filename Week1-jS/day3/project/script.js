let products=[
    {
        id:1,
        name:"cap",
        price:1200
    },
        {
        id:2,
        name:"tshirt",
        price:500
    },
        {
        id:3,
        name:"pen",
        price:10
    },
        {
        id:4,
        name:"phone",
        price:15000
    },
        {
        id:5,
        name:"laptop",
        price:60000
    }
];
  let carts=[];
    let shop=document.getElementById("shop-page");
    let fullPage=document.getElementById("fullpage");
    let cartPage=document.getElementById("cart");
    for(let product of products){//forgot to use let 
        let card=document.createElement("div");//took help
        //  mistaken in backticks
        card.innerHTML=`
        <h3>${product.id}</h3><br>
        <h1>${product.name}</h1><br>
        <h2>Rs.${product.price}</h2> <br>`
        ;

        card.style.textAlign="center"
        card.style.height="300px"
        card.style.width="300px";
        card.style.border="3px solid black"
        shop.appendChild(card);
        shop.style.display="flex"
        shop.style.justifyContent="space-evenly";
        shop.style.marginTop="200px";

        let addBtn=document.createElement("button");
        addBtn.innerText="Add to cart";
        addBtn.style.border="2px solid black";
        addBtn.style.borderRadius="3px";

        card.appendChild(addBtn);

        addBtn.addEventListener("click",()=>{
            carts.push({...product});
        })};

     let gotoCart=document.createElement("button");
            gotoCart.innerText="GO TO Cart";
            gotoCart.style.border="5px solid black";
            gotoCart.style.borderRadius="5px";
            gotoCart.style.height="40px";
            gotoCart.style.width="200px";
            gotoCart.style.position="relative";
            gotoCart.style.left="1060px";
            gotoCart.style.top="40px"

            fullPage.appendChild(gotoCart);
            fullPage.justifyContent="center";

            gotoCart.addEventListener("click",()=>{

                
                fullPage.style.display="none";

                cartPage.style.display="block";

                for(let cart of carts){
                    let newAdds=document.createElement("div");
                    newAdds.innerHTML=`
                    <h3>${cart.id}</h3>
                    <h1>${cart.name}</h1>
                    <h2>${cart.price}</h2>
                    `
                    newAdds.style.textAlign = "center";
                    newAdds.style.height = "300px";
                    newAdds.style.width = "300px";
                    newAdds.style.border = "3px solid black";
                    newAdds.style.margin = "20px";

                    cartPage.appendChild(newAdds);

                    // let delBtn=document.createElement("button");
                    // delBtn.innerText="delete item";

                    // newAdds.appendChild("delBtn");
                    // delBtn.addEventListener("click",()=>{
                    //     newAdds.remove();
                    // })

                    
                }
            })

    
    
    
            
  


