<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Specialty extends Model
{
    //
    public function doctors()
    {
        return $this->belongsToMany(Doctor::class);
    }
}
