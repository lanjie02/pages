const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 设置CORS头部，允许跨域请求
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// 定义一个接口，返回脑图数据
app.get('/api/mindmap', (req, res) => {
    const data = [
        {"id": "root", "isroot": true, "topic": "jsMind"},
        {"id": "sub1", "parentid": "root", "topic": req.query.sub1 || "sub1"},
        {"id": "sub2", "parentid": "root", "topic": req.query.sub2 || "sub2"},
        {"id": "sub3", "parentid": "root", "topic": req.query.sub3 || "sub3"}
    ];
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
