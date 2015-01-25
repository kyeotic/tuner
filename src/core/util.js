export class Util {
    static toQueryString(obj) {
      var str = "",
          seperator = "";
      for (var key in obj) {
        str += seperator;
        str += encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
        seperator = "&";
      }
      return str;
    }
}
