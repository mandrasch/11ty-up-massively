module.exports = function (eleventyConfig) {
    
    // copy assets and images folder to _site/ output
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/images");
    
    return {
        dir: {
            input: "src",
            output: "_site",
        },
        templateFormats: ["html", "md", "njk"]
    };
};