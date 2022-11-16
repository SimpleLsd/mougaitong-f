// console.log(1);
import secret from "../../../secret.config.json"
// console.log(secret.abc);

import mongoose from "mongoose";

async function main() {
    await mongoose.connect("mongodb://sydliu_me_owner:sydliumelsd945@43.142.29.240:27017/sydliu_me")
};

main().catch(err => console.log(err));

const mainPageArticleSchema = new mongoose.Schema(
    {

    }
);

const mainPageArticle = mongoose.model("articles", mainPageArticleSchema);

const mainPageArticles = await mainPageArticle.find();

console.log(mainPageArticles);


export { }
