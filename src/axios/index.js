import jsonP from 'jsonp'
export default class Axios {
    static jsonp(options) {
         return new Promise ((resolve,rejects) => {
                jsonP(options.url,{
                    param: 'callback'
                },function (err,response) {
                    // todo 
                    if (err) {
                        rejects(err)
                    } else {
                        resolve(response)
                    }
                })
         })
     }
}