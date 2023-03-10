<?php

namespace Database\Seeders;

use App\Models\TaxType;
use Illuminate\Database\Seeder;

class TaxTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TaxType::create([
            'name' => 'Standard rates',
            'slug' => 'standard_rate_rates',
            'description' => 'Standard rate for tax'
        ]);

        TaxType::create([
            'name' => 'Reduced rate rates',
            'slug' => 'reduced_rate_rates'
        ]);

        TaxType::create([
            'name' => 'Zero rate rates',
            'slug' => 'zero_rate_rates'
        ]);
    }
}
