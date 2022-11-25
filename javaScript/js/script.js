let name = prompt('ismingizni kiriting'),
    surname = prompt('familiyangizni kiriting'),
    age = prompt('yoshingizni kiritig')

let obj = {
    ism:name,
    familiya:surname,
    yosh:age,
}

if (obj.yosh < 16) {
    console.log('siz maktab oquvchisisiz');
}else if (obj.yosh <= 16){
    console.log('siz TATUda oqiysiz');
}else{
    console.log('sizning yoshingiz ancha katta');
}