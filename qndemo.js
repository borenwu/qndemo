/**
 * Created by Administrator on 2017/10/23.
 */

// 七牛云模块 这个需要下载 cnpm i qn -S
// 文档地址 https://github.com/node-modules/qn
var qn = require('qn');
// 空间名
var bucket = 'ntboao';
// 七牛云配置
var client = qn.create({
// 秘钥在控制模板->个人中心->密钥管理中可以看到
    accessKey: 'rsnQ1mPiWJwthOmbSSIfwvsKkNX0ZzTrISaLMlM0',
    secretKey: 'Gu00U4X8-KUgHIAybg4TeeZnhjRX5d7-Dn8Jo89M',
// 空间名
    bucket: bucket,
// 这个是你要生成的前缀（你的外链地址，可以在空间中查看）
// 其实写不写都行，不写后面也得写.
    origin: 'oy98650kl.bkt.clouddn.com'
})

// 构建图片名 这个主要是生成唯一图片名字利于存储
var fileName = 'devices.jpg';
// 构建图片路径 需要在上一层目录下新建一个image
var filePath = './imgs/' + fileName;

client.uploadFile(filePath, {key: `/ads/${fileName}`}, function (err1, result) {
    if (err1) {
        oy98650kl.bkt.clouddn.com/ads/devices.jpg
        console.log(err1)

    } else {
        console.log('success')
        console.log(result)
    }
});



