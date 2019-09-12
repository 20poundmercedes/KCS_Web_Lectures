function Sudeti(a,b) {
    return a+b;
}
function Atimti(a,b) {
    return a-b;
}
function Dauginti(a,b) {
    return a*b;
}
function Dalinti(a,b) {
    return a/b;
}

$('[value=Dauginti]').click(function () {
    let a = $('#fn').val();
    let b = $('#zinute').val();
    //Dauginti(a,b);

    let ats=Dauginti(a,b);
    span = document.createElement("span");
    $('#rez').append(span);

    $('#rez > span').html(ats);
});

$('[value=Dalinti]').click(function () {
    let a = $('#fn').val();
    let b = $('#zinute').val();
    //Dalinti(a,b);

    let ats=Dalinti(a,b);
    span = document.createElement("span");
    $('#rez').append(span);

    $('#rez > span').html(ats);
});

$('[value=Sudeti]').click(function () {
    let a = parseInt($('#fn').val());
    let b = parseInt($('#zinute').val());
    //sudeti(a,b);

    let ats=Sudeti(a,b);
    span = document.createElement("span");
    $('#rez').append(span);

    $('#rez > span').html(ats);
});

$('[value=Atimti]').click(function () {
    let a = parseInt($('#fn').val());
    let b = parseInt($('#zinute').val());
    //atimti(a,b);

    let ats=Atimti(a,b);
    span = document.createElement("span");
    $('#rez').append(span);

    $('#rez > span').html(ats);
});


function keistiAtsakyma(Atsakymas) {
    let rez = $('#rex');
    if (rez.find('span').length ===0){
        span=document.createElement('span')
        rez.append(span);
    }
}

let name = $('#fn').val();
let email = $('#fn1').val();
let msg = $('#zinute').val();
function JSON() {
    JSON = {
        fn:name,
        fn1:email,
        zinute:msg
    }
}
