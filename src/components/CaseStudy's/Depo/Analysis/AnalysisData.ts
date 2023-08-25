import open_sea_logo from "../../../../assets/CaseStudy/Depo/open_sea_logo.svg";
import rarible_logo from "../../../../assets/CaseStudy/Depo/rarible_logo.svg";
import mintable_logo from "../../../../assets/CaseStudy/Depo/mintable_logo.svg";

export const analysisData = [
  {
    logo: open_sea_logo,
    head: "OpenSea",
    description:
      "OpenSea is the largest and one of the most popular NFT marketplaces worldwide. It offers a vast collection of NFTs from various creators and collections, catering to a wide range of interests.",
    pros: [
      "Largest NFT marketplace with a vast collection of NFTs.",
      "User-friendly interface for easy navigation.",
      "Supports multiple cryptocurrencies for transactions.",
      "Robust search and filtering options.",
      "High liquidity due to a large user base.",
    ],
    cons: [
      "Relatively high transaction fees during congestion.",
      "Limited curation, risking counterfeit or low-quality NFTs.",
      "No AI-generated NFT creation feature.",
    ],
  },
  {
    logo: rarible_logo,
    head: "Rarible",
    description:
      "Rarible is a decentralized NFT trading platform that empowers users to create, buy, and sell NFTs with more control. One of its unique features is the RARI governance token, which rewards active participants and incentivizes community engagement.",
    pros: [
      "Decentralized platform with user control.",
      "Transparent community-driven curation process.",
      "RARI token rewards active participants.",
      "Integration with multiple blockchains.",
      "Supports unique and custom NFTs.",
    ],
    cons: [
      "Learning curve for decentralized features and RARI mechanics.",
      "Smaller user base, potential lower liquidity.",
      "Limited customer support compared to centralized platforms.",
    ],
  },
  {
    logo: mintable_logo,
    head: "Mintable",
    description:
      "Mintable is a user-friendly NFT trading platform that facilitates intuitive NFT creation and listing processes. Notably, it offers gas-free minting options for select NFTs, reducing the cost burden for creators.",
    pros: [
      "User-friendly interface for NFT creation and listing.",
      "Gas-free minting for select NFTs, reducing creator costs.",
      "Gasless NFT Transfer for feeless NFT sending.",
      "Supports multiple blockchains for transactions.",
      "Option to customize royalties for artists.",
    ],
    cons: [
      "Smaller user base compared to leading platforms.",
      "Limited AI-generated NFT creation features.",
      "Relatively limited curation, mixed quality of NFTs.",
      "Occasional glitches during peak usage.",
    ],
  },
  // Add more platforms here
];
