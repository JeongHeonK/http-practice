### 컨텐츠 협상

- 서버는 다양한 클라이언트에 적합한 자원을 제공해야한다.
- 컨텐스 협상에 사용되는 HTTP 헤더와 동작 방식

#### 컨텐츠 타입

- Accept 요청 헤더, Content-type 응답 헤더

```
Accept: text/html
Content-Type: text/html
```

- express.js의 res.format에서 설정가능

#### 압축

- Accept-Encoding 요청 헤더, Content-Encoding 응답 헤더

```
Accept-Encoding: gzip
Content-Encoding: gzip
```

#### 언어

- Accept-Language 요청 헤더

```
Accept-Language: ko
```

#### 사용자 에이전트

- User-Agent 요청 헤더
```
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X **_*5_*) AppleWebKit/***.36 (KHTML, like Gecko) Chrome/***.0.0.0 Safari/***.3*
```

- 사례: 구형 브라우저 (현재 개발 중인 app mobile환경 서버에서 제한걸게 할 수 있을 듯)

