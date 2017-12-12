모델
--
```php
php artisan make:model User
php artisan make:model User --migration
php artisan make:model User -m
```
```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'my_flights';
    public $timestamps = false; // create_at, update_at true, false
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'last_update';
    protected $connection = 'connection-name'; //다른컨넥션가능
}
```
```php
<?php

use App\Flight;

$flights = App\Flight::all();

foreach ($flights as $flight) {
    echo $flight->name;
}
$flights = App\Flight::where('active', 1)
               ->orderBy('name', 'desc')
               ->take(10)
               ->get();
```