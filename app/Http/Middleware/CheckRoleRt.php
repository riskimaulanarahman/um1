<?php

namespace App\Http\Middleware;

use Closure;

class CheckRoleRt
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->user()->role !== 'rt' ) {
            return abort(503, 'RT Page !! Anda tidak memiliki hak akses');
        }
        return $next($request);
    }
}
