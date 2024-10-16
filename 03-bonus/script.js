console.log(' numeri primi')

for (let i=0; i<1000; i++){
    let numeri = i+1
    //let numeri = 21
   // console.log(numeri)

    let numeriPrimi = null

    let numreriRad2 = Math.sqrt(numeri)
   // console.log(numreriRad2)

   const tuttiImoduli = []
   //console.log(tuttiImoduli)
   let modulo


    for (x=2; x<=numreriRad2; x++){
         modulo = numeri % x
        tuttiImoduli.push(modulo)

       //console.log(modulo)
    }
           
    
    if (tuttiImoduli.includes(0)){
    
    }else{
        numeriPrimi = numeri
        console.log(numeriPrimi)
    
    }
    
    
    
    
    
}