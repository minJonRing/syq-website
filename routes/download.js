const router = require("koa-router")();
const fs = require("fs");
const path = require("path");
const util = require("util");

const readFile = util.promisify(fs.readFile);

router.get("/app/downloadPdf", async (ctx, next) => {
  ctx.set(
    "Content-Disposition",
    `attachment; filename=${encodeURI("拱墅汽车互联网小镇政策扶持汇编和举措——特色小镇申报")}.pdf`
  );
  ctx.set("Content-Type", "application/pdf");
  try {
    const file = await readFile(
      path.resolve(__dirname, "../public/static/img/1.pdf")
    );
    return (ctx.body = new Buffer(file));
  } catch (err) {
    return;
  }
});

module.exports = router;
