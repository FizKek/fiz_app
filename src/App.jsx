import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Main } from './pages/Main/Main'

import { Provider, chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'


// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
const infuraId = process.env.INFURA_ID

// Chains for connectors to support
const chains = defaultChains

// Set up connectors
const connectors = ({ chainId }) => {
    const rpcUrl =
        chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
        chain.mainnet.rpcUrls[0]
    return [
        new InjectedConnector({
            chains,
            options: { shimDisconnect: true },
        })
    ]
}
export function App() {
    return (
        <Provider autoConnect connectors={connectors}>
            {/*<Button />*/}
            <BrowserRouter>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </BrowserRouter>
        </Provider>
    )
}
