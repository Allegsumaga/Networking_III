import logo from './logo.svg';
import myImage from './cisco.png';
import myImage2 from './BD.gif';
import myImage3 from './EL2.gif';
import myImage4 from './EC.jpeg';
import myImage5 from './PaGPLCPA.jpeg';
import myImage6 from './LACP.png';
import myImage7 from './PAgp.png';
import myImage8 from './ECF.jpeg';
import myImage9 from './ECNF.jpeg';
import myImage10 from './trunk.png';
import myImage11 from './trunk2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Networking Cisco Link Aggregation</h1>
        <a></a> {/* If you have a link, you can add it here */}
      </header>
      <div className="Creator">
        <div className="CreatorDetail">
        <p>Made by: Alejandro</p>
        </div>
      </div>
      <div className="Info-Container">
        <img src={myImage} alt="My Image" className="My-Image" /> 
        <div className="Text-Container">
          <h1>Link Aggregation</h1>
          <p>Link aggregation (LAG) is a partial implementation of the 802.3ad port aggregation standard. It bundles all
          of the controller’s distribution system ports into a single 802.3ad port channel. This reduces the number of
          IP addresses required to configure the ports on your controller. When LAG is enabled, the system dynamically
          manages port redundancy and load balances access points transparently to the user.</p>
        </div>
      </div>
      <div className="Info-ContainerII">
        <img src={myImage2} alt="My Image" className="My-Image2" />
        <div className="Text-Container2">
          <h1>LAN Switching with Redundant Links</h1>
        </div>
      </div>
      <div className="Info-ContainerIII">
        <img src={myImage3} alt="My Image" className="My-Image3" />
        <div className="Text-Container3">
        <p>STP is enabled by default on switch devices. STP blocks redundant links to prevent routing loops.</p>
        </div>
      </div>
      <div className="Info-ContainerIV">
        <div className="Text-Container4">
        <h1>Ethernet Channel</h1>
        </div>
        <img src={myImage4} alt="My Image" className="My-Image4" />
        </div>
        <div className="Info-ContainerV">
          <div className="Text-Container5">
            <h1>PaGP & LCPA</h1>
          </div>
          <img src={myImage5} alt="My Image" className="My-Image5" />
        </div>
        <div className="Info-ContainerVI">
          <div className="Text-Container6">
            <h1>Protocols in a Nutshell</h1>
          </div>
          <img src={myImage6} alt="My Image" className="My-Image6" />
          <img src={myImage7} alt="My Image" className="My-Image7" />
        </div>
        <div className="Info-ContainerVII">
          <div className="Text-Container7">
            <h1>EthernetChannel Guidelines</h1>
            <ul>
            <li>EtherChannel Support</li>
            <li>Speed & Duplex</li>
            <li>VLAN Matching</li>
            <li>VLAN Range</li>
            </ul>
          </div>
          <img src={myImage8} alt="My Image" className="My-Image8" />
          <img src={myImage9} alt="My Image" className="My-Image9" />
        </div>
        <div className="Info-ContainerVIII">
          <div className="Text-Container8">
            <h1>EtherChannel LACP Setting Up</h1>
          </div>
          <img src={myImage10} alt="My Image" className="My-Image10" />
          <img src={myImage11} alt="My Image" className="My-Image11" />
        </div>
        <div className="Info-ContainerIX">
          <div className="Text-Container9">
            <h1>EtherChannel Verification and Troubleshooting</h1>
            <ul>
              <li>Useful Commands</li>
              <li>Verify Link Status - show interface status or show interfaces port-channel</li>
              <li>Confirm EtherChannel Formation - show etherchannel summary or show interfaces port-channel to confirm that the EtherChannel is up and running</li>
              <li>
              Test Connectivity ping or tracerout</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default App;
