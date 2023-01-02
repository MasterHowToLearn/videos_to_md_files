import { readFileSync } from "fs";

export default function extractVideo(vidList) {
    let vidArr = [];
    const resArr = [];
    try {
        const rawStr = readFileSync(vidList, "utf8");

        // split each line into arr
        vidArr = rawStr.toString().split("\n");
        vidArr.pop(); // remove last item

        // every two element as one pair
        for (let i = 0; i < vidArr.length; i += 2) {
            resArr.push({ title: vidArr[i], url: vidArr[i + 1] });
        }
        return resArr;
    } catch (err) {
        console.error(err);
    }
}
