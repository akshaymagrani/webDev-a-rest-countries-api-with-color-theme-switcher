// $(document).ready(function () {
//   function darkMode() {
//     $(".btn-theme-checkbox").removeClass("text-light-theme");
//     $("body, .div-detail-card-body").removeClass("bg-body-light-theme");
//     $(
//       ".container-fluid, .card-body, #filter, .input-group,.input-group-text, #search, .search, .btn-back, .borderCountries"
//     ).removeClass("bg-elements-light-theme");
//     $(
//       ".container-fluid, .input-group, select, .card, .btn-back, .borderCountries"
//     ).removeClass("element-light-shadows");
//     // adding dark mode
//     $(".btn-theme-checkbox, .btn-back").addClass("text-dark-theme");
//     $("body, .div-detail-card-body").addClass("bg-body-dark-theme");
//     $(
//       ".container-fluid, .card-body, #filter, .input-group,.input-group-text, #search, .search, .btn-back, .borderCountries"
//     ).addClass("bg-elements-dark-theme");
//     $(
//       ".container-fluid, .input-group, select, .card, .btn-back, .borderCountries"
//     ).addClass("element-dark-shadows");
//     console.log("in dark mode");
//   }

//   function lightMode() {
//     $(".btn-theme-checkbox").removeClass("text-dark-theme");
//     $("body, .div-detail-card-body").removeClass("bg-body-dark-theme");
//     $(
//       ".container-fluid, .card-body, #filter, .input-group,.input-group-text, #search, .search, .btn-back"
//     ).removeClass("bg-elements-dark-theme");
//     $(
//       ".container-fluid, .input-group, select, .card, .btn-back, .borderCountries"
//     ).removeClass("element-dark-shadows");
//     // adding dark mode
//     $(".btn-theme-checkbox").addClass("text-light-theme");
//     $("body, .div-detail-card-body").addClass("bg-body-light-theme");
//     $(
//       ".container-fluid, .card-body, #filter, .input-group,.input-group-text, #search, .search, .btn-back"
//     ).addClass("bg-elements-light-theme");
//     $(
//       ".container-fluid, .input-group, select, .card, .btn-back, .borderCountries"
//     ).addClass("element-light-shadows");
//     console.log("in light mode");
//   }


//   $('.themeChanger').on('click', () => {
//     let darkStatus = localStorage.getItem('themeStatusDark');
//     if (darkStatus === 'false'){
//       lightMode();
//       localStorage.setItem('themeStatusDark', $('.btn-theme-checkbox').is('checked'));
//       console.log("from themeChanger.js index darkStatus from if: " + darkStatus,";", 'checked-btn: ' + $('.btn-theme-checkbox').is('checked'));
//     } else {
//       darkMode();
//       localStorage.setItem('themeStatusDark', $('.btn-theme-checkbox').is('checked'));
//       console.log("from themeChanger.js index darkStatus from else: " + darkStatus,";", 'checked-btn: ' + $('.btn-theme-checkbox').is('checked'));
//     }
//   });

//   $('.detail-themeChanger').on('click', () => {
//     let darkStatus = localStorage.getItem('themeStatusDark');
//     if (darkStatus === 'false'){
//       lightMode();
//       localStorage.setItem('themeStatusDark', $('.detail-btn-theme-checkbox').is('checked'));
//       console.log("from themeChanger.js detail darkStatus from if: " + darkStatus,";", 'checked-btn: ' + $('.detail-btn-theme-checkbox').is('checked'));
//     } else {
//       darkMode();
//       localStorage.setItem('themeStatusDark', $('.detail-btn-theme-checkbox').is('checked'));
//       console.log("from themeChanger.js detail darkStatus from else: " + darkStatus,";", 'checked-btn: ' + $('.detail-btn-theme-checkbox').is('checked'));
//     }
//   });
  


//   $(function () {
//     var availableCountries = [
//       "Algeria",
//       "Albania",
//       "United States of America",
//       "Afghanistan",
//       "Germany",
//       "Nigeria",
//       "Iceland",
//       "Brazil",
//     ];
//     $("#search").autocomplete({
//       source: availableCountries,
//     });
//   });
// });
