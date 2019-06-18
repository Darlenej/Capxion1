
// window.location.href = "http://example.com/new_url";

// function myFunction() {
  

// onclick="location.href='www.google.com';"

// document.getElementsByClassName("panel-primary") = "inspiration page"
// document.getElementById("panel-primary").innerHTML = "Hello World";
  // }

  // let clickMe= document.querySelectorAll('newButton');

  // console.log(clickMe);
  
  // for(let i=0;i< clickMe.length;i++){
  //     buttons[i].addEventListener('click',function(evt) {
  // }
  // console.log()
  // }
  //     );
  

let inspo=["It's never too late to be what you might have been",
"Never limit yourself because of others' limited imagination;never limit others because of your own limited imagination,",
"My mission in life is not merely to survive, but to thrive."]

let fun=["People say nothing is impossible, but I do nothing every day.",
"All the things I really like to do are either immoral, illegal or fattening.",
"Inside me there’s a thin person struggling to get out, but I can usually sedate him with four or five cupcakes."];

let travel=["Travel makes one modest. You see what a tiny place you occupy in the world.",
"Be fearless in the pursuit of what sets your soul on fire.",
"Traveling – it leaves you speechless, then turns you into a storyteller.",
"Better to see something once than hear about it -a thousand times"
];

let entrepreneur=["You have to see failure as the beginning and the middle, but never entertain it as an end.",
"If we tried to think of a good idea, we wouldn’t have been able to think of a good idea. You just have to find the solution for a problem in your own life.",
"Do not focus on numbers. Focus on doing what you do best."];

let religious=["The Christian does not think God will love us because we are good, but that God will make us good because He loves us.",
"Prayer is not asking. It is a longing of the soul. It is daily admission of one's weakness. It is better in prayer to have a heart without words than words without a heart.",
"Hate the sin, love the sinner."];

let fam=["Having somewhere to go is home. Having someone to love is family. And having both is a blessing.",
"Families are like fudge – mostly sweet with a few nuts.",
"You don’t choose your family. They are God’s gift to you, as you are to them."
];

// let randominspo = inspo[Math.floor(Math.random()*inspo.length)];
// console.log(randominspo);
// document.body.innerHTML= randominspo;

// function choose(inspo) {
//   var randominspo = Math.floor(Math.random() * inspo.length);
//   return inspo[index];
// }


$('.btnContact').click(()=>{
alert("Thank you for submitting your message!")
  

  document.getElementById("myForm").reset();
});


// function randomize() {
//   document.getElementById("myForm").submit();
// };

// function submitButton() {
//   $('form[name="myForm"]').submit();
//   $('input[type="text"], textarea').val('');
// }


$(".submitbtn").click(()=>{
let randomnum= Math.floor(Math.random()*fun.length);
let quoteText = fun[randomnum]
$("#randomfun").text(quoteText)
});

$(".submitbtn").click(()=>{
  let randomnum1= Math.floor(Math.random()*travel.length);
  let quoteText1 = travel[randomnum1]
  $("#randomtravel").text(quoteText1)
  });

  $(".submitbtn").click(()=>{
    let randomnum2= Math.floor(Math.random()*entrepreneur.length);
    let quoteText2 = entrepreneur[randomnum2]
    $("#randomentrepreneur").text(quoteText2)
    });

    $(".submitbtn").click(()=>{
      let randomnum3= Math.floor(Math.random()*religious.length);
      let quoteText3 = religious[randomnum3]
      $("#randomreligious").text(quoteText3)
      });

      $(".submitbtn").click(()=>{
        let randomnum4= Math.floor(Math.random()*fam.length);
        let quoteText4 = fam[randomnum4]
        $("#randomfam").text(quoteText4)
        });
        
        $(".submitbtn").click(()=>{
          let randomnum5= Math.floor(Math.random()*inspo.length);
          let quoteText5 = inspo[randomnum5]
          $("#randominspo").text(quoteText5)
          });

          $("#submitEmail").click(()=>{
           $("#removeE").val("");
          });

          // let allButtons= document.querySelectorAll('button.btn-danger');

          // console.log(allButtons);
          
          // for(let i=0;i< allButtons.length;i++){
          //     allButtons[i].addEventListener('click',function(evt) {
          // }
          // console.log(evt.target.dataset.index)
          // });



