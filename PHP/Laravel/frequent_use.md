
```php
php artisan make:migration create_users_table
php artisan migrate
php artisan migrate:rollback
php artisan migrate:reset
php artisan migrate:refresh
php artisan migrate:refresh --seed

php artisan make:model User

php artisan make:factory PostFactory
php artisan make:factory PostFactory --model=Post

php artisan make:seeder UsersTableSeeder
php artisan db:seed
php artisan db:seed --class=UsersTableSeeder

php artisan make:controller PhotoController --resource
```

```
composer dump-autoload
```

```php
->where('votes', '=', 100)
->where('votes', '>=', 100)
->where('votes', '<>', 100)
->where('name', 'like', 'T%')
->where([
    ['status', '=', '1'],
    ['subscribed', '<>', '1'],
])
->orWhere('name', 'John')
->whereBetween('votes', [1, 100])
->whereNotBetween('votes', [1, 100])
->whereIn('id', [1, 2, 3])
->whereNotIn('id', [1, 2, 3])
->whereNull('updated_at')
->whereNotNull('updated_at')
->whereDate('created_at', '2016-12-31')
->whereMonth('created_at', '12')
->whereDay('created_at', '31')
->whereYear('created_at', '2016')
->whereTime('created_at', '=', '11:20')
->whereColumn('first_name', 'last_name')
->whereColumn('updated_at', '>', 'created_at')
->whereColumn([
    ['first_name', '=', 'last_name'],
    ['updated_at', '>', 'created_at']
])
->orWhere(function ($query) {
    $query->where('votes', '>', 100)
          ->where('title', '<>', 'Admin');
})
->whereExists(function ($query) {
    $query->select(DB::raw(1))
          ->from('orders')
          ->whereRaw('orders.user_id = users.id');
})
->orderBy('name', 'desc')
->groupBy('count')
->having('count', '>', 100)
->latest()
->first()
->inRandomOrder()
->first();
->groupBy('account_id')
->having('account_id', '>', 100)
->get();
skip(10)->take(5)
->offset(10)
->limit(5)
 ```
 
 ```php
 Route::get('foo', function () {
     return 'Hello World';
 });
 Route::get('/user', 'UserController@index');
 ```