/******************************************************************************
** Help page events                                                          **
**                                                                           **
** Lieu      :  ETML                                                         **
** Auteur    :  Jordy guzman                                                 **
** Date      :  08.06.2022                                                   **
**                                                                           **
** Modifications                                                             **
**   Auteur  :  Jordy Guzman                                                 **
**   Version :  0.9                                                          **
**   Date    :  08.06.2022                                                   **
**   Raisons :  Comments and function to switch page added                   **
**                                                                           **
******************************************************************************/

/******************************************************************************
** DESCRIPTION                                                               **                                                **
** Events for buttons in the help page                                       **
******************************************************************************/

// This function adds an event that will wait for the html document to load then
// execute de code inside
document.addEventListener("DOMContentLoaded", function(event){
    console.log("DOM fully loaded");

    var button_to_conversion_page = document.getElementById('button_to_conversion_page');

    button_to_conversion_page.addEventListener("click", function(event) {
        window.location = '/';
    })

});