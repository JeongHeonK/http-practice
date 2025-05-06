import http, { IncomingMessage } from "http";

// node 명령어에 접근 가능함
// process.env 이런 것들이 모두 Node 전역 변수 였구나.
// 이제야 알았구나..ㅎ
const url = process.argv[2];

if (!url) {
  console.error("Usage: pnpm run client <url>");
  process.exit();
}

const options = new URL(`http://localhost:3000/${url}`);

const handler = (res: IncomingMessage) => {
  const data: string[] = [];

  res.on("data", (chunk: string) => {
    data.push(chunk.toString());
  });

  res.on("end", () => {
    console.log(data.join(""));
  });
};

const req = http.request(options, handler);

// end()로 서버 요청 보내게 됨.
req.end();
