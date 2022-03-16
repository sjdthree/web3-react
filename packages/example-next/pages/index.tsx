import CoinbaseWalletCard from '../components/connectors/CoinbaseWalletCard'
import MetaMaskCard from '../components/connectors/MetaMaskCard'
import NetworkCard from '../components/connectors/NetworkCard'
import WalletConnectCard from '../components/connectors/WalletConnectCard'
// import WalletLinkCard from '../components/connectors/WalletLinkCard'
import SolanaWalletCard from '../components/connectors/SolanaWalletCard'
import TezosWalletCard from '../components/connectors/TezosWalletCard'
import TerraWalletCard from '../components/connectors/TerraWalletCard'

export default function Home() {
  return (
    <>
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <MetaMaskCard />
        <WalletConnectCard />
        <CoinbaseWalletCard />
        <NetworkCard />
        <SolanaWalletCard />
        <TezosWalletCard />
        <TerraWalletCard />
        {/* <WalletLinkCard />
        <NetworkCard /> */}
      </div>
    </>
  )
}
