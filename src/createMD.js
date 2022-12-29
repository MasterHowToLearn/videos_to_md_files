import { writeFileSync } from "fs";
import template from "./mdTemplate.js";

export default function massCreateMd(vidArr, outputDir) {
  try {
    vidArr.forEach(({ title, url }) => {
      // only ASCII characters are allowed
      title = title.replace(/[^\x00-\x7F]/g, "");
      // remove special symbols
      title = title.replace(/[^a-zA-Z0-9 ]/g, "");

      writeFileSync(
        outputDir + "/" + title + ".md",
        template(title, url),
        { flag: "w+" },
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
      console.log(outputDir + "/" + title + ".md");
    });
  } catch (error) {
    console.log(error);
  }
}
