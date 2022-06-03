<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/conversion_page.css">
    <script src="/js/conversion_page.js"></script>
    <title>Laravel</title>

</head>
<body>
    <x-components-titles-conversion>
        
    </x-components-titles-conversion>
    <div id="div_rectangle_background">
        <!--<form action="{{ url('post-teacher') }}" method="POST">
            @csrf-->
            <div id="label_measure_container">
                <div id="div_for_label_text_measures">
                    <label for="">Choissisez la mesure</label>
                </div>
                <div id="div_measurements_container">
                    <div id="div_for_universal_label">
                        <label for="U" id="lbl_for_universal_measure">U</label>
                        <input type="hidden" id="label_universal" value="U">
                    </div>
                    <div id="div_for_centimeters_label">
                        <label for="CM" id="lbl_for_centimeters_measure">CM</label>
                        <input type="hidden" id="label_cm" value="CM">
                    </div>
                    <div id="div_for_eu_label">
                        <label for="EU" id="lbl_for_eu_measurements">EU</label>
                        <input type="hidden" id="label_eu" value"EU">
                    </div>
                    <div id="div_for_us_label">
                        <label for="US" id="lbl_for_us_measure">US</label>
                        <input type="hidden" id="label_us" value="US">
                    </div>
                    <div id="div_for_uk_label">
                        <label for="UK" id="lbl_for_uk_measurements">UK</label>
                        <input type="hidden" id="label_uk" value="UK">
                    </div>
                    <div id="div_for_it_label" for=IT>
                        <label for="IT" id="lbl_for_it_measurement">IT</label>
                        <input type="hidden" id="label_it" value="IT">
                    </div>
                </div>
            </div>
            <div id="textbox_container">
                <div id="div_for_textbox_head">
                    <input id="inpt_txt_head" type="text" name="headMeasure">
                </div>
                <div id="div_for_textbox_chest">
                    <input id="inpt_txt_chest" type="text" name="chestMeasure">
                </div>
                <div id="div_for_textbox_waist">
                    <input id="inpt_txt_waist" type="text" name="waistMeasure">
                </div>
                <div id="div_for_textbox_feet">
                    <input id="inpt_txt_feet" type="text" name="feetMeasure">
                </div>
            </div>
            <div id="arrow_container">
                <div id="head_arrow">
                    <img src="{{ asset ('images/fleche2.png') }}" alt="----->">
                </div>
                <div id="chest_arrow">
                    <img src="{{ asset ('images/fleche2.png') }}" alt="----->">
                </div>
                <div id="waist_arrow">
                    <img src="{{ asset ('images/fleche2.png') }}" alt="----->">
                </div>
                <div id="feet_arrow">
                    <img src="{{ asset ('images/fleche2.png') }}" alt="----->">
                </div>
            </div>
            <div id="image_container_left_side">
                <div>
                    <img src="{{ asset ('images/image_wmodel_left.png') }}" alt="----->">
                </div>
            </div>
            <div id="image_container_right_side">
                <div>
                    <img src="{{ asset ('images/image_wmodel_right.png') }}" alt="----->">
                </div>
            </div>
            <div id="div_results_container">
                <div id="div_head_results_container">
                    <label id="lbl_for_title_head_result" >Tour de tête</label>
                    <label id="lbl_for_universal_head_result" >U</label>
                    <label id="lbl_for_uk_head_result" >UK</label>
                    <label id="lbl_for_us_head_result" >US</label>
                    <label id="lbl_for_eu_head_result" >EU</label>
                </div>
                <div id="div_chest_results_container">
                    <label id="lbl_for_title_chest_result" >Tour de poitrine</label>
                    <label id="lbl_for_universal_chest_result" >U</label>
                    <label id="lbl_for_uk_chest_result" >UK</label>
                    <label id="lbl_for_us_chest_result" >US</label>
                    <label id="lbl_for_eu_chest_result" >EU</label>
                </div>
                <div id="div_waist_results_container">
                    <label id="lbl_for_title_waist_result" >Tour de ceinture</label>
                    <label id="lbl_for_universal_waist_result" >U</label>
                    <label id="lbl_for_uk_waist_result" >UK</label>
                    <label id="lbl_for_us_waist_result" >US</label>
                    <label id="lbl_for_eu_waist_result" >EU</label>
                </div>
                <div id="div_feet_results_container">
                <label id="lbl_for_title_feet_result" >Taille de pieds</label>
                    <label id="lbl_for_universal_feet_result" >U</label>
                    <label id="lbl_for_uk_feet_result" >UK</label>
                    <label id="lbl_for_us_feet_result" >US</label>
                    <label id="lbl_for_eu_feet_result" >EU</label>
                </div>
            </div>
    </div>
</body>
