<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    //type of singingは歌い方の種類
    public function up()
    {
        Schema::create('types_of_singing', function (Blueprint $table) {
            $table->id();
            $table->string('technique_name')->comment('ボーカルテクニックの名前');
            $table->string('image')->comment('画像');
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
        Schema::dropIfExists('types_of_singing');
    }
};
