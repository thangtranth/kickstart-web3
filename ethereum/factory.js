import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xe1D75c0703eb82910C94a090518cFde36Bf55002"
);

export default instance;
