<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    /**
     * @inheritdoc
     */
    protected $attributes = [
        'is_completed' => false
    ];
    /**
     * @inheritdoc
     */
    protected $casts = [
        'is_completed' => 'boolean',
    ];

    /**
     * @inheritdoc
     */
    protected $fillable = ['title', 'is_completed'];
}
