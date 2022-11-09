let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ]; //Object array for divs

   for (let i = 0; i < objects.length; i++) {
    let dvs = document.createElement("div");//Create divs
    dvs.style.width = objects[i].width;//Style divs
    dvs.style.height = objects[i].height;
    dvs.style.backgroundColor = objects[i].color;
    document.body.appendChild(dvs);
   }