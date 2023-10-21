// $("#wish-submit").on("click", function () {
//   if ($("#wishtxt").val() && $("#wishname").val("")) {
//     $("#popup").modal("show");
//     $("#wishtxt").val("");
//     $("#wishname").val("");
//     setCounter();
//   } else {
//     alert("Please enter valid information");
//   }
// });

// var wishes = [
//   {
//     name: "Chellammal",

//     wish: "Happy Birthday Makkalin Thalapathy",
//   },

//   { name: "raja pandian", wish: "Happy Birthday Makkalin Thalapathy" },

//   { name: "Kandhan", wish: "Thalapathy பிறந்தநாள் வாழ்த்துக்கள்" },

//   {
//     name: "கண்மணி ",
//     wish: " நாளை தமிழக முதல்வரே….. இனிய பிறந்தநாள் வாழ்த்துக்கள் ",
//   },

//   { name: "sekar kumar", wish: "தளபதிக்கு இனிய பிறந்தநாள் நல்வாழ்த்துக்கள்" },

//   { name: "Prabakaran", wish: "Birthday Wishes Makkalin Thalapathy" },

//   {
//     name: " கார்த்தி ",
//     wish: " எழுச்சி நாயகனே , இனிய பிறந்தநாள் நல்வாழ்த்துக்கள் ",
//   },

//   { name: "nakul", wish: "உங்களுக்கு பிறந்த நாள் வாழ்த்துக்கள்" },

//   { name: "nakul", wish: "உங்களுக்கு பிறந்த நாள் வாழ்த்துக்கள்" },

//   { name: "ilayaraja", wish: "Thala.. supoer thala, happy birthday to you" },

//   { name: "Mohan", wish: "தமிழக தளபதியே பிறந்தநாள் நல்வாழ்த்துக்கள்" },

//   { name: "aadi", wish: "மக்களின் தளபதியே வாழ்க வளமுடன்" },

//   { name: "ஆனந்த் பாபு ", wish: "மக்களின் தளபதியே வாழ்க வளமுடன்" },

//   { name: "ahilan", wish: "தலைவர் பிறந்தநாள் வாழ்த்துக்கள்" },

//   { name: "ayyappan", wish: "Happy Birthday Tamilnadu Thalapathy" },

//   { name: "anbazhagan", wish: "Happy Birthday Stalin anna" },

//   { name: "கயல்விழி ", wish: "மக்களின் தளபதியே வாழ்க வளமுடன்" },

//   { name: "anbuchelvan", wish: "Best Wishes to Stalin ayya" },

//   { name: "anbuchelvan", wish: "Best Wishes toStalin ayya" },

//   { name: "maaran", wish: "தலைவர் பிறந்த நாள் உங்களுக்கு வாழ்த்துக்கள் " },

//   { name: "balakumar", wish: "பிறந்தநாள் வாழ்த்துக்கள் சகோதரா " },

//   { name: "Chidambaram", wish: "அண்ணன் ku பிறந்தநாள் வாழ்த்துக்கள் " },

//   { name: "durai pandian", wish: "வாழ்த்துக்கள்" },

//   { name: " அனந்தி ", wish: " இனிய பிறந்தநாள் வாழ்த்துக்கள் ஸ்டாலின் அண்ணா " },

//   { name: "durai murugan", wish: "Happy Birthday Thalapathy" },

//   { name: "devanathan", wish: "Happy Birthday to our future leader" },

//   { name: "elangovan", wish: "Happy Birthday Makkalin Thalapathy" },

//   { name: "ezhil", wish: "Congrats Thalapathy Anna" },

//   { name: "ganesh kumar", wish: "Happy birthdy anna" },

//   { name: "pandiyan", wish: "Anna Vazthukal" },

//   {
//     name: " கார்த்தி ",
//     wish: " எழுச்சி நாயகனே , இனிய பிறந்தநாள் நல்வாழ்த்துக்கள் ",
//   },

//   {
//     name: "gnana vel",
//     wish: "Jeevagan annan thanks for this chance wishing stalin annan",
//   },

//   { name: "gopal", wish: "Annan ku happy birthday" },

//   { name: "ilayaraja", wish: "Thala.. supoer thala, happy birthday to you" },

//   { name: "Jai", wish: "Stalin annan 100 years nalla irunga happy birthday" },

//   { name: "Karthik", wish: "Happy Birthday Makkalin Thalapathy" },

//   {
//     name: " புஷ்பா ",
//     wish: " ஸ்டாலின் அய்யாக்கு இனிய பிறந்தநாள் வாழ்த்துக்கள் ",
//   },

//   { name: "raja pandian", wish: "Happy Birthday Makkalin Thalapathy" },

//   { name: "ezhil", wish: "Congrats Thalapathy" },
// ];

// let randWish = wishes[Math.floor(Math.random() * wishes.length)];
// let randHTML = `<p class="wishmsg" style="display:none;"><b>${randWish.name}</b> - ${randWish.wish}</p>`;
// $(".chat").html(randHTML);
// $(".wishmsg").show("slow");

// setInterval(function () {
//   let randWish = wishes[Math.floor(Math.random() * wishes.length)];
//   let randHTML = `<p class="wishmsg" style="display:none;"><b>${randWish.name}</b> - ${randWish.wish}</p>`;
//   $(".chat").html(randHTML);
//   $(".wishmsg").show("slow");
// }, 6000);

// function setCounter() {
//   $.ajax({
//     url: "https://drjeevagan.com/api/addWish.php",
//     success: function (response) {
//       $("#wishCount").html(response);
//     },
//   });
// }

// $.ajax({
//   url: "https://drjeevagan.com//api/wishCount.php",
//   success: function (response) {
//     $("#wishCount").html(response);
//     setInterval(function () {
//       let random = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
//       if (random) {
//         setCounter();
//       }
//     }, 15000);
//   },
// });
