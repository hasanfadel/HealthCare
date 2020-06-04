<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIssuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issues', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('patient_id');
            $table->string('title');
            $table->longText('description');
            $table->date('date');
            $table->timestamps();

            $table->foreign('patient_id')
                ->references('id')
                ->on('patients')
                ->onDelete('cascade');
        });

        Schema::create('doctor_issue', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('doctor_id');
            $table->unsignedBigInteger('issue_id');
            $table->timestamps();
    
            $table->unique(['doctor_id', 'issue_id']);
    
            $table->foreign('doctor_id')
                ->references('id')
                ->on('doctors')
                ->onDelete('cascade');
    
            $table->foreign('issue_id')
                ->references('id')
                ->on('issues')
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
        Schema::dropIfExists('issues');
    }
}
