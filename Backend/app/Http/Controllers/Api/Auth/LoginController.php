<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Api\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use DB;
use Carbon\Carbon;
use App\Models\User;

class LoginController extends ApiController
{
    public function adminLogin(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required',
                'password' => 'required',
            ]);

            if ($validator->fails())
            {
                return $this->sendError("Required fields are missing or invalid.",$validator->errors(),200);
            }

            if(!Auth::attempt($request->only(['email', 'password']))){
                return $this->sendError("Email & Password does not match with our record.",[],200);
            }

            $user = User::where('email', $request->email)->first();
            $user->token = $user->createToken("API TOKEN")->plainTextToken;
            return $this->sendResponse($user, 'User Login successfully.');	
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}

