<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    //
    protected $fillable = [''];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function patients()
    {
        return $this->belongsToMany(Patient::class, 'patient_id');
    }

    public function specialties()
    {
        return $this->belongsToMany(Specialty::class, 'specialty_id');
    }

    public function appointments()
    {
        return $this->belongsToMany(Patient::class, 'patient_id')
            ->using(Appointment::class)
            ->withPivot('title', 'date', 'time')
            ->withTimestamps();
            
    }
}
