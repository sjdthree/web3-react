import ConnectSample from './connect-sample';
import { Card } from '../Card'

export default function TerraWalletCard() {
  return (
    <Card>
      <div>
          <b>TerraWallet <a href='https://chrome.google.com/webstore/detail/terra-station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp'>Add terrastation to browser</a></b>
        <ConnectSample />
      </div>
    </Card>
  );
}
