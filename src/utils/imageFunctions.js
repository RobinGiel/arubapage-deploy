// eslint-disable-next-line
// const regex = /^(.*[\\\/])(.*)/;
// const regex2 = /[^\/]*(.*)/;

export const imageRuba = function(arubiano) {
            try {
                return require('../images/eArubiano.PNG');
                // return (('https://arubapage.com/static/media/' + (regex.exec(arubiano._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url)[2]) + '.1'));
            } catch (e) {
                return require('../images/eArubiano.PNG');
            }
}

export const imageTest = function(boletin) {
            try {
                return require('../images/boletinHD.jpg');
                // return ('https://arubapage.com/static/media/' + (regex.exec(boletin._embedded['wp:featuredmedia'][0].source_url)[2]) + '.1');
            } catch (e) {
                return require('../images/boletinHD.jpg');
            }
}

export const imageBintiCuater = function (ora) {
                    try {
                        // return ('https://arubapage.com/static/media/' + (regex.exec(ora._embedded['wp:featuredmedia'][0].source_url)[2]) + '.1');
                        return require('../images/24ora.jpg');
                    } catch (e) {
                        return require('../images/24ora.jpg');
                    }
}

// export const imageSolo = function (solo) {
//                     try {
//                         return ('https://arubapage.com/static/media/' + (regex.exec(solo._embedded['wp:featuredmedia'][0].media_details['file'])[2]) + '.1');
//                     } catch (e) {
//                         return require('../images/boletinHD.jpg');
//                     }
// }

export const imageSports = function (sports) {
        let url = sports._embedded['wp:featuredmedia'][0].source_url;
                    try {
                        // return ('http:' + (regex2.exec(sports._embedded['wp:featuredmedia'][0].source_url)[1]));
                         return url.replace(/^https:\/\//i, 'http://');
                    } catch (e) {
                        return require('../images/297sport.JPG');
                    }
}