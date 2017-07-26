/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // Basic information input:
 var bio = {
   "name": "Yvonne LI",
   "role": "Designer",
   "contacts": {
     "mobile": "7777 7777",
     "email": "yvonneli1213@gmail.com",
     "github": "Yvonneli1213",
     "location": "Hong Kong"
   },
   "biopic": "images/biopic.jpg",
   "welcomeMessage": "Hi，nice to meet you!",
   "skills": [
     "AutoCAD",
     "Photoshop",
     "InDesign",
     "Long-time sleeping..."
    ]
 };

 var education = {
   "schools": [
     {"name": "HKPolyU",
     "degree" : "Bachelor",
     "dates": "2012-2016",
     "location": "Hong Kong",
     "major": "BSE"
   },
     {"name": "UCL",
     "degree" : "Master",
     "dates": "2017-2018",
     "location": "London",
     "major": "Light and Lighting"
   }],
   "onlineCourses": [
     {"title": "frontend-nanodegree",
     "dates": "2017-now",
     "school": "Udacity",
     "web" : "https://www.udacity.com/"
   }
  ]
};

 var work = {
   "jobs": [
     { "employer": "Superman Design Institute",
       "title": "Assisstant Designer",
       "location": "Beijing",
       "dates": "2014.6-2014.8",
       "description": "some description xxxxxx"
   },
   { "employer": "Lightlinks International Ltd",
     "title": "Assisstant Lighting Designer",
     "location": "Hong Kong",
     "dates": "2016-2017",
     "description": "another description xxxxxx"
    }
   ]
 };

 var projects = {
   "projects": [
     {
       "title": "Grand Lapa Hotel",
       "dates": "2016-2017",
       "description": "a hotel renovation project in Hong Kong",
       "images": [
         "images/197x148.gif",
         "images/197x148.gif"
       ]
     },
     {
       "title": "Moneeeey Casino",
       "dates": "2017-now",
       "description": "a Casino project in Macau",
       "images": [
         "images/197x148.gif",
         "images/197x148.gif"
       ]
     }
   ]
 };

// Display functions:
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

bio.display = function () {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $(".flex-box").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $(".flex-box").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $(".flex-box").append(formattedGithub);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $(".flex-box").append(formattedLocation);

  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPic);

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);

  $("#header").append(HTMLskillsStart);

  for (var i=0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
  }
};


 projects.display = function () {
   $("#projects").append(HTMLprojectStart);

   for (var i=0; i < projects.projects.length; i++) {
     var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
     $(".project-entry:last").append(formattedTitle);

     var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
     $(".project-entry:last").append(formattedDates);

     var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
     $(".project-entry:last").append(formattedDescription);

       for (var n=0; n < projects.projects[i].images.length; n++){
         var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[n]);
         $(".project-entry:last").append(formattedImage);
       }

   }
 };

 education.schools.display = function () {
   $("#education").append(HTMLschoolStart);

   for (var i=0; i < education.schools.length; i++) {
     var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
     $(".education-entry").append(formattedSchoolName);

     var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
     $(".education-entry").append(formattedDegree);

     var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
     $(".education-entry").append(formattedDates);

     var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
     $(".education-entry").append(formattedLocation);

     var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
     $(".education-entry").append(formattedMajor);
   }
 };

 education.onlineCourses.display = function () {
   $(".education-entry").append(HTMLonlineClasses);

   for (var i=0; i < education.onlineCourses.length; i++) {
     var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
     $(".education-entry").append(formattedTitle);

     var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
     $(".education-entry").append(formattedSchool);

     var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
     $(".education-entry").append(formattedDates);

     var formattedWebName = HTMLonlineURL.replace("%data%", education.onlineCourses[i].web);
     var formattedWeb = formattedWebName.replace("#", education.onlineCourses[i].web);
     $(".education-entry").append(formattedWeb);
   }
 };

work.display = function () {
  for (var i=0; i < work.jobs.length; i++){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

bio.display();
work.display();
projects.display();
education.schools.display();
education.onlineCourses.display();

// Map section:
$("#mapDiv").append(googleMap);
