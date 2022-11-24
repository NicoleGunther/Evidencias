<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use DateTime;

class dataController extends Controller
{
    public function listarData(){
      $client = new Client();
      $response = $client->request('GET', "http://150.136.7.153:5001/meas");
      $responseBody = collect(json_decode($response->getBody(),true));
      $responseBody = $responseBody->map(function ($data) {
        $date = $data["unixtime"];
        $date = new DateTime("@$date");
        return [
            'unixtime' => $date->format('d-M-Y H:i:s'),
            'pft3' => $data["pft3"],
            'thdprom' => $data["thdprom"],
        ];
    });
      return response()->json(['data' => $responseBody]);
    }
}
