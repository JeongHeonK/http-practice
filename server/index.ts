import http, { type IncomingMessage, type ServerResponse } from 'node:http';
import path from 'node:path';

//type module로 실행 시, 하기 코드 필요
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ES 모듈로 실행될 경어 CommonJs 전용 전역 변수 사용 불가(__dirname, __filename 등)
// 이래서 node 사용할 때 require문 사용 한 듯.
// 깊게 안 해보고 깔짝 했으니 알리가 있나..

const staticServer = (req: IncomingMessage, res: ServerResponse) => {
	if (!req.url) return;

	const filePath = path.join(__dirname, 'public', req.url);

	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.write('Not Found\n');
			res.end();
			return;
		}

		res.write(data);
		res.end();
	});
};

const handler: http.RequestListener = (req, res) => {
	return staticServer(req, res);
};

const server = http.createServer(handler);
server.listen(3000, () => console.log('server started'));
