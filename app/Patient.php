<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use PhpParser\Comment\Doc;

class Patient extends Model
{
    //
    protected $fillable = [''];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function doctor()
    {
        return $this->belongsToMany(Doctor::class, 'doctor_id');
    }

    public function appointments()
    {
        return $this->belongsToMany(Doctor::class, 'doctor_id')
            ->using(Appointment::class)
            ->withPivot('title', 'date', 'time')
            ->withTimestamps();
    }
}
