PSR-1 Basic Coding Standard
==

- `<?php` 또는 `<?=` 사용
- PHP 파일은 BOM 없는 UTF-8 사용
- namespace, class 는 auto-load 을 사용해야된다.
- class 이름은 StudlyCaps
- class Method 이름은 camelCase

```
<?php

namespace Vendor\Model;
  
class Foo
{
    const VERSION = '1.0';
    const DATE_APPROVED = '2012-06-01';
    
    public function getFoo()
    {
    }
}
```