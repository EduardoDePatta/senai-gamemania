$(document).ready(() => {

    let totalPrice = 0;
    let eCart = document.querySelector('#itens-carrinho');

  //adicionar ao carrinho
  $(".comprar").click(function (e) {

    let clickedId = e.currentTarget.id;
    let toCartTitle = $("#" + clickedId)
      .parent()
      .find(".card-title")
      .text();
    let toCartPrice = $("#" + clickedId)
      .parent()
      .find(".price")
      .text();

      let price = toCartPrice.replace(/\D/g, "");
      let realPrice = parseFloat(price/100);


    if (confirm("Você gostaria de adicionar o ítem " + toCartTitle + " ao seu carrinho de compras?")) {

      alert(toCartTitle + " adicionado com sucesso.");
      $(eCart).append("<p>"+ toCartTitle + " R$" + realPrice);
      totalPrice += realPrice;
      $('#calcPrice').text("R$" + totalPrice);
      

    } else {

      alert("Item não adicionado.");

    }
  });

  //mostrar itens pre-selecionados no carrinho com hover
  $('#ajustar-carrinho').mouseover(()=>{
    $('#carrinho-compras').css('display', "block")
  })
  $('#ajustar-carrinho').mouseout(()=>{
    $('#carrinho-compras').css('display', "none")
  })

});
