// Cathing erros and showing default
export const imageErrorCheck = function(provider) {
  const regEx = /[-a-zA-Z0-9@:%_.~#?&=]{2,256}\.[a-z]{2,4}/;
  const link = regEx.exec(provider.link);

  if (link[0] === "arubanative.com") {
    try {
      return provider._embedded["wp:featuredmedia"][0].media_details.sizes.full
        .source_url;
    } catch (e) {
      return require("../images/arubaNative.PNG");
    }
  } else if (link[0] === "www.bondia.com") {
    try {
      return provider._embedded["wp:featuredmedia"][0].media_details.sizes.full
        .source_url;
    } catch (e) {
      return require("../images/bondia.PNG");
    }
  } else if (link[0] === "focus.aw") {
    try {
      return provider._embedded["wp:featuredmedia"][0].media_details.sizes.full
        .source_url;
    } catch (e) {
      return require("../images/focus.PNG");
    }
  } else if (link[0] === "xclusivomagazine.com") {
    try {
      return provider._embedded["wp:featuredmedia"][0].media_details.sizes.full
        .source_url;
    } catch (e) {
      return require("../images/focus.PNG");
    }
  } else if (link[0] === "earubianonews.com") {
    try {
      return provider._embedded["wp:featuredmedia"][0].media_details.sizes.full
        .source_url;
    } catch (e) {
      return require("../images/eArubiano.PNG");
    }
//   } else if (link[0] === "www.awemainta.com") {
//     try {
//       return provider.jetpack_featured_media_url;
//     } catch (e) {
//       return require("../images/aweMainta.PNG");
//     }
  } else if (link[0] === "awe24.com") {
    const regImage = /src\s*=\s*"(.+?)"/;
    try {
      return regImage.exec(provider.content.rendered)[1];
    } catch (e) {
      return require("../images/awe.PNG");
    }
  } else if (link[0] === "www.297sports.com") {
    try {
      return provider._embedded["wp:featuredmedia"][0].media_details.sizes.full
        .source_url;
    } catch (e) {
      return require("../images/coolFm.png");
    }
  } else if (link[0] === "www.diario.aw") {
    try {
      return provider._embedded["wp:featuredmedia"][0].media_details.sizes.full
        .source_url;
    } catch (e) {
      return require("../images/diario.PNG");
    }
  } else if (link[0] === "masnoticia.com") {
    try {
      return provider._embedded["wp:featuredmedia"][0].media_details.sizes.full
        .source_url;
    } catch (e) {
      return require("../images/masnoticia.PNG");
    }
  } else if (link[0] === "solodipueblo.com") {
    try {
      //   return (provider._embedded['wp:featuredmedia'][0].media_details['file']);
      return require("../images/soloDefaultimg.jpg");
    } catch (e) {
      return require("../images/soloDefaultimg.jpg");
    }
  } else if (link[0] === "www.visitaruba.com") {
    try {
      return provider._embedded["wp:featuredmedia"][0].media_details.sizes.full
        .source_url;
    } catch (e) {
      return require("../images/batiBlekiHD.PNG");
    }
  } else if (link[0] === "xclusivomagazine.com") {
    try {
      return provider._embedded["wp:featuredmedia"][0].media_details.sizes.full
        .source_url;
    } catch (e) {
      return require("../images/focus.PNG");
    }
  }
};
