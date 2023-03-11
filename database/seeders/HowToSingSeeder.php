<?php

namespace Database\Seeders;

use App\Models\typeOfSinging;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HowToSingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        typeOfSinging::create([]);
    }
}
