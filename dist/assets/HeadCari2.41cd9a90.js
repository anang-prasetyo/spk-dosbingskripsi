import{_ as ee,d as N,a as E,u as ae,r as C,z as te,b as t,e as i,i as e,f as a,n,j as v,C as x,D as _,h,F as P,A as j,t as p,k as w,s as W,B as k,v as ie,x as se}from"./index.772c5328.js";import{u as ne}from"./DataService.5f1e1429.js";import{u as le,L as I}from"./LoadingComponent.a285501b.js";import{u as de}from"./OtherFunctions.92fbf448.js";import{s as oe}from"./sweetalert.min.b2bbc6aa.js";import"./vue-spinner-tail.26a20ac7.js";const m=s=>(ie("data-v-19471c9c"),s=s(),se(),s),re={class:"pt-1",id:"cari"},me={key:0,class:"py-5"},ue={key:0,style:{margin:"6rem 0"}},ke={key:1,class:"content"},ce={class:"px-5"},pe=m(()=>e("div",{class:"text-semi-bold text-15 has-text-centered mb-5"},"Perhatian",-1)),he=m(()=>e("div",{class:"paragraph has-text-centered",style:{"max-height":"50vh",overflow:"auto"}},[e("p",null,"Fitur ini dikhususkan untuk Mahasiswa, tetapi anda tetap bisa mencobanya.")],-1)),ge={class:"mt-5"},ye={key:2,class:"content"},ve={class:"px-5"},be=W('<div class="text-semi-bold text-15 has-text-centered mb-5" data-v-19471c9c>Perhatian</div><div class="paragraph" style="max-height:50vh;overflow:auto;" data-v-19471c9c><p data-v-19471c9c>Akan ada <b data-v-19471c9c>3</b> langkah dalam mencari rekomendasi dosen pembimbing skripsi yang sesuai minat kamu, yaitu : </p><p data-v-19471c9c><b data-v-19471c9c>Pertama</b>, kamu harus mengisi judul dan deskripsi skripsi. <b data-v-19471c9c>Kedua</b>, kamu harus memilih kriteria apa saja yang kamu perlukan. <b data-v-19471c9c>Ketiga</b>, kamu akan diberikan rekomendasi dosen pembimbing skripsi, kamu bisa langsung menghubungi dosbing terkait setelah proses pencarian selesai.</p><p data-v-19471c9c>Apapun hasil yang kamu terima hanya sebatas rekomendasi, bukan suatu keharusan. Keputusan akhir menentukan dosen pembimbing skripsi kembali lagi kepada kamu.</p><p data-v-19471c9c><i data-v-19471c9c>*kamu bisa melakukan pencarian lebih lanjut di menu SAW dengan pilihan kriteria yang lebih banyak dan bisa dikustomisasi!</i></p></div>',2),xe={class:"mt-5"},_e={key:3},fe={key:0},Me=m(()=>e("div",{class:"px-5"},[e("span",null,"1/3"),e("div",{class:"text-semi-bold text-125"},"Detail Skripsi")],-1)),we={class:"mt-3 mb-2 px-5 pb-4",style:{"max-height":"50vh",overflow:"auto"}},De=m(()=>e("div",{class:"mb-2"},"Judul Skripsi",-1)),Se={key:2,class:"label-my--alert"},Ce=m(()=>e("div",{class:"mt-4 mb-2"},"Deskripsi",-1)),Pe={key:2,class:"label-my--alert"},je={class:"px-5"},Le={key:1,class:"py-3 button-my primary flex disable"},Ae={key:4},Ue={class:"content"},Ke={class:""},Te=W('<div class="px-5" data-v-19471c9c><div class="block has-text-centered" data-v-19471c9c><div class="text-15 text-semi-bold mb-5" data-v-19471c9c>Oops</div><p class="" data-v-19471c9c>Kamu sudah punya dokumen SAW, perlu diketahui bahwa setiap pengguna hanya bisa memiliki satu dokumen SAW. Hapus dokumen SAW dengan cara klik tombol <b data-v-19471c9c>Ulangi Pencarian</b> untuk memulai pencarian baru.</p><p class="" data-v-19471c9c><b data-v-19471c9c>Lihat Hasil</b> jika kamu ingin melihat hasil pencarianmu sebelumnya. Atau jika ingin mengulangi proses pencarian dosen pembimbing skripsi, kamu bisa klik tombol <b data-v-19471c9c>Ulangi Pencarian</b>.</p></div></div>',1),Ve={class:"mt-6 px-5"},$e={key:5},Be={class:"px-5"},He={key:0},Ne={key:1},Ee=m(()=>e("div",{style:{display:"flex",gap:".5rem"}},[e("div",{class:"text-semi-bold text-125"},"Kriteria Dosen"),e("div",{class:"text-085"},"*3 kriteria teratas")],-1)),Ie={class:"mt-3 mb-2 px-5 pb-4",style:{"max-height":"50vh",overflow:"auto"}},We={key:0},Fe={class:"my-2"},Oe={class:"px-5"},Re={key:2,class:"py-3 button-my primary disable flex mb-2"},ze={key:6},Je={class:"mt-3 mb-5 px-5",style:{"max-height":"50vh",overflow:"auto"}},qe={class:"has-text-centered",style:{display:"flex","flex-direction":"column",gap:"2rem"}},Ge={class:"table-my",style:{"max-height":"25vh"}},Qe=m(()=>e("td",null,"No",-1)),Xe=m(()=>e("td",null,"Alternatif Dosbing Skripsi",-1)),Ye=m(()=>e("td",null,"Total Nilai",-1)),Ze=[Qe,Xe,Ye],ea={class:""},aa=k(" Kamu direkomendasikan memilih "),ta=k(" sebagai dosen pembimbing skripsi. "),ia={class:""},sa=k("Segera "),na=m(()=>e("b",null,"Tanya Dosen",-1)),la=k(" apakah "),da=k(" mau menjadi dosen pembimbing kamu. Klik tombol "),oa=m(()=>e("b",null,"Ulangi Pencarian",-1)),ra=k(" jika kamu ingin mengulangi proses pencarian dosen pembimbing skripsi. Klik tombol "),ma=m(()=>e("b",null,"Detail Perhitungan",-1)),ua=k(" untuk melihat proses perhitungan secara detail."),ka={class:"px-5"},ca={key:7},pa={class:"px-5"},ha={key:0},ga={key:1},ya=m(()=>e("div",{class:"text-semi-bold text-125"},"Hasil",-1)),va={class:"mt-3 mb-2 px-5 pb-4",style:{"max-height":"50vh",overflow:"auto"}},ba={key:0,class:"block has-text-centered"},xa=m(()=>e("div",{class:"text-semi-bold text-125 mb-4"},"Selamat!",-1)),_a={class:"paragraph"},fa=k(" Kamu direkomendasikan memilih "),Ma=k(" sebagai dosen pembimbing skripsi. "),wa=k(" Segera "),Da=m(()=>e("b",null,"Tanya Dosen",-1)),Sa=k(" apakah "),Ca=k(" mau menjadi dosen pembimbing kamu. Klik tombol "),Pa=m(()=>e("b",null,"Detail Perhitungan",-1)),ja=k(" untuk melihat proses perhitungan secara detail. Klik tombol "),La=m(()=>e("b",null,"Ulangi Pencarian",-1)),Aa=k(" jika kamu ingin mengulangi proses pencarian dosen pembimbing skripsi. "),Ua=m(()=>e("div",{class:"mt-3"},"Rekomendasi lainnya :",-1)),Ka={style:{"max-height":"10vh",overflow:"auto"}},Ta={class:"px-5"},Va={key:8,style:{margin:"6rem 0"}},$a={__name:"HeadCari2",props:{lightMode:Boolean},emits:{unvalidatedEvent:null,isCloseModal:()=>!0},setup(s,{emit:F}){const{apaSudahHitungSaw:f,rangkingAlternatif:o,lists:O,getSubCollectionDocSaw:R,handleCustomChanges:z,deleteTempDataSaw:L,toEksekusiTahapan1:J,eksekusiTahapan2:q,newSawName:A,logMsg:U}=le(),G=N(()=>E(()=>import("./SelectSingle.88bae576.js"),["assets/SelectSingle.88bae576.js","assets/SelectSingle.1b664762.css","assets/index.772c5328.js","assets/index.0fa03077.css"])),{userSkripsi:g,addUserSkripsi:K,editProfile:u,getUserData:D,thisUser:c}=ae(),{kriteriaPart1:Q}=ne(),{delay:X}=de(),Y=N(()=>E(()=>import("./AddIcon.cfa92cee.js"),["assets/AddIcon.cfa92cee.js","assets/index.772c5328.js","assets/index.0fa03077.css"])),r=C(0),b=C(!1),T=C(!0),Z=()=>{T.value=!1,F("isCloseModal",T.value)},V=async()=>{b.value=!0,await D(),await X(500),await R().then(()=>b.value=!1)},$=async()=>{b.value=!0,await J().then(()=>b.value=!1)},B=async()=>{r.value=3,console.log(r.value),b.value=!0,await q().then(()=>b.value=!1)},S=()=>{oe({title:"Hitung ulang SAW?",text:"Dokumen SAW kamu saat ini akan dihapus dan akan dibuatkan dokumen yang baru.",buttons:["Batal","Hitung Ulang"],dangerMode:!0}).then(H=>{H&&(c.value.user.userLevel==="Mahasiswa"?(r.value=1,L(),D()):(r.value=2,L(),D()))})};return(H,l)=>{const M=te("router-link");return t(),i("div",re,[e("div",{class:n(["",s.lightMode?"light-mode-bg light-mode-dialog-my":"dark-mode-bg dark-mode-dialog-my"])},[a(c)?(t(),i("div",me,[e("div",{class:n(["close",s.lightMode?"light-mode-bg":"dark-mode-layout"]),onClick:l[0]||(l[0]=d=>Z())},[v(a(Y),{style:{transform:"rotate(45deg)"}})],2),e("div",null,[b.value?(t(),i("div",ue,[v(I,{"light-mode":s.lightMode,msg:a(U)},null,8,["light-mode","msg"])])):r.value===0&&a(c).user.userLevel!=="Mahasiswa"?(t(),i("div",ke,[e("div",ce,[pe,he,e("div",ge,[e("div",{class:n(["py-3 button-my glow primary-glow flex mb-2",s.lightMode?"primary":"dark-primary"]),onClick:l[1]||(l[1]=d=>(r.value=2,V(),$()))},"Mengerti",2)])])])):r.value==0&&a(c).user.userLevel==="Mahasiswa"?(t(),i("div",ye,[e("div",ve,[be,e("div",xe,[e("div",{class:n(["py-3 button-my glow primary-glow flex mb-2",s.lightMode?"primary":"dark-primary"]),onClick:l[2]||(l[2]=d=>(r.value=1,V()))},"Mengerti",2)])])])):r.value==1&&a(f)==="belum"?(t(),i("div",_e,[a(u)?(t(),i("div",fe,[Me,e("div",we,[e("div",null,[De,a(u).isSkripsi===!0?(t(),i("div",{key:0,class:n(["input-my",[s.lightMode?"light-mode-input-my":"dark-mode-input-my",a(c).progres.isDosbing?"":"border-bottom-primary"]])},[a(c).progres.isDosbing?x((t(),i("input",{key:1,type:"text",class:n(["input-my--input",s.lightMode?"light-mode-input-my--input":"dark-mode-input-my--input"]),"onUpdate:modelValue":l[4]||(l[4]=d=>a(u).skripsi.judul=d),readonly:""},null,2)),[[_,a(u).skripsi.judul]]):x((t(),i("input",{key:0,type:"text",class:n(["input-my--input",s.lightMode?"light-mode-input-my--input":"dark-mode-input-my--input"]),"onUpdate:modelValue":l[3]||(l[3]=d=>a(u).skripsi.judul=d),placeholder:"Masukkan judul skripsi"},null,2)),[[_,a(u).skripsi.judul]])],2)):(t(),i("div",{key:1,class:n(["input-my border-bottom-primary",s.lightMode?"light-mode-input-my":"dark-mode-input-my"])},[x(e("input",{type:"text",class:n(["input-my--input",s.lightMode?"light-mode-input-my--input":"dark-mode-input-my--input"]),"onUpdate:modelValue":l[5]||(l[5]=d=>a(g).judul=d),placeholder:"Masukkan judul skripsi"},null,2),[[_,a(g).judul]])],2)),a(c).progres.isDosbing?(t(),i("div",Se,"Judul Skripsi tidak bisa diubah karena kamu sudah mendapat dosen pembimbing skripsi")):h("",!0)]),e("div",null,[Ce,a(u).isSkripsi===!0?(t(),i("div",{key:0,class:n(["textarea-my",[s.lightMode?"light-mode-textarea-my":"dark-mode-textarea-my",a(c).progres.isDosbing?"":"border-bottom-primary"]])},[a(c).progres.isDosbing?x((t(),i("textarea",{key:1,class:n(["textarea-my--input",s.lightMode?"light-mode-textarea-my--input":"dark-mode-textarea-my--input"]),"onUpdate:modelValue":l[7]||(l[7]=d=>a(u).skripsi.deskripsi=d),readonly:""},null,2)),[[_,a(u).skripsi.deskripsi]]):x((t(),i("textarea",{key:0,class:n(["textarea-my--input",s.lightMode?"light-mode-textarea-my--input":"dark-mode-textarea-my--input"]),"onUpdate:modelValue":l[6]||(l[6]=d=>a(u).skripsi.deskripsi=d),placeholder:"Tulis deskripsi judul skripsi anda"},null,2)),[[_,a(u).skripsi.deskripsi]])],2)):(t(),i("div",{key:1,class:n(["textarea-my border-bottom-primary",s.lightMode?"light-mode-textarea-my":"dark-mode-textarea-my"])},[x(e("textarea",{class:n(["textarea-my--input",s.lightMode?"light-mode-textarea-my--input":"dark-mode-textarea-my--input"]),"onUpdate:modelValue":l[8]||(l[8]=d=>a(g).deskripsi=d),placeholder:"Tulis deskripsi judul skripsi anda"},null,2),[[_,a(g).deskripsi]])],2)),a(c).progres.isDosbing?(t(),i("div",Pe,"Deskripsi Skripsi tidak bisa diubah karena kamu sudah mendapat dosen pembimbing skripsi")):h("",!0)])]),e("div",je,[a(g).judul!==""&&a(g).deskripsi!==""||a(u).skripsi.judul&&a(u).skripsi.deskripsi?(t(),i("div",{key:0,class:n(["py-3 button-my glow primary-glow flex mb-2",s.lightMode?"primary":"dark-primary"]),onClick:l[9]||(l[9]=d=>(r.value=2,$()))},"Lanjut",2)):(t(),i("div",Le,"Lanjut"))])])):h("",!0)])):r.value==1&&a(f)==="sudah"?(t(),i("div",Ae,[e("div",Ue,[e("div",Ke,[Te,e("div",Ve,[e("div",{class:n(["py-3 button-my glow primary-glow flex mb-2",s.lightMode?"primary":"dark-primary"]),onClick:l[10]||(l[10]=d=>r.value=3)},"Lihat Hasil",2),e("div",{class:n(["button-my flex",s.lightMode?"light-transparent":"dark-transparent"]),onClick:l[11]||(l[11]=d=>S())},"Ulangi Pencarian",2)])])])])):r.value==2&&a(f)==="belum"?(t(),i("div",$e,[e("div",Be,[a(c).user.userLevel!=="Mahasiswa"?(t(),i("span",He,"1/2")):(t(),i("span",Ne,"2/3")),Ee]),e("div",Ie,[(t(!0),i(P,null,j(a(Q),(d,y)=>(t(),i("div",{key:d.idKriteria,class:"full-w"},[d.subKriteria!=""?(t(),i("div",We,[e("div",Fe,p(d.namaKriteria),1),e("div",{class:n(["input-my flex",s.lightMode?"light-mode-input-my":"dark-mode-input-my"])},[v(a(G),{"lists-single":a(O)[y],"index-list":y,"id-kriteria":d.idKriteria,warna:"option-primary","light-mode":s.lightMode,onCustomChange:a(z)},null,8,["lists-single","index-list","id-kriteria","light-mode","onCustomChange"])],2)])):h("",!0)]))),128))]),e("div",Oe,[a(A).length===3&&a(u).isSkripsi===!0?(t(),i("div",{key:0,class:n(["py-3 button-my glow primary-glow flex mb-2",s.lightMode?"primary":"dark-primary"]),onClick:l[12]||(l[12]=d=>(r.value=3,B(),a(K)(a(u).skripsi.judul,a(u).skripsi.deskripsi)))},"Cari",2)):a(A).length===3?(t(),i("div",{key:1,class:n(["py-3 button-my glow primary-glow flex mb-2",s.lightMode?"primary":"dark-primary"]),onClick:l[13]||(l[13]=d=>(r.value=3,B(),a(K)(a(g).judul,a(g).deskripsi)))},"Cari",2)):(t(),i("div",Re,"Cari")),a(c).user.userLevel==="Mahasiswa"?(t(),i("div",{key:3,class:n(["button-my flex",s.lightMode?"light-transparent":"dark-transparent"]),onClick:l[14]||(l[14]=d=>r.value=1)},"Kembali",2)):h("",!0)])])):r.value==3&&a(f)==="sudah"?(t(),i("div",ze,[e("div",Je,[e("div",qe,[e("div",Ge,[e("table",{class:n(["table is-fullwidth",s.lightMode?"light-mode-bg light-mode-table":"dark-mode-bg dark-mode-table"])},[e("thead",null,[e("tr",{class:n(s.lightMode?"light-mode-layout":"dark-mode-shades2"),style:{position:"sticky",top:"0"}},Ze,2)]),e("tbody",null,[(t(!0),i(P,null,j(a(o),(d,y)=>(t(),i("tr",{key:y},[e("td",null,p(y+1),1),e("td",null,p(d.namaDosen),1),e("td",null,p(d.total.toFixed(3)),1)]))),128))])],2)]),e("div",ea,[aa,a(o)[0].gender==="Perempuan"?(t(),i("span",{key:0,class:n([s.lightMode?"primary-text":"dark-primary-text","text-semi-bold"])},"Bu "+p(a(o)[0].namaDosen),3)):a(o)[0].gender==="Laki-laki"?(t(),i("span",{key:1,class:n([s.lightMode?"primary-text":"dark-primary-text","text-semi-bold"])},"Pak "+p(a(o)[0].namaDosen),3)):h("",!0),ta]),e("div",ia,[sa,na,la,a(o)[0].gender==="Perempuan"?(t(),i("span",{key:0,class:n([s.lightMode?"primary-text":"dark-primary-text","text-semi-bold"])},"Bu "+p(a(o)[0].namaDosen),3)):a(o)[0].gender==="Laki-laki"?(t(),i("span",{key:1,class:n([s.lightMode?"primary-text":"dark-primary-text","text-semi-bold"])},"Pak "+p(a(o)[0].namaDosen),3)):h("",!0),da,oa,ra,ma,ua])])]),e("div",ka,[v(M,{to:"/pesan",class:"fixed-button--1"},{default:w(()=>[e("div",{class:n(["py-3 button-my glow primary-glow flex mb-2",s.lightMode?"primary":"dark-primary"])},"Tanya Dosen",2)]),_:1}),e("div",{class:n(["button-my flex mb-2",s.lightMode?"light-transparent":"dark-transparent"]),onClick:l[15]||(l[15]=d=>S())},"Ulangi Pencarian",2),v(M,{to:"/saw",class:"fixed-button--1"},{default:w(()=>[e("div",{class:n(["button-my flex",s.lightMode?"light-transparent":"dark-transparent"])},"Detail Perhitungan",2)]),_:1})])])):r.value==3&&a(f)==="belum"?(t(),i("div",ca,[e("div",pa,[a(c).user.userLevel!=="Mahasiswa"?(t(),i("span",ha,"2/2")):(t(),i("span",ga,"3/3")),ya]),e("div",va,[a(o).length!==0?(t(),i("div",ba,[xa,e("div",_a,[e("p",null,[fa,a(o)[0].gender==="Perempuan"?(t(),i("span",{key:0,class:n([s.lightMode?"primary-text":"dark-primary-text","text-semi-bold"])},"Bu "+p(a(o)[0].namaDosen),3)):a(o)[0].gender==="Laki-laki"?(t(),i("span",{key:1,class:n([s.lightMode?"primary-text":"dark-primary-text","text-semi-bold"])},"Pak "+p(a(o)[0].namaDosen),3)):h("",!0),Ma]),e("p",null,[wa,Da,Sa,a(o)[0].gender==="Perempuan"?(t(),i("span",{key:0,class:n([s.lightMode?"primary-text":"dark-primary-text","text-semi-bold"])},"Bu "+p(a(o)[0].namaDosen),3)):a(o)[0].gender==="Laki-laki"?(t(),i("span",{key:1,class:n([s.lightMode?"primary-text":"dark-primary-text","text-semi-bold"])},"Pak "+p(a(o)[0].namaDosen),3)):h("",!0),Ca,Pa,ja,La,Aa])]),Ua,e("div",Ka,[(t(!0),i(P,null,j(a(o),(d,y)=>(t(),i("div",{key:y},p(y+1+". "+d.namaDosen),1))),128))])])):h("",!0)]),e("div",Ta,[v(M,{to:"/pesan",class:"fixed-button--1"},{default:w(()=>[e("div",{class:n(["button-my glow primary-glow flex py-3",s.lightMode?"primary":"dark-primary"])},"Tanya Dosen",2)]),_:1}),v(M,{to:"/saw",class:"fixed-button--1"},{default:w(()=>[e("div",{class:n(["button-my flex my-1",s.lightMode?"light-transparent":"dark-transparent"])},"Detail Perhitungan",2)]),_:1}),e("div",{class:n(["button-my flex",s.lightMode?"light-transparent":"dark-transparent"]),onClick:l[16]||(l[16]=d=>S())},"Ulangi Pencarian",2)])])):(t(),i("div",Va,[v(I,{"light-mode":s.lightMode,msg:a(U)},null,8,["light-mode","msg"])]))])])):h("",!0)],2)])}}},Fa=ee($a,[["__scopeId","data-v-19471c9c"]]);export{Fa as default};
