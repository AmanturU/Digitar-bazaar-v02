import React from "react"
import './Coinstobuy.css'

function Coinstobuy() {
  return (
    <div >
      <div className="topCoinstobuy">
        <div className="Cardstobuycoins">
          <img className="Cardstobuycoinsimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png" alt="Metamask" />
          <p className="Cardstobuycoinswords"> Metamask</p>
        </div>
        <div className="Cardstobuycoins">
        <img className="Cardstobuycoinsimg" src="https://ph-files.imgix.net/f05a61be-d906-4ad8-a68d-88f7c257574d.png?auto=format" alt="Phantom" />
          <p className="Cardstobuycoinswords"> Phantom</p>
        </div>
        <div className="Cardstobuycoins">
        <img className="Cardstobuycoinsimg" src="https://altcoinsbox.com/wp-content/uploads/2023/03/trust-wallet-logo.png" alt="Trust Wallet" />
          <p className="Cardstobuycoinswords"> Trust Wallet</p>
        </div>
      </div>
      <div className="topCoinstobuy">
        <div className="Cardstobuycoins">
        <img className="Cardstobuycoinsimg" src="https://altcoinsbox.com/wp-content/uploads/2023/04/wallet-connect-logo.png" alt="WalletConnect" />
          <p className="Cardstobuycoinswords"> WalletConnect</p>
        </div>
        <div className="Cardstobuycoins">
        <img className="Cardstobuycoinsimg" src="https://seeklogo.com/images/C/coinbase-coin-logo-C86F46D7B8-seeklogo.com.png" alt="Coinbase" />
          <p className="Cardstobuycoinswords"> Coinbase</p>
        </div>
      </div>
    </div>
  )
}

export default Coinstobuy