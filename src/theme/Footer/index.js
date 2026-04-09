import React from "react";
import "./footer.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Footer() {
  return (
    <footer className="next-footer" role="contentinfo">
      <div className="next-footer-top">
        <div className="next-footer-funding">
          <div className="next-footer-funding-inner">
            <div className="next-footer-funded-text">
              <p>Funded By</p>
            </div>
            <div className="next-footer-funding-logos">
              <div role="listitem">
                <a
                  href="https://www.dfg.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="dfg-logo"
                    width="390"
                    height="50"
                    src={useBaseUrl("/img/footer/DFG.png")}
                  />
                </a>
              </div>
              <div role="listitem">
                <a
                  href="https://www.kit.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="kit-logo"
                    width="160"
                    height="80"
                    src={useBaseUrl("/img/footer/KIT.png")}
                  />
                </a>
              </div>
              <div role="listitem">
                <a
                  href="https://mwk.baden-wuerttemberg.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="bawue-logo"
                    width="185"
                    height="101"
                    src={useBaseUrl("/img/footer/bawue.png")}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="next-footer-middle">
        <div className="next-footer-social">
          <div className="next-footer-social-links">
            <a
              href="https://www.youtube.com/@ChemotionELN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="youtube-logo"
                width="30"
                height="30"
                src={useBaseUrl("/img/footer/youtube.png")}
              />
              <span>YouTube</span>
            </a>
            <a
              href="https://www.instagram.com/nfdi4chem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="instagram-logo"
                width="30"
                height="30"
                src={useBaseUrl("/img/footer/instagram.png")}
              />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/nfdi4chem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="linkedin-logo"
                width="30"
                height="30"
                src={useBaseUrl("/img/footer/linkedin.png")}
              />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.chemotion-repository.net/welcome"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="repository-logo"
                width="30"
                height="30"
                src={useBaseUrl("/img/footer/flusk.png")}
              />
              <span>Repository</span>
            </a>
            <a
              href="https://github.com/ComPlat/chemotion_ELN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="github-logo"
                width="30"
                height="30"
                src={useBaseUrl("/img/footer/github.png")}
              />
              <span>ELN Source Code</span>
            </a>
          </div>
        </div>
        <hr className="next-footer-divider" />
        <div className="next-footer-bottom">
          <div>
            © {new Date().getFullYear()}&nbsp;
            <a
              href="https://www.kit.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              KIT
            </a>
          </div>
          <span className="separator">|</span>
          <a href="https://chemotion.net/">Home</a>
          <span className="separator">|</span>
          <a href="https://chemotion.net/accessibility">Accessibility</a>
          <span className="separator">|</span>
          <a href="https://chemotion.net/privacy">Privacy</a>
          <span className="separator">|</span>
          <a href="https://chemotion.net/about#imprint">Imprint</a>
        </div>
      </div>
    </footer>
  );
}
