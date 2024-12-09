import { createApp } from "./config.js";

const app = createApp({
  user: "timthi",
  host: "bbz.cloud",
  database: "timthi",
  password: "X4/xh69K]V;uQ)Ap",
  port: 30211,
});

/* Startseite */
app.get("/", async function (req, res) {
  if (!req.session.userid) {
    res.redirect("/login");
    return;
  }
  res.render("start", {});
});

app.get("/impressum", async function (req, res) {
  res.render("impressum", {});
});

/* Wichtig! Diese Zeilen müssen immer am Schluss der Website stehen! */
app.listen(3010, () => {
  console.log(`Example app listening at http://localhost:3010`);
});
