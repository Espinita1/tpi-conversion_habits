// this fonction will be called when the user clicks the label (more like the div storing the label)//
//It will initialize variables necessary for the function, two parameters are necessary for this function//
//color and measure, color will be the color to switch to when clicked and measure will be the label
//that was clicked by the user, effectively setting the other labels to default color and setting the
//clicked element to the given color   
function ColorChange(color, measure){
    // variables //
    // get divs from html, get from the element by its ID and assign it to a variable //
    var div_for_universal_label = document.getElementById('div_for_universal_label');
    var div_for_centimeters_label = document.getElementById('div_for_centimeters_label');
    var div_for_eu_label = document.getElementById('div_for_eu_label');
    var div_for_us_label = document.getElementById('div_for_us_label');
    var div_for_uk_label = document.getElementById('div_for_uk_label');
    var div_for_it_label = document.getElementById('div_for_it_label');

    // do one of these cases in this switch depending on the "measure" parameter
    switch(measure)
    {
        // in the universal case, switch the background color of that div and set the other divs colors to
        // the default color set in the beginning, idem for the other cases depending on the clicked div
        case 'universal':
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