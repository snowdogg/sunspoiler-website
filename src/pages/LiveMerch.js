import styled from "styled-components";
import Helmet from "react-helmet";

const cdn = (id) =>
  `https://cdn.builder.io/api/v1/image/assets%2F448f48b97b504dada2517f9797952b29%2F${id}?format=webp&width=800`;

const LOGO = cdn("dc814372e9224d7c97e136bc10cfb117");
const QR_MAIN = cdn("9ad63d0d3564466da75721c5310abfed");
const QR_VENMO = cdn("e0f6322f551343fd838db061df609860");
const QR_ZELLE = cdn("c791f92132bb49afb0fb5eced9f16122");

const Page = styled.div`
  background: #fff;
  color: #333;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 440px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  margin: -40px 0 -40px;
`;

const Prices = styled.div`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-size: 34px;
  line-height: 1.5;
  margin-bottom: 28px;
`;

const QRRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  max-width: 704px;
  margin-bottom: 28px;
`;

const QRItem = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const QRColumn = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QRCaption = styled.div`
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 16px;
`;

const FormWrap = styled.div`
  width: 100%;
  max-width: 560px;
`;

const senderScript = `(function (s, e, n, d, er) {
  s['Sender'] = er;
  s[er] = s[er] || function () {
    (s[er].q = s[er].q || []).push(arguments)
  }, s[er].l = 1 * new Date();
  var a = e.createElement(n),
  m = e.getElementsByTagName(n)[0];
  a.async = 1;
  a.src = d;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
sender('fa131d55e64189')`;

const LiveMerch = () => (
  <Page>
    <Helmet>
      <title>Sun Spoiler - Live Merch</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script>{senderScript}</script>
    </Helmet>
    <Logo src={LOGO} alt="Sun Spoiler" />
    <Prices>
      <div>shirts &amp; tanks $30</div>
      <div>vinyls $20</div>
    </Prices>
    <QRRow>
      <QRColumn>
        <QRItem style={{ flex: "none", width: "100%" }}>
          <img src={QR_MAIN} alt="Sun Spoiler QR code" />
        </QRItem>
        <QRCaption>learn more</QRCaption>
      </QRColumn>
      <QRItem>
        <img src={QR_VENMO} alt="Venmo QR code" />
      </QRItem>
      <QRItem>
        <img src={QR_ZELLE} alt="Zelle QR code" />
      </QRItem>
    </QRRow>
    <FormWrap>
      <div
        style={{ textAlign: "center" }}
        className="sender-form-field"
        data-sender-form-id="lwcy5wd5ammw1ad4ftd"
      ></div>
    </FormWrap>
  </Page>
);

export default LiveMerch;
