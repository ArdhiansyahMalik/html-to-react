// This file functions to tell the boiler plate to import the file in the src folder
module.exports = {
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"]
            }
        }
    }
};