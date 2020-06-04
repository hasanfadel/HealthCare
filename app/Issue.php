<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    //
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctors()
    {
        return $this->belongsToMany(Doctor::class);
    }
}
