"use strict";(self["webpackChunkproject_pa"]=self["webpackChunkproject_pa"]||[]).push([[418],{418:function(a,n,s){s.r(n),s.d(n,{default:function(){return N}});var e=s(641),l=s(33);const i={class:"navbar navbar-expand-lg bg-dark"},t={class:"container-fluid"},r=(0,e.Lk)("a",{class:"navbar-brand text-white",href:"#"},"Faiz Teknik Blitar",-1),c=(0,e.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e.Lk)("span",{class:"navbar-toggler-icon text-white"})],-1),d={class:"collapse navbar-collapse",id:"navbarSupportedContent"},k={class:"navbar-nav ms-auto mb-2 mb-lg-0"},m=(0,e.Lk)("li",{class:"nav-item"},[(0,e.Lk)("a",{class:"nav-link active text-white","aria-current":"page",href:"#layanan"},"Layanan")],-1),o=(0,e.Lk)("li",{class:"nav-item"},[(0,e.Lk)("a",{class:"nav-link text-white",href:"#lokasi"},"Lokasi")],-1),b={class:"nav-item"},g={class:"container mt-5"},u={class:"row mb-3"},v=(0,e.Lk)("div",{class:"col-md-6"},[(0,e.Lk)("h1",{class:"display-4"},"FAIZ TEKNIK"),(0,e.Lk)("p",{class:"lead"},' "Di Faiz Teknik, kami tidak hanya memperbaiki perangkat elektronik rumah tangga Anda, kami merawatnya dengan penuh perhatian agar kembali berfungsi seperti baru. Layanan servis kami menghadirkan kehandalan dan kepercayaan untuk memastikan kelancaran aktivitas rumah tangga Anda." '),(0,e.Lk)("hr",{class:"my-4"}),(0,e.Lk)("p"),(0,e.eW)(" > ")],-1),L={class:"col-md-6"},p=["src"],h={class:"row mb-3",id:"layanan"},y={class:"col-md-12 mb-3"},f=(0,e.Lk)("h1",{class:"display-4"},"Layanan Jasa",-1),w={class:"row mb-3",id:"layanan"},x={class:"row mb-3",id:"layanan"},C={class:"card",style:{width:"18rem"}},F={class:"img-container"},_=["src"],j={class:"card-body"},A={class:"card-title"},I={class:"card-text"},K={class:"row mb-3"},z={class:"col-md-12 mb-3"},S=(0,e.Lk)("h1",{class:"display-4"}," Silahkan Hubungi Kami dengan Klik Dibawah Ini ",-1),T=(0,e.Lk)("br",null,null,-1),D=(0,e.Lk)("a",{class:"btn btn-primary btn-lg",href:"#",role:"button"},"Hubungi Kami",-1),E=(0,e.Lk)("div",{class:"col-md-12",id:"lokasi"},[(0,e.Lk)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.013292073073!2d112.1683663147759!3d-8.098013494153073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b1!2sFaiz%20Teknik%20Blitar!5e0!3m2!1sid!2sid!4v1629783660734!5m2!1sid!2sid",width:"100%",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy"})],-1);function X(a,n,X,B,H,U){const W=(0,e.g2)("router-link"),G=(0,e.g2)("center");return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Lk)("nav",i,[(0,e.Lk)("div",t,[r,c,(0,e.Lk)("div",d,[(0,e.Lk)("ul",k,[m,o,(0,e.Lk)("li",b,[(0,e.bF)(W,{to:"/login",class:"nav-link text-white"},{default:(0,e.k6)((()=>[(0,e.eW)("Login")])),_:1})])])])])]),(0,e.Lk)("div",g,[(0,e.Lk)("div",u,[v,(0,e.Lk)("div",L,[(0,e.Lk)("img",{src:s(554),class:"img-fluid",alt:"Responsive image"},null,8,p)])]),(0,e.Lk)("div",h,[(0,e.Lk)("div",y,[(0,e.bF)(G,null,{default:(0,e.k6)((()=>[f])),_:1})]),(0,e.Lk)("div",w,[(0,e.Lk)("div",x,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(H.layananList,((a,n)=>((0,e.uX)(),(0,e.CE)("div",{class:"col-md-4",key:n},[(0,e.Lk)("div",C,[(0,e.Lk)("div",F,[(0,e.Lk)("img",{src:U.getImageUrl(a.gambar),alt:"Gambar",class:"card-img-top fixed-size"},null,8,_)]),(0,e.Lk)("div",j,[(0,e.Lk)("h5",A,"Servis "+(0,l.v_)(a.layanan),1),(0,e.Lk)("p",I,(0,l.v_)(a.deskripsi),1)])])])))),128))])])]),(0,e.Lk)("div",K,[(0,e.Lk)("div",z,[(0,e.bF)(G,null,{default:(0,e.k6)((()=>[S,T,D])),_:1})]),E])])])}var B=s(911),H=s.n(B),U=s(250),W={name:"LandingPage",mounted(){H().replace(),this.getData()},data(){return{layananList:[],gambar:""}},methods:{onFileChange(a){const n=a.target.files[0];this.gambar=n},getImageUrl(a){return`https://umkmbackend.pjjaka.com/${a}`},async getData(){try{const a=await U.A.get("https://umkmbackend.pjjaka.com/api/nama-elektronik");this.layananList=a.data}catch(a){console.error(a)}}}},G=s(262);const J=(0,G.A)(W,[["render",X]]);var N=J}}]);
//# sourceMappingURL=418.22ecae3c.js.map