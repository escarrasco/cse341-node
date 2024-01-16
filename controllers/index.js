const nameFunction = (req, res, next) => {
    res.json('Olivia');
};

const moreNames = (req, res, next) => {
    res.json('Max & Dom');
};

module.exports = {nameFunction, moreNames};