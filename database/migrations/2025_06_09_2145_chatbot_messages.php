<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('chatbot_messages', function (Blueprint $table) {
            $table->id();
            $table->longText('content') ;
            $table->enum('sender', ['user', 'bot']);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('chatbot_messages');
    }
};
