<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\models\Item;

class InsertSampleItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Item::create(['title' => 'Sample todo 1']);
        Item::create(['title' => 'Sample todo 2']);
        Item::create(['title' => 'Sample todo 3']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Item::query()->truncate();
    }
}
