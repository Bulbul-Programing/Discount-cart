document.getElementById('apply-now-btn').addEventListener('click', function(){

   const userCouponCode = document.getElementById('coupon-code').value;
   
   if(userCouponCode === 'DIC30'){
      const priceAmount = document.getElementById('price-amount');
      const priceAmountString = priceAmount.innerText;
      const priceWithoutDiscount = parseFloat(priceAmountString);

      const discount = (priceWithoutDiscount * 30)/100;

      const discountPrice = document.getElementById('price-after-discount')
      const discountPriceString = discountPrice.innerText;
      const BeforeDiscount = parseFloat(discountPriceString);
      const finalPrice = BeforeDiscount - discount;
      discountPrice.innerText = finalPrice;

     const button = document.getElementById('apply-now-btn');
     button.disabled = true;
   }
})