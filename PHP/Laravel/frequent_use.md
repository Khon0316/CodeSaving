
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
 
 ```
DEBUG (100) : 자세한 디버그 정보.
INFO (200) : 흥미로운 사건. 예 : 사용자 로그인, SQL 로그.
NOTICE (250) : 정상이지만 중요한 사건.
WARNING (300) : 오류가 아닌 예외 발생. 예 : 사용되지 않는 API의 사용, API의 사용 빈도, 바람직하지 않은 것들이 반드시 잘못된 것은 아닙니다.
ERROR (400) : 즉각적인 조치가 필요하지 않지만 일반적으로 기록되고 모니터링되어야하는 런타임 오류.
CRITICAL (500) : 중대한 조건. 예 : 응용 프로그램 구성 요소를 사용할 수 없으며 예기치 않은 예외입니다.
ALERT (550) : 즉시 조치를 취해야합니다. 예 : 전체 웹 사이트 다운, 데이터베이스 사용 불가 등. SMS 알림이 울리고 깨어나야합니다.
EMERGENCY (600) : 응급 : 시스템을 사용할 수 없습니다.
 ```
 
 foreach 문 loop 관련
 ```
    $loop->index	현재 반복문의 인덱스(0 부터 시작).
    $loop->iteration	현재 반복문의 횟수(1 부터 시작).
    $loop->remaining	반복문의 남은 횟수.
    $loop->count	반복되는 배열의 총 아이템 수.
    $loop->first	현재 반복문의 첫번째 인지 확인.
    $loop->last	현재 반복문의 마지막 인지 확인.
    $loop->depth	중첩된 반복문의 깊이.
    $loop->parent	반복문이 중첩된 경우 부모의 루프 변수.
 ```
