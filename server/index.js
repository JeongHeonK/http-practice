import http from "http";

const contents = `HTTP response
1. basic
  1.1 어쩌다 이것까지
  1.2 이럴줄 알았음 풀스택까진 안 했지

2. Web Browser
  2.1 Content Negotiation
  2.2 Cookie
`;

const handler = (req, res) => {
  res.write(contents);
  // 종료 응답을 클라이언트에게 전달
  res.end();
};

const server = http.createServer(handler);
server.listen(3000, () => console.log("server started"));
