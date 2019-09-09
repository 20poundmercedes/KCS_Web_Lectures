let studentas = {
    vardas: 'Vardenis',
    pavarde: 'Pavardenis',
    kursas: 'IT-4',
    pazymiai:[7,8,9,8,9,9,4,7,6,8,7,9,8,9]
};

$('button').click(function(){
    $('#demo').html(studentasStringuose(studentas));
});

function studentasStringuose(stud) {
    let txt='';
    for (let i=0; i < Object.keys(stud).length;i++){
        let key = Object.keys(stud)[i];
        txt+=stud[key]+' ';
    }
    return txt;
}


$('img.logo').click(function(){
    $('#demo').html(studentopazymiai(studentas.pazymiai));
});

function studentopazymiai(stud) {
    let txt='';
    for (let i=0; i < Object.keys(stud).length;i++){
       let key = Object.keys(stud)[i];
       txt+=stud[key]+' ';
    }
    return txt;
}


$('#demo').click(function(){
    $('#demo').html(studentopazymiusuma(studentas.pazymiai));
});
function studentopazymiusuma(avg) {
    let sum = 0;
    for (let i = 0; i < avg.length; i++) {
        sum += avg[i];
    }
    return sum / studentas.pazymiai.length
}