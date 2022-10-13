import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import ConnectButton from '../Components/ConnectButton';
import { ethers } from "ethers";
import Return1984 from '../Components/Return1984';

function Home() {

  let [hasEth, setHasEth] = useState(null);

  async function getAccount() {

    // get account from metamask
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    //get the balance 
    const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] });

    //convert the balance to ether
    const etherBalance = ethers.utils.formatEther(balance);

    if (etherBalance > 0.01) {

      setHasEth(true);
      
    } else {

      // I know I know, this is a hack.
      document.write("🇾​​​​​🇴​​​​​🇺​​​​​ 🇳​​​​​🇪​​​​​🇪​​​​​🇩​​​​​ 🇸​​​​​🇴​​​​​🇲​​​​​🇪​​​​​ 🇪​​​​​🇹​​​​​🇭​​​​​");
      
    }

    return etherBalance;
  }

  function connectedButtonOnClick() {

    if (typeof window.ethereum !== 'undefined') {
      getAccount();
    } else {
      //Finesse the popup blockers
      function openOpe() {
        var ask = window.confirm("Ope, this page is token gated. You'll need a wallet and some ether to view it!");
        if (ask) {
          window.alert("Let's start with a wallet");

          window.location.href = "https://metamask.io/";

        }
      }
      openOpe();
    }
  }


  return (

    <div className='flex items-center justify-center h-screen'>

      <div>
        <h1 className="text-3xl text-black font-bold mb-4">
          Hi, my name is <span className='"text-3xl font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-aurora-green via-aurora-purple to-aurora-blue
            animate-text'>Mike</span>.
        </h1>

        <div className="flex flex-row items-center justify-center">

        <button className='px-4 hover:scale-150'>
          <Link to="/contact">📞</Link>
        </button>

        <button className='px-4 hover:scale-150'>
          <Link to="/books">📚</Link>
        </button>

        <a href="https://etherscan.io/nft/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/67630336915142393376093869579614968646233538377798945534444013812028772696033">
          <button className='px-4 hover:scale-150'>
            Ξ
          </button>
        </a>

        <button onClick={connectedButtonOnClick} className='px-4 hover:scale-150'>
          ⛩️
        </button>

        {/* if the user has eth*/}
        {hasEth ? <Return1984 /> : null}

      {/* if the user doesn't have eth*/}
        {/* {!hasEth ? <h1>​🇾​​​​​🇴​​​​​🇺​​​​​ 🇳​​​​​🇪​​​​​🇪​​​​​🇩​​​​​ 🇸​​​​​🇴​​​​​🇲​​​​​🇪​​​​​ 🇪​​​​​🇹​​​​​🇭​​​​​</h1> : null} */}

        <button className='px-4 hover:scale-150'>
          <Link to="/blog">✍️</Link>
        </button>

      </div>

      </div>

    </div>
  );

}

export default Home;