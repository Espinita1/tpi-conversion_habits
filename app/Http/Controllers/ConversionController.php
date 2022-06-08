<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ConversionController extends Controller
{
    // Function that will be called when a request to the Conversion Page is received
    public function Index()
    {
        return view('conversion');
    }

    // Function that will be called when a request to the Help Page is received
    public function Help()
    {
        return view('help');
    }
}
