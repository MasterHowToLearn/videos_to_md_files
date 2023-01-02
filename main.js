import createMD from "./src/createMD.js";
import extractVideo from "./src/extractVideoList.js";

const videoList = "./video_list.txt";
const outputDir = "./output";

const main = () => {
    try {
        const videoArr = extractVideo(videoList);
        createMD(videoArr, outputDir);
    } catch (error) {
        console.log(error);
    }
};

main();
