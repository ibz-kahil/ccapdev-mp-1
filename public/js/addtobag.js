$(document).ready(function(){
    price = 395;
    $("#addbtn").click(function(){
      count = parseInt($("#quantity").text());
      count++;
      $("#quantity").text(count);
      totalprice = price * count;
      $("#price").text("₱" + totalprice);
    });

    $("#subtractbtn").click(function(){
      count = parseInt($("#quantity").text());
      if (count > 1)
      {
        count--;
        $("#quantity").text(count);
        totalprice = price * count;
        $("#price").text("₱" + totalprice);
      }
        
    });

  });