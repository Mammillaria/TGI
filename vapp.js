$(document).keypress(function (event) {
  if (event.which == "13") {
    event.preventDefault();
  }
});

$(document).keydown(function (objEvent) {
  if (objEvent.keyCode == 9) {
    objEvent.preventDefault();
  }
});

function enGroupButtons() {
  $(".group .vform_button_next2").removeClass("disabled");
  $(".group .vform_button_next3").removeClass("disabled");
  $(".group .vform_button_next4").removeClass("disabled");
  $(".group .vform_button_next5").removeClass("disabled");
  $(".group .vform_button_next6").removeClass("disabled");
}

function disGroupButtons() {
  $(".group .vform_button_next2").addClass("disabled");
  $(".group .vform_button_next3").addClass("disabled");
  $(".group .vform_button_next4").addClass("disabled");
  $(".group .vform_button_next5").addClass("disabled");
  $(".group .vform_button_next6").addClass("disabled");
}
function enIndButtons() {
  $(".ind .vform_button_next2").removeClass("disabled");
  $(".ind .vform_button_next3").removeClass("disabled");
  $(".ind .vform_button_next4").removeClass("disabled");
  $(".ind .vform_button_next5").removeClass("disabled");
  $(".ind .vform_button_next6").removeClass("disabled");
}

function disIndButtons() {
  $(".ind .vform_button_next2").addClass("disabled");
  $(".ind .vform_button_next3").addClass("disabled");
  $(".ind .vform_button_next4").addClass("disabled");
  $(".ind .vform_button_next5").addClass("disabled");
  $(".ind .vform_button_next6").addClass("disabled");
}
//
$(".vform_button_next").on("click", function () {
  $(".form_next").click();
});

//get total number of slides/steps in the form
var slideNumber = $(".volunteer-form_slide").length - 1;
$(".total-number").text(slideNumber);

function sliderAnimation() {
  var currentSlide = $(".w-slider-dot.w-active").index();
  if (currentSlide == 0) {
    $(".form_prev").addClass("disabled-prev");
  } else {
    $(".form_prev").removeClass("disabled-prev");
  }
  $(".first").text(currentSlide);
  var percent = (currentSlide / slideNumber) * 100;
  var percentRound = percent.toFixed(0);
  $(".form_percent").text(percentRound);
  $(".vform_progress-fill").css("width", percentRound + "%");
}

$(".form_prev,.form_next").click(function () {
  setTimeout(() => {
    sliderAnimation();
  }, 200);
});

function validateField(item) {
  if (item.val().length >= 1) {
    item.removeClass("invalid");
    item.addClass("valid");
  } else {
    item.removeClass("valid");
    item.addClass("invalid");
  }
}
//validate forminputs on keydown
$(".form_input").keydown(function () {
  validateField($(this));
});

$(".form_input").focusout(function () {
  validateField($(this));
});

$(".form_input.other").focusout(function () {
  validateField($(this));
});

//ALL CHECKBOXES AND RADIO
$("input[type=checkbox]").click(function () {
  $(this).toggleClass("checked");
});
//this below should be removed !!!
//$("input[type=radio]").click(function () {
//  $(this).toggleClass("checked");
//});

//How did your group hear about TGI
var gRef = $("#gref"); //= e.currentTarget.value;
gRef.on("change", (e) => {
  if (gRef.val() === "") {
    $(".vform_slide-container.slide6.group .form_error").removeClass("hidden");
    $(".vform_slide-container.slide6.group .other").addClass("hidden");
  } else if (gRef.val() === "other") {
    $(".vform_slide-container.slide6.group .form_error").addClass("hidden");
    $(".vform_slide-container.slide6.group .other").removeClass("hidden");
  } else {
    //correct selection was made
    $(".vform_slide-container.slide6.group .form_error").addClass("hidden");
    $(".vform_slide-container.slide6.group .other").addClass("hidden");
  }
});
//IND how did you hear about TGI
var iRef = $("#iref"); //= e.currentTarget.value;
iRef.on("change", (e) => {
  if (iRef.val() === "") {
    $(".vform_slide-container.slide6.ind .form_error").removeClass("hidden");
    $(".vform_slide-container.slide6.ind .other").addClass("hidden");
  } else if (iRef.val() === "other") {
    $(".vform_slide-container.slide6.ind .form_error").addClass("hidden");
    $(".vform_slide-container.slide6.ind .other").removeClass("hidden");
  } else {
    //correct selection was made
    $(".vform_slide-container.slide6.ind .form_error").addClass("hidden");
    $(".vform_slide-container.slide6.ind .other").addClass("hidden");
  }
});

/** group slide 2 minor radio buttons */
//get selected value of is anyone in the group under 18? "
const $gunder18 = $("input[type=radio][name=gunder18]");
$gunder18.on("change", (e) => {
  const gunder18 = e.currentTarget.value;
  //console.log("gunder18:" + gunder18);
  if (gunder18 === "yes") {
    $(".vform_slide-container.group.slide2 .minor-ages").removeClass("hidden");
  } else {
    $(".vform_slide-container.group.slide2 .minor-ages").addClass("hidden");
  }
});

//INDIVIDUAL SLIDE 2 ARE YOU OVER 18 RADION BUTTONS? +
var parentInfoFull = false;
var iAgeRadios = false;
const $indAgeRadios = $("input[type=radio][name=iover18]");
$indAgeRadios.on("change", (e) => {
  const indAge = e.currentTarget.value;
  //  console.log("Selected age verification response:" + indAge);
  if (indAge === "no") {
    iAgeRadios = true;
    $(".vform_slide-container.ind.slide7 .minor").removeClass("hidden");
    parentInfoFull = false;
    // console.log("parent info is required and not provided");
  } else {
    iAgeRadios = true;
    parentInfoFull = true;
    //  console.log("parent info is not required(no need to provide)");
    $(".vform_slide-container.ind.slide7 .minor").addClass("hidden");
    $(".vform_slide-container.ind.slide7 .minor #parent-name").removeClass(
      "hidden");
    $(".vform_slide-container.ind.slide7 .minor #parent-phone").removeClass(
      "hidden");
    $(".vform_slide-container.ind.slide7 .minor #parent-email").removeClass(
      "hidden");
  }
});

//INDIVIDUAL SLIDE 2 COMMUNITY SERVICE BUTTONS
var iCommServ = false;
var iCommServRequired = false;
var icsletter = false;

const $indCommServ = $("input[type=radio][name=icommservreq]");
$indCommServ.on("change", (e) => {
  const indCommServSelection = e.currentTarget.value;
  //console.log("Selected application type:" + indCommServSelection);
  if (
    indCommServSelection === "yes-student" ||
    indCommServSelection === "yes-court"
  ) {
    iCommServ = true;
    iCommServRequired = true;
    $(".vform_slide-container.ind.slide2 .comm-service").removeClass("hidden");
  } else if (indCommServSelection === "no"){
    iCommServ = true;
    iCommServRequired = false;
    $(".vform_slide-container.ind.slide2 .comm-service").addClass("hidden");
  }
});

const $iCSLetter = $("input[type=radio][name=icsletter]");
$iCSLetter.on("change", (e) => {
  const iCSLetterSelection = e.currentTarget.value;
  // console.log("Will you need a letter to certify completion of hours:" +  iCSLetterSelection);
  if (iCSLetterSelection === "yes" || iCSLetterSelection === "no") {
    icsletter = true;
  }
});
/** ------------- **/

//INDIVIDUAL SLIDE 2 ARE YOU EMPLOYED RADIO BUTTONS?
var iEmployed = false;
var iEmpRequired = false;
const $indEmployed = $("input[type=radio][name=iemployed]");
$indEmployed.on("change", (e) => {
  const indEmployed = e.currentTarget.value;
  //  console.log("Employed answer" + indEmployed);
  if (indEmployed === "yes") {
    iEmployed = true;
    iEmpRequired = true;
    $(".vform_slide-container.ind.slide2 .employment").removeClass("hidden");
  } else if (indEmployed === "no") {
    iEmployed = true;
    iEmpRequired = false;
    $(".vform_slide-container.ind.slide2 .employment").addClass("hidden");
  }
});

/*------------*/
//INDIVIDUAL SLIDE 3 VOLUNTEER INTERESTS other input field
const $iVolunteerOther = $(".ivolunteer-interest #iother");
$iVolunteerOther.on("change", (e) => {
  //const iOther = e.currentTarget.value;
  // if (iOther === "yes") {
  if ($iVolunteerOther.hasClass("checked")) {
    $(".vform_slide-container.ind.slide3 .other").removeClass("hidden");
  } else {
    $(".vform_slide-container.ind.slide3 .other").addClass("hidden");
  }
});

/******* BELOW HAS NOT BEEN CHECKED **********/

//Group slide 7 Authorization
const $gauth = $("input[type=checkbox][name=gauth]");
$gauth.on("change", (e) => {
  if ($gauth.hasClass("checked")) {
    if ($(".group.slide7 #gsign").val().length != 0) {
      if ($(".group.slide7 #gsigndate").val().length != 0) {
        $(".group.slide7 .vform_submit").removeClass("disabled");
      }
    }
  } else {
    $(".group.slide7 .vform_submit").addClass("disabled");
  }
});

const $gsign = $("input[name=gsign]");
$gsign.on("change", (e) => {
  if ($gauth.hasClass("checked")) {
    if ($(".group.slide7 #gsign").val().length != 0) {
      if ($(".group.slide7 #gsigndate").val().length != 0) {
        $(".group.slide7 .vform_submit").removeClass("disabled");
      }
    } else {
      $(".group.slide7 .vform_submit").addClass("disabled");
    }
  }
});

const $gsigndate = $("input[name=gsigndate]");
$gsigndate.on("change", (e) => {
  if ($gauth.hasClass("checked")) {
    if ($(".group.slide7 #gsign").val().length != 0) {
      if ($(".group.slide7 #gsigndate").val().length != 0) {
        $(".group.slide7 .vform_submit").removeClass("disabled");
      } else {
        $(".group.slide7 .vform_submit").addClass("disabled");
      }
    }
  }
});

//IND slide 7 Authorization

const $iauth = $("input[type=checkbox][name=iauth]");
$iauth.on("change", (e) => {
  if ($iauth.hasClass("checked")) {
    if ($(".ind.slide7 #isign").val().length != 0) {
      if ($(".ind.slide7 #isigndate").val().length != 0) {
        if (!parentInfoFull) {
          //minor
          if (
            $(".ind.slide7 .minor:not(.hidden) #parent-name").hasClass(
              "valid",
            ) &&
            $(".ind.slide7 .minor:not(.hidden) #parent-phone").hasClass(
              "valid",
            ) &&
            $(".ind.slide7 .minor:not(.hidden) #parent-email").hasClass("valid")
          ) {
            //all parent fields are filled out
            //enable submit
            $(".ind.slide7 .vform_submit").removeClass("disabled");
            //hide error
            $(".vform_slide-container.ind.slide7 .form_error").addClass(
              "hidden",
            );
          } else {
            //one or more parent fields are not filled out
            $(".ind.slide7 .vform_submit").addClass("disabled");
            $(".vform_slide-container.ind.slide7 .form_error").removeClass(
              "hidden",
            );
          }
        } else {
          //not minor
          //enable submit
          $(".ind.slide7 .vform_submit").removeClass("disabled");
          //hide error
          $(".vform_slide-container.ind.slide7 .form_error").addClass("hidden");
        }
      }
    }
  } else {
    //iauth not checked
    $(".ind.slide7 .vform_submit").addClass("disabled");
    $(".vform_slide-container.ind.slide7 .form_error").removeClass("hidden");
  }
});

const $isign = $("input[name=isign]");
$isign.on("change", (e) => {
  if ($iauth.hasClass("checked")) {
    if ($(".ind.slide7 #isign").val().length != 0) {
      if ($(".ind.slide7 #isigndate").val().length != 0) {
        if (!parentInfoFull) {
          //minor
          if (
            $(".ind.slide7 .minor:not(.hidden) #parent-name").hasClass(
              "valid",
            ) &&
            $(".ind.slide7 .minor:not(.hidden) #parent-phone").hasClass(
              "valid",
            ) &&
            $(".ind.slide7 .minor:not(.hidden) #parent-email").hasClass("valid")
          ) {
            //all parent fields are filled out
            //enable submit
            $(".ind.slide7 .vform_submit").removeClass("disabled");
            //hide error
            $(".vform_slide-container.ind.slide7 .form_error").addClass(
              "hidden",
            );
          } else {
            //one or more parent fields are not filled out
            $(".ind.slide7 .vform_submit").addClass("disabled");
            $(".vform_slide-container.ind.slide7 .form_error").removeClass(
              "hidden",
            );
          }
        } else {
          //not minor
          //enable submit
          $(".ind.slide7 .vform_submit").removeClass("disabled");
          //hide error
          $(".vform_slide-container.ind.slide7 .form_error").addClass("hidden");
        }
      }
    } else {
      //isign is empty
      $(".ind.slide7 .vform_submit").addClass("disabled");
      $(".vform_slide-container.ind.slide7 .form_error").removeClass("hidden");
    }
  }
});

const $isigndate = $("input[name=isigndate]");
$isigndate.on("change", (e) => {
  if ($iauth.hasClass("checked")) {
    if ($(".ind.slide7 #isign").val().length != 0) {
      if ($(".ind.slide7 #isigndate").val().length != 0) {
        if (!parentInfoFull) {
          //minor
          if (
            $(".ind.slide7 .minor:not(.hidden) #parent-name").hasClass(
              "valid",
            ) &&
            $(".ind.slide7 .minor:not(.hidden) #parent-phone").hasClass(
              "valid",
            ) &&
            $(".ind.slide7 .minor:not(.hidden) #parent-email").hasClass("valid")
          ) {
            //all parent fields are filled out
            //enable submit
            $(".ind.slide7 .vform_submit").removeClass("disabled");
            //hide error
            $(".vform_slide-container.ind.slide7 .form_error").addClass(
              "hidden",
            );
          } else {
            //one or more parent fields are not filled out
            $(".ind.slide7 .vform_submit").addClass("disabled");
            $(".vform_slide-container.ind.slide7 .form_error").removeClass(
              "hidden",
            );
          }
        } else {
          //not minor
          //enable submit
          $(".ind.slide7 .vform_submit").removeClass("disabled");
          //hide error
          $(".vform_slide-container.ind.slide7 .form_error").addClass("hidden");
        }
      }
    } else {
      //isign is empty
      $(".ind.slide7 .vform_submit").addClass("disabled");
      $(".vform_slide-container.ind.slide7 .form_error").removeClass("hidden");
    }
  }
});
//end of IND slide 7 authorization
/******ABOVE HAS NOT BEEN CHECKED  ******/

$(function () {
  //get selected value of application type
  const $appTypeRadios = $("input[type=radio][name=app-type]");
  $appTypeRadios.on("change", (e) => {
    const appType = e.currentTarget.value;
    // console.log("Selected application type:" + appType);

    if (appType === "group") {
      //GROUP APPLICATION SELECTED (SLIDE 1) +
      $(".vform_button_next").removeClass("disabled");
      enGroupButtons();
      disIndButtons();
      $("input[id^='i']:not([type=radio])").val(""); //clears out entered data in all group text fields except radio buttons
      // $("input[id^='g']").empty();
      $("textarea[id^='i']").val(""); //clears out entered data in all textareas in group slides
      $(
        ".vform_slide-container.ind, .volunteer-form_slide.ind, .checkbox-label.ind",
      ).addClass("hidden");
      $(".vform_slide-container.group").removeClass("hidden");

      //GROUP SLIDE 2 +
      $(".group.slide2 .vform_button_next2").click(function () {
        //checking slide's inputs that are not hidden for emptiness
        var empty = $(this)
          .parent()
          //.find("input")
          .find(":not(.hidden)>input")
          .filter(function () {
            return this.value === "";
          });

        if (empty.length) {
          //At least one input is empty
          //   console.log("slide2 has empty fields");
          $(".vform_slide-container.group.slide2 .form_error").removeClass(
            "hidden",
          );
        } else {
          //  console.log("slide2 is filled out, moving to another step");
          $(".vform_slide-container.group.slide2 .form_error").addClass(
            "hidden",
          );

          // $(".slide2 .form_error").addClass("hidden");
          $(".form_next").click();
        }
      });
      //end of slide 2 - group app

      //GROUP SLIDE 3 +
      $(".group.slide3 .vform_button_next3").click(function () {
        console.log("3rd slide button was clicked");
        var empty = $(this)
          .parent()
          .find("textarea")
          .filter(function () {
            return this.value === "";
          });

        if (empty.length) {
          //At least one input is empty
          console.log("slide3 has empty fields");
          $(".vform_slide-container.group.slide3 .form_error").removeClass(
            "hidden",
          );
        } else {
          console.log("slide3 is filled out, moving to another step");
          $(".vform_slide-container.group.slide3 .form_error").addClass(
            "hidden",
          );
          // $(".slide2 .form_error").addClass("hidden");

          $(".form_next").click();
        }
      });
      //end of slide 3 - group app
      //uncheck checked checkboxes for TGI locations on slide 4

      //GROUP SLIDE 4 +
      $(".group.slide4 .vform_button_next4").click(function () {
        console.log("4th slide button was clicked");
        var isFilled = false;
        var optionsSelected = [];

        $(".group.slide4 .tgi-locations")
          .find("input")
          .each(function () {
            // if ($(this).prop("checked") == true) {
            if ($(this).hasClass("checked")) {
              isFilled = true;
              //
            }
          });
        if (isFilled) {
          //  console.log(" TGI location selected" + optionsSelected);
          $(".vform_slide-container.group.slide4 .form_error").addClass(
            "hidden",
          );
          $(".form_next").click();
        } else {
          $(".vform_slide-container.group.slide4 .form_error").removeClass(
            "hidden",
          );
          //   console.log(" TGI location was  not selectedd");
        }
      });

      //  });

      //Hide error message if checkbox is checked

      //
      //end of slide 4 - group app

      //GROUP SLIDE 5 +
      $(".group.slide5 .vform_button_next5").click(function () {
        var empty = $(this)
          .parent()
          .find("textarea")
          .filter(function () {
            return this.value === "";
          });

        if (empty.length) {
          //At least one input is empty
          //   console.log("slide5 has empty fields");
          $(".vform_slide-container.group.slide5 .form_error").removeClass(
            "hidden",
          );
        } else {
          //  console.log("slide2 is filled out, moving to another step");
          $(".vform_slide-container.group.slide5 .form_error").addClass(
            "hidden",
          );
          // $(".slide2 .form_error").addClass("hidden");
          $(".form_next").click();
        }
      });
      //end of slide 5 - group app

      //GROUP SLIDE 6 +
      $(".group.slide6 .vform_button_next6").click(function () {
        var selection = $(this).parent().find("select").val();
        if (selection === "") {
          //nothing selected
          $(".vform_slide-container.slide6.group .form_error").removeClass(
            "hidden",
          );
        } else if (selection === "other") {
          //   console.log("Other option was selected ");

          //$(".vform_slide-container.slide6.group .other").removeClass("hidden");
          //var empty = $(this).parent().find("select").filter(function () {
          // return this.value === ""; });

          if ($(".group #other-explain").hasClass("valid")) {
            //At least one input is empty
            //   console.log(" group Other explain   field was filled out");
            //$(".vform_slide-container.group.slide6 .form_error").addClass("hidden");
            $(".form_next").click();
          } else {
            //if ($(".group #other-explain").hasClass("invalid")) {
            //At least one input is empty
            //    console.log(" Additional group Other field is empty");
            $(".vform_slide-container.slide6.group .form_error").removeClass(
              "hidden",
            );
          }
        } else {
          //correct selection was made
          $(".form_next").click();
          //  console.log("moving to the last slide ");
          $(".vform_slide-container.slide6.group .form_error").addClass(
            "hidden",
          );
        }
      }); //nd of next6
      //end of slide6-group

      //slide7 submit-group - needs work
      $("group.slide7 .vform_submit").click(function (event) {});

      //end of slide 7 -group

      //end of group app
    } else if (appType === "individual") {
      //INDIVIDUAL APPLICATION SELECTED (SLIDE 1) +
      $(".vform_button_next").removeClass("disabled");
      enIndButtons(); //enables all ind buttons
      disGroupButtons();
      $("input[id^='g']:not([type=radio])").val(""); //clears out entered data in all group text fields except radio buttons
      // $("input[id^='g']").empty();
      $("textarea[id^='g']").val(""); //clears out entered data in all textareas in group slides

      $(".vform_slide-container.group").addClass("hidden");
      $(".vform_slide-container.ind").removeClass("hidden");
      $(".volunteer-form_slide.ind").removeClass("hidden");
      $(".checkbox-label.ind").removeClass("hidden"); //?check if ok to delete

      //remove all inputs with ids starting with g
      //   $("input[id^='g']").remove(); //testing

      //*** INDIVIDUAL slide2 - slide validation
      $(".ind.slide2 .vform_button_next2").click(function () {
        var commServFilled = false;
        var empFilled = false;
        var persFilled = false;
        var refFilled = false;

        if (iCommServRequired) {
          console.log("Comm service block" + "hours value=" +icshours + "due date=" + icsduedate + "Any special reqs?:" + icsreq + "certificate needed?:"+icsletter);
          if ($(".ind.slide2 #icshours").val() === "" ||
            $(".ind.slide2 #icsduedate").val() === "" ||
            $(".ind.slide2 #icsreq").val() === "" ||
            !icsletter) {
            commServFilled = false;
            $(".vform_slide-container.ind.slide2 .form_error").removeClass(
              "hidden",
            );
          } else {
            commServFilled = true;
            $(".vform_slide-container.ind.slide2 .form_error").addClass(
              "hidden",
            );
          }
        } else {
          commServFilled = true; // ?? if comm service not requred, still set to truth
        }

        /**personal info fields */
        if (
          $(".ind.slide2 #ifname").val() === "" ||
          $(".ind.slide2 #ilname").val() === "" ||
          $(".ind.slide2 #idob").val() === "" ||
          $(".ind.slide2 #istreet").val() === "" ||
          $(".ind.slide2 #icity").val() === "" ||
          $(".ind.slide2 #istate").val() === "" ||
          $(".ind.slide2 #izip").val() === "" ||
          $(".ind.slide2 #iphone").val() === "" ||
          $(".ind.slide2 #iemail").val() === ""
        ) {
          persFilled = false;
          $(".vform_slide-container.ind.slide2 .form_error").removeClass(
            "hidden",
          );
        } else {
          persFilled = true;
          $(".vform_slide-container.ind.slide2 .form_error").addClass("hidden");
        }

        /**personal references fields */
        if (
          $(".ind.slide2 #r1name").val() === "" ||
          $(".ind.slide2 #r1relationship").val() === "" ||
          $(".ind.slide2 #r1phone").val() === "" ||
          $(".ind.slide2 #r1email").val() === "" ||
          $(".ind.slide2 #r2name").val() === "" ||
          $(".ind.slide2 #r2relationship").val() === "" ||
          $(".ind.slide2 #r2phone").val() === "" ||
          $(".ind.slide2 #r2email").val() === ""
        ) {
          refFilled = false;
          $(".vform_slide-container.ind.slide2 .form_error").removeClass(
            "hidden",
          );
        } else {
          refFilled = true;
          $(".vform_slide-container.ind.slide2 .form_error").addClass("hidden");
        }

        if (iEmployed) {
          console.log("IND2 Employed was checked!" + iEmployed);
        } else {
          console.log("IND2 Employed was not checked!" + iEmployed);
        }

        if (iEmpRequired) {
          if (
            $(".ind.slide2 #iemployer").val() === "" ||
            $(".ind.slide3 #iposition").val() === "" ||
            $(".ind.slide2 #iduties").val() === "" ||
            $(".ind.slide2 #iemp-dates").val() === "" ||
            $(".ind.slide2 #empphone").val() === ""
          ) {
            empFilled = false;
            $(".vform_slide-container.ind.slide2 .form_error").removeClass(
              "hidden",
            );
          } else {
            empFilled = true;
            $(".vform_slide-container.ind.slide2 .form_error").addClass(
              "hidden",
            );
          }
        } else {
          empFilled = true; // ?? if comm service not requred, still set to truth
        }

        if (
          iAgeRadios &&
          iCommServ &&
          commServFilled &&
          persFilled &&
          iEmployed &&
          empFilled &&
          refFilled
        ) {
          console.log("IND2  is complete ");
          $(".vform_slide-container.ind.slide2 .form_error").addClass("hidden");
          $(".form_next").click();
        } else {
          console.log("slide2 is has empty input fields");
          $(".vform_slide-container.ind.slide2 .form_error").removeClass(
            "hidden",
          );
        }
      });
      //*** end slide 2 ind

      // **** INDIVIDUAL SLIDE 3 BEGINS **** //
      $(".ind.slide3 .vform_button_next3").click(function () {
        var chboxesChecked = false;
        var otherFilled = false;
        var inputsFilled = false;

        var optionsSelected = [];

        $(".ind.slide3 .ivolunteer-interest")
          .find("input[type=checkbox]")
          .each(function () {
            if ($(this).hasClass("checked")) {
              chboxesChecked = true;
              optionsSelected.push($(this).attr("data-name"));
            }
          });
        //    console.log(           " ind slide 3 checkboxed were checked? " + chboxesChecked          );
        if (chboxesChecked) {
          console.log(" IND VOLUNTEER INTEREST SELECTED " + optionsSelected);
          if (optionsSelected.indexOf("iother") > -1) {
            //other was checked
            if ($(".ind.slide3 .other #ivolinterest-other").val() === "") {
              otherFilled = false;
              //  console.log(" additional info not filled");
              $(".vform_slide-container.ind.slide3 .form_error").removeClass(
                "hidden",
              );
            } else {
              otherFilled = true;
              console.log(" additional info was provided");
              $(".vform_slide-container.ind.slide3 .form_error").addClass(
                "hidden",
              );

              //  $(".form_next").click();
            }
          } else {
            //'other' option was not selected
            console.log(" other was not checked");
            $(".vform_slide-container.ind.slide3 .form_error").addClass(
              "hidden",
            );
            // $(".form_next").click();
            otherFilled = true;
          }
        } else {
          //none of checkboxes were chcked - show error
          chboxesChecked = false;
          otherFilled = false;
          $(".vform_slide-container.ind.slide3 .form_error").removeClass(
            "hidden",
          );
        }

        // IND Slide3 - check text input fields
        if (
          $(".ind.slide3 #iwhyserve").val() === "" ||
          $(".ind.slide3 #iskills").val() === ""
        ) {
          inputsFilled = false;
          $(".vform_slide-container.ind.slide3 .form_error").removeClass(
            "hidden",
          );
        } else {
          inputsFilled = true;
          $(".vform_slide-container.ind.slide3 .form_error").addClass("hidden");
        }

        //  if (chboxesChecked && inputsFilled && otherFilled) {
        if (chboxesChecked && otherFilled && inputsFilled) {
          $(".form_next").click();
          $(".vform_slide-container.ind.slide3 .form_error").addClass("hidden");
        } else {
          $(".vform_slide-container.ind.slide3 .form_error").removeClass(
            "hidden",
          );
        }
      });
      // **** INDIVIDUAL SLIDE 3 ENDS **** //

      //ind SLIDE 4 +
      $(".ind.slide4 .vform_button_next4").click(function () {
        //  console.log("4th slide button was clicked");
        var isFilled = false;
        var optionsSelected = [];

        $(".ind.slide4 .tgi-locations")
          .find("input")
          .each(function () {
            // if ($(this).prop("checked") == true) {
            if ($(this).hasClass("checked")) {
              isFilled = true;
              //
            }
          });
        if (isFilled) {
          //  console.log(" TGI location selectedd" + optionsSelected);
          $(".vform_slide-container.ind.slide4 .form_error").addClass("hidden");
          $(".form_next").click();
        } else {
          $(".vform_slide-container.ind.slide4 .form_error").removeClass(
            "hidden",
          );
          console.log("IND TGI location was  not selectedd");
        }
      });

      //  });

      //Hide error message if checkbox is checked

      //
      //end of slide 4 - ind
      //IND SLIDE 5
      $(".ind.slide5 .vform_button_next5").click(function () {
        var empty = $(this)
          .parent()
          .find("input")
          .filter(function () {
            return this.value === "";
          });

        if (empty.length) {
          //At least one input is empty
          console.log("slide5 has empty fields");
          $(".vform_slide-container.ind.slide5 .form_error").removeClass(
            "hidden",
          );
        } else {
          //  console.log("slide2 is filled out, moving to another step");
          $(".vform_slide-container.ind.slide5 .form_error").addClass("hidden");
          // $(".slide2 .form_error").addClass("hidden");
          $(".form_next").click();
        }
      });
      //end of slide 5 - IND app

      //IND SLIDE 6 +
      $(".ind.slide6 .vform_button_next6").click(function () {
        var selection = $(this).parent().find("select").val();
        if (selection === "") {
          //nothing selected
          $(".vform_slide-container.slide6.ind .form_error").removeClass(
            "hidden",
          );
        } else if (selection === "other") {
          console.log("Other option was selected ");

          //$(".vform_slide-container.slide6.group .other").removeClass("hidden");
          //var empty = $(this).parent().find("select").filter(function () {
          // return this.value === ""; });

          if ($(".ind #other-explain-2").hasClass("valid")) {
            //At least one input is empty
            console.log(" group Other explain   field was filled out");
            //$(".vform_slide-container.group.slide6 .form_error").addClass("hidden");
            $(".form_next").click();
          } else {
            //if ($(".group #other-explain").hasClass("invalid")) {
            //At least one input is empty
            console.log(" Additional group Other field is empty");
            $(".vform_slide-container.slide6.ind .form_error").removeClass(
              "hidden",
            );
          }
        } else {
          //correct selection was made
          $(".form_next").click();
          //  console.log("moving to the last slide ");
          $(".vform_slide-container.slide6.ind .form_error").addClass("hidden");
        }
      }); //nd of next6
      //end of slide6-ind

      //
    } else {
      //not group
      $(".vform_button_next").addClass("disabled");
    }
  });
});
