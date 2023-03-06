import GlobalProvider from "./contexts/global";
import Routes from "./routes";

export default function App() {
  return (
    <GlobalProvider>
      <script type="text/javascript">
var _iub = _iub || [];
_iub.csConfiguration = {"enableGdpr":false,"enableLgpd":true,"floatingPreferencesButtonDisplay":"bottom-right","lang":"en","perPurposeConsent":true,"siteId":3020386,"whitelabel":false,"cookiePolicyId":59239515, "banner":{ "acceptButtonColor":"#01A420","acceptButtonDisplay":true,"backgroundColor":"#4E73DF","brandBackgroundColor":"#FFFFFF","closeButtonDisplay":false,"customizeButtonColor":"#0C4B57","customizeButtonDisplay":true,"explicitWithdrawal":true,"fontSizeBody":"12px","logo":"https://cd2.com.br/wp-content/webp-express/webp-images/uploads/2022/10/cd2-logo.png.webp","position":"float-top-center","rejectButtonColor":"#2D75AE","rejectButtonDisplay":true,"acceptButtonCaption":"Aceitar","content":"Este utiliza cookies ou tecnologias semelhantes para fins técnicos e, com o seu consentimento, para outros fins. Negar o consentimento pode tornar os recursos relacionados indisponíveis.\n\nVocê pode livremente dar, negar ou retirar seu consentimento a qualquer momento.\n\nUse o botão \"Aceitar\" para consentir. Use o botão “Rejeitar” para continuar sem aceitar.","customizeButtonCaption":"Saiba mais","rejectButtonCaption":"Recusar" }};
</script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
      <div className="container">
        <Routes />
      </div>
    </GlobalProvider>

    
  );
}