


import "../Styles/demander_devis.css";
import HederaLogo from "../Assets/hedera-logo.png";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ethers } from "ethers";

const Demander_devis = ({
  userData,
  signer,
  contract,
  connectAndSetup,
  message,
  setMessage
}) => {
  const navigate = useNavigate();

  const [isChecking, setIsChecking] = useState(false);
  const [checkedProductResult, setCheckedProductResult] = useState(null);
  const [checkProductId, setCheckProductId] = useState("");

  // 🟢 Ensure connection if user logged in
  // useEffect(() => {
  //   const init = async () => {
  //     if (!userData || !userData.address) {
  //       setMessage("⚠️ Please login first to access Devis Import.");
  //       navigate("/Demo");
  //       return;
  //     }
  //     if (!signer && connectAndSetup) {
  //       setMessage("Connecting wallet...");
  //       await connectAndSetup();
  //     }
  //   };
  //   init();
  // }, [userData, signer, connectAndSetup, navigate, setMessage]);


  useEffect(() => {
    const init = async () => {
      // If user not logged in, redirect to login page
      if (!userData || !userData.address) {
        setMessage("⚠️ Please login first to access Devis Import.");
        navigate("/Demo", { state: { from: "/demander_devis" } }); // 👈 key part
        return;
      }

      // If wallet not connected, connect it
      if (!signer && connectAndSetup) {
        setMessage("🔗 Connecting wallet...");
        await connectAndSetup();
      }
    };

    init();
  }, [userData, signer, connectAndSetup, navigate, setMessage]);
  const handleScrollToSection = (e, section) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: section } });
  };

  // 🧩 Your provided logic, slightly adapted
  const handleCheckProductSubmit = async (e) => {
    e.preventDefault();

    if (!contract) {
      setMessage("Error: Contract not initialized. Please connect your wallet first.");
      return;
    }

    const tokenId = checkProductId.trim();
    if (!/^\d+$/.test(tokenId)) {
      setMessage("Error: Lot ID must be a number.");
      setCheckedProductResult(null);
      return;
    }

    setIsChecking(true);
    setCheckedProductResult(null);
    setMessage(`Fetching details for Lot ID ${tokenId}...`);

    try {
      // call the smart contract view function
      const [lotStruct, historyArray] = await contract.pull(ethers.toBigInt(tokenId));

      const result = {
        lotId: lotStruct.lotId.toString(),
        name: lotStruct.name,
        currentHandler: lotStruct.currentHandler,
        manufacturer: lotStruct.manufacturer,
        manufactureDate: Number(lotStruct.manufactureDate) * 1000,
        currentOwner: lotStruct.currentOwner,
        currentLocation: lotStruct.currentLocation,
        status: lotStruct.status.toString(),
        history: historyArray,
      };

      setMessage(`✅ Lot ID ${tokenId} data successfully retrieved.`);
      setCheckedProductResult(result);
    } catch (error) {
      console.error("Error checking product:", error);
      setMessage(`❌ Error fetching Lot ID ${tokenId}. It may not exist or the transaction failed.`);
      setCheckedProductResult({ status: "Product Not Found", lotId: tokenId });
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="Demander_deviswrapper">
      {/* Header */}
      <header className="topbar">
        <div className="container nav">
          <div className="brand">
            <div className="logo">
             <Link to="/">
              <img src={HederaLogo} alt="Hedera Logo" /></Link>
            </div>
            <span>MedSupply Chain</span>
          </div>
          <nav className="nav-links">
            <a href="#mission" onClick={(e) => handleScrollToSection(e, "mission")}>
              Mission
            </a>
            <a href="#services" onClick={(e) => handleScrollToSection(e, "services")}>
              Services
            </a>
            <a href="#process" onClick={(e) => handleScrollToSection(e, "process")}>
              Processus
            </a>
            <a href="#results" onClick={(e) => handleScrollToSection(e, "results")}>
              Résultats
            </a>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Form */}
      <form onSubmit={handleCheckProductSubmit} className="demander-devis-form">
        <legend className="demander_devis_title">Importer le devis du produit</legend>
        <div className="form-control-submit-devis">
          <input
            type="text"
            placeholder="Entrer l'identifiant du devis / lot"
            className="form-control-devis-input"
            value={checkProductId}
            onChange={(e) => setCheckProductId(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-submit-devis" disabled={isChecking}>
            {isChecking ? "Importing..." : "Importer"}
          </button>
        </div>
      </form>

      {/* Display result */}
      {checkedProductResult && (
        <div className="devis-result-card">
          <h3>Résultat du Devis</h3>
          <p><strong>ID:</strong> {checkedProductResult.lotId}</p>
          <p><strong>Nom:</strong> {checkedProductResult.name}</p>
          <p><strong>Fabricant:</strong> {checkedProductResult.manufacturer}</p>
          <p><strong>Localisation:</strong> {checkedProductResult.currentLocation}</p>
          <p><strong>Statut:</strong> {checkedProductResult.status}</p>
          <p><strong>Propriétaire actuel:</strong> {checkedProductResult.currentOwner}</p>
          <p><strong>Dernier gestionnaire:</strong> {checkedProductResult.currentHandler}</p>
          <p><strong>Date fabrication:</strong> {new Date(checkedProductResult.manufactureDate).toLocaleString()}</p>

          {checkedProductResult.history?.length > 0 && (
            <div className="history-section">
              <h4>Historique :</h4>
              <ul>
                {checkedProductResult.history.map((h, index) => (
                  <li key={index}>
                    {h.handler} — {h.location} — {new Date(Number(h.timestamp) * 1000).toLocaleString()}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>MedSupply Chain</strong>
            <p>Expert en traçabilité pharmaceutique et lutte contre la contrefaçon.</p>
          </div>
          <div className="footer-links">
            <a href="#mission" onClick={(e) => handleScrollToSection(e, "mission")}>Mission</a>
            <a href="#services" onClick={(e) => handleScrollToSection(e, "services")}>Services</a>
            <a href="#process" onClick={(e) => handleScrollToSection(e, "process")}>Processus</a>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>Contact</a>
          </div>
          <div>
            <small>© 2025 MedSupply Chain. Tous droits réservés.</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Demander_devis;

