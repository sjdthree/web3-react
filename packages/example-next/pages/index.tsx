import CoinbaseWalletCard from '../components/connectors/CoinbaseWalletCard'
import MetaMaskCard from '../components/connectors/MetaMaskCard'
import NetworkCard from '../components/connectors/NetworkCard'
import WalletConnectCard from '../components/connectors/WalletConnectCard'
// import WalletLinkCard from '../components/connectors/WalletLinkCard'
import ProviderExample from '../components/ProviderExample'
import SolanaWalletCard from '../components/connectors/SolanaWalletCard'
import TezosWalletCard from '../components/connectors/TezosWalletCard'
import TerraWalletCard from '../components/connectors/TerraWalletCard'
import Chat from './Chat'

export default function Home() {
  return (
    <>
      <ProviderExample />
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
      <div style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'sans-serif' }}>
        <Chat />
      </div>
    </>
  )
}
