var images= ["https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg", "https://www.pngfind.com/pngs/m/674-6748101_fathers-day-superhero-illustration-superhero-dad-cartoon-png.png", "https://i.pinimg.com/736x/f8/a9/dd/f8a9dd5024d6ebed33ae33db724d84e3.jpg", "https://thumbs.dreamstime.com/b/happy-cute-kid-boy-ready-to-go-school-166126017.jpg"];
var names= ["Trichy Rajalakshmi Subramanian", "Ram Subramanian", "Padma Priya Ram", "Vignesh Ram"];
var i=0;
function next(){
    i++;
    var number_of_family_member_array= 4
    if (i>number_of_family_member_array){
        i=0;
    }
    var updated_image= images[i];
    var updated_name= names[i];
    document.getElementById("family_member_image").src=updated_image;
    document.getElementById("family_member_name").innerHTML=updated_name;
}