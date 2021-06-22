/*Place your JS code here*/

function createnav(thisusertype, thisuserid) {
    if (typeof new_nav_learner !== 'undefined') {
      // the variable is defined
      var nav_learner = new_nav_learner;
    } else {
      // variable is undefined
      var nav_learner = {
        name: 'learner',
        items: [
  //      {
  //        name: 'Home',
  //        link: '/home',
  //        glyph: 'fa fa-home'
  //      },
          {
            name: 'My Courses',
            link: '/start',
            glyph: 'fa fa-book'
          },
          {
            name: 'Certificates',
            link: '/users/edit/' + thisuserid + '/tab/certificates',
            glyph: 'fa fa-certificate'
          },
          {
            name: 'Profile',
            link: '/users/edit/' + thisuserid + '/tab/properties',
            glyph: 'fa fa-address-book'
          },
          {
            name: 'Support',
            link: '#support',
            glyph: 'fa fa-life-ring'
          }
        ]
      }
    }
  
    var nav_admin = {
      name: 'admin',
      items: [
        {
          name: 'Home',
          link: '/',
          glyph: 'fa fa-home'
        },
        {
          name: 'Manage Users',
          link: '#',
          glyph: 'fa fa-user',
          dropdown: 'yes',
          subitems: [
            {
              name: 'Users',
              link: '/users',
              glyph: 'fa fa-user',
            },
            {
              name: 'Groups',
              link: '/groups',
              glyph: 'fa fa-users',
            },
  /*
            {
              name: 'Audiences',
              link: '/audiences',
              glyph: 'fa fa-magic',
            },
            {
              name: 'Jobs',
              link: '/jobs',
              glyph: 'fa fa-briefcase',
            },
  */
            {
              name: 'Branches',
              link: '/branches',
              glyph: 'fa fa-sitemap',
            }
          ]
        },
        {
          name: 'Manage Courses',
          link: '#',
          glyph: 'fa fa-book',
          dropdown: 'yes',
          subitems: [
            {
              name: 'Courses',
              link: '/courses',
              glyph: 'fa fa-book',
            },
            {
              name: 'Learning Paths',
              link: '/curriculums',
              glyph: 'fa fa-arrows',
            },
            {
              name: 'Categories',
              link: '/categories',
              glyph: 'fa fa-tags',
            },
            {
              name: 'Certificates',
              link: '/certificates',
              glyph: 'fa fa-certificate',
            }
          ]
        },
        {
          name: 'Assign Courses',
          link: '/InTheKnow',
          glyph: 'fa fa-user-circle-o'
        },
        {
          name: 'View Reports',
          link: '/reports',
          glyph: 'fa fa-bar-chart'
        },
        {
          name: 'Admin Actions',
          link: '#',
          glyph: 'fa fa-lock',
          dropdown: 'yes',
          subitems: [
            {
              name: 'Branch Settings',
              link: '/system-config',
              glyph: 'fa fa-wrench',
            },
            {
              name: 'Mass Import',
              link: '/maintenance',
              glyph: 'fa fa-cloud-download',
            },
            {
              name: 'View Archive',
              link: '/archive',
              glyph: 'fa fa-archive',
            }
          ]
        }
      ]
    }
  
    var nav_branchadmin = {
      name: 'branchadmin',
      items: [
        {
          name: 'Home',
          link: '/',
          glyph: 'fa fa-home'
        },
        {
          name: 'Manage Users',
          link: '#',
          glyph: 'fa fa-user',
          dropdown: 'yes',
          subitems: [
            {
              name: 'Users',
              link: '/users',
              glyph: 'fa fa-user',
            },
            {
              name: 'Groups',
              link: '/groups',
              glyph: 'fa fa-users',
            },
            {
              name: 'Branches',
              link: '/branches',
              glyph: 'fa fa-sitemap',
            }
          ]
        },
        {
          name: 'Manage Courses',
          link: '#',
          glyph: 'fa fa-book',
          dropdown: 'yes',
          subitems: [
            {
              name: 'Courses',
              link: '/courses',
              glyph: 'fa fa-book',
            },
            {
              name: 'Learning Paths',
              link: '/curriculums',
              glyph: 'fa fa-arrows',
            }
          ]
        },
        {
          name: 'Assign Courses',
          link: '/InTheKnow',
          glyph: 'fa fa-user-circle-o'
        },
        {
          name: 'View Reports',
          link: '/reports',
          glyph: 'fa fa-bar-chart'
        },
        {
          name: 'Admin Actions',
          link: '#',
          glyph: 'fa fa-lock',
          dropdown: 'yes',
          subitems: [
            {
              name: 'Mass Import',
              link: '/maintenance',
              glyph: 'fa fa-cloud-download',
            },
            {
              name: 'View Archive',
              link: '/archive',
              glyph: 'fa fa-archive',
            }
          ]
        }
      ]
    }
  
    var nav_trainingmanager = {
      name: 'training-manager',
      items: [
        {
          name: 'Home',
          link: '/',
          glyph: 'fa fa-home'
        },
        {
          name: 'Manage Users',
          link: '#',
          glyph: 'fa fa-user',
          dropdown: 'yes',
          subitems: [
            {
              name: 'Users',
              link: '/users',
              glyph: 'fa fa-user',
            },
            {
              name: 'Groups',
              link: '/groups',
              glyph: 'fa fa-users',
            }/*,
            {
              name: 'Audiences',
              link: '/audiences',
              glyph: 'fa fa-magic',
            },
            {
              name: 'Jobs',
              link: '/jobs',
              glyph: 'fa fa-briefcase',
            },
            {
              name: 'Branches',
              link: '/branches',
              glyph: 'fa fa-sitemap',
            }*/
          ]
        },
        {
          name: 'Manage Courses',
          link: '#',
          glyph: 'fa fa-book',
          dropdown: 'yes',
          subitems: [
            {
              name: 'Courses',
              link: '/courses',
              glyph: 'fa fa-book',
            },
            {
              name: 'Learning Paths',
              link: '/curriculums',
              glyph: 'fa fa-arrows',
            }/*,
            {
              name: 'Categories',
              link: '/categories',
              glyph: 'fa fa-tags',
            },
            {
              name: 'Certificates',
              link: '/cartificates',
              glyph: 'fa fa-certificate',
            }*/
          ]
        },
        {
          name: 'Assign Courses',
          link: '/InTheKnow',
          glyph: 'fa fa-user-circle-o'
        },
        {
          name: 'View Reports',
          link: '/reports',
          glyph: 'fa fa-bar-chart'
        },
        {
          name: 'Admin Actions',
          link: '#',
          glyph: 'fa fa-lock',
          dropdown: 'yes',
          subitems: [
            /*{
              name: 'Branch Settings',
              link: '/system-config',
              glyph: 'fa fa-wrench',
            },*/
            {
              name: 'Mass Import',
              link: '/maintenance/op/csv_import',
              glyph: 'fa fa-cloud-download',
            },
            {
              name: 'View Archive',
              link: '/archive',
              glyph: 'fa fa-archive',
            }
          ]
        }
      ]
    }
  
  
  
    var newnavbar = '<nav class="navbar navbar-new navbar-default" style=""> <div class="container-fluid container"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <!-- Collect the nav links, forms, and other content for toggling --> <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1" aria-expanded="false" style="height: 1px;"> <ul class="nav navbar-nav"> ';
    var newnavbarmiddle = '';
    var newnavbarend = '</ul> </div><!-- /.navbar-collapse --> </div><!-- /.container-fluid --> </nav> ';
  
    var thisnav = '';
    if (thisusertype == 'Administrator') {
      thisnav = nav_admin;
    }
    if (thisusertype == 'Super Admin' || thisusertype == 'Branch Administrator') {
      thisnav = nav_branchadmin;
    }
    if (thisusertype == 'Training Manager') {
      thisnav = nav_trainingmanager;
    }
    if (thisusertype == 'Learner') {
      thisnav = nav_learner;
    }
    if (thisusertype == 'Individual Learner') {
      thisnav = nav_learner;
    }
  
    for (var i = 0, l = thisnav.items.length; i < l; i++) {
      var obj = thisnav.items[i];
      if (obj.dropdown == 'yes') {
        newnavbarmiddle = '<li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="' + obj.glyph + '" aria-hidden="true"></span>' + obj.name + ' <span class="caret"></span></a> <ul class="dropdown-menu">';
        for (var j = 0, m = obj.subitems.length; j < m; j++) {
          var objsub = obj.subitems[j];
          var dropdownlink = '<li><a href="' + objsub.link + '"><span class="' + objsub.glyph + '" aria-hidden="true"></span>' + objsub.name + '</a></li>';
          newnavbarmiddle = newnavbarmiddle + dropdownlink;
        }         
        newnavbarmiddle = newnavbarmiddle + '</ul>';
      } else {
        newnavbarmiddle = '<li><a href="' + obj.link + '"><span class="' + obj.glyph + '" aria-hidden="true"></span>' + obj.name + '</a></li>';
      }
      newnavbar = newnavbar + newnavbarmiddle;
    }
  
    newnavbar = newnavbar + newnavbarend;
    jQuery(newnavbar).insertBefore('.breadcrumb-x');
  
  }
  
  function insertitkotg(usertype) {
  
    if (usertype == 'Learner' || usertype == 'Individual Learner') {
      if (typeof show_itk_otg !== 'undefined') {
        // the variable is defined
        if (show_itk_otg == 'false') {
        } else { 
          var html = '<button class="btn pull-right itk-otg" type="submit"><span class="fa fa-question-circle" aria-hidden="true"></span>On the Go</button>';
          // used to be .navbar-collapse below instead of ul.nav
          jQuery('.navbar-new ul.nav').append(html);
          !function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});
          window.Beacon('init', '165accf4-38b6-4ef4-9207-21af4c94ad5f');
          jQuery('.btn.itk-otg').click(function() {
            Beacon("open");
          });
        }
      }
    }
    if (usertype == 'Training Manager' || usertype == 'Administrator') {
      if (typeof show_itk_otg !== 'undefined') {
        // the variable is defined
        if (show_itk_otg == 'false') {
        } else { 
          var html = '<a href="https://support.homecarepulse.com/knowledge/elearning" target="_blank"><button class="btn pull-right itk-support" type="submit"><span class="fa fa-life-ring" aria-hidden="true"></span>Support</button></a>';
          jQuery('.navbar-new .navbar-collapse').append(html);
          !function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});
          window.Beacon('init', '99def8f7-f153-481f-90dc-1119eeadf24f');
          jQuery('.btn.itk-support').click(function() {
            // Beacon("open");
          });
        }
      }
    }
  
  }
  
  function getuser () {
    var firstname = ef_current_user.name;
    var lastname = ef_current_user.surname;
    var email = ef_current_user.email;
    var type = $('.ef-switch-account.current')
    .clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text()
    .trim();
    var id = $('.ef-switch-account.current').attr('data-id');
    
    return {
      firstname: firstname,
      lastname: lastname,
      email: email,
      type: type,
      id: id
    };
  }
  
  function itkmovesearchrow() {
      $('.sortedTableFooter').each(function( index ) {
          var formhtml = $(this).find('.form-inline').html();
          if (formhtml.length > 0) {
              var thistable = $(this).parents('.sortedTable tbody');
              $(this).parent().prependTo(thistable).addClass('itk-search-row');
          }
      });
  }
  
  function addlaunchbuttons() {
    $( '.ef-my-courses-course .ef-my-courses-progress-bar' ).each(function( index ) {
      var link = $(this).parent().parent().find('.ef-entry-link').attr('href');
      var link = link + '/resume/1';
      var newbutton = '<a class="btn btn-primary btn-sm" role="button" href="' + link + '" title="Course catalog">Open Course</a>';
    if ($(this).find('.progress-bar').attr('aria-valuenow') == 0) {
      $(this).parent().html(newbutton);
      }
    if ($(this).find('.progress-bar').attr('aria-valuenow') > 0) {
      $(this).parent().append(newbutton);
      } 
    });
  }
  
  function addcourseimages() {
    $('.ef-entry-link').each(function( index ) {
      var efentrylink = $(this);
      var coursetitle = $(this).attr('title');
      if ($('.ef-plain[title="' + coursetitle + '"]').length) {
          var courseimage = $('.ef-plain[title="' + coursetitle + '"]').closest('.ef-card-wrap').find('.thumbnail img');
      } else {
          var courseimage = $('.ef-plain[data-original-title="' + coursetitle + '"]').closest('.ef-card-wrap').find('.thumbnail img');
      }
      var courseimageurl = courseimage.css('background-image');
      courseimageurl = courseimageurl.replace('url(','').replace(')','').replace(/\"/gi, "");
      var newimagehtml = "<img class='itk-course-img' src='" + courseimageurl + "'>";
      $(this).parent().parent().prepend(newimagehtml);
    });
  }
  
  function hidecatalogbutton(usertype) {
    if (usertype == 'Learner' || usertype == 'Individual Learner') {
      if (typeof hide_catalog !== 'undefined') {
        // the variable is defined
        if (hide_catalog == 'false') {
        } else { 
          jQuery('#ef-manage-courses a').hide();
          jQuery('.user-preferences .dropdown-item').each( function() {
            var triggertext = $(this).text();
            if (triggertext == 'Course catalog') {
              $(this).hide();   
            }
          });
        }
      }
    }  
  }
  
  function changedashboard(usertype) {
    if (usertype == 'Training Manager' || usertype == 'Super Admin') {  
      var starthtml = '<div class=""><div class="ef-block "><h2>Welcome to your Caregiver Training administration portal!</h2><p>The navigation bar above contains links to all the important pages within your portal. From here, you can:</p><ul><li>Create Users</li><li>Assign Users to Courses</li><li>View Reports</li><li>and so much more!</li></ul><br><br><h3>Quick Branch Overview:</h3></div></div>';
      jQuery('#ef-options-block').html(starthtml).removeClass('col-md-6').addClass('col-md-12').next().removeClass('col-md-6').addClass('col-md-12');
    }
  }
  
  function icon_eye_to_cert() {
    console.log('eye');
    var thiswindowurl = window.location.href;
    if (thiswindowurl.indexOf("/tab/certificates") > -1 ) {
        jQuery('.fa-eye').removeClass('fa-eye').addClass('ef-icon xs icon-cert_icon');
    }
  }
  
  function addpagedesc(usertype, userid, thisurl) {
    jQuery('.itk-pagedesc').remove();
    jQuery('.breadcrumb-x .container:first-of-type').after('<div class="container itk-pagedesc"></div>');
    if (usertype == 'Learner') {  
      var insert = 'no';
      var innerhtml = '';
      if (window.location.href.indexOf("start") > -1) {
        innerhtml = "<div>Welcome! Click OPEN COURSE to begin or resume a topic.</div>";
        insert = 'yes';
      }
      if (thisurl.indexOf("/tab/certificates") > -1 || thisurl.indexOf("Certificates") > -1) {
        innerhtml = "<div>Here are all the certificates you have earned. Click the <span class='ef-icon xs icon-cert_icon'></span> to VIEW and PRINT your certificates.</div>";
        insert = 'yes';
        icon_eye_to_cert();
      }
      if (thisurl.indexOf("/tab/badges") > -1 || thisurl.indexOf("Badges") > -1) {
        innerhtml = "<div>Earn badges as you complete your training.</div>";
        insert = 'yes';
      }
      if (thisurl.indexOf("/tab/properties") > -1 || thisurl.indexOf("Profile") > -1) {
        innerhtml = "<div>Personalize your account by adding a photo. Click SUPPORT for further instructions.</div>";
        insert = 'yes';
      }
      if (insert == 'yes') {
        jQuery('.itk-pagedesc').html(innerhtml);
      }
    }
  }
  
  function supportmodal() {
    var supportlink = $('a[href*="#support"]');
    supportlink.on('click', function(e) {
      e.preventDefault();
      var supportmodal = '<div style="margin-bottom:20px;">If the support articles that pop up when you click ITK On the Go do not solve your issue, please feel free to contact us for help: <a href="mailto:help@knowingmore.com">help@knowingmore.com.</a></div>';
      $.fn.efront('modal', { 'header':'Support', 'body':supportmodal});  //Display a modal with this title and content
    });
  }
  
  function injectlearnermessage () {
    var learnermessage = '<div class="learner-message">Support questions? Email help@knowingmore.com.<br />Question about the content? Email nurse@knowingmore.com to communicate with an RN.</div>';
    $('.navbar-new').after(learnermessage);
  }
  
  
  function hideAssignments() {
  $("<style type='text/css'> #assignmentsTable{display:none;}.ef-block:before {content:'We apologize. This page is temporarily disabled due to routine site maintenance requirements. Please check back soon.';width: 100% !important;text-align: center;display: block;padding: 50px 70px;font-size: 24px;line-height: 1.2em;} </style>").appendTo("head");
  }
  function hideAssignmentsReport() {
  $("<style type='text/css'> #assignmentsTableReports{display:none;}.ef-block:before {content:'We apologize. This page is temporarily disabled due to routine site maintenance requirements. Please check back soon.';width: 100% !important;text-align: center;display: block;padding: 50px 70px;font-size: 24px;line-height: 1.2em;} </style>").appendTo("head");
  }
  $( document ).ready(function() {
    if (window.location.href.indexOf("/InTheKnow") > -1 ) {
      // hideAssignments();
      $('.breadcrumb-x .active a').text('Assign Courses');
    }
    if (window.location.href.indexOf("/op/assignments") > -1 ) {
      // hideAssignments();
    }
  });
  
  var certs = {
    certlist: [
          {
            name: 'Dementia Specialist',
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-alzheimers-dementia.png',
            search: 'Caregiver Specialist Training: Alzheimer'
          },
  {
            name: 'Diabetes Specialist',
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-diabetes.png',
            search: 'Caregiver Specialist Training: Diabetes'
          },
  {
            name: 'Behavioral Health Specialist',
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-behavioral-health.png',
            search: 'Caregiver Specialist Training: Behavioral Health'
          },
  {
            name: 'Infection Control Specialist',
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-infection-control.png',
            search: 'Caregiver Specialist Training: Infection Control Specialist'
          },
  {
            name: 'Restorative Care Specialist',
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-restorative-care.png',
            search: 'Caregiver Specialist Training: Restorative Care'
          },
  {
            name: 'Peer Mentor Specialist',
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-peer-mentor.png',
            search: 'Caregiver Specialist Training: Peer Mentor Specialist'
          },
  {
            name: 'Communications Specialist',
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-communications.png',
            search: 'Caregiver Specialist Training: Communications Specialist'
          },
      {
            name: 'Readmissions Specialist',
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-readmissions.png',
            search: 'Caregiver Specialist Training: Preventing Readmissions'
          },
      {
            name: 'Palliative Care Specialist',
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-palliative.png',
            search: 'Caregiver Specialist Training: Palliative'
          },
      {
            name: 'Food Safety and Nutrition Specialist',
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-food-safety.png',
            search: 'Caregivers Kitchen Food Safety and Nutrition'
          }
          ,
      {
            name: 'Cooking for Chronic Conditions Specialist',
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-chronic-conditions-cooking.jpg',
            search: 'Specialist Training: Cooking for Chronic Conditions'
          }
          ,
      {
            name: 'Basic Cooking Specialist',
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-basic-cooking.jpg',
            search: 'Specialist Training: Basic Cooking'
          }
           ,
      {
            name: "Alzheimer’s Association Recognized Alzheimer's & Dementia Care Specialist",
            img: 'https://www.knowingmore.com/itk/specialist-badges/specialist-aa-recognized-ad.png',
            search: 'Alzheimer’s Association Approved Alzheimer'
          }
      ]
  };
  
  function addcustombadges() {
    var thisuser = getuser();
    var thisuserid = thisuser.id;
      if ($('.specialist-badges').length) { 
           return
      } 
  
      var htmlstart = '<div id="custom_badge_new" class="specialist-badges" style="margin-top: 25px;"><div class="user-reports-badge-type-wrapper"><fieldset class="ef-fieldset-separator"><legend>Specialist badges</legend></fieldset><div class="category-badges"></div><div class="clearfix"></div></div>';
  
      $('#custom_badge').after(htmlstart);
  
      $.get( "/users/edit/"+thisuserid+"/tab/certificates/ajax/certificatesTable/limit/100/offset/0/sort/expires/order/asc/other/0", function( data ) {
  
          $(data).find('#certificatesTable .ef-certificate-name').each(function(index) {
              var certificatecheck = $(this).text();
              if (certificatecheck.indexOf('Expired') !== -1) {
                  return;
              }
  
              var certificate = $(this).children().remove().end().text().trim();
              
              for (var i = 0, l = certs.certlist.length; i < l; i++) {
                  var obj = certs.certlist[i];
                  var obj_search = obj.search;
                  if (certificate.indexOf(obj_search) !== -1) {
                      var badgehtml = '<div style="width: 15%;margin-right:15px;" class="pull-left"><img style="max-width:100%; margin-left:20px;" src="'+obj.img+'"/></div>';
                      $('#custom_badge_new .category-badges').append(badgehtml);
                  }
              }
  
          });
      });
  }
  
  function removeolddates() {
    $('.label-info').each(function() {
      var text = $(this).text();
      console.log(text);
      if (text.indexOf("1970") >= 0 || text.indexOf("1969") >= 0) {
          $(this).hide();
      }
    });
  }
  
  $( document ).ready(function() {
    var user = getuser();
    console.log(user.type);
    createnav(user.type, user.id);
    insertitkotg(user.type);
    jQuery('.alphatar.navi').after('<span class="alphatar-add">' + ef_current_user.name + '</span>');
    itkmovesearchrow();
    addlaunchbuttons();
    addcourseimages();
    hidecatalogbutton(user.type);
    changedashboard(user.type);
    var thiswindowurl = window.location.href;
    addpagedesc(user.type, user.id, thiswindowurl);
    // change page description when nav tabs are clicked and page doesn't reload
    jQuery('.nav.customTabs li').click(function() {
      var thislink = $(this).find('a').text();
      console.log(thislink);
      addpagedesc(user.type, user.id, thislink);
    });
    supportmodal();
    if (window.location.href.indexOf("/content/course") > -1 ) {
      injectlearnermessage();
    }
    if (window.location.href.indexOf("/InTheKnow") > -1 ) {
      $('.breadcrumb-x .breadcrumb .active a').text('Assignments');
    }
    addcustombadges();
    removeolddates();
  });
  
  $(document).ajaxComplete(function (event, xhr, settings) {
    if ( settings.url.includes("/start/show/") || settings.url.includes("/start/order/") ) {
      addlaunchbuttons();
      addcourseimages();
    }
    if ( settings.url.includes("/ajax/") ) {
     itkmovesearchrow();
     var user = getuser();
     icon_eye_to_cert();
    }
  });