Database:Migration
--

- 파일 생성 (`database/migrations`)
    ```
    php artisan make:migration create_users_table
    php artisan make:migration create_users_table --create=users
    php artisan make:migration add_votes_to_users_table --table=users
    ```
    
- 구조
    - up 메소드 
        - 테이블, 컬럼, 인덱스 추가
    - down 메소드
        - up 메소드 취소
       
    - create table 
    ```php
    Schema::create('table', function (Blueprint $table) {
        $table->increments('id');
    });
    ```
    - is_table, is_column
    ```php
    if (Schema::hasTable('table')) {
    }
    if (Schema::hasColumn('users', 'column')) {
    }
    ```
    - 다른 데이터베이스 접속
    ```php
    Schema::connection('foo')->create('table', function (Blueprint $table) {
        $table->increments('id');
    });
    ```
    - rename, delete table
    ```php
    Schema::rename($from, $to);
    Schema::drop('table');
    Schema::dropIfExists('table');
    ```
    - 컬럼 타입  
        
    명령  | 설명
    ------------- | -------------
    `$table->bigIncrements('id');`  |  자동으로 증가하는(auto increment) UNSIGNED BIGINT (primary key) 컬럼.
    `$table->bigInteger('votes');`  |  BIGINT 컬럼.
    `$table->binary('data');`  |  BLOB 컬럼.
    `$table->boolean('confirmed');`  |  BOOLEAN 컬럼.
    `$table->char('name', 100);`  |  옵션값을 길이로 하는 CHAR 컬럼.
    `$table->date('created_at');`  |  DATE 컬럼.
    `$table->dateTime('created_at');`  |  DATETIME 컬럼.
    `$table->dateTimeTz('created_at');`  |  DATETIME (타임존을 가지는) 컬럼.
    `$table->decimal('amount', 8, 2);`  |  전체 자릿수와 소수점 자릿수를 지정한 DECIMAL 컬럼.
    `$table->double('amount', 8, 2);`  |  전체 자릿수와 소수점 자릿수를 지정한 DOUBLE 컬럼.
    `$table->enum('level', ['easy', 'hard']);`  |  ENUM 컬럼.
    `$table->float('amount', 8, 2);`  |  전체 자릿수와 소수점 자릿수를 지정한 FLOAT 컬럼.
    `$table->geometry('positions');`  |  GEOMETRY 컬럼.
    `$table->geometryCollection('positions');`  |  GEOMETRYCOLLECTION 컬럼.
    `$table->increments('id');`  |  자동으로 증가하는(auto increment) UNSIGNED INTEGER (primary key) 컬럼.
    `$table->integer('votes');`  |  INTEGER 컬럼.
    `$table->ipAddress('visitor');`  |  IP 주소 컬럼.
    `$table->json('options');`  |  JSON 컬럼.
    `$table->jsonb('options');`  |  JSONB 컬럼.
    `$table->lineString('positions');`  |  LINESTRING 컬럼.
    `$table->longText('description');`  |  LONGTEXT 컬럼.
    `$table->macAddress('device');`  |  MAC address 컬럼.
    `$table->mediumIncrements('id');`  |  자동으로 증가하는(auto increment) UNSIGNED MEDIUMINT (primary key) 컬럼.
    `$table->mediumInteger('votes');`  |  MEDIUMINT 컬럼.
    `$table->mediumText('description');`  |  MEDIUMTEXT 컬럼.
    `$table->morphs('taggable');`  |  UNSIGNED INTEGER 의 `taggable_id` 컬럼과 `taggable_type` VARCHAR 컬럼을 추가.
    `$table->multiLineString('positions');`  |  MULTILINESTRING 컬럼.
    `$table->multiPoint('positions');`  |  MULTIPOINT 컬럼.
    `$table->multiPolygon('positions');`  |  MULTIPOLYGON 컬럼.
    `$table->nullableMorphs('taggable');`  |  nullable (null 값이 허용되는) `morphs()` 컬럼 버전.
    `$table->nullableTimestamps();`  |  `timestamps()` 의 별칭입니다.
    `$table->point('position');`  |  POINT 컬럼.
    `$table->polygon('positions');`  |  POLYGON 컬럼.
    `$table->rememberToken();`  |  nullable (null 값이 허용되는) `remember_token` VARCHAR(100) 컬럼.
    `$table->smallIncrements('id');`  |  자동으로 증가하는(auto increment) UNSIGNED SMALLINT (primary key) 컬럼.
    `$table->smallInteger('votes');`  |  SMALLINT 컬럼.
    `$table->softDeletes();`  |  soft delete 를 위한 nullable (null 값이 허용되는) `deleted_at` TIMESTAMP 컬럼.
    `$table->softDeletesTz();`  |  soft delete 를 위한 nullable (null 값이 허용되는) `deleted_at` TIMESTAMP (타임존을 가지는)
    `$table->string('name', 100);`  |  옵션값을 길이로 하는 VARCHAR 컬럼.
    `$table->text('description');`  |  TEXT 컬럼.
    `$table->time('sunrise');`  |  TIME 컬럼.
    `$table->timeTz('sunrise');`  |  TIME (타임존을 가지는) 컬럼.
    `$table->timestamp('added_on');`  |  TIMESTAMP 컬럼.
    `$table->timestampTz('added_on');`  |  TIMESTAMP (타임존을 가지는) 컬럼.
    `$table->timestamps();`  |  nullable (null 값이 허용되는) `created_at` 와 `updated_at` TIMESTAMP 컬럼.
    `$table->timestampsTz();`  |  nullable (null 값이 허용되는) `created_at` 와 `updated_at` TIMESTAMP (타임존을 가지는) 컬럼.
    `$table->tinyIncrements('id');`  |  자동으로 증가하는(auto increment) UNSIGNED TINYINT (primary key) 컬럼.
    `$table->tinyInteger('votes');`  |  TINYINT 컬럼.
    `$table->unsignedBigInteger('votes');`  |  UNSIGNED BIGINT 컬럼.
    `$table->unsignedDecimal('amount', 8, 2);`  |  전체 자릿수와 소수점 자릿수를 지정한 UNSIGNED DECIMAL 컬럼.
    `$table->unsignedInteger('votes');`  |  UNSIGNED INTEGER 컬럼.
    `$table->unsignedMediumInteger('votes');`  |  UNSIGNED MEDIUMINT 컬럼.
    `$table->unsignedSmallInteger('votes');`  |  UNSIGNED SMALLINT 컬럼.
    `$table->unsignedTinyInteger('votes');`  |  UNSIGNED TINYINT 컬럼.
    `$table->uuid('id');`  |  UUID 컬럼.
