(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"3fb2":function(a,e,t){"use strict";t("ba8b")},"983f":function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a._self._c;return"admin"===a.userProfile?e("div",[e("q-table",{staticClass:"my-sticky-dynamic q-ma-lg",attrs:{flat:"",square:"","hide-bottom":"",title:"Campanhas",data:a.campanhas,columns:a.columns,loading:a.loading,"row-key":"id",pagination:a.pagination,"rows-per-page-options":[0]},on:{"update:pagination":function(e){a.pagination=e}},scopedSlots:a._u([{key:"top-right",fn:function(){return[e("q-btn",{staticClass:"q-mr-md",attrs:{color:"black",icon:"refresh",rounded:""},on:{click:a.listarCampanhas}},[e("q-tooltip",[a._v("\n          Atualizar Listagem\n        ")])],1),e("q-btn",{attrs:{rounded:"",color:"primary",label:"Adicionar"},on:{click:function(e){a.campanhaEdicao={},a.modalCampanha=!0}}})]},proxy:!0},{key:"body-cell-color",fn:function(t){return[e("q-td",{staticClass:"text-center"},[e("div",{staticClass:"q-pa-sm rounded-borders",style:`background: ${t.row.color}`},[a._v("\n          "+a._s(t.row.color)+"\n        ")])])]}},{key:"body-cell-isActive",fn:function(a){return[e("q-td",{staticClass:"text-center"},[e("q-icon",{attrs:{size:"24px",name:a.value?"mdi-check-circle-outline":"mdi-close-circle-outline",color:a.value?"positive":"negative"}})],1)]}},{key:"body-cell-acoes",fn:function(t){return[e("q-td",{staticClass:"text-center"},[e("q-btn",{attrs:{flat:"",round:"",icon:"mdi-account-details-outline"},on:{click:function(e){return a.contatosCampanha(t.row)}}},[e("q-tooltip",[a._v("\n            Lista de Contatos da Campanha\n          ")])],1),["pending","canceled"].includes(t.row.status)?e("q-btn",{attrs:{flat:"",round:"",icon:"mdi-calendar-clock"},on:{click:function(e){return a.iniciarCampanha(t.row)}}},[e("q-tooltip",[a._v("\n            Programar Envio\n          ")])],1):a._e(),["scheduled","processing"].includes(t.row.status)?e("q-btn",{attrs:{flat:"",round:"",icon:"mdi-close-box-multiple"},on:{click:function(e){return a.cancelarCampanha(t.row)}}},[e("q-tooltip",[a._v("\n            Cancelar Campanha\n          ")])],1):a._e(),e("q-btn",{attrs:{flat:"",round:"",icon:"edit"},on:{click:function(e){return a.editarCampanha(t.row)}}},[e("q-tooltip",[a._v("\n            Editar Campanha\n          ")])],1),e("q-btn",{attrs:{flat:"",round:"",icon:"mdi-delete"},on:{click:function(e){return a.deletarCampanha(t.row)}}},[e("q-tooltip",[a._v("\n            Excluir Campanha\n          ")])],1)],1)]}}],null,!1,3438092542)}),a.modalCampanha?e("ModalCampanha",{attrs:{modalCampanha:a.modalCampanha,campanhaEdicao:a.campanhaEdicao},on:{"update:modalCampanha":function(e){a.modalCampanha=e},"update:modal-campanha":function(e){a.modalCampanha=e},"update:campanhaEdicao":function(e){a.campanhaEdicao=e},"update:campanha-edicao":function(e){a.campanhaEdicao=e},"modal-campanha:criada":a.campanhaCriada,"modal-campanha:editada":a.campanhaEditada}}):a._e()],1):a._e()},i=[],n=(t("14d9"),t("5f1d")),o=function(){var a=this,e=a._self._c;return e("q-dialog",{attrs:{persistent:"",value:a.modalCampanha},on:{hide:a.fecharModal,show:a.abrirModal}},[e("q-card",{staticClass:"q-pa-sm",staticStyle:{"min-width":"70vw"}},[e("q-card-section",{staticClass:"q-pa-none q-px-md"},[e("div",{staticClass:"text-h6 text-bold"},[a._v(a._s(a.campanhaEdicao.id?"Editar":"Criar")+" Campanha")]),e("div",{staticClass:"row"},[a._v("\n        As mensagens sempre serão enviadas em horário comercial e dias úteis.\n      ")])]),e("q-card-section",{staticClass:"q-pb-none"},[e("div",{staticClass:"row q-gutter-sm"},[e("q-input",{staticStyle:{width:"500px"},attrs:{outlined:"",dense:"",rounded:"",label:"Nome da Campanha",error:a.$v.campanha.name.$error,"error-message":"Obrigatório"},on:{blur:a.$v.campanha.name.$touch},model:{value:a.campanha.name,callback:function(e){a.$set(a.campanha,"name",e)},expression:"campanha.name"}}),e("q-datetime-picker",{staticStyle:{width:"200px"},attrs:{dense:"",rounded:"","hide-bottom-space":"",outlined:"","stack-label":"","bottom-slots":"",label:"Data/Hora início",mode:"datetime",color:"primary",format24h:"",error:a.$v.campanha.start.$error,"error-message":"Não pode ser inferior ao dia atual"},on:{blur:a.$v.campanha.start.$touch},model:{value:a.campanha.start,callback:function(e){a.$set(a.campanha,"start",e)},expression:"campanha.start"}}),e("q-select",{staticStyle:{width:"250px"},attrs:{rounded:"",dense:"",outlined:"","emit-value":"","map-options":"",label:"Enviar por",color:"primary",options:a.cSessions,"input-debounce":700,"option-value":"id","option-label":"name","input-style":"width: 280px; max-width: 280px;",error:a.$v.campanha.sessionId.$error,"error-message":"Obrigatório"},on:{blur:a.$v.campanha.sessionId.$touch},model:{value:a.campanha.sessionId,callback:function(e){a.$set(a.campanha,"sessionId",e)},expression:"campanha.sessionId"}}),e("q-input",{staticStyle:{width:"160px"},attrs:{rounded:"",outlined:"",dense:"","input-class":"text-right",suffix:"segundos",label:"Delay","error-message":"Obrigatório"},model:{value:a.campanha.delay,callback:function(e){a.$set(a.campanha,"delay",e)},expression:"campanha.delay"}}),a.campanha.mediaUrl?a._e():e("q-file",{ref:"PickerFileMessage",staticClass:"col-grow",staticStyle:{width:"350px"},attrs:{dense:"",rounded:"",loading:a.loading,label:"Mídia composição mensagem","bg-color":"blue-grey-1","input-style":"max-height: 30vh",outlined:"",clearable:"",autogrow:"",append:"","max-files":1,counter:"","max-file-size":10485760,"max-total-size":30485760,accept:".jpg, .png, image/jpeg, .pdf, .doc, .docx, .mp4, .xls, .xlsx, .jpeg, .zip, .ppt, .pptx, image/*"},on:{rejected:a.onRejectedFiles},model:{value:a.arquivos,callback:function(e){a.arquivos=e},expression:"arquivos"}}),a.campanha.mediaUrl?e("q-input",{staticClass:"col-grow",staticStyle:{width:"350px"},attrs:{readonly:"",rounded:"",label:"Mídia composição mensagem",value:a.cArquivoName,"bg-color":"blue-grey-1","input-style":"max-height: 30vh",outlined:"",autogrow:"",append:"",counter:""},scopedSlots:a._u([{key:"append",fn:function(){return[e("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"close"},on:{click:function(e){a.campanha.mediaUrl=null,a.arquivos=[]}}})]},proxy:!0}],null,!1,2613905251)}):a._e()],1)]),e("q-card-section",{staticClass:"row q-pt-sm q-gutter-sm justify-center"},[e("div",{staticStyle:{"min-width":"400px"}},[e("div",{staticClass:"row items-center q-pt-none"},[e("label",{staticClass:"text-heading text-bold"},[a._v("1ª Mensagem")]),e("div",{staticClass:"col-xs-3 col-sm-2 col-md-1"},[e("q-btn",{staticClass:"q-ml-sm",attrs:{round:"",flat:""}},[e("q-icon",{attrs:{size:"2em",name:"mdi-emoticon-happy-outline"}}),e("q-tooltip",[a._v("\n                Emoji\n              ")]),e("q-menu",{attrs:{anchor:"top right",self:"bottom middle",offset:[5,40]}},[e("VEmojiPicker",{staticStyle:{width:"40vw"},attrs:{showSearch:!1,emojisByRow:20,labelSearch:"Localizar...",lang:"pt-BR"},on:{select:e=>a.onInsertSelectEmoji(e,"message1")}})],1)],1)],1),e("div",{staticClass:"col-xs-8 col-sm-10 col-md-11 q-pl-sm"},[e("textarea",{ref:"message1",staticClass:"q-pa-sm bg-white full-width rounded-all",class:{"bg-red-1":a.$v.campanha.message1.$error},staticStyle:{"min-height":"12.5vh","max-height":"12.5vh"},attrs:{placeholder:"Digite a mensagem",autogrow:"",dense:"",outlined:""},domProps:{value:a.campanha.message1},on:{blur:a.$v.campanha.message1.$touch,input:e=>a.campanha.message1=e.target.value}}),e("q-btn",{attrs:{round:"",flat:"",dense:""}},[e("q-icon",{attrs:{size:"2em",name:"mdi-variable"}}),e("q-tooltip",[a._v("\n                Variáveis\n              ")]),e("q-menu",{attrs:{"touch-position":""}},[e("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},a._l(a.variaveis,(function(t){return e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:t.label,attrs:{clickable:""},on:{click:function(e){return a.onInsertSelectVariable(t.value,"message1","message1")}}},[e("q-item-section",[a._v(a._s(t.label))])],1)})),1)],1)],1),e("q-separator",{staticClass:"q-my-md"})],1)]),e("div",{staticClass:"row items-center q-pt-none"},[e("label",{staticClass:"text-heading text-bold"},[a._v("2ª Mensagem")]),e("div",{staticClass:"col-xs-3 col-sm-2 col-md-1"},[e("q-btn",{staticClass:"q-ml-sm",attrs:{round:"",flat:""}},[e("q-icon",{attrs:{size:"2em",name:"mdi-emoticon-happy-outline"}}),e("q-tooltip",[a._v("\n                Emoji\n              ")]),e("q-menu",{attrs:{anchor:"top right",self:"bottom middle",offset:[5,40]}},[e("VEmojiPicker",{staticStyle:{width:"40vw"},attrs:{showSearch:!1,emojisByRow:20,labelSearch:"Localizar...",lang:"pt-BR"},on:{select:e=>a.onInsertSelectEmoji(e,"message2")}})],1)],1)],1),e("div",{staticClass:"col-xs-8 col-sm-10 col-md-11 q-pl-sm"},[e("textarea",{ref:"message2",staticClass:"q-pa-sm bg-white full-width rounded-all",class:{"bg-red-1":a.$v.campanha.message2.$error},staticStyle:{"min-height":"12.5vh","max-height":"12.5vh"},attrs:{placeholder:"Digite a mensagem",autogrow:"",dense:"",outlined:""},domProps:{value:a.campanha.message2},on:{blur:a.$v.campanha.message2.$touch,input:e=>a.campanha.message2=e.target.value}}),e("q-btn",{attrs:{round:"",flat:"",dense:""}},[e("q-icon",{attrs:{size:"2em",name:"mdi-variable"}}),e("q-tooltip",[a._v("\n                Variáveis\n              ")]),e("q-menu",{attrs:{"touch-position":""}},[e("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},a._l(a.variaveis,(function(t){return e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:t.label,attrs:{clickable:""},on:{click:function(e){return a.onInsertSelectVariable(t.value,"message2","message2")}}},[e("q-item-section",[a._v(a._s(t.label))])],1)})),1)],1)],1),e("q-separator",{staticClass:"q-my-md"})],1)]),e("div",{staticClass:"row items-center q-pt-none"},[e("label",{staticClass:"text-heading text-bold"},[a._v("3ª Mensagem")]),e("div",{staticClass:"col-xs-3 col-sm-2 col-md-1"},[e("q-btn",{staticClass:"q-ml-sm",attrs:{round:"",flat:""}},[e("q-icon",{attrs:{size:"2em",name:"mdi-emoticon-happy-outline"}}),e("q-tooltip",[a._v("\n                Emoji\n              ")]),e("q-menu",{attrs:{anchor:"top right",self:"bottom middle",offset:[5,40]}},[e("VEmojiPicker",{staticStyle:{width:"40vw"},attrs:{showSearch:!1,emojisByRow:20,labelSearch:"Localizar...",lang:"pt-BR"},on:{select:e=>a.onInsertSelectEmoji(e,"message3")}})],1)],1)],1),e("div",{staticClass:"col-xs-8 col-sm-10 col-md-11 q-pl-sm"},[e("textarea",{ref:"message3",staticClass:"q-pa-sm bg-white full-width rounded-all",class:{"bg-red-1":a.$v.campanha.message3.$error},staticStyle:{"min-height":"12.5vh","max-height":"12.5vh"},attrs:{placeholder:"Digite a mensagem",autogrow:"",dense:"",outlined:""},domProps:{value:a.campanha.message3},on:{blur:a.$v.campanha.message3.$touch,input:e=>a.campanha.message3=e.target.value}}),e("q-btn",{attrs:{round:"",flat:"",dense:""}},[e("q-icon",{attrs:{size:"2em",name:"mdi-variable"}}),e("q-tooltip",[a._v("\n                Variáveis\n              ")]),e("q-menu",{attrs:{"touch-position":""}},[e("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},a._l(a.variaveis,(function(t){return e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:t.label,attrs:{clickable:""},on:{click:function(e){return a.onInsertSelectVariable(t.value,"message3","message3")}}},[e("q-item-section",[a._v(a._s(t.label))])],1)})),1)],1)],1)],1)])]),e("div",{staticStyle:{width:"500px"}},[e("q-card",{staticClass:"full-width",attrs:{bordered:"",flat:""}},[e("div",{staticClass:"text-body1 text-bold q-pa-sm full-width text-center bg-grey-3"},[a._v("\n            Visualização\n          ")]),e("q-card-section",{staticClass:"row justify-center"},[e("q-option-group",{staticClass:"q-mb-sm",attrs:{inline:"",dense:"",options:a.optRadio,color:"primary"},model:{value:a.messagemPreview,callback:function(e){a.messagemPreview=e},expression:"messagemPreview"}}),e("cMolduraCelular",{key:a.cKey,staticClass:"row justify-center"},[e("MensagemChat",{staticClass:"full-width rounded-all",attrs:{isLineDate:!1,size:"8",mensagens:a.cMessages}})],1)],1)],1)],1)]),e("q-card-section",[e("div",{staticClass:"row justify-center"},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-mr-md",attrs:{label:"Cancelar",color:"negative",rounded:""}}),e("q-btn",{attrs:{rounded:"",label:"Salvar",color:"positive",icon:"save"},on:{click:a.handleCampanha}})],1)])],1)],1)},l=[],r=t("b5ae"),c=t("79b5"),m=t("cee4"),d=function(){var a=this,e=a._self._c;return e("div",{staticStyle:{width:"450px"}},[e("div",{staticClass:"main"},[e("div",{staticClass:"inner"},[a._m(0),e("div",{staticClass:"screen"},[e("div",[a._t("default")],2)])])])])},p=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"top-bar"},[e("div",{staticClass:"cam"}),e("div",{staticClass:"speaker"})])}],h={name:"cMolduraCelular"},u=h,g=(t("3fb2"),t("2877")),b=Object(g["a"])(u,d,p,!1,null,null,null),v=b.exports,f=t("ef42"),q=t("2f62"),C=t("337e"),y=t("e3ee");const w=a=>Object(C["a"])(new Date(Object(y["a"])(a))).getTime()>=Object(C["a"])(new Date).getTime(),x=m["a"].create({baseURL:"https://backend.tikanais.com.br",timeout:2e4,headers:{responseType:"blob"}});var $={name:"ModalCampanha",components:{VEmojiPicker:c["a"],cMolduraCelular:v,MensagemChat:f["a"]},props:{modalCampanha:{type:Boolean,default:!1},campanhaEdicao:{type:Object,default:()=>({id:null})}},data(){return{variaveis:[{label:"Nome",value:"{{name}}"},{label:"Saudação",value:"{{greeting}}"}],optRadio:[{label:"Msg.1",value:"message1"},{label:"Msg. 2",value:"message2"},{label:"Msg. 3",value:"message3"}],messagemPreview:"message1",loading:!1,abrirModalImagem:!1,urlMedia:"",campanha:{name:null,start:null,mediaUrl:null,message1:null,message2:null,message3:null,sessionId:null,delay:61},messageTemplate:{mediaUrl:null,id:null,ack:3,read:!0,fromMe:!0,body:null,mediaType:"chat",isDeleted:!1,createdAt:"2021-02-20T20:09:04.736Z",updatedAt:"2021-02-20T23:26:24.311Z",quotedMsgId:null,delay:61,ticketId:0,contactId:null,userId:null,contact:null,quotedMsg:null},arquivos:[]}},validations:{campanha:{name:{required:r["required"]},start:{required:r["required"],isValidDate:w},message1:{required:r["required"]},message2:{required:r["required"]},message3:{required:r["required"]},sessionId:{required:r["required"]}}},computed:{...Object(q["b"])(["whatsapps"]),cSessions(){return this.whatsapps.filter((a=>"whatsapp"===a.type&&!a.isDeleted))},cKey(){return this.campanha.message1+this.campanha.message2+this.campanha.message3},cArquivoName(){const a=this.campanha.mediaUrl.split("/"),e=a[a.length-1];return e},cMessages(){var a;const e=[],t=["message1","message2","message3"];if(null!==(a=this.arquivos)&&void 0!==a&&a.type){const a=new Blob([this.arquivos],{type:this.arquivos.type});e.push({...this.messageTemplate,id:"mediaUrl",mediaUrl:window.URL.createObjectURL(a),body:this.arquivos.name,mediaType:this.arquivos.type.substr(0,this.arquivos.type.indexOf("/"))})}else this.campanha.mediaUrl&&e.push({...this.messageTemplate,id:"mediaUrl",mediaUrl:this.campanha.mediaUrl,body:"",mediaType:this.campanha.mediaType});return t.forEach((a=>{if(this.messagemPreview===a){const t=this.campanha[a],s={...this.messageTemplate,id:a,body:t};e.push(s)}})),e}},methods:{onInsertSelectVariable(a,e,t){var s=this.$refs[e];if(s){var i=s.selectionStart,n=s.selectionEnd,o=s.value;if(a){var l=o.substring(0,i)+a+o.substring(n);this.campanha[t]=l;var r=i+a.length;s.setSelectionRange(r,r)}}},onInsertSelectEmoji(a,e){const t=this;var s=this.$refs[e],i=s.selectionStart,n=s.selectionEnd,o=i,l=s.value;a.data&&(t.txtContent=this.campanha[e],t.txtContent=l.substring(0,i)+a.data+l.substring(n,l.length),this.campanha[e]=t.txtContent,setTimeout((()=>{s.selectionStart=s.selectionEnd=o+a.data.length}),10))},resetarCampanha(){this.campanha={id:null,name:null,start:null,message1:null,message2:null,message3:null,message4:null,mediaUrl:null,userId:null,delay:61,sessionId:null}},fecharModal(){this.resetarCampanha(),this.$emit("update:campanhaEdicao",{id:null}),this.$emit("update:modalCampanha",!1)},abrirModal(){this.campanhaEdicao.id?this.campanha={...this.campanhaEdicao}:this.resetarCampanha()},onRejectedFiles(a){this.$q.notify({html:!0,message:"Ops... Ocorreu um erro! <br>\n        <ul>\n          <li>Arquivo deve ter no máximo 10MB.</li>\n          <li>Priorize o envio de imagem ou vídeo.</li>\n        </ul>",type:"negative",progress:!0,position:"top",actions:[{icon:"close",round:!0,color:"white"}]})},async buscarImageCors(a){this.loading=!0;try{const{data:e,headers:t}=await x.get(a,{responseType:"blob"}),s=window.URL.createObjectURL(new Blob([e],{type:t["content-type"]}));this.urlMedia=s,this.abrirModalImagem=!0}catch(e){this.$notificarErro("Algum problema ao carregar a imagem",e)}this.loading=!1},async handleCampanha(){if(this.campanha.message1!==this.campanha.message2&&this.campanha.message1!==this.campanha.message3&&this.campanha.message2!==this.campanha.message3)if(this.campanha.delay<61)this.$q.notify({type:"negative",message:"O campo delay deve ser no mínimo 61"});else if(this.$v.campanha.$touch(),this.$v.campanha.$error)this.$q.notify({type:"negative",message:"Verifique se todas os campos obrigatórios estão preenchidos "});else try{this.loading=!0;const a={...this.campanha},e=new FormData;if(Object.keys(a).forEach((t=>{e.append(t,a[t])})),e.append("medias",this.arquivos),this.campanha.id){const{data:t}=await Object(n["b"])(e,a.id);this.$emit("modal-campanha:editada",t),this.$q.notify({type:"info",progress:!0,position:"top",textColor:"black",message:"Campanha editada!",actions:[{icon:"close",round:!0,color:"white"}]})}else{const{data:a}=await Object(n["d"])(e);this.$emit("modal-campanha:criada",a),this.$q.notify({type:"positive",progress:!0,position:"top",message:"Campanha criada!",actions:[{icon:"close",round:!0,color:"white"}]})}this.loading=!1,this.fecharModal()}catch(a){console.error(a),this.$notificarErro("Algum problema ao criar campanha",a)}else this.$q.notify({type:"negative",message:"As mensagens não podem ser iguais"})}}},S=$,k=(t("ece1"),t("24e8")),j=t("f09f"),E=t("a370"),_=t("27f9"),M=t("52ee"),I=t("ddd8"),O=t("7d53"),P=t("9c40"),Q=t("0016"),T=t("05c0"),D=t("4e73"),z=t("1c1c"),U=t("66e5"),R=t("4074"),N=t("eb85"),V=t("9f0a"),A=t("7f67"),L=t("eebe"),B=t.n(L),F=Object(g["a"])(S,o,l,!1,null,null,null),H=F.exports;B()(F,"components",{QDialog:k["a"],QCard:j["a"],QCardSection:E["a"],QInput:_["a"],QDate:M["a"],QSelect:I["a"],QFile:O["a"],QBtn:P["a"],QIcon:Q["a"],QTooltip:T["a"],QMenu:D["a"],QList:z["a"],QItem:U["a"],QItemSection:R["a"],QSeparator:N["a"],QOptionGroup:V["a"]}),B()(F,"directives",{ClosePopup:A["a"]});var J=t("b166"),K={name:"Campanhas",components:{ModalCampanha:H},data(){return{userProfile:"user",campanhaEdicao:{},modalCampanha:!1,campanhas:[],pagination:{rowsPerPage:40,rowsNumber:0,lastIndex:0},loading:!1,columns:[{name:"id",label:"#",field:"id",align:"left"},{name:"name",label:"Campanha",field:"name",align:"left"},{name:"start",label:"Início",field:"start",align:"center",format:a=>Object(J["a"])(Object(y["a"])(a),"dd/MM/yyyy HH:mm")},{name:"status",label:"Status",field:"status",align:"center",format:a=>a?this.status[a]:""},{name:"contactsCount",label:"Qtd. Contatos",field:"contactsCount",align:"center"},{name:"pendentesEnvio",label:"À Enviar",field:"pendentesEnvio",align:"center"},{name:"pendentesEntrega",label:"À Entregar",field:"pendentesEntrega",align:"center"},{name:"recebidas",label:"Recebidas",field:"recebidas",align:"center"},{name:"lidas",label:"Lidas",field:"lidas",align:"center"},{name:"acoes",label:"Ações",field:"acoes",align:"center"}],status:{pending:"Pendente",scheduled:"Programada",processing:"Processando",canceled:"Cancelada",finished:"Finalizada"}}},methods:{async listarCampanhas(){const{data:a}=await Object(n["i"])();this.campanhas=a},isValidDate(a){return Object(C["a"])(new Date(Object(y["a"])(a))).getTime()>=Object(C["a"])(new Date).getTime()},campanhaCriada(a){this.listarCampanhas()},campanhaEditada(a){this.listarCampanhas()},editarCampanha(a){"pending"!==a.status&&"canceled"!==a.status&&this.$notificarErro("Só é permitido editar campanhas que estejam pendentes ou canceladas."),this.campanhaEdicao={...a,start:a.start,end:a.start},this.modalCampanha=!0},deletarCampanha(a){"pending"!==a.status&&"canceled"!==a.status&&a.contactsCount&&this.$notificarErro("Só é permitido deletar campanhas que estejam pendentes ou canceladas e não possuam contatos vinculados."),this.$q.dialog({title:"Atenção!!",message:`Deseja realmente deletar a Campanha "${a.tag}"?`,cancel:{label:"Não",color:"primary",push:!0},ok:{label:"Sim",color:"negative",push:!0},persistent:!0}).onOk((()=>{this.loading=!0,Object(n["e"])(a).then((e=>{let t=[...this.campanhas];t=t.filter((e=>e.id!==a.id)),this.campanhas=[...t],this.$notificarSucesso(`Campanha ${a.tag} deletada!`)})),this.loading=!1}))},contatosCampanha(a){this.$router.push({name:"contatos-campanha",params:{campanhaId:a.id,campanha:a}})},cancelarCampanha(a){this.$q.dialog({title:"Atenção!!",message:`Deseja realmente deletar a Campanha "${a.name}"?`,cancel:{label:"Não",color:"primary",push:!0},ok:{label:"Sim",color:"negative",push:!0},persistent:!0}).onOk((()=>{Object(n["c"])(a.id).then((a=>{this.$notificarSucesso("Campanha cancelada."),this.listarCampanhas()})).catch((a=>{this.$notificarErro("Não foi possível cancelar a campanha.",a)}))}))},iniciarCampanha(a){this.isValidDate(a.start)||this.$notificarErro("Não é possível programar campanha com data menor que a atual"),0==a.contactsCount&&this.$notificarErro("Necessário ter contatos vinculados para programar a campanha."),"pending"!==a.status&&"canceled"!==a.status&&this.$notificarErro("Só é permitido programar campanhas que estejam pendentes ou canceladas."),Object(n["h"])(a.id).then((a=>{this.$notificarSucesso("Campanha iniciada."),this.listarCampanhas()})).catch((a=>{this.$notificarErro("Não foi possível iniciar a campanha.",a)}))}},mounted(){this.userProfile=localStorage.getItem("profile"),this.listarCampanhas()}},Z=K,G=t("eaac"),W=t("db86"),X=Object(g["a"])(Z,s,i,!1,null,"4f8c8c0c",null);e["default"]=X.exports;B()(X,"components",{QTable:G["a"],QBtn:P["a"],QTooltip:T["a"],QTd:W["a"],QIcon:Q["a"]})},ba8b:function(a,e,t){},d810:function(a,e,t){},ece1:function(a,e,t){"use strict";t("d810")}}]);