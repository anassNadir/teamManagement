<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'password' => bcrypt("123456"),
            'firstName'=>'nadir',
            'lastName'=>'anass',
            'email' => 'anass.nadir@gmail.com',
            'roles' => 'admin'
        ]);

         factory('App\User', 10)
            ->create()
            ->each(function($u) {
                $u->interviews()->save(factory('App\Interview')->make());
            });
    }
}
