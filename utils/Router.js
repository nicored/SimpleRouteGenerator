import config from '../config/config.js';
import * as routes from '../config/ConstRoutes.js';

export default class Router {
    generate(method, name, data = {}) {
        let pathKey = config.env === 'dev' ? 'dev_url' : 'symfo_path';
        if (this.exists(method, name)) {
            let url = routes[method][name][pathKey];

            if (config.env === 'dev') {
                return this.passDataToUrl(url, data);
            } else {
                // For Symfony2
                return Routing.generate(url, data);
            }
        } else {
            console.error('Route named ' + name + ' for ' + method + ' request does not exist');
            return null;
        }
    }

    getUrlParams(url) {
        let params = [];
        let match;
        while (match = /\{(.*?)\}/g.exec(url)) {
            params.push(match[1].trim());
            url = url.replace('{' + match[1] + '}');
        }
        return params;
    }

    exists(method, name) {
        return is.existy(routes[method]) && is.existy(routes[method][name]);
    }

    passDataToUrl(url, data) {
        let params = this.getUrlParams(url);
        let parsedUrl = url;

        for (let k in data) {
            if (_.indexOf(params, k.trim()) !== -1) {
                let reg = new RegExp('\{\\s*' + k + '\\s*\}');
                parsedUrl = parsedUrl.replace(reg, data[k]);
            }
        }

        let leftParams = this.getUrlParams(parsedUrl);
        if (leftParams.length > 0) {
            throw new Error('Generating url ' + url + ' failed. Parameter(s) ' + leftParams.join(', ') + ' missing.');
        }

        return parsedUrl;
    }
}
