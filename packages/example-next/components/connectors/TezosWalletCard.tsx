import React, { useState } from 'react';
import { Card } from '../Card'

import { 
    TezosWallet,
    TezosWalletMenuDisconnect 
  } from 'tezos-wallet-component'
  import 'tezos-wallet-component/dist/index.css'
  
  export default function TezosWalletCard() {
    const [showMenu, setShowMenu] = useState(false)
    const [wallet, setWallet] = useState(null)
  
    const mockWallet = {
      address: 'tz1UZZnrre9H7KzAufFVm7ubuJh5cCfjGwam',
      balance: 125000
    }
  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleConnectWallet = (selectedNetwork) => {
      setWallet(mockWallet)
    }
  
    const handleDisconnectWallet = () => {
      setWallet(null)
      setShowMenu(false)
    }
  
    return (
    <Card>
        <b>TezosWallet</b>
      <div style={{ display: 'flex' }}>
        <TezosWallet
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          address={wallet?.address}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          balance={wallet?.balance}
          showMenu={showMenu}
          onToggleMenu={() => setShowMenu(!showMenu)}
          onConnectWallet={handleConnectWallet}
         >
          <TezosWalletMenuDisconnect onClick={handleDisconnectWallet} />
        </TezosWallet>
      </div>
    </Card>
    )
  }