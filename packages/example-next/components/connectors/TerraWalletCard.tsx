import ConnectSample from './connect-sample';
import { Card } from '../Card'

export default function TerraWalletCard() {
  return (
    <Card>
      <div>
          <b>TerraWallet:</b>
        <ConnectSample />
      </div>
    </Card>
  );
}
