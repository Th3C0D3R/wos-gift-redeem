const fs = require(`fs`),
    path = require(`path`);

/** @type {Array} */
var idFile = path.join(__dirname, 'ids.json');
/** @type {Array} */
var ids = JSON.parse(fs.readFileSync(idFile)) ?? [];

/** @type {Array} */
var paramIds = process.argv.slice(2) ?? [];
paramIds = paramIds.map(function (x) {
    return parseInt(x, 10);
});

if (paramIds.length > 0) {
    ids["ids"] = ids["ids"].concat(paramIds);
    ids["ids"].sort(function (a, b) {
        return a - b;
    });

    ids["ids"] = [...new Set(ids["ids"])];

    fs.writeFileSync(idFile, JSON.stringify(ids, null, 4));

    console.log(ids["ids"].length);
}