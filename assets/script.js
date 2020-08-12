$("#currentDay").text(moment().format("MMM Do YYYY")); 
$("#date").text(moment().format('LT'));

// $("#hour").text(moment().format('HH'))

// var dayDescription = document.querySelectorAll("#textarea");
// var saveBtn = document.querySelectorAll("#saveBtn");
var dayDescription = $(".textarea");
var saveBtn = $(".saveBtn")
var currentTime = moment().hour(); // Number


console.log(currentTime)
// var saveDescription = localStorage.getItem("saveText");

saveBtn.on("click", function(){
   var saveValue = $(this).siblings(".description").val()
    var saveName = $(this).siblings(".description").attr("id")
    console.log(saveName)
    localStorage.setItem(saveName, saveValue);
})

$("#des-9").val(localStorage.getItem("des-9")) 
$("#des-10").val(localStorage.getItem("des-10"))
$("#des-11").val(localStorage.getItem("des-11"))
$("#des-12").val(localStorage.getItem("des-12"))
$("#des-13").val(localStorage.getItem("des-13"))
$("#des-14").val(localStorage.getItem("des-14"))
$("#des-15").val(localStorage.getItem("des-15"))
$("#des-16").val(localStorage.getItem("des-16"))
$("#des-17").val(localStorage.getItem("des-17"))
// repeat for rest of the blocks


function timeCheck(){
    $(".description").each(function(){
        var timeBlock = $(this).attr("id").split("-")[1]
        if(timeBlock < currentTime){
            $(".description").addClass("past");
        } else if (timeBlock === currentTime){
            $(".description").removeClass = "past";
            $(".description").addClass = "current"
        }else {
            $(".description").removeClass = "current";
            $(".description").addClass = "future"
        }
        //compare timeBlock to currentTime
        //If timeBlock < currentTime -> past (addClass)
        //If else timeBlock = currentTime -> present (addClass + removelass)
        //else -> future (addClass + removeClass)

    })
}
    //update color every one minute by using setinterval to call the timeCheck function
timeCheck()
var interval = setInterval(timeCheck, 60 * 1000)
