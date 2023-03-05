# DataFormat #XML

## XML(Extensible Markup Language)

**Tag**로 이루어진 구조의 데이터를 의미

### 예시

```XML
<?xml version="1.0" encoding="UTF-8"?>
<IDOL>
    <group> NewJeans </group>
    <members>
        <member>
            <name>민지</name>
            <age>20</age>
        </member>
        <member>
            <name>하니</name>
            <age>20</age>
        </member>
        ...
    </members>
</IDOL>
```

```XML
<?xml version="1.0" encoding="UTF-8"?>
```

프롤로그로 version 과 encoding을 명시

```XML
<IDOL>
...
</IDOL>
```

**Root Tag**는 최상위에 태그로 하나만 사용이 가능

### 특징

- Tag를 사용하여 열고 닫고를 반복하기에 JSON과 비교하였을 때 무거움
- JavaScript Object로 변환하기 위해서 JSON 보다 많은 노력이 필요
- 기본 제공 Tag Name이 없음
- 대표적으로 SEO에 사용되는 `sitemap.xml`에 사용
