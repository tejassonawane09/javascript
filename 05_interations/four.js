const myObj={
    js:'javasript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}



for (const key in myObj) {
    //console.log(myObj[key]);
   // console.log(`${key} Shortcut Is For ${myObj[key]}`);
    
}


const programing=["js","rb","py","java","cpp"]
for (const key in programing) {
    //console.log(programing[key]);
    
}

//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
for (const key in map) {
    console.log(key);
    
}