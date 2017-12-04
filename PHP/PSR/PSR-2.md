PSR-2 Coding Style Guide
==

- PSR-1 스타일 사용
- 들여쓰기는 `TAB`이 아닌 4개의 공백을 사용
- PHP 파일은 하나의 빈 줄로 끝내야 됨
- `?>` 태그는 PHP 만 포함된 파일에서 생략
- 라인의 길이는 120자 이하
- 행은 80자 이하
- PHP 키워드는 소문자 (true, false, null...등) 
- namespace 선언 다음에는 빈줄
- use 블록 뒤에 빈줄
- extends 및 implements 키워드는 class와 같은 줄에 선언
- 모든 변수에는 속성을 선언
- method 다음에는 공백 X
- 인수는 각 쉼표 뒤에 하나의 공백

4-4 쓰는중 작성중


```
<?php
namespace Vendor\Package;
  
use FooInterface;
use BarClass as Bar;
use OtherVendor\OtherPackage\BazClass;
  
class Foo extends Bar implements FooInterface
{
    public function sampleMethod($a, $b = null)
    {
        if ($a === $b) {
            bar();
        } elseif ($a > $b) {
            $foo->bar($arg1);
        } else {
            BazClass::bar($arg2, $arg3);
        }
    }
  
    final public static function bar()
    {
        // method body
    }
}
```
```
<?php
namespace Vendor\Package;
  
use FooClass;
use BarClass as Bar;
use OtherVendor\OtherPackage\BazClass;
  
class ClassName extends ParentClass implements
    \ArrayAccess,
    \Countable,
    \Serializable
{
    // constants, properties, methods
}
```

```
<?php
namespace Vendor\Package;

class ClassName
{
    public $foo = null;
}
```

```
<?php
namespace Vendor\Package;

class ClassName
{
    public function fooBarBaz($arg1, &$arg2, $arg3 = [])
    {
        // method body
    }
}
```