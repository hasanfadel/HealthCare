<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    //
    public function patients()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
    public function doctors()
    {
        return $this->belongsTo(Doctor::class, 'doctor_id');
    }
    public function issues()
    {
        return $this->belongsTo(Issue::class);
    }
}
