<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Carbon\Carbon;

use App\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);

        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        if ($user->save()) {
            return response()->json([
                'message' => 'Đăng ký tài khoản thành công',
                'status_code' => 200
            ],200);
        } else {
            return response()->json([
                'message' => 'Đăng ký không thành công, vui lòng thử lại',
                'status_code' => 500
            ],500);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json([
                'message' => 'Tài khoản hoặc mật khẩu không đúng!',
                'status_code' => 401
            ],401);
        }

        $user = $request->user();

        if ($user->role == 'administrator') {
            $tokeData = $user->createToken('Quyền truy cập', ['administrator']);
        } else {
            $tokeData = $user->createToken('Quyền truy cập', ['user']);
        }

        $token = $tokeData->token;

        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        if ($token->save()) {
            return response()->json([
                'user' => $user,
                'access_token' => $tokeData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokeData->token->scopes[0],
                'expires_at' => Carbon::parse($tokeData->token->expries_at)->toDayDateTimeString(),
                'status_code' => 200
            ],200);
        } else {
            return response()->json([
                'message' => 'Một số lỗi đã xảy ra, xin vui lòng thử lại',
                'status_code' => 500
            ],500);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Đăng xuất thành công',
            'status_code' => 200
        ],200);
    }
}
