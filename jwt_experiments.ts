import { create } from "https://deno.land/x/djwt@v2.2/mod.ts";

const jwt = await create({ alg: "HS512", typ: "JWT" }, { foo: "bar" }, "secret");

console.log(jwt)