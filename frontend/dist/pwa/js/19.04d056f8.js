(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"9c62":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a._self._c;return"admin"===a.userProfile?t("div",[t("q-card",{staticClass:"q-ma-md"},[t("q-card-section",[t("div",{staticClass:"text-h6"},[a._v("\n        Configurações API\n        "),t("q-btn",{staticClass:"float-right",staticStyle:{margin:"2px"},attrs:{color:"primary",rounded:"",label:"Adicionar"},on:{click:function(t){a.apiEdicao={},a.modalApi=!a.modalApi}}})],1)]),t("q-separator"),t("q-card-section",{staticClass:"scroll",staticStyle:{height:"calc(100vh - 200px)"}},a._l(a.apis,(function(e){return t("q-item",{key:e.token,staticClass:"q-my-md shadow-2"},[t("q-item-section",{attrs:{top:""}},[t("q-item-label",{staticClass:"text-bold text-h6 q-my-sm"},[a._v("\n            Nome: "+a._s(e.name)+"\n            "),t("div",{staticClass:"text-grey-8 q-gutter-xs float-right"},[t("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"mdi-content-copy"},on:{click:function(t){return a.copy(e.token)}}},[t("q-tooltip",[a._v("\n                  Copiar token\n                ")])],1),t("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"edit"},on:{click:function(t){return a.editarAPI(e)}}},[t("q-tooltip",[a._v("\n                  Editar Configuraçao\n                ")])],1),t("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"mdi-autorenew"},on:{click:function(t){return a.gerarNovoToken(e)}}},[t("q-tooltip",[a._v("\n                  Gerar novo Token\n                ")])],1),t("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"delete"},on:{click:function(t){return a.deletarApi(e)}}},[t("q-tooltip",[a._v("\n                  Deletar Configuração\n                ")])],1)],1)]),t("q-item-label",{staticStyle:{"word-break":"break-all"},attrs:{lines:"4"}},[t("p",{staticClass:"text-weight-medium text-nowrap q-pr-md"},[t("span",{staticClass:"text-bold"},[a._v("Url:\n              ")]),a._v("\n              "+a._s(a.montarUrlIntegração(e.id))+"\n            ")])]),t("q-item-label",{staticStyle:{"word-break":"break-all"}},[t("p",{staticClass:"text-weight-medium text-nowrap q-pr-md"},[t("span",{staticClass:"text-bold"},[a._v("Token:\n              ")]),a._v("\n              "+a._s(e.token)+"\n            ")])]),t("q-item-label",{attrs:{caption:""}},[t("p",{staticClass:"text-weight-medium"},[t("span",{staticClass:"text-bold"},[a._v("WebHook Status Whatsapp:")]),t("span",[a._v(" "+a._s(e.urlServiceStatus)+" ")])])]),t("q-item-label",{attrs:{caption:""}},[t("p",{staticClass:"text-weight-medium"},[t("span",{staticClass:"text-bold"},[a._v("WebHook Status Mensagem:")]),t("span",[a._v(" "+a._s(e.urlMessageStatus)+" ")])])]),t("q-item-label",{staticStyle:{"word-break":"break-all"}},[t("p",{staticClass:"text-weight-medium text-nowrap q-pr-md"},[t("span",{staticClass:"text-bold"},[a._v("Token Autenticação:\n              ")]),a._v("\n              "+a._s(e.authToken)+"\n            ")])]),t("q-item-label",{staticClass:"q-mt-xs text-body2 text-weight-bold text-primary text-uppercase",attrs:{lines:"1"}}),t("q-item-label",{staticStyle:{"word-break":"break-all"}},[t("q-btn",{staticClass:"float-right",staticStyle:{margin:"2px"},attrs:{color:"primary",rounded:"",label:"POSTMAN"},on:{click:a.download}}),t("p",{staticClass:"text-weight-medium text-nowrap q-pr-md"},[t("span",{staticClass:"text-bold"},[a._v("Baixe o arquivo do postman verifique uso no site\n              ")]),t("a",{attrs:{href:"https://www.postman.com/",target:"_blank"}},[a._v("https://www.postman.com/")])])],1),t("q-item-label",{staticClass:"q-mt-xs text-body2 text-weight-bold text-primary text-uppercase",attrs:{lines:"1"}})],1)],1)})),1)],1),t("ModalApi",{attrs:{modalApi:a.modalApi,apiEdicao:a.apiEdicao},on:{"update:modalApi":function(t){a.modalApi=t},"update:modal-api":function(t){a.modalApi=t},"update:apiEdicao":function(t){a.apiEdicao=t},"update:api-edicao":function(t){a.apiEdicao=t},"modal-api:criada":a.apiCriada,"modal-api:editada":a.apiEditada}})],1):a._e()},s=[],o=(e("14d9"),e("8982"));function n(a){return Object(o["a"])({url:"/api-config/",method:"post",data:a})}function l(){return Object(o["a"])({url:"/api-config/",method:"get"})}function r(a){return Object(o["a"])({url:`/api-config/${a.id}/`,method:"put",data:a})}function d(a){return Object(o["a"])({url:`/api-config/renew-token/${a.id}/`,method:"put",data:a})}function c(a){return Object(o["a"])({url:`/api-config/${a.id}/`,method:"delete",data:a})}var p=e("cdde"),u=function(){var a=this,t=a._self._c;return t("q-dialog",{attrs:{persistent:"",value:a.modalApi},on:{hide:a.fecharModal,show:a.abrirModal}},[t("q-card",{staticClass:"q-pa-lg",staticStyle:{"min-width":"80vw",width:"80vw"}},[t("q-card-section",[t("div",{staticClass:"text-h6"},[a._v(a._s(a.apiEdicao.id?"Editar":"Criar")+" Configuração API")])]),t("q-card-section",[t("fieldset",{staticClass:"q-pa-md full-width rounded-all"},[t("legend",{staticClass:"q-px-sm"},[a._v("Dados API")]),t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-xs-12 col-sm-6"},[t("q-input",{attrs:{rounded:"",dense:"",outlined:"",label:"Nome da API",error:a.$v.api.name.$error},on:{blur:a.$v.api.name.$touch},model:{value:a.api.name,callback:function(t){a.$set(a.api,"name",t)},expression:"api.name"}})],1),t("div",{staticClass:"col-xs-12 col-sm-6"},[t("q-select",{attrs:{rounded:"",dense:"",outlined:"","emit-value":"","map-options":"",label:"Enviar por",color:"primary",options:a.cSessions,"input-debounce":700,"option-value":"id","option-label":"name",error:a.$v.api.sessionId.$error,"input-style":"width: 280px; max-width: 280px;","error-message":"Obrigatório"},on:{blur:a.$v.api.sessionId.$touch},model:{value:a.api.sessionId,callback:function(t){a.$set(a.api,"sessionId",t)},expression:"api.sessionId"}})],1)])]),t("fieldset",{staticClass:"q-pa-md full-width q-mt-lg rounded-all"},[t("legend",{staticClass:"q-px-sm"},[a._v("WebHook")]),t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-12 q-mt-md"},[t("q-input",{attrs:{rounded:"",dense:"",outlined:"",error:a.$v.api.urlServiceStatus.$error,label:"URL WebHook Status Sessão",hint:"Dispara a ação sempre que o status da sessão conectada ao whatsapp é alterado."},on:{blur:a.$v.api.urlServiceStatus.$touch},model:{value:a.api.urlServiceStatus,callback:function(t){a.$set(a.api,"urlServiceStatus",t)},expression:"api.urlServiceStatus"}})],1),t("div",{staticClass:"col-12 q-mt-md"},[t("q-input",{attrs:{rounded:"",dense:"",outlined:"",error:a.$v.api.urlMessageStatus.$error,label:"URL WebHook Status Mensagem",hint:"Dispara ação sempre que o status de uma mensagem é atualizado."},on:{blur:a.$v.api.urlMessageStatus.$touch},model:{value:a.api.urlMessageStatus,callback:function(t){a.$set(a.api,"urlMessageStatus",t)},expression:"api.urlMessageStatus"}})],1),t("div",{staticClass:"col-12 q-mt-md"},[t("q-input",{attrs:{rounded:"",dense:"",outlined:"",label:"Token de autenticação",hint:"Será enviado como authorization no header. Se existir prefixo, deverá ser informado aqui. Ex.: Bearer, Token"},model:{value:a.api.authToken,callback:function(t){a.$set(a.api,"authToken",t)},expression:"api.authToken"}})],1)])]),a.api.id?t("q-checkbox",{attrs:{label:"Ativo"},model:{value:a.api.isActive,callback:function(t){a.$set(a.api,"isActive",t)},expression:"api.isActive"}}):a._e()],1),t("q-card-actions",{staticClass:"q-mt-md",attrs:{align:"right"}},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-mr-md",attrs:{rounded:"",label:"Cancelar",color:"negative"}}),t("q-btn",{attrs:{rounded:"",label:"Salvar",color:"positive"},on:{click:a.handleAPI}})],1)],1)],1)},m=[],h=e("2f62"),b=e("b5ae");const v=a=>Object(b["url"])(a)||!a;var f={name:"ModalFila",props:{modalApi:{type:Boolean,default:!1},apiEdicao:{type:Object,default:()=>({id:null})}},data(){return{api:{id:null,name:null,sessionId:null,urlServiceStatus:null,urlMessageStatus:null,authToken:null,isActive:!0}}},validations:{api:{name:{required:b["required"]},sessionId:{required:b["required"]},authToken:{},urlServiceStatus:{isValidURL:v},urlMessageStatus:{isValidURL:v}}},computed:{...Object(h["b"])(["whatsapps"]),cSessions(){return this.whatsapps.filter((a=>"whatsapp"===a.type&&!a.isDeleted))}},methods:{resetarApi(){this.api={id:null,queue:null,isActive:!0}},fecharModal(){this.resetarApi(),this.$emit("update:apiEdicao",{id:null}),this.$emit("update:modalApi",!1)},abrirModal(){this.apiEdicao.id?this.api={...this.apiEdicao}:this.resetarApi()},async handleAPI(){if(this.$v.api.$touch(),this.$v.api.$error)this.$notificarErro("Verifique os campos obrigatórios e inconsistências.");else try{if(this.loading=!0,this.api.id){const{data:a}=await r(this.api);this.$emit("modal-api:editada",a),this.$notificarSucesso("API Editada")}else{const{data:a}=await n(this.api);this.$emit("modal-api:criada",a),this.$notificarSucesso("API criada")}this.loading=!1,this.fecharModal()}catch(a){console.error(a),this.$notificarErro("Ocorreu um erro!",a)}}}},g=f,q=e("2877"),x=e("24e8"),k=e("f09f"),C=e("a370"),w=e("27f9"),S=e("ddd8"),$=e("8f8e"),A=e("4b7e"),y=e("9c40"),_=e("7f67"),I=e("eebe"),E=e.n(I),P=Object(q["a"])(g,u,m,!1,null,"3bef1db8",null),M=P.exports;E()(P,"components",{QDialog:x["a"],QCard:k["a"],QCardSection:C["a"],QInput:w["a"],QSelect:S["a"],QCheckbox:$["a"],QCardActions:A["a"],QBtn:y["a"]}),E()(P,"directives",{ClosePopup:_["a"]});var T={name:"APIs",components:{ModalApi:M},data(){return{userProfile:"user",apiEdicao:{},modalApi:!1,apis:[],pagination:{rowsPerPage:40,rowsNumber:0,lastIndex:0},loading:!1,columns:[{name:"name",label:"Nome",field:"name",align:"left"},{name:"token",label:"Token",classes:"ellipsis",style:"max-width: 400px",field:"token",align:"left"},{name:"isActive",label:"Ativo",field:"isActive",align:"center"},{name:"acoes",label:"Ações",field:"acoes",align:"center"}]}},computed:{"cBaseUrlIntegração"(){return"https://backend.tikanais.com.br/v1/api/external"}},methods:{download(){const a=document.createElement("a");a.href="apiizing.json",a.download="apiizing.json",document.body.appendChild(a),a.click(),document.body.removeChild(a)},"montarUrlIntegração"(a){return`${this.cBaseUrlIntegração}/${a}`},copy(a){Object(p["a"])(a).then(this.$notificarSucesso("Token copiado!")).catch()},async listarAPIs(){const{data:a}=await l();this.apis=a.apis},apiCriada(a){const t=[...this.apis];t.push(a),this.apis=[...t]},apiEditada(a){const t=[...this.apis],e=t.findIndex((t=>t.id===a.id));e>-1&&(t[e]=a),this.apis=[...t]},editarAPI(a){this.apiEdicao={...a},this.modalApi=!0},gerarNovoToken(a){this.$q.dialog({title:"Atenção!!",message:`Deseja realmente gerar novo token para "${a.name}"?\n        Lembre que as integrações que utilizam atual irão parar de funcionar\n        até que atualize o token onde for necessário.`,cancel:{label:"Não",color:"primary",push:!0},ok:{label:"Sim",color:"negative",push:!0},persistent:!0}).onOk((async()=>{try{const{data:t}=await d(a);this.apiEditada(t),this.$notificarSucesso("Token atualizado!")}catch(t){this.$notificarErro("Não foi possível atualizar o token",t)}}))},deletarApi(a){this.$q.dialog({title:"Atenção!!",message:`Deseja realmente deletar "${a.name}"?`,cancel:{label:"Não",color:"primary",push:!0},ok:{label:"Sim",color:"negative",push:!0},persistent:!0}).onOk((()=>{this.loading=!0,c(a).then((t=>{let e=[...this.apis];e=e.filter((t=>t.id!==a.id)),this.apis=[...e],this.$notificarSucesso(`${a.name} deletada!`)})).catch((t=>this.$notificarErro(`Não foi possível deletar ${a.name}`,t))),this.loading=!1}))}},mounted(){this.userProfile=localStorage.getItem("profile"),this.listarAPIs()}},O=T,Q=e("eb85"),j=e("66e5"),z=e("4074"),N=e("0170"),U=e("05c0"),D=Object(q["a"])(O,i,s,!1,null,"bbc88b3c",null);t["default"]=D.exports;E()(D,"components",{QCard:k["a"],QCardSection:C["a"],QBtn:y["a"],QSeparator:Q["a"],QItem:j["a"],QItemSection:z["a"],QItemLabel:N["a"],QTooltip:U["a"]})}}]);