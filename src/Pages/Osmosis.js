import React from "react";
import { Link } from "react-router-dom";

function Osmosis() {
  return (
    <div className="grid h-screen place-items-center m-8">
      <div>
        <a href="https://osmosis.zone/">
          <div className="pb-8">
            <h1
              className="text-4xl font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text"
            >
              Osmosis
            </h1>
          </div>
        </a>
        <div className="text-xl text-black font-bold mb-5">06.06.2022</div>
        <div className="text-xl text-black font-bold mb-5">Overview</div>
        <div>
          Osmosis is an interchain decentralized exchange in the Cosmos
          ecosystem. The native token of the Osmosis blockchain, OSMO, is used
          to secure the Osmosis blockchain (a proof of stake tendermint-based
          chain) and pay transaction fees. IOW, Osmosis utilizes
          inter-blockchain communication (IBC) to enable cross-chain
          transactions.
        </div>
        <div className="pt-6">
          <li>
            Osmosis’s role is to be a relayer across app chains - an exchange
            layer on top of all of the Cosmos chains and the ecosystems that
            Cosmos connects to{" "}
          </li>
        </div>
        <div>
          <li>
            The longer-term goal is to bring Osmosis’s user experience closer to
            what people are used to with EVM chains without sacrificing the
            benefits of Tendermint based consensus
          </li>
        </div>
        <div className="text-xl text-black font-bold mb-5 pt-6">
          Pros and Cons of Application Specific Blockchains
        </div>
        <p>
          The primary pro is an expanded feature set (access down the full stack
          through unlocking the application out of the application layer),
          paying transaction fees in any token, and superfluid staking - which
          allows you to stake more than just the protocol token to secure the
          chain but also the equivalence to it; i.e. if you have an LP token
          that represents a position in ATOM/OSMO pool - you are able to stake
          that for its OSMO equivalent. The main con is you lose the ability to
          do atomic transactions across applications. Even though you can do
          cross-chain transfers using IBC, you can’t do them at the same time.
          Users can’t send one transaction from one chain to another, and then a
          different transaction back in one go as you can with Ethereum.
        </p>
        <div className="text-xl text-black font-bold mb-5 pt-6">Growth</div>
        <p>
          In lieu of general-purpose blockchains, a multichain future of
          application-specific blockchains as a potential destination needs a
          natural hub which is a dex. Therefore, a key driver in adoption of
          Osmosis is in parallel with the growth of chains that have built on
          the Cosmos SDK. Contrary to other projects in the crypto space - there
          was no VC seed round for Osmosis as the aim is to be community-led and
          governed.
        </p>
        <div className="text-xl text-black font-bold mb-5 pt-6">
          Business Model
        </div>
        <p>
          Osmosis revenue is generated mainly via swaps through the dex; the fee
          is 0.3% - the value accrual is entirely to the liquidity providers.
          There may be a split down the road on liquidity providers and through
          sending to validators (delegators to validators). There is no concept
          of a team fund; all protocol revenues go to the protocol, which is
          defined as the community and key stakeholders. The second type of
          protocol revenue is transaction fees. In the first year of operation,
          Osmosis subsidized tx fees, but as the Osmosis application set
          expands, there will be more value captured by transaction fees than
          swap fees on a single dex. Transactions fees on Osmosis accrue to
          stakers / users who delegate to validators. In summary, the 0.3% swap
          fee goes to liquidity providers which is defined as supply side
          revenue and in the near future transaction fees will be added as
          protocol revenue
        </p>
        <div className="text-xl text-black font-bold mb-5 pt-6">
          Purpose of Token
        </div>
        <p>
          The OSMO token is used to secure the Osmosis blockchain and pay
          transaction fees (which is standard across all Cosmos based chains).
          The OSMO token also has a unique governance related power which is the
          power to direct liquidity, i.e. token holders can direct OSMO
          incentives. For instance, if you are an OSMO token holder you can vote
          on where incentives go and how they are adjusted on a weekly basis.
          Governance participation is very active in the Osmosis ecosystem.
          There is a B2B side of governance i.e. a proposal to give a loan to a
          chain so they can launch a token and bootstrap their liquidity.
        </p>
        <div className="text-xl text-black font-bold mb-5 pt-6">
          Upcoming Developments
        </div>
        <p>
          The first live use case for an app chain was superfluid staking which
          cannot be done in Ethereum’s current form. A cross chain native stable
          swap will be launched on Osmosis and alongside this will be the bridge
          launch with Ethereum (currently being tested on Frontier). Support for
          Ethereum signing on Osmosis which will *hopefully* make Osmosis the
          first non-evm chain that you can add as a metamask rpc. The offerings
          of centralized exchanges are broader than just simple swaps, the ideal
          goal is that Osmosis will capture most or all of those features
          natively on the Osmosis chain. The medium term roadmap in accordance
          with stable swaps would potentially be a lending / synthetic assets
          platform that will allow Osmosis to coexist with other types of
          applications that need to be on the same chain with one another.
        </p>
        <div className="text-xl text-black font-bold mb-5 pt-6">
          Miscellaneous
        </div>
        A portion of swap fees down the road could go to token holders
        (governance would dictate this), albeit this is not necessarily relevant
        or likely due to the nature of the community treasury growing steadily
        over (the 5% take of all OSMO inflation). OSMO inflation decreases every
        year “the third inning” where OSMO will eventually cap at 1 Billion
        supply.
        <div className="text-xl text-black font-bold mb-5 pt-6">
          Helpful Links
        </div>
        <a href="https://medium.com/osmosis-community-updates/osmosis-superfluid-staking-faq-a7b49797cb72">
          <div>Superfluid Staking</div>
        </a>
        <a href="https://docs.osmosis.zone/overview/#what-is-osmosis">
          <div>What is Osmosis</div>
        </a>
        <a href="https://medium.com/osmosis/introducing-osmosis-frontier-d9da158b22d0">
          <div>Introducing Osmosis Frontier</div>
        </a>
        <a href="https://www.youtube.com/watch?v=bTjurn4W70w">
          <div>Fundamentals</div>
        </a>
        <div>
          <button className="px-2 hover:scale-y-50 text-2xl font-light text-gray-900 dark:text-black">
            <Link to="/">⬅</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Osmosis;
