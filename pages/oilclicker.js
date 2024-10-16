//settings
autoclickms = 4000;
autoclickupdatetime = 100;

//code
clicks = 0;
boughtautoclickers = 0;
boughtperclicks = 0;
boughtgeneralmults = 0;
autoclickerprice = 5;
perclickprice = 25;
generalmultprice = 80;

oilxpos = 0;
oilypos = 0;
persecond = 0;
perclick = 0;

document.getElementById('hiddenbutton1').innerHTML = 'Autoclicker (Cost:' + autoclickerprice + ') (' + boughtautoclickers + ')';
document.getElementById('hiddenbutton2').innerHTML = 'per Click (Cost:' + perclickprice + ') (' + boughtperclicks + ')';
document.getElementById('hiddenbutton3').innerHTML = 'General Multiplier (Cost:' + generalmultprice + ') (' + boughtgeneralmults + ')';

/* I STOLE THIS FUNCTION */


document.addEventListener('mousemove', function(event) {
   mousex = event.clientX;
   mousey = event.clientY;
});

downloadFile = () => {
   const link = document.createElement("a");
   const content = (
      clicks+"\n"+
      boughtautoclickers+"\n"+
      boughtperclicks+"\n"+
      boughtgeneralmults+"\n"+
      autoclickerprice+"\n"+
      perclickprice+"\n"+
      generalmultprice
   )
   const file = new Blob([content], { type: 'text/plain' });
   link.href = URL.createObjectURL(file);
   link.download = "oilclickersave.txt";
   link.click();
   URL.revokeObjectURL(link.href);
};

function loadFile() {
   const [file] = document.getElementById("myFile").files;
   const reader = new FileReader();
 
   reader.addEventListener(
      "load",
      () => {
         console.log(reader.result);
         var str = reader.result;
         var splitArray = str.split('\n');

         clicks=Number(splitArray[0]);
         boughtautoclickers=Number(splitArray[1]);
         boughtperclicks=Number(splitArray[2]);
         boughtgeneralmults=Number(splitArray[3]);
         autoclickerprice=Number(splitArray[4]);
         perclickprice=Number(splitArray[5]);
         generalmultprice=Number(splitArray[6]);

         update()


         document.getElementById('hidingdiv').classList.remove('hidden');
         document.getElementById('clicks_p').classList.add('hidden');
         document.getElementById('clicks_p').classList.remove('clicks_p');

         document.getElementById('persecond').classList.add('hidden');
         document.getElementById('persecond').classList.remove('MoPaddingMoProblems');

         document.getElementById('perclick').classList.add('hidden');
         document.getElementById('perclick').classList.remove('MoPaddingMoProblems');

         document.getElementById('hiddenSaveButton').classList.add('hidden');
         document.getElementById('hiddenbutton1').classList.add('hidden');

         document.getElementById('hiddenbutton2').classList.add('hidden');

         document.getElementById('hiddenbutton3').classList.add('hidden');

         if (clicks >= 1) {
            document.getElementById('hidingdiv').classList.add('hidden');
            document.getElementById('clicks_p').classList.remove('hidden');

            document.getElementById('clicks_p').classList.add('clicks_p');
            document.getElementById('persecond').classList.remove('hidden');

            document.getElementById('persecond').classList.add('MoPaddingMoProblems');
            document.getElementById('perclick').classList.remove('hidden');
            document.getElementById('perclick').classList.add('MoPaddingMoProblems');

            document.getElementById('hiddenSaveButton').classList.remove('hidden');
            document.getElementById('hiddenbutton1').classList.remove('hidden');
         }
         if (clicks >= 10||boughtperclicks>0){
            document.getElementById('hiddenbutton2').classList.remove('hidden');
         }
         if (clicks >= 50||boughtgeneralmults>0) {
            document.getElementById('hiddenbutton3').classList.remove('hidden');
         }


         document.getElementById('hiddenbutton1').innerHTML = 'Autoclicker (Cost:' + autoclickerprice + ') (' + boughtautoclickers + ')';
         document.getElementById('hiddenbutton2').innerHTML = 'per Click (Cost:' + perclickprice + ') (' + boughtperclicks + ')';
         document.getElementById('hiddenbutton3').innerHTML = 'General Multiplier (Cost:' + generalmultprice + ') (' + boughtgeneralmults + ')';

      },
      false,
   );
 
   if (file) {
     reader.readAsText(file);
   }

   document.getElementById("myFile").value = "";
   
 }


/*THE REST ARE MINE */

function update() {
   
   document.getElementById('clicks_p').innerHTML = Math.round(clicks);

   persecond = Math.round((boughtautoclickers / (autoclickms / 1000)) * (1 + (boughtgeneralmults / 2)) * 100) / 100;
   perclick = (1 + (boughtperclicks * 2)) * (1 + (boughtgeneralmults / 2)) + "  Per Click";

   document.getElementById('persecond').innerHTML = persecond + "/s";
   document.getElementById('perclick').innerHTML = perclick;

   if (clicks >= 1) {
      document.getElementById('hidingdiv').classList.add('hidden');
      document.getElementById('clicks_p').classList.remove('hidden');
      document.getElementById('clicks_p').classList.add('clicks_p');
   }
   if (clicks >= 1) {
      document.getElementById('persecond').classList.remove('hidden');
      document.getElementById('persecond').classList.add('MoPaddingMoProblems');
   }
   if (clicks >= 1) {
      document.getElementById('perclick').classList.remove('hidden');
      document.getElementById('perclick').classList.add('MoPaddingMoProblems');
   }

   if (clicks >= 1) {
      document.getElementById('hiddenSaveButton').classList.remove('hidden');
      document.getElementById('hiddenbutton1').classList.remove('hidden');
   }
   if (clicks >= 10) {
      document.getElementById('hiddenbutton2').classList.remove('hidden');
   }
   if (clicks >= 50) {
      document.getElementById('hiddenbutton3').classList.remove('hidden');
   }
}

function ayyay() {
   
   clicks += (1 + (boughtperclicks * 2)) * (1 + (boughtgeneralmults / 2));

   // Generate random offsets NEED TO ADD A TENDENCY TO MOVE TOWARDS THE MIDDLE OF THE SCREEN

   var screenWidth = window.innerWidth;
   var screenHeight = window.innerHeight;

   var offsetX = Math.floor((Math.random() * 401)-(oilxpos-screenWidth/2)/2) - 200;
   var offsetY = Math.floor((Math.random() * 401)-(oilypos-screenHeight/2)/2) - 200;

   var newX = oilxpos + offsetX;
   var newY = oilypos + offsetY;

   var oilElement = document.getElementById('coolio');
   var oilWidth = oilElement.offsetWidth;
   var oilHeight = oilElement.offsetHeight;

   

   if (newX < 0) newX = 0;
   if (newX + oilWidth > screenWidth) newX = screenWidth - oilWidth;
   if (newY < 0) newY = 0;
   if (newY + oilHeight > screenHeight) newY = screenHeight - oilHeight;

   oilxpos = newX;
   oilypos = newY;

   document.getElementById('coolio').style.cssText = 'margin:0px; width:74px; height:240px; position:absolute; top:' + oilypos + 'px; left:' + oilxpos + 'px; padding:0; z-index:99;';
   
   update();
}


setInterval(function() {
   clicks += (boughtautoclickers * (1 + (boughtgeneralmults / 2))) / (autoclickms / autoclickupdatetime);
   update();
}, autoclickupdatetime);

function buyautoclicker() {
   if (clicks >= autoclickerprice) {
      clicks -= autoclickerprice;
      boughtautoclickers++;
      autoclickerprice *= 1.25;
      autoclickerprice = Math.round(autoclickerprice);
      document.getElementById('hiddenbutton1').innerHTML = 'Autoclicker (Cost:' + autoclickerprice + ') (' + boughtautoclickers + ')';
      update();
   }
}

function buy2perclick() {
   if (clicks >= perclickprice) {
      clicks -= perclickprice;
      boughtperclicks++;
      perclickprice *= 1.1;
      perclickprice = Math.round(perclickprice);
      document.getElementById('hiddenbutton2').innerHTML = 'per Click (Cost:' + perclickprice + ') (' + boughtperclicks + ')';
      update();
   }
}

function buygeneralmult() {
   if (clicks >= generalmultprice) {
      clicks -= generalmultprice;
      boughtgeneralmults++;
      generalmultprice *= 1.5;
      generalmultprice = Math.round(generalmultprice);
      document.getElementById('hiddenbutton3').innerHTML = 'General Multiplier (Cost:' + generalmultprice + ') (' + boughtgeneralmults + ')';
      update();
   }
}
