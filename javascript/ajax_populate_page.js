// used the skeleton provided from CS 545 jadran folder to populate the chocolate types
var proj4_data;
var proj4_price;

$(document).ready(function() {
    proj4_data = new Array();
    $.get('/perl/jadrn012/get_products.cgi', storeData);
    var cart = new shopping_cart("jadrn012");
    var overall_total = 0;
    var overall_pretotal = 0;
    var overall_shipping = 0;
    var overall_tax = 0;
    //updateCartDisplay();
    //updateDisplay();

    $(function(){
        if($('body').is('.cart-body')){
        setTimeout( function() { updateDisplay(); }, 200);
        } else {
            updateCartDisplay();
        }
    });

    setTimeout(function() { updateDisplay(); }, 0); 
    
    $('#dark').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    if(j != 5){
                        tmpString += proj4_data[i][j] + "<br />";
                    }
                tmpString += "<input type='number' class='amount' value='1' id='amount" + proj4_data[i][0] + "'>";    
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id='message'>&nbsp;</span><br />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
    });
        
    $('#nuts').on('click', function() {   
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {  
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";                     
                for(var j=0; j < proj4_data[i].length; j++)
                    if(j != 5){
                        tmpString += proj4_data[i][j] + "<br />";
                    }
                tmpString += "<input type='number' class='amount' value='1' id='amount" + proj4_data[i][0] + "'>";       
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id='message'>&nbsp;</span><br />";      
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
    });
        
    $('#brittle').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    if(j != 5){
                    tmpString += proj4_data[i][j] + "<br />";
                    }
                tmpString += "<input type='number' class='amount' value='1' id='amount" + proj4_data[i][0] + "'>";           
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id='message'>&nbsp;</span><br />";               
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
    });

    $('#milk').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    if(j != 5){
                        tmpString += proj4_data[i][j] + "<br />";
                    }
                tmpString += "<input type='number' class='amount' value='1' id='amount" + proj4_data[i][0] + "'>";                      
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id='message'>&nbsp;</span><br />";              
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
    });         

     $('#holiday').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    if(j != 5){
                        tmpString += proj4_data[i][j] + "<br />";
                    }
                tmpString += "<input type='number' class='amount' value='1' id='amount" + proj4_data[i][0] + "'>";     
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id='message'>&nbsp;</span><br />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
    });       
        
     $('#gifts').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    if(j != 5){
                        tmpString += proj4_data[i][j] + "<br />";
                    }
                tmpString += "<input type='number' class='amount' value='1' id='amount" + proj4_data[i][0] + "'>";     
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Add to Cart</span><br />";              
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
    });    
        
    $(document).on('click', ".buy", function() {  
            var sku = this.id;
            var amt = $("#amount" + sku).val();
            cart.add(sku,amt);
            updateCartDisplay();
            $('#message').html("Added to Cart").fadeTo(125,1).fadeTo(2220,0);
            //$('span').fadeTo(125,1).fadeTo(2220,0);
            //$(this).next().fadeIn
            //$(this).next().fadeto(125,1).fadeto(2200,0);
    });      

    function updateCartDisplay() {
        $('#count').text(cart.size()); 
    }

    function updateDisplay() {
        var cartArray = cart.getCartArray();
        var currrentTotal = 0;
        var productTotal = 0;
        var taxAmt = 0;
        var shipping = 0;
        var totalShipping =0;

        var toWrite = "<table id='cart-table'>";
        toWrite += "<tr><th>Photo</th><th>SKU</th><th>Quantity</th><th>Price</th><th>Total Price</th><th>Shipping</th></tr>";
        for(i=0; i < cartArray.length; i++) {
            var sku1 = cartArray[i][0];
            var qty = cartArray[i][1];

            toWrite += "<tr>";
            toWrite += "<td><img alt='chocolate' src='/~jadrn000/PROJ4_IMAGES/"+ sku1 +".jpg' width='80px'/>" +"</td>";
            toWrite += "<td>"+sku1+"</td>"; // sku 
            toWrite += "<td>"+qty+"</td>";  // quantity
            console.log("about to enter the for loop");
            for(var j=0; j < proj4_data.length; j++){
                console.log("insid the for loop");
                if(proj4_data[j][0] == sku1){
                    productTotal += (parseFloat(proj4_data[j][6]) * parseFloat(qty));
                    shipping += (parseFloat(qty) * 2);
                    currrentTotal += productTotal;
                    toWrite += "<td>"+proj4_data[j][6]+"</td>"; // price
                    console.log("the price is " + proj4_data[j][6]);
                    console.log("the total for this prod is " + productTotal);
                }
            }
            toWrite += "<td>"+productTotal.toFixed(2)+"</td>"; 
            toWrite += "<td>"+shipping+"</td>";
            toWrite += "<td><input type='button' value='add' id='add' name='" + sku1 + "' />" + "</td>";
           
            toWrite += "<td><input type='button' value='empty' id='empty' name='" + sku1 + "' quant />" + "</td>";
            totalShipping += shipping; 
            shipping = 0;
            productTotal = 0;
            toWrite += "</tr>";
            }
            overall_pretotal = currrentTotal.toFixed(2);
            taxAmt = currrentTotal * .08;
            currrentTotal += (taxAmt + totalShipping);


            overall_total = currrentTotal;
            overall_shipping = totalShipping;
            overall_tax = taxAmt;

            toWrite += "<tr><td>Sales Tax</td><td>" + taxAmt.toFixed(2) + "</td>";
            toWrite += "<tr><td>Total Shipping</td><td>" + totalShipping + "</td>";
            toWrite += "<tr><td>Total</td><td>" +currrentTotal.toFixed(2) + "</td>";
        toWrite += "</table>"; 
        toWrite += "<div class='order'><input type='button' value='Order Now'></input></div>";
        toWrite += "<h3 id='what_kind'>&nbsp;</h3>";
        $('#cart').html(toWrite);     
        updateCartDisplay();
        $('#total-order').text(currrentTotal.toFixed(2));
    } 

    $( "#dialog-modal" ).dialog({
        height: 550,
        width: 700,
        modal: true,
        autoOpen: false
    });
    
    $('.order').on('click', function($e) {       
            $('#total').val(currrentTotal.toFixed(2));
            $('#shipping').val(overall_shipping);
            $('#tax').val(overall_tax);
             $('#pretotal').val(overall_pretotal);
            $("#dialog-modal").dialog('open');
    });      

     $(document).on('click', "#add", function(e) {  
        var sku = $(e.target).attr("name");
        var qty = $(e.target).attr("")
        cart.add(sku,1);
        updateCartDisplay();
        updateDisplay();
    });           

     $(document).on('click', "#remove", function(e) {  
        var sku = $(e.target).attr("name");
        // if qty == 1, then empty

        cart.add(sku,-1);
        updateCartDisplay();
        updateDisplay();
    });   

     $(document).on('click', "#update", function(e) {  
        var sku = $(e.target).attr("name");
        var qty = $(e.target).attr("placeholder");
        alert("qty is :" + qty);

        // if qty == 1, then empty
        cart.setQuantity(sku, qty);
        updateCartDisplay();
        updateDisplay();
    });         

    $(document).on('click', "#empty", function(e) {  
        var sku = $(e.target).attr("name");
        cart.delete(sku);
        updateCartDisplay();
        updateDisplay();
    });    

    $(document).on('click', ".order", function(e) { 
        if (cart.size() > 0 ) {
         //$("#cart-table").toggle();
         $('#what_kind').html("");
         $("#total").val(overall_total.toFixed(2));
         $('#shipping').val(overall_shipping);
         $('#tax').val(overall_tax.toFixed(2));
         $('#pretotal').val(overall_pretotal);
         $("#dialog-modal").dialog('open');

     } else {
        $('#what_kind').html("Cart is Empty! Please add chocolates to your cart!");
     }
    });   

    // copy billing to shipping technique via https://gist.github.com/jasonvarga/7492871
    $("#same_as_billing").on("change", function(){
    if (this.checked) {
      $("[name='fname_shipping']").val($("[name='fname_billing']").val());
      $("[name='lname_shipping']").val($("[name='lname_billing']").val());
      $("[name='address_shipping']").val($("[name='address_billing']").val());
      $("[name='address2_shipping']").val($("[name='address2_billing']").val());
      $("[name='city_shipping']").val($("[name='city_billing']").val());
      $("[name='state_shipping']").val($("[name='state_billing']").val());
      $("[name='zipcode_shipping']").val($("[name='zipcode_billing']").val());
      $("[name='email_shipping']").val($("[name='email_billing']").val());
      $("[name='phonestart_shipping']").val($("[name='phonestart_billing']").val());
      $("[name='phonemid_shipping']").val($("[name='phonemid_billing']").val());
      $("[name='phoneend_shipping']").val($("[name='phoneend_billing']").val());
    }
  });



     /**
      $('#cart-table').on('click',$('input[type="button"]'), function(e) {
        if($(e.target).val() != 'add') return;
        alert("add works");
        console.log("add worksssss");
        var sku = $(e.target).attr("name");
        cart.add(sku,1);
        //updateCartDisplay();
        updateDisplay();
    });

     $('#cart-table').on('click',$('input[type="button"]'), function(e) {
        if($(e.target).val() != 'remove') return;
        var sku = $(e.target).attr("name");
        // if qty == 1, then empty
        cart.add(sku,-1);
        //updateCartDisplay();
        updateDisplay();
    });

     $('#cart-table').on('click',$('input[type="button"]'), function(e) {
        if($(e.target).val() != 'empty') return;
        var sku = $(e.target).attr("name");
        cart.delete(sku);
        //updateCartDisplay();
        updateDisplay();
    }); 
**/   
});    
    
   
    function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
    }   
    
    // from http://www.webmasterworld.com/forum91/3262.htm            
    function explodeArray(item,delimiter) {
    tempArray=new Array(1);
    var Count=0;
    var tempString=new String(item);

    while (tempString.indexOf(delimiter)>0) {
    tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
    tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
    Count=Count+1
    }

    tempArray[Count]=tempString;
    return tempArray;
}     