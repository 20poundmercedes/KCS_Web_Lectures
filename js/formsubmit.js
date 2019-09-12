let vardas;
let email;
let zinute;
let json;

function paimtiDuomenis() {
    vardas = $('#fn').val();
    email = $('#fn1').val();
    zinute = $('#zinute').val();
}

function suformuotJson() {
json = {
    "name":vardas,
    "email":email,
    "message":zinute,
   };
}

function issiustiDuomenis(){
    $.post('saugotizinute.php',json,function (data, status) {
    $('#rez').html(data)
    })
}
$('[value=send]').click(function () {
    paimtiDuomenis();
    suformuotJson();
    issiustiDuomenis();
});