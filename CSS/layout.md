< 기본 HTML 구성 >
-
```html
<div class = "wrapper">
	<div class = "main">
		<!-- 가변 영역 -->
	</div>
	<div class = "side">
		<!-- 고정 영역 -->
	</div>
</div>
```

1. < float + negative margin >
```css
.wrapper {
	overflow : hidden;
}
.main {
	float : left;
	width : 100 %;
	margin-right : -300px;
	padding-right : 300px;
	box-sizing : border-box;
}
.side {
	float : right;
	width : 300px;
}
```

2. < float + calc method >
```css
.wrapper {
	overflow : hidden;
}
.main {
	float : left;
	width : -webkit-calc (100 % - 300px);
	width : calc (100 % - 300px);
}
.side {
	float : right;
	width : 300px;
}
```

3. < Table >
```css
.wrapper {
	display : table;
	width : 100 %;
}
.main,
.side {
	display : table-cell;
	vertical-align : top;
	text-align : left;
}
.side {
	width : 300px;
}
```

4. < Flex Box >
```css
.wrapper {
	display : -webkit-flex;
	display : flex;
}
.main {
	-webkit-flex : 1;
	flex : 1;
}
.side {
	width : 300px;
}

```