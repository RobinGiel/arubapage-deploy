import React from "react"
import NewsItem from '../components/NewsItem';
import { imageErrorCheck } from "../utils/imageErrorCheck";
import { imageBintiCuater, imageSports} from "../utils/imageFunctions";

export const formatNewsSources = (services) => {
   let noticiaCla = services.noticiaCla && services.noticiaCla.map((cla, index) => {
        return (
            <NewsItem key={index} index={index} cla={cla} />
        )
    })

    let awe24 = services.awe24 && services.awe24.map((awe, index) => {
        return (
            <NewsItem key={index} index={index} newsSource={awe} provider="awe24.com" imgFunction={imageErrorCheck(awe)} />
        )
    })
    // e arubiano Crawl for images!
    let eArubianoNews = services.eArubianoNews && services.eArubianoNews.map((arubiano, index) => {
        return (
            <NewsItem key={index} index={index} newsSource={arubiano} provider="earubianonews.com" imgFunction={imageErrorCheck(arubiano)} />
        )
    })
    //awe mainta
    // let aweMainta = services.aweMainta && services.aweMainta.map((mainta, index) => {
    //     return (
    //         <NewsItem key={index} index={index} newsSource={mainta} provider="awemainta.com" imgFunction={imageErrorCheck(mainta)} />
    //     )
    // })
    //boletin extra Crawl for images!
    // let boletinExtra =  services.boletinExtra && services.boletinExtra.map((boletinExtra, index) => {
    //     return (
    //         <NewsItem key={index} index={index} newsSource={boletinExtra} provider="boletinextra.com" imgFunction={imageTest(boletinExtra)} />
    //     )
    // })

    //24ora Crawl for images!
    let bintiCuatroOra = services._24ora && services._24ora.map((ora, index) => {
        return (
            <NewsItem key={index} index={index} newsSource={ora} provider="24ora.com" imgFunction={imageBintiCuater(ora)} />
        )
    })
    //masnoticia
    let masNoticia = services.masNoticia && services.masNoticia.map((masNoticia, index) => {
        return (
            <NewsItem key={index} index={index} newsSource={masNoticia} provider="masnoticia.com" imgFunction={imageErrorCheck(masNoticia)} />
        )
    })
    //diario
    let diario = services.diario && services.diario.map((diario, index) => {
        return (
            <NewsItem key={index} index={index} newsSource={diario} provider="diario.aw" imgFunction={imageErrorCheck(diario)} />
        )
    })
    //aruba native
    let arubaNative = services.arubaNative && services.arubaNative.map((arubaNative, index) => {
        return (
            <NewsItem key={index} index={index} newsSource={arubaNative} provider="arubanative.com" imgFunction={imageErrorCheck(arubaNative)} />
        )
    })
    //solo di pueblo
    let solo = services.solo && services.solo.map((solo, index) => {
        return (
            <NewsItem key={index} index={index} newsSource={solo} provider="solodipueblo.com" imgFunction={imageErrorCheck(solo)} />
        )
    })
    //bon dia aruba
    let bondia = services.bonDia && services.bonDia.map((bondia, index) => {
        return (
            <NewsItem key={index} index={index} newsSource={bondia} provider="bondia.com" imgFunction={imageErrorCheck(bondia)} />
        )
    })
    //focus
    let focus = services.focus && services.focus.map((focus, index) => {
        return (
            <NewsItem key={index} index={index} newsSource={focus} provider="focus.aw" imgFunction={imageErrorCheck(focus)} />
        )
    })
    //visit aruba
    let visitAruba = services.batiBleki && services.batiBleki.map((visitAruba, index) => {
        return (
            <NewsItem key={index} index={index} newsSource={visitAruba} provider="visitaruba.com" imgFunction={imageErrorCheck(visitAruba)} />
        )
    })
    //297sports
    let sports = services.sports && services.sports.map((sports, index) => {
        return (
            <NewsItem key={index} index={index} newsSource={sports} provider="297sports.com" imgFunction={imageSports(sports)} />
        )
    })
    //xclusivo 
    let xclusivo = services.xclusivo && services.xclusivo.map((xclusivo, index) => {
        return (
            <NewsItem key={index} index={index} newsSource={xclusivo} provider="xclusivomagazine.com" imgFunction={imageErrorCheck(xclusivo)} />
        )
    })

    let formattedNewsSources = [masNoticia, arubaNative, noticiaCla, awe24, bondia, diario, bintiCuatroOra, eArubianoNews, solo, focus, visitAruba, sports, xclusivo];

    return formattedNewsSources;
}