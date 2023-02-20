const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/* This is creating a new schema for the post. */
const postSchema = new Schema(
  {
    username: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema); /* MongoDB'deki "COLLECTION NAME" kısmını eğer belirtmezsek default 1. parametrenin çoğulu olarak oluşturur.
                                                        ANCAK; 3. paremtrede yazılan değer COLLECTION NAME olarak MongoDB'de YAZILIR. */