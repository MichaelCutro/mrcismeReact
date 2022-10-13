import React from 'react'
import { Link } from 'react-router-dom';

function Lisa() {
    return (

        <div className='grid h-screen place-items-center m-4' >
            <div>
                <a href='https://twitter.com/MichaelCutro/status/1571890588429041667?s=20&t=pQzX9bynKEc4oe2sGXLEHA'>
                    <div className='pb-8'>
                        <h1 className='text-4xl font-bold 
                            bg-gradient-to-r bg-clip-text  text-transparent 
                            from-lime-500 via-blue-500 to-green-500
                            animate-text'>
                            Lisa
                        </h1>
                    </div>
                </a>

                <div className="text-xl text-black font-bold mb-5">
                    21.09.2022
                </div>

                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Acknowledgements
                </div>

                <div>
                    <p className='pb-8'>
                        Thank you Somer Esat for the comprehensive <a className='underline' href='https://someresat.medium.com/guide-to-staking-on-ethereum-ubuntu-goerli-prysm-4a640794e8b5'>guide</a>.
                        Thanks EthStaker Admins and Educators for being super responsive and helpful in <a className='underline' href='https://discord.com/invite/ucsTcA2wTq'>Discord</a>.
                        Thanks Ethereum execution and consensus client teams, core devs, reasearchers, and staking community for the amazing work.
                        Lastly, thank you Doc for the engaging midterm.
                    </p>
                </div>

                <div className="text-xl text-black font-bold mb-5">
                    Overview
                </div>

                <div>
                    
                   <p>Lisa is a *very* minimal ETH2 Validator running Geth (execution client) and Prysm (consensus client) for the Goerli Test Network.
                   </p> 
                    </div>

                <div className='pt-6'>
                    <li>This is great practice for running a validator on the Ethereum Mainnet. Although, you will need to run it on a VM or custom build
                        with way stronger specs than a Raspberry Pi 4 - like a <a className='underline' href='https://www.netcup.eu/bestellen/produkt.php?produkt=2908'>Netcup rs8000</a>.
                    </li>
                </div>

                <div>
                    <li>The goal of this post is to satisfy requirements for Adv Blockchain 565 midterm and help out teammates/anyone interested in learning.</li>
                </div>

                <div>
                    <li><a className='underline' href='https://eth-docker.net/docs/Usage/BeforeYouStart/'>Eth Docker</a> is a great automation option for running a validator and is effectively a wrapper around the client teams code.
                        You can get everything up and running way faster than this blog post - I was constrained by the rpi specs.</li>
                </div>


                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Specs
                </div>

                <p>I have a Raspberry Pi 4 Model B version. I found this out because the RAM Chip reads 'D9ZCL'.
                    If you don't know what model you have, no worries, there are various ways to find out <a className="underline" href="https://support.thepihut.com/hc/en-us/articles/360006049318-Which-Raspberry-Pi-4-RAM-option-do-I-have-">here</a>!
                    I have the following specs:
                    <li>8GB of RAM</li>
                    <li>1 TB SSD (Samsung Portable SSD T5)</li>
                    <li>Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz</li>
                </p>

                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Environment Setup
                </div>
                <p>
                    We need to boot from SSD, not microSD. Therefore, open the raspberry pi imager:
                    <li>Choose os > misc utility images > Bootloader > USB Boot 
                    Choose storage > Select your MicroSD card and click ‘Write’</li>
                </p>
                <p>
                    Remove the microSD card, insert into the rpi, turn the power on and the usb bootloader will flash automatically,
                    the green light should blink steadily once the bootloader has flashed successfully.
                    If you have a monitor you should see a green screen once the firmware is flashed. <li>Launch the Pi Imager and click Choose OS 
                    Other General Purpose OS > Ubuntu > Ubuntu 22.04.1 LTS 64-bit server OS for arm 64 architectures. Choose the SSD Card for Storage and Click Write </li>

                    <li>Launch the Pi imager and click Choose OS 
                Raspberry Pi OS (32 bit) Choose storage > select micro sd card > write</li>
                    Your Raspberry Pi should now boot from the SSD which is running Ubuntu.
                    Connect your Rpi to a monitor and enable ssh (usually openssh is pre-installed)
                    <b> 'sudo apt update'</b> <b> 'sudo apt install openssh-server' </b> verify it is enabled with:
                    <b> 'sudo systemctl status ssh'</b>

                    <li>Connect your Rpi to internet router and find the IP address with fing, angry ip scanner, or Spectrum/Comcast app</li>
                    <li>Open terminal on your computer</li>
                    <li>Open terminal on your computer</li>
                    <li>ssh ubuntu@IPADDRESS</li>
                    <li>Enter password 'ubuntu'</li>
                    Logging into the root user is <a className='underline' href='https://askubuntu.com/questions/16178/why-is-it-bad-to-log-in-as-root'>risky</a> so we need to create a user level account
                    <li>sudo adduser USERNAME</li>
                    <li>sudo usermod -aG sudo USERNAME</li>
                    <li>id USERNAME (check if USERNAME is in the sudo group)</li>
                    We need to assosiate the new user with the root user's SSH key data
                    <li>sudo rsync --archive --chown=USERNAME:USERNAME ~/.ssh /home/USERNAME</li>
                    <li>su - USERNAME</li>
                    Cool we're now logged into the new user!
                </p>


                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Updates and Security
                </div>

                <p>
                    <li>sudo apt -y update && sudo apt -y upgrade</li>
                    <li>sudo apt dist-upgrade && sudo apt autoremove</li>
                    <li>sudo reboot</li>
                    Now we need to secure the server
                    <li>ssh USERNAME@IPADDRESS</li>
                    Port 22 is a common attack vector so choose a port between 1024 and 65535
                    check if there  port 6673 is in use with:
                    <li>sudo ss -tulpn | grep ':6673'</li>
                    If blank response the port is not in use otherwise a red text indicates it is in use
                    <li>sudo nano /etc/ssh/sshd_config</li>
                    change port 22 to port 6673 remove the '#' in front of the line
                    ctrl + x then Y then enter to save
                    <li>sudo systemctl restart sshd</li>
                    <li>logout</li>
                    <li>ssh USERNAME@IPADDRESS -p 6673</li>
                    Now, we need to configure the firewall:
                    <li>sudo apt install ufw (should already be installed)</li>
                    <li>sudo ufw default deny incoming</li>
                    <li>sudo ufw default allow outgoing</li>
                    Then allow inbound traffic on whatever port you chose for ssh:
                    <li>sudo ufw allow 6673/tcp</li>
                    Deny port 22:
                    <li>sudo ufw deny 22/tcp</li>
                    We need to allow Port 30303 for P2P connections with execution client peers
                    <li>sudo ufw allow 30303</li>
                    Allow Prysm:
                    <li>sudo ufw allow 13000/tcp</li>
                    <li>sudo ufw allow 12000/udp</li>
                    *Optional* Allow Grafana:
                    <li>sudo ufw allow 3000/tcp</li>
                    Enable the firewall and check over the rules:
                    <li>sudo ufw enable</li>
                    <li>sudo ufw status numbered </li>
                    Logout and log back in:
                    <li>logout</li>
                    <li>ssh USERNAME@IPADDRESS -p 6673</li>
                </p>

                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Create Swap Space
                </div>

                <p>
                    This is used in case mem gets low and it will guard against mem errors
                    <li>free -h</li>
                    You should see the mem available if you have 8gb the reccommended is swap space is 3gb
                    <li>df -h</li>
                    Check the mounted on column and locate "/" the swap file will be created here
                    <li>sudo fallocate -l 3G /swapfile</li>
                    <li>sudo chmod 600 /swapfile</li>
                    <li>sudo mkswap /swapfile</li>
                    <li>sudo swapon /swapfile</li>
                    Verify the changes
                    <li>free -h</li>
                    Cool we have 3gb of swap space, enable the swap file on boot:
                    <li>sudo cp /etc/fstab /etc/fstab.bak</li>
                    <li>echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab</li>
                    Config the Swappiness:
                    <li>sudo sysctl vm.swappiness=10</li>
                    <li>sudo sysctl vm.vfs_cache_pressure=50</li>
                    Open the sysctl config file to make the changes permanent
                    <li>sudo nano /etc/sysctl.conf</li>
                    Add the following lines to the end of the file
                    <li>vm.swappiness=10</li>
                    <li>vm.vfs_cache_pressure = 50</li>
                    The swap file is now configured, check the mem usage and you should see the swap file in use:
                    <li>htop</li>
                    F10 to exit - Now we have to config timekeeping so the validator works properly - this will ensure proper synchronization with the blockchain network
                    <li>timedatectl</li>
                    The NTP service should be active - if not run the following command:
                    <li>sudo timedatectl set-ntp on</li>
                </p>


                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Generate the client authentication secret
                </div>

                <p>
                    On our server, communication between the execution and consensus clients is secured using
                    JSON Web Tokens authentication scheme. The JWT is represented by a file that contains a
                    randomly generated 32-byte hex string. This file is used for message Auth - create a directory on the server to store the JWT file:
                    <li>sudo mkdir -p /var/lib/jwtsecret</li>
                    Generate the JWT file using the openssl cryptographic software library
                    <li>openssl rand -hex 32 | sudo tee /var/lib/jwtsecret/jwt.hex > /dev/null</li>
                    Inspect the file:
                    <li>sudo nano /var/lib/jwtsecret/jwt.hex</li>
                    Nice, it worked!

                </p>

                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Generate staking data
                </div>

                <p>
                    <li>cd ~</li>
                    <li>curl -LO https://github.com/ethereum/staking-deposit-cli/releases/download/v2.3.0/staking_deposit-cli-76ed782-linux-arm64.tar.gz</li>
                    <li>tar -xvf staking_deposit-cli-76ed782-linux-arm64.tar.gz</li>
                    <li>rm staking_deposit-cli-76ed782-linux-arm64.tar.gz</li>
                    <li>cd staking_deposit-cli-76ed782-linux-arm64</li>
                    <li>ls</li>
                    Ok, you should see "deposit"
                    <li>sudo ./deposit new-mnemonic --num_validators 1 --chain goerli</li>
                    Write down your Mnemonic, enter it, 3 for english, 4 for english, create a password
                </p>

                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Install the Execution Client (Geth)
                </div>

                <p>
                    You can choose any client you would like, but I am going to use Geth because I am familiar with it
                    <li>cd ~</li>
                    <li>curl -LO https://gethstore.blob.core.windows.net/builds/geth-linux-arm64-1.10.25-69568c55.tar.gz</li>
                    Remember we do not have a amd processor so we need to use the arm64 version, upack the archive:
                    <li>tar -xvf geth-linux-arm64-1.10.25-69568c55.tar.gz</li>
                    <li>rm geth-linux-arm64-1.10.25-69568c55.tar.gz</li>
                    <li>cd geth-linux-arm64-1.10.25-69568c55/</li>
                    Get it on the path:
                    <li>sudo cp geth /usr/local/bin</li>
                    Create an account for the service to run under:
                    <li>sudo useradd --no-create-home --shell /bin/false geth</li>
                    Create the data dir for the Ethereum blockchain data
                    <li>sudo mkdir -p /var/lib/geth</li>
                    Set the permissions:
                    <li>sudo chown -R geth:geth /var/lib/geth</li>
                    Create a systemd service config file to configure the service:
                    <li>sudo nano /etc/systemd/system/geth.service</li>
                    Paste this:
                    <p>
                        [Unit]
                        Description=Geth Execution Client (Goerli Test Network)
                        After=network.target
                        Wants=network.target
                        [Service]
                        User=geth
                        Group=geth
                        Type=simple
                        Restart=always
                        RestartSec=5
                        ExecStart=/usr/local/bin/geth \
                        --goerli \
                        --datadir /var/lib/geth \
                        --authrpc.jwtsecret /var/lib/jwtsecret/jwt.hex \
                        --metrics \
                        --metrics.addr 127.0.0.1
                        [Install]
                        WantedBy=default.target
                    </p>

                    <li>Notes:</li>

                    <li>authrpc.jwtsecret /var/lib/jwtsecret/jwt.hex The path to the JWT file that is required for authenticated communication between the Execution and Consensus clients. Enables the Engine API RPC endpoint. Setting this will expose an authenticated HTTP endpoint (http://127.0.0.1:8551).</li>
                    <li>metrics.addr 127.0.0.1 Enables the metrics HTTP server.</li>

                    Reload Systemd to reflect the changes:
                    <li>sudo systemctl daemon-reload</li>
                    <li>sudo systemctl start geth</li>
                    <li>sudo systemctl status geth</li>
                    You should see "Active" and "running"
                    Use the journal to check the logs:
                    <li>sudo journalctl -fu geth</li>
                    <li>^c to exit</li>
                    Enable the service to start on boot
                    <li>sudo systemctl enable geth</li>
                </p>

                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Install the Consensus Client (Prysm)
                </div>

                <p>
                    The Prysm Consensus Client is made up of two binaries that provide the functionality of the beacon node and validator, respectively. This step will download and prepare the Prysm binaries.
                    <li>Go here https://github.com/prysmaticlabs/prysm/releases</li>
                    Make sure to copy the arm64 version, the beacon chain and the validator file like so:
                    <li>curl -LO https://github.com/prysmaticlabs/prysm/releases/download/v3.1.1/beacon-chain-v3.1.1-linux-arm64</li>
                    <li>curl -LO https://github.com/prysmaticlabs/prysm/releases/download/v3.1.1/validator-v3.1.1-linux-arm64</li>
                    Rename the files:
                    <li>mv beacon-chain-v3.1.1-linux-arm64 beacon-chain</li>
                    <li>mv validator-v3.1.1-linux-arm64 validator</li>
                    Make the files executable:
                    <li>chmod +x beacon-chain</li>
                    <li>chmod +x validator</li>
                    Copy the files to the path
                    <li>sudo cp beacon-chain /usr/local/bin</li>
                    <li>sudo cp validator /usr/local/bin</li>
                </p>

                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Import the Validator Keys</div>
                <p>
                    Configure the Prysm validator client to use the validator keys that were generated earlier
                    We need to import the keys we generated in step 8 into the validator client- the validator will use these keys to sign blocks and attestations on the beacon chain.
                    <li>sudo mkdir -p /var/lib/prysm/validator</li>
                    <li>sudo chown -R yourusername:yourusername /var/lib/prysm/validator</li>

                    Run the validator import process:
                    <li>/usr/local/bin/validator accounts import --keys-dir=$HOME/staking-deposit-cli/validator_keys --wallet-dir=/var/lib/prysm/validator --goerli</li>
                    <li>Type: 'accept'</li>
                    <li>sudo /usr/local/bin/validator accounts import --keys-dir=$HOME/staking-deposit-cli/validator_keys --wallet-dir=/var/lib/prysm/validator --goerli</li>
                    Save the password in a file:
                    <li>sudo nano /var/lib/prysm/validator/password.txt</li>

                </p>

                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Configure the Beacon node service</div>

                <p>

                    In this step you will configure and run the Prysm beacon node as a service so if the system restarts the process will automatically start back up again.
                    <li>sudo useradd --no-create-home --shell /bin/false prysmbeacon</li>
                    <li>sudo mkdir -p /var/lib/prysm/beacon</li>
                    <li>sudo chown -R prysmbeacon:prysmbeacon /var/lib/prysm/beacon</li>
                    Create and configure the service:
                    <li>sudo nano /etc/systemd/system/prysmbeacon.service</li>
                    Paste this:

                    <p>
                        [Unit]
                        Description=Prysm Consensus Client BN (Goerli Test Network)
                        Wants=network-online.target
                        After=network-online.target
                        [Service]
                        User=prysmbeacon
                        Group=prysmbeacon
                        Type=simple
                        Restart=always
                        RestartSec=5
                        ExecStart=/usr/local/bin/beacon-chain \
                        --goerli \
                        --datadir=/var/lib/prysm/beacon \
                        --http-web3provider=http://127.0.0.1:8551 \
                        --jwt-secret=/var/lib/jwtsecret/jwt.hex \
                        --suggested-fee-recipient=FeeRecipientAddress \
                        --enable-debug-rpc-endpoints \
                        --grpc-max-msg-size=65568081 \
                        --checkpoint-sync-url=https://goerli.checkpoint-sync.ethdevops.io \
                        --genesis-beacon-api-url=https://goerli.checkpoint-sync.ethdevops.io \
                        --accept-terms-of-use

                        [Install]
                        WantedBy=multi-user.target
                    </p>

                    <b>Make sure to replace the FeeRecipientAddress</b>

                    <li>Notable flags:</li>
                    'http-web3provider=http://127.0.0.1:8551' The address of the Execution Client. Should be the same for all Execution Clients detailed in this guide.
                    'jwt-secret=/var/lib/jwtsecret/jwt.hex'. The path to the JWT file that is required for authenticated communication between the Execution and Consensus clients.
                    'suggested-fee-recipient=FeeRecipientAddress'- Validators can receive tips from user transactions. Provide an Ethereum address within your control to specify where the tips should go.

                    <li>Enables the Checkpoint Sync feature to greatly speed up the Beacon Chain Node sync:</li>
                    --enable-debug-rpc-endpoints
                    --grpc-max-msg-size=6568081
                    --checkpoint-sync-url=https://goerli.checkpoint-sync.ethdevops.io
                    --genesis-beacon-api-url=https://goerli.checkpoint-sync.ethdevops.io

                    <li><b>Reload Systemd to reflect the changes:</b></li>
                    <li>sudo systemctl daemon-reload</li>
                    <li>sudo systemctl start prysmbeacon</li>
                    <li>sudo systemctl status prysmbeacon</li>

                    NOTE: In order to be able to stake both the execution client and the consensus client must be fully synced. Use the journal output to follow the progress or check for errors by running:

                    <li>sudo journalctl -fu prysmbeacon</li>

                    Enable the service to start on boot:
                    <li>sudo systemctl enable prysmbeacon</li>


                    Check if the geth (the execution client) and prysm (the consensus client) are synced by running:
                    <li>sudo geth attach --datadir /var/lib/geth</li>
                    <li>eth.syncing</li>
                    If you get "false" then you are synced
                    <li>exit</li>
                </p>

                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Configure the Validator Service
                </div>

                <p>
                    Create an account for the validator node to run under. This type of account can’t log into the server.
                    <li>sudo useradd --no-create-home --shell /bin/false prysmvalidator</li>
                    <li>sudo chown -R prysmvalidator:prysmvalidator /var/lib/prysm/validator</li>
                    The validator import process created the following directory: /var/lib/prysm/validator. Set directory permissions so the prysmvalidator account can modify that directory.
                    <li>sudo chown -R prysmvalidator:prysmvalidator /var/lib/prysm/validator</li>
                    Create a systemd service file to store the service config:
                    <li>sudo nano /etc/systemd/system/prysmvalidator.service</li>
                    Paste this:
                    <p>
                        [Unit]
                        Description=Prysm Consensus Client VC (Goerli Test Network)
                        Wants=network-online.target
                        After=network-online.target
                        [Service]
                        User=prysmvalidator
                        Group=prysmvalidator
                        Type=simple
                        Restart=always
                        RestartSec=5
                        ExecStart=/usr/local/bin/validator \
                        --datadir=/var/lib/prysm/validator \
                        --wallet-dir=/var/lib/prysm/validator \
                        --wallet-password-file=/var/lib/prysm/validator/password.txt \
                        --graffiti="yourgraffiti" \
                        --accept-terms-of-use
                        [Install]
                        WantedBy=multi-user.target
                    </p>
                    <li>Noteable Flags:</li>
                    --graffiti “yourgraffiti" Replace with your own graffiti string. For security and privacy reasons avoid information that can uniquely identify you. E.g. --graffiti="Validatooor".
                    <li>Reload systemd to reflect the changes and start the service. Check the status to make sure it’s running correctly:</li>
                    <li>sudo systemctl daemon-reload</li>
                    <li>sudo systemctl start prysmvalidator</li>
                    <li>sudo systemctl status prysmvalidator</li>
                    Press q to exit and use the journal output to follow progress:
                    <li>sudo journalctl -fu prysmvalidator</li>
                    Enable the systemd service to start on boot:
                    <li>sudo systemctl enable prysmvalidator</li>

                </p>





                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Fund the Validator Keys
                </div>

                <p>

                    I decided to run the deposit cli on my ubuntu server and then SFTP using filezilla to transfer the deposit data to my mac.
                    IF you have never done this - read here: https://helpdeskgeek.com/how-to/how-to-ssh-or-sftp-into-your-raspberry-pi/
                    Also your permissions for /staking-deposit-cli/validator_keys/ may be wrong so:
                    <li>sudo chown USERNAME /path/to/validator_keys</li>
                    Now you should be able to SFTP transfer the deposit data to your mac
                    <li>Go here: https://goerli.launchpad.ethereum.org/</li>
                    <li>Click through the steps and upload your depost data</li>
                    <li>Connect your wallet with 32 Goerli ETH</li>
                    <li>Send the deposit!</li>
                    <li>This will take 15 hours so we'll check tomorrow</li>

                </p>

                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Congrats 🎉
                </div>

                <p>

                <button className='underline text-black text-gray-900 dark:text-black'>
                        <Link to='/contact'>If you need any help, feel free to reach out!</Link>
                    </button>
                   
                </p>

                <div className="text-xl text-black font-bold mb-5 pt-6">
                    Helpful Links
                </div>
                <a className='underline' href="https://someresat.medium.com/guide-to-staking-on-ethereum-ubuntu-goerli-prysm-4a640794e8b5">
                    <div>Guide to Staking on Ethereum (Ubuntu/Goerli/Prysm)</div>
                </a>
                <a className='underline' href="https://www.youtube.com/watch?v=YxrsJO4Wra8">
                    <div>Spin up your own Eth 2.0 test node on Linux - EthDocker</div>
                </a>
                <a className='underline' href="https://discord.com/invite/ucsTcA2wTq">
                    <div>EthStaker Discord</div>
                </a>
                <div>
                    <button className='px-2 hover:scale-y-50 text-2xl font-light text-gray-900 dark:text-black'>
                        <Link to='/'>⬅</Link>
                    </button>
                </div>

            </div>

        </div>
    );
}

export default Lisa;