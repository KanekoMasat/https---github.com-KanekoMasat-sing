<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    //type of voicingは発声の種類
    public function up()
    {
        Schema::create('types_of_voicing', function (Blueprint $table) {
            $table->id();
            $table->string('pronunciation_name')->comment('発声名');
            $table->string('color')->comment('色');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('types_of_voicing');
    }
};
