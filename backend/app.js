import express from "express";
const app = express();
const port = 8085;
import * as Minio from "minio";

const base = "minio";
const accessKey = "cTFt3vf1qXovfuUwX4ka";
const secretKey = "rZpvY4PxDiYlJQb1OWvCnqS24okJnlDTUyrdjCo8";

const client = new Minio.Client({
  endPoint: base,
  port: 9000,
  useSSL: false,
  accessKey,
  secretKey,
});

const router = express.Router();

router.get("/", (req, res) => {
  client.putObject("test-bucket", "text.txt", "asddsa");
  res.send("123 NEW TEST");
  return "aaaaaaaaaaaaaaaaaaaaaaa";
});

app.use("/api/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
