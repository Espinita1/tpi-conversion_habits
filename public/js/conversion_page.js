/******************************************************************************
** Conversion                                                                **
**                                                                           **
** Lieu      :  ETML                                                         **
** Auteur    :  Jordy guzman                                                 **
** Date      :  08.06.2022                                                   **
**                                                                           **
** Modifications                                                             **
**   Auteur  :  Jordy Guzman                                                 **
**   Version :  0.5                                                          **
**   Date    :  08.06.2022                                                   **
**   Raisons :  Comments                                                     **
**                                                                           **
******************************************************************************/

/******************************************************************************
** DESCRIPTION                                                               **                      
** This project serves as a size conversion for clothes and body measures    **
** ranging from head to toes.                                                **
** This javascript file serves as a "main" for the functions that will be    **     
** called for a size conversion from the html page.                          **
**                                                                           **
******************************************************************************/
// This function adds an event that will wait for the html document to load then execute de code inside
document.addEventListener("DOMContentLoaded", function(event){
    console.log("DOM fully loaded");

// get divs and buttons from the title //
    
    var button_to_help_page = document.getElementById('button_to_help_page');

// get divs from html, get from the element by its ID and assign it to a variable //

    var div_for_universal_label = document.getElementById('div_for_universal_label');
    var div_for_centimeters_label = document.getElementById('div_for_centimeters_label');
    var div_for_eu_label = document.getElementById('div_for_eu_label');
    var div_for_us_label = document.getElementById('div_for_us_label');
    var div_for_uk_label = document.getElementById('div_for_uk_label');
    var div_for_it_label = document.getElementById('div_for_it_label');

// get hidden inputs from html, get from the element by its ID and assign it to a variable //

    var label_universal = document.getElementById('label_universal');
    var label_cm = document.getElementById('label_cm');
    var label_eu = document.getElementById('label_eu');
    var label_us = document.getElementById('label_us');
    var label_uk = document.getElementById('label_uk');
    var label_it = document.getElementById('label_it');

//  get text boxes //

    var inpt_txt_head = document.getElementById('inpt_txt_head');
    var inpt_txt_chest = document.getElementById('inpt_txt_chest');
    var inpt_txt_waist = document.getElementById('inpt_txt_waist');
    var inpt_txt_feet = document.getElementById('inpt_txt_feet');

//  get result labels //
    var arr_labels = [lbl_for_universal_head_result, lbl_for_uk_head_result, lbl_for_us_head_result, lbl_for_eu_head_result];

    var lbl_for_universal_head_result = document.getElementById('lbl_for_universal_head_result');
    var lbl_for_uk_head_result = document.getElementById('lbl_for_uk_head_result');
    var lbl_for_us_head_result = document.getElementById('lbl_for_us_head_result');
    var lbl_for_eu_head_result = document.getElementById('lbl_for_eu_head_result');

    var lbl_for_universal_chest_result = document.getElementById('lbl_for_universal_chest_result');
    var lbl_for_uk_chest_result = document.getElementById('lbl_for_uk_chest_result');
    var lbl_for_us_chest_result = document.getElementById('lbl_for_us_chest_result');
    var lbl_for_eu_chest_result = document.getElementById('lbl_for_eu_chest_result');

    var lbl_for_uk_waist_result = document.getElementById('lbl_for_uk_waist_result');
    var lbl_for_us_waist_result = document.getElementById('lbl_for_us_waist_result');
    var lbl_for_us_waist_result = document.getElementById('lbl_for_us_waist_result');
    var lbl_for_eu_waist_result = document.getElementById('lbl_for_eu_waist_result');

    var lbl_for_universal_feet_result = document.getElementById('lbl_for_universal_feet_result');
    var lbl_for_uk_feet_result = document.getElementById('lbl_for_uk_feet_result');
    var lbl_for_us_feet_result = document.getElementById('lbl_for_us_feet_result');
    var lbl_for_eu_feet_result = document.getElementById('lbl_for_eu_feet_result');


///////////////////////////////////////////////////////////////// Variables ///////////////////////////////////////////////////////////////////////////

    // The dictionnary for size values //
    // This dictionnary contains only the chest size for woman //
    let sizes_dict = 
    {
        "dctnnry_sizes" :
        {
            "chest":
            {
                "u":
                {
                    "XXS": [],
                    "XS": ["81-84 CM", "6-8 UK", "30-34 EU", "0-4 US ","36-40 IT"],
                    "S": ["86-89 CM", "10-12 UK","36-38 EU","6-8 US","42-44 IT"], 
                    "M": ["91-94 CM", "14-16 UK","40-42 EU","10-12 US","46-48 IT"],
                    "L": ["96-99 CM", "18-20 UK","44-46 EU","14-16 US","50-52 IT"],
                    "XL": ["101-106 CM", "22-24 UK","48-50 EU","18-20 US","54-56 IT"],
                    "XXL": []
                },
                "eu": 
                {
                    "30": ["81-84 CM", "XS", "4 UK", "0 US","36 IT"],
                    "32": ["81-84 CM", "XS", "6 UK", "2 US", "38 IT"],
                    "34": ["81-84 CM", "XS", "8 UK", "4 US", "40 IT"],
                    "36": ["86-89 CM", "S", "10 UK", "6 US", "42 IT"],
                    "37": ["86-89 CM", "S","11 UK", "8 US", "44 IT"],
                    "38": ["91-94 CM", "M","12 UK", "10 US", "46 IT"],
                    "39": ["91-94 CM", "M","13 UK", "12 US", "48 IT"],
                    "40": ["96-99 CM", "L","14 UK", "14 US", "50 IT"],
                    "41": ["96-99 CM", "L","15 UK", "16 US", "52 IT"],
                    "42": ["101-106 CM", "XL","16 UK", "18 US", "54 IT"],
                    "43": ["101-106 CM", "XL","17 UK", "20 US", "56 IT"],
                    "44": ["108+ CM", "XXL","18 UK", "22 US", "58 IT"],
                    "45": ["108+ CM", "XXL", "19 UK", "24 US", "60 IT"]
                },
                "cm":
                {
                    "8184": ["XS","4-6 UK","30-34 EU","0-4 US","36-40 IT"],
                    "8689": ["S","10-12 UK","36-38 EU","6-8 US","42-44 IT"],
                    "9194": ["M","14-16 UK","40-42 EU","10-12 US","46-48 IT"],
                    "9699": ["L","18-20 UK","44-46 EU","14-16 US","50-52 IT"],
                    "101106": ["XL","22-24 UK","48-50","18-20 US","54-56 IT"]
                },
                "it":
                {
                    "36": ["81-84 CM", "XS", "4 UK", "0 US","30 EU"],
                    "38": ["81-84 CM", "XS", "6 UK", "2 US", "32 EU"],
                    "40": ["81-84 CM", "XS", "8 UK", "4 US", "34 EU"],
                    "42": ["86-89 CM", "S", "10 UK", "6 US", "36 EU"],
                    "44": ["86-89 CM", "S","11 UK", "8 US", "37 EU"],
                    "46": ["91-94 CM", "M","12 UK", "10 US", "38 EU"],
                    "48": ["91-94 CM", "M","13 UK", "12 US", "39 EU"],
                    "50": ["96-99 CM", "L","14 UK", "14 US", "40 EU"],
                    "52": ["96-99 CM", "L","15 UK", "16 US", "41 EU"],
                    "54": ["101-106 CM", "XL","16 UK", "18 US", "42 EU"],
                    "56": ["101-106 CM", "XL","17 UK", "20 US", "43 EU"],
                    "58": ["108+ CM", "XXL","18 UK", "22 US", "44 EU"],
                    "60": ["108+ CM", "XXL", "19 UK", "24 US", "45 EU"]
                },
                "uk":
                {
                    "4": ["81-84 CM", "XS", "30 EU", "0 US","36 IT"],
                    "6": ["81-84 CM", "XS", "32 EU", "2 US", "38 IT"],
                    "8": ["81-84 CM", "XS", "34 EU", "4 US", "40 IT"],
                    "10": ["86-89 CM", "S", "36 EU", "6 US", "42 IT"],
                    "11": ["86-89 CM", "S", "37 EU", "8 US", "44 IT"],
                    "12": ["91-94 CM", "M", "38 EU", "10 US", "46 IT"],
                    "13": ["91-94 CM", "M", "39 EU", "12 US", "48 IT"],
                    "14": ["96-99 CM", "L", "40 EU", "14 US", "50 IT"],
                    "15": ["96-99 CM", "L", "41 EU", "16 US", "52 IT"],
                    "16": ["101-106 CM", "XL", "42 EU", "18 US", "54 IT"],
                    "17": ["101-106 CM", "XL", "43 EU", "20 US", "56 IT"],
                    "18": ["108+ CM", "XXL", "44 EU", "22 US", "58 IT"],
                    "19": ["108+ CM", "XXL", "45 EU", "24 US", "60 IT"]
                }
            }
        }
    }

    //console.log(sizes_dict); test variable for dictionnary
    //var ukmeasures = sizes_dict.dctnnry_sizes.chest.uk[4][2]; test variable for dictionnary
    //console.log(ukmeasures); test variable for dictionnary

    var xs_size_equivalent = sizes_dict.dctnnry_sizes.chest.u.XS
    var s_size_equivalent = sizes_dict.dctnnry_sizes.chest.u.S
    var m_size_equivalent = sizes_dict.dctnnry_sizes.chest.u.M
    var l_size_equivalent = sizes_dict.dctnnry_sizes.chest.u.L
    var xl_size_equivalent = sizes_dict.dctnnry_sizes.chest.u.XL

///////////////////////////////////////////////////////////////// Variables ///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////// Program ///////////////////////////////////////////////////////////////////////////

    button_to_help_page.addEventListener("click", function(event) {
        window.location = '/Aide';
    });

    // Add a fonction to each one of these divs
    // Add an event listener to the label in the html that on click will call the function that changes the color of the label //

    div_for_universal_label.addEventListener("click", function() {
        ColorChange("lightgreen", "u")});

    div_for_centimeters_label.addEventListener("click",  function() {
        ColorChange("lightgreen", "cm")});

    div_for_eu_label.addEventListener("click", function() {
        ColorChange("lightgreen", "eu")});

    div_for_us_label.addEventListener("click",  function() {
        ColorChange("lightgreen", "us")});

    div_for_uk_label.addEventListener("click", function() {
        ColorChange("lightgreen", "uk")});

    div_for_it_label.addEventListener("click", function() {
        ColorChange("lightgreen", "it")});

    //    console.log(div_for_centimeters_label); test line

    // Add an event that calls the conversion function to each one of these text boxes each time that the user inputs something //
    // It passes the textbox head value and the measure that's any selected size measure
    inpt_txt_head.addEventListener('input', function() {
        Conversion(inpt_txt_head.value, measure)
    })

    inpt_txt_chest.addEventListener('input', function() {
        Conversion(inpt_txt_chest.value, label_universal.value)
    })

    inpt_txt_waist.addEventListener('input', function() {
        Conversion(inpt_txt_waist.value, measure)
    })

    inpt_txt_feet.addEventListener('input', function() {
        Conversion(inpt_txt_feet.value, measure)
    })

    function ColorChange(color, measure){
        //console.log("in color change"); testing color change function accessibility and call
        // do one of these cases in this switch depending on the "measure" parameter
        // this fonction will be called when the user clicks the label (more like the div storing the label)//
        //It will initialize variables necessary for the function, two parameters are necessary for this function//
        //color and measure, color will be the color to switch to when clicked and measure will be the label
        //that was clicked by the user, effectively setting the other labels to default color and setting the
        //clicked element to the given color   
        switch(measure)
        {
    
            // in the universal case, switch the background color of that div and set the other divs colors to
            // the default color set in the beginning, idem for the other cases depending on the clicked div
            case 'u':
                div_for_universal_label.style.backgroundColor = color;
                div_for_centimeters_label.style.backgroundColor = '#909090';
                div_for_eu_label.style.backgroundColor = '#909090';
                div_for_us_label.style.backgroundColor = '#909090';
                div_for_uk_label.style.backgroundColor = '#909090';
                div_for_it_label.style.backgroundColor = '#909090';
                break;
    
            case 'cm':
                div_for_universal_label.style.backgroundColor = '#909090';
                div_for_centimeters_label.style.backgroundColor = color;
                div_for_eu_label.style.backgroundColor = '#909090';
                div_for_us_label.style.backgroundColor = '#909090';
                div_for_uk_label.style.backgroundColor = '#909090';
                div_for_it_label.style.backgroundColor = '#909090';
                break;
        
            case 'eu':
                div_for_universal_label.style.backgroundColor = '#909090';
                div_for_centimeters_label.style.backgroundColor = '#909090';
                div_for_eu_label.style.backgroundColor = color;
                div_for_us_label.style.backgroundColor = '#909090';
                div_for_uk_label.style.backgroundColor = '#909090';
                div_for_it_label.style.backgroundColor = '#909090';
                break;
    
            case 'us':
                div_for_universal_label.style.backgroundColor = '#909090';
                div_for_centimeters_label.style.backgroundColor = '#909090';
                div_for_eu_label.style.backgroundColor = '#909090';
                div_for_us_label.style.backgroundColor = color;
                div_for_uk_label.style.backgroundColor = '#909090';
                div_for_it_label.style.backgroundColor = '#909090';
                break;
    
            case 'uk':
                div_for_universal_label.style.backgroundColor = '#909090';
                div_for_centimeters_label.style.backgroundColor = '#909090';
                div_for_eu_label.style.backgroundColor = '#909090';
                div_for_us_label.style.backgroundColor = '#909090';
                div_for_uk_label.style.backgroundColor = color;
                div_for_it_label.style.backgroundColor = '#909090';
                break;
    
            case 'it':
                div_for_universal_label.style.backgroundColor = '#909090';
                div_for_centimeters_label.style.backgroundColor = '#909090';
                div_for_eu_label.style.backgroundColor = '#909090';
                div_for_us_label.style.backgroundColor = '#909090';
                div_for_uk_label.style.backgroundColor = '#909090';
                div_for_it_label.style.backgroundColor = color;
                break;
        }
    }

    /* This function takes two parameters size {number of size: any number or universal measure: XL}
     and measure: UK, U, US, EU, IT, when both parameters are passed it will enter in a switch to find the corresponding
     value for the measure and then for the size outputting the result in a label */
    function Conversion (size, measure){
        //console.log(number, measure)// test line
        console.log(size, measure)
        switch(measure)
        {
            // Universal case
            case 'U':
                // Choose the correct size
                switch(size)
                {
                case 'XS':
                    //console.log("I'm here"); Debugging test
                    // Replace and Output the result on the result label by order
                    lbl_for_universal_chest_result.innerHTML = xs_size_equivalent[0];
                    lbl_for_uk_chest_result.innerHTML = xs_size_equivalent[1];
                    lbl_for_eu_chest_result.innerHTML = xs_size_equivalent[2];
                    lbl_for_us_chest_result.innerHTML = xs_size_equivalent[3];
                break;

                case 'S':
                    lbl_for_universal_chest_result.innerHTML = s_size_equivalent[0];
                    lbl_for_uk_chest_result.innerHTML = s_size_equivalent[1];
                    lbl_for_eu_chest_result.innerHTML = s_size_equivalent[2];
                    lbl_for_us_chest_result.innerHTML = s_size_equivalent[3]
                break;

                case 'M':
                    lbl_for_universal_chest_result.innerHTML = m_size_equivalent[0];
                    lbl_for_uk_chest_result.innerHTML = m_size_equivalent[1];
                    lbl_for_eu_chest_result.innerHTML = m_size_equivalent[2];
                    lbl_for_us_chest_result.innerHTML = m_size_equivalent[3]
                break;

                case 'L':
                    lbl_for_universal_chest_result.innerHTML = l_size_equivalent[0];
                    lbl_for_uk_chest_result.innerHTML = l_size_equivalent[1];
                    lbl_for_eu_chest_result.innerHTML = l_size_equivalent[2];
                    lbl_for_us_chest_result.innerHTML = l_size_equivalent[3]
                break;

                case 'XL':
                    lbl_for_universal_chest_result.innerHTML = xl_size_equivalent[0];
                    lbl_for_uk_chest_result.innerHTML = xl_size_equivalent[1];
                    lbl_for_eu_chest_result.innerHTML = xl_size_equivalent[2];
                    lbl_for_us_chest_result.innerHTML = xl_size_equivalent[3]
                break;
                // If it's not a valid value the default case is to break out of this switch
                default:
                    break;
                }
            case 'CM':

                break;

            case 'EU':

                break;

            case 'US':

                break;

            case 'UK':

                break;

            case 'IT':

                break;

            // If it's not a valid measure the default case is to break out of this switch
            default :
            break;
        }
    }   

});