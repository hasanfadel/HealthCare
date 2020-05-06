<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->date('birth')->nullable();
            $table->unsignedInteger('height')->nullable();
            $table->unsignedInteger('weight')->nullable();
            $table->longText('disease')->nullable();
            $table->longText('medicine')->nullable();
            $table->string('filename')->nullable();
            $table->timestamps();

            $table->unique('user_id');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });

        Schema::create('doctor_patient', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('doctor_id');
            $table->unsignedBigInteger('patient_id');
            $table->timestamps();

            $table->unique(['doctor_id', 'patient_id']);

            $table->foreign('doctor_id')
                ->references('id')
                ->on('doctors')
                ->onDelete('cascade');

            $table->foreign('patient_id')
                ->references('id')
                ->on('patients')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
