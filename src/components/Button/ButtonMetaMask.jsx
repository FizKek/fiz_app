import { Button as ButtonStyled} from './Button.module.scss'
import { useConnect, useAccount } from 'wagmi'

export function ButtonMetaMask({children}) {
    const [{ data, error }, connect] = useConnect()
    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
    })
    return (
        <div>
            {data.connectors.map((connector) => (
                <button
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect(connector)}
                    className={ButtonStyled}
                >
                    {children}
                    {connector.name}
                    {!connector.ready && ' (unsupported)'}
                </button>
            ))}

            {error && <div>{error?.message ?? 'Failed to connect'}</div>}
        </div>
    )
}
