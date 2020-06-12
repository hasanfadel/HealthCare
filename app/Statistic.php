<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    //
    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
