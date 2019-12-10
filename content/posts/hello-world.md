---
published: true
title: 'Hello, World!'
description: 'This is the post description'
date: '2019-12-10'
tags: ['markdown']
---
## This is a sub-heading

Some random text and below is a code block.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil praesentium explicabo, ratione dolorem, illo similique. Non, vero consectetur quam eos harum recusandae? Ut veritatis mollitia quam omnis sint placeat eos!

```
isNaN(1) // false
isNaN('1') // false
isNaN('abc') // true
```

## bash

``` bash
# A comment..
$ php artisan export
Starting export...
Files were saved to disk `export`
```

## php

``` php
namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'full_name',
    ];

    /**
     * Get the full name of a user.
     *
     * @return string
     */
    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }
}
```

## Image

![](https://cdn-images-1.medium.com/max/800/1*3X6EiKc-njoRpCB1AWnv3Q.png)
