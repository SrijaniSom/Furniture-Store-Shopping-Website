const toggleBtn=document.querySelector('.toggle');
const Modal=document.querySelector('.modal');
const crossIcon=document.querySelector('.icon');
const Over=document.querySelector('.overlay');
const ProductsBtn=document.querySelector('.butn');
const Cover=document.querySelector('.coverPart');
const featuredSec=document.querySelector('.Featured');
const productsSec=document.querySelector('.productsSection');
const showBtn=document.querySelector('.btn');
const home=document.querySelector('.homebtn');
const about=document.querySelector('.aboutbtn');
const product=document.querySelector('.productbtn');
const home2=document.querySelector('.homebtn2');
const about2=document.querySelector('.aboutbtn2');
const product2=document.querySelector('.productbtn2');
const homeSections=document.querySelector('.homesec');
const aboutSecs=document.querySelector('.AboutSection');
const oneblock=document.querySelectorAll('.singleBlock');
const AllBtn=document.querySelector('.allbtn');
const IkeaBtn=document.querySelector('.ikeabtn');
const MacrosBtn=document.querySelector('.macrosbtn');
const CaressaBtn=document.querySelector('.caressabtn');
const LiddyBtn=document.querySelector('.liddybtn');
const sliderRange=document.querySelector('.slider');
const valShow=document.querySelector('.Val');
const priceOfItem=document.querySelectorAll('.PriceItem');
const searchBox=document.querySelector('.finding');
const nameList =document.querySelectorAll('.NameItem');
const IconsList=document.querySelectorAll('.icons');



const Details1=document.querySelector('.details1');
const Details2=document.querySelector('.details2');
const Details3=document.querySelector('.details3');
const Details4=document.querySelector('.details4');
const Details5=document.querySelector('.details5');
const Details6=document.querySelector('.details6');
const Details7=document.querySelector('.details7');
const Details8=document.querySelector('.details8');
const Details9=document.querySelector('.details9');
const Details10=document.querySelector('.details10');
const Details11=document.querySelector('.details11');
const Details12=document.querySelector('.details12');
var total=0;

const CartBtn=document.querySelector('.cart');
const CartSecs=document.querySelector('.Cartsection');
const closeCart=document.querySelector('.CloseSection');
const totalDisplay=document.querySelector('.totalVal');


function addItems(x)
    {
        var l1=document.querySelector("ul1");
        var li1=document.createElement("img");
        var t1=document.querySelector(".z"+x.substring(1)).getAttribute('src');
        li1.src=t1;
        
       
        l1.appendChild(li1);

 

        var list1=document.querySelector("ul");
        var li=document.createElement("li");
        var text1=document.querySelector(".n"+x.substring(1)).textContent;
        var text2=document.querySelector(".p"+x.substring(1)).textContent;
       
       
        var text3=document.querySelector(".p"+x.substring(1)).innerHTML;
        var val=parseFloat(text3.trim().substring(1));
        val.toFixed(2);
        console.log(val);
        total+=val;
        totalDisplay.textContent="Total=$"+total.toFixed(2);
       
        li.appendChild(document.createTextNode(text1));
        li.appendChild(document.createTextNode(text2));
       
        list1.appendChild(li);
        CartSecs.style.display="block";
        Over.style.display="block";

    }

CartBtn.addEventListener("click",()=>{

    CartSecs.style.display="block";
    Over.style.display="block";

});

closeCart.addEventListener("click",()=>{

    CartSecs.style.display="none";
    Over.style.display="none";

});

function display1func()
{
    homeSections.style.display="none";
    productsSec.style.display="none";
    aboutSecs.style.display="none";
    Details1.style.display="flex";
    Details2.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";
    




}
function display2func()
{
    homeSections.style.display="none";
    productsSec.style.display="none";
    aboutSecs.style.display="none";
    Details2.style.display="flex";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";
    

}

function display3func()
{
    homeSections.style.display="none";
    productsSec.style.display="none";
    aboutSecs.style.display="none";
    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="flex";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";
    

}
function display4func()
{
    homeSections.style.display="none";
    productsSec.style.display="none";
    aboutSecs.style.display="none";
    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="flex";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";
    

}
function display5func()
{
    homeSections.style.display="none";
    productsSec.style.display="none";
    aboutSecs.style.display="none";
    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="flex";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";
    

}
function display6func()
{
    homeSections.style.display="none";
    productsSec.style.display="none";
    aboutSecs.style.display="none";
    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="flex";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";
    

}
function display7func()
{
    homeSections.style.display="none";
    productsSec.style.display="none";
    aboutSecs.style.display="none";
    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="flex";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";
    

}
function display8func()
{
    homeSections.style.display="none";
    productsSec.style.display="none";
    aboutSecs.style.display="none";
    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="flex";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";
    

}
function display9func()
{
    homeSections.style.display="none";
    productsSec.style.display="none";
    aboutSecs.style.display="none";
    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="flex";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";
    

}
function display10func()
{
    homeSections.style.display="none";
    productsSec.style.display="none";
    aboutSecs.style.display="none";
    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="flex";
    Details11.style.display="none";
    Details12.style.display="none";
    

}
function display11func()
{
    homeSections.style.display="none";
    productsSec.style.display="none";
    aboutSecs.style.display="none";
    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="flex";
    Details12.style.display="none";
    

}
function display12func()
{
    homeSections.style.display="none";
    productsSec.style.display="none";
    aboutSecs.style.display="none";
    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="flex";
    

}

function searchFunction(x)
{
    if(x==13)
    {
        
        var count=0;
        nameList.forEach(function(item){
            count++;

            var searchVal=searchBox.value;
            var searchValue=searchVal.toLowerCase();
           
            var nameVal=item.textContent;
            var nameValue=nameVal.toLowerCase();
          
            if(nameValue.includes(searchValue))
            {
                
                document.getElementById(count).style.display="flex";

            }
            else
            {
                document.getElementById(count).style.display="none";
            }

        });

    }
}
function slideval()
{
    var count = 0;
    valShow.textContent="Value:$"+sliderRange.value;
    var limitVal=sliderRange.value;
    priceOfItem.forEach(function(priceItem)
    {
        
        count++;
        console.log(document.getElementById("#"+count));
        var priceValue="";
        console.log(priceItem.textContent);
        var lengthPrice=priceItem.textContent.length;
        for(let i=26;i<lengthPrice;i++)
        {
            
            priceValue=priceValue+priceItem.innerHTML.toString().charAt(i);

        }

        console.log(priceValue);
        if(priceValue < limitVal)
        {
            document.getElementById(count).style.display="flex";

        }
        else
        {
            document.getElementById(count).style.display="none";
        }

    });

}
AllBtn.addEventListener("click",()=>{

    oneblock.forEach(function(item)
    {
            item.style.display="flex";
    
    
    });

});

IkeaBtn.addEventListener("click",()=>{

    oneblock.forEach(function(item){

        if(item.classList.contains("ikea"))
        {
            item.style.display="flex";
        }
        else
        {
            item.style.display="none";
        }
    });

});

MacrosBtn.addEventListener("click",()=>{

    oneblock.forEach(function(item){

        if(item.classList.contains("macros"))
        {
            item.style.display="flex";
        }
        else
        {
            item.style.display="none";
        }
    });

});

CaressaBtn.addEventListener("click",()=>{

    oneblock.forEach(function(item){

        if(item.classList.contains("caressa"))
        {
            item.style.display="flex";
        }
        else
        {
            item.style.display="none";
        }
    });

});

LiddyBtn.addEventListener("click",()=>{

    oneblock.forEach(function(item){

        if(item.classList.contains("liddy"))
        {
            item.style.display="flex";
        }
        else
        {
            item.style.display="none";
        }
    });

});


home.addEventListener("click",()=>{

    productsSec.style.display="none";
    homeSections.style.display="block";
    aboutSecs.style.display="none";

    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";

});

about.addEventListener("click",()=>{

    productsSec.style.display="none";
    homeSections.style.display="none";
    aboutSecs.style.display="flex";

    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";

});

product.addEventListener("click",()=>{

    
    productsSec.style.display="flex";
    homeSections.style.display="none";
    aboutSecs.style.display="none";

    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";

});

home2.addEventListener("click",()=>{

    productsSec.style.display="none";
    homeSections.style.display="block";
    aboutSecs.style.display="none";
    Over.style.display="none";
    Modal.style.display="none";

    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";

});

about2.addEventListener("click",()=>{

    productsSec.style.display="none";
    homeSections.style.display="none";
    aboutSecs.style.display="flex";
    Over.style.display="none";
    Modal.style.display="none";

    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";

});

product2.addEventListener("click",()=>{

    
    productsSec.style.display="flex";
    homeSections.style.display="none";
    aboutSecs.style.display="none";
    Over.style.display="none";
    Modal.style.display="none";

    Details2.style.display="none";
    Details1.style.display="none";
    Details3.style.display="none";
    Details4.style.display="none";
    Details5.style.display="none";
    Details6.style.display="none";
    Details7.style.display="none";
    Details8.style.display="none";
    Details9.style.display="none";
    Details10.style.display="none";
    Details11.style.display="none";
    Details12.style.display="none";

});



toggleBtn.addEventListener("click",()=>{
    Over.style.display="block";
    Modal.style.display="flex";
    crossIcon.addEventListener("click",()=>{
        Over.style.display="none";
        Modal.style.display="none";

   
    })
});

ProductsBtn.addEventListener("click",()=>
{
   homeSections.style.display="none";
    productsSec.style.display="flex";

});
showBtn.addEventListener("click",()=>
{
    homeSections.style.display="none";
    productsSec.style.display="flex";

});

function iconDisplay(x)
{
    document.querySelector(".i"+x).style.display="flex";
}


function iconHide(x)
{
    document.querySelector(".i"+x).style.display="none";
}

