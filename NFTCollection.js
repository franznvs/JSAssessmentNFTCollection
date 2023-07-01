const NFTs = []

function mintNFT (weapon, hsDmg, bodyDmg, legDmg) {
    const NFT = {
        "Weapon": weapon,
        "HeadshotDMG": hsDmg,
        "BodyDMG": bodyDmg,
        "LegDMG": legDmg
    }
    NFTs.push(NFT);
    console.log("Mindted: " + weapon);
}

function listNFTs () {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nNFT ID: \t\t\t" + (i + 1));
        console.log("Weapon Name: \t\t" + NFTs[i].Weapon);
        console.log("Headshot Damage: \t" + NFTs[i].HeadshotDMG);
        console.log("Body Damage: \t\t" + NFTs[i].BodyDMG);
        console.log("Leg Damage: \t\t" + NFTs[i].LegDMG + "\n");
    }
}

function getTotalSupply() {
    console.log("\nTotal NFT Count: " + NFTs.length);
}

mintNFT("Vandal", "160", "40", "34");
mintNFT("Phantom", "156", "39", "31");
mintNFT("Operator", "255", "150", "120");
mintNFT("Classic", "78", "26", "22");

listNFTs();
getTotalSupply();
