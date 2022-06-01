<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/conversion_page.css">
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
                        <label id="lbl_for_universal_measure"for="">U</label>
                    </div>
                    <div id="div_for_centimeters_label">
                        <label id="lbl_for_centimeters_measure" for="">CM</label>
                    </div>
                    <div id="div_for_eu_label">
                        <label id="lbl_for_eu_measurements" for="">EU</label>
                    </div>
                    <div id="div_for_us_label">
                    <label id="lbl_for_us_measure" for="">US</label>
                    </div>
                    <div id="div_for_uk_label">
                        <label id="lbl_for_uk_measurements" for="">UK</label>
                    </div>
                    <div id="div_for_it_label">
                        <label id="lbl_for_it_measurement" for="">IT</label>
                    </div>
                </div>
            </div>
            <div id="textbox_container">
                <div id="div_for_textbox_head">
                    <input type="text" name="headMeasure">
                </div>
                <div id="div_for_textbox_chest">
                    <input type="text" name="chestMeasure">
                </div>
                <div id="div_for_textbox_waist">
                    <input type="text" name="waistMeasure">
                </div>
                <div id="div_for_textbox_feet">
                    <input type="text" name="feetMeasure">
                </div>
            </div>
            <div id="arrow_container">
                <div id="head_arrow">
                <img src="{{ asset ('images/arrow_right_1.png') }}" alt="----->">
                </div>
                <div id="chest_arrow">

                </div>
                <div id="waist_arrow">

                </div>
                <div id="feet_arrow">

                </div>
            </div>
    </div>
</body>
