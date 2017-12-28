```php
$array = [
    'A' => 1,
    'B' => 2,
    'C' => 3,
];

var_dump(http_build_query($array));
var_dump(http_build_query($array, '', ', '));

string(11) "A=1&B=2&C=3"
string(13) "A=1, B=2, C=3"
```