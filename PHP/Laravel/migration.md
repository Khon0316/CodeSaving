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
    ```
    Schema::create('table', function (Blueprint $table) {
        $table->increments('id');
    });
    ```
    - is_table, is_column
    ```
    if (Schema::hasTable('table')) {
    }
    if (Schema::hasColumn('users', 'column')) {
    }
    ```
    - 다른 데이터베이스 접속
    ```
    Schema::connection('foo')->create('table', function (Blueprint $table) {
        $table->increments('id');
    });
    ```
    - rename, delete table
    ```
    Schema::rename($from, $to);
    Schema::drop('table');
    Schema::dropIfExists('table');
    ```
    - 컬럼 타입  
    | 명령 | 설명 |
    |-----|------|