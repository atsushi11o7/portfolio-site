import path from "node:path";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder"

export async function getImage(src) {
    if (src.startsWith('http')) {
        const res = await fetch(src);
        const buffer = Buffer.from(await res.arrayBuffer())
        return getPlaiceholder(buffer);
    } else {
        const buffer = await fs.readFile(path.join("./public", src));
        return getPlaiceholder(buffer);
    }
};