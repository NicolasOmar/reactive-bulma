module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-typescript"],
  overrides: [
    {
      test: /\.tsx$/,
      presets: ["@babel/preset-react"],
    },
  ],
}