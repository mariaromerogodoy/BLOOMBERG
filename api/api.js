export default async function handler(req, res) {
  const host = "live-stock-market.p.rapidapi.com";
  const url = `https://${host}/v1/index/chart?symbol=%5EFTSE&interval=1d&range=ytd`;

  const r = await fetch(url, {
    headers: {
      "x-rapidapi-host": host,
      "x-rapidapi-key": process.env.RAPIDAPI_KEY   // do NOT hardcode
    }
  });

  const txt = await r.text();
  res
    .status(r.status)
    .setHeader("content-type", r.headers.get("content-type") || "application/json")
    .send(txt);
}
