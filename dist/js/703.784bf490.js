"use strict";(self["webpackChunkproject_pa"]=self["webpackChunkproject_pa"]||[]).push([[703],{703:function(a,s,t){t.r(s),t.d(s,{default:function(){return E}});var e=t(641),n=t(33);const c={class:"container-fluid p-0"},r=(0,e.Lk)("h1",{class:"h3 mb-3"},[(0,e.Lk)("strong",null,"Layanan Jasa")],-1),l={class:"row mb-3",id:"layanan"},i={class:"row mb-3",id:"layanan"},d={class:"card",style:{width:"18rem"}},k={class:"img-container"},o=["src"],m={class:"card-body"},u={class:"card-title"},L={class:"card-text"},g={key:0,class:"col-md-4"},p=(0,e.Lk)("div",{class:"card",style:{width:"18rem"}},[(0,e.Lk)("div",{class:"card-body"},[(0,e.Lk)("h5",{class:"card-title"},"Data Kosong"),(0,e.Lk)("p",{class:"card-text"},"Tidak ada data yang tersedia.")])],-1),h=[p];function y(a,s,t,p,y,v){return(0,e.uX)(),(0,e.CE)("div",c,[r,(0,e.Lk)("div",l,[(0,e.Lk)("div",i,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(y.layananList,((a,s)=>((0,e.uX)(),(0,e.CE)("div",{class:"col-md-4",key:s},[(0,e.Lk)("div",d,[(0,e.Lk)("div",k,[(0,e.Lk)("img",{src:v.getImageUrl(a.gambar),alt:"Gambar",class:"card-img-top fixed-size"},null,8,o)]),(0,e.Lk)("div",m,[(0,e.Lk)("h5",u,"Servis "+(0,n.v_)(a.layanan),1),(0,e.Lk)("p",L,(0,n.v_)(a.deskripsi),1)])])])))),128)),y.layananList.length%3!==0?((0,e.uX)(),(0,e.CE)("div",g,h)):(0,e.Q3)("",!0)])])])}var v=t(911),b=t.n(v),f=t(250),w={name:"LayananPembeli",mounted(){b().replace(),this.getData()},data(){return{layananList:[],gambar:""}},methods:{onFileChange(a){const s=a.target.files[0];this.gambar=s},getImageUrl(a){return`https://umkmbackend.pjjaka.com/${a}`},async getData(){try{const a=await f.A.get("https://umkmbackend.pjjaka.com/api/nama-elektronik");this.layananList=a.data}catch(a){console.error(a)}}}},C=t(262);const j=(0,C.A)(w,[["render",y]]);var E=j}}]);
//# sourceMappingURL=703.784bf490.js.map