<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class dataController extends Controller
{
    public function listarData(){
      $client = new Client();
      $response = $client->request('GET', "http://150.136.7.153:5000/meas");
      $responseBody = json_decode($response->getBody());
      return response()->json(['data' => $responseBody]);
    }
}
