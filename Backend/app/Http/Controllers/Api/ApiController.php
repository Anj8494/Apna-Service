<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    /**
    * @param $result
    * @param $message
    * @param mixed
    */
    public function sendResponse($result, $message)
    {
        $response = [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];
        return response()->json($response, 200);
    }

    /**
     * @param $error
     * @param int $code
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendError($error, $errorMessages = [], $code=404)
    {
        $response = [
            'success' => false,
            'message' => $error,
            // 'code' => $code
        ];

        if(!empty($errorMessages)){
            $errorMessages = json_decode($errorMessages);
            if($error=='REQUIRED_FIELDS_MISSING'){
                foreach ($errorMessages as $key => $value) {
                    if(isset($value[0])){
                        $response['message'] = $value[0];
                    }
                    break;
                }
            }
            $response['data'] = $errorMessages;
        }
        
        return response()->json($response, $code);
    }

    protected function guard()
    {
        return Auth::guard();
    }
}
