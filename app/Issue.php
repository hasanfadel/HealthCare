<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    //
    public function patients()
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctors()
    {
        return $this->belongsToMany(Doctor::class);
    }
    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}
