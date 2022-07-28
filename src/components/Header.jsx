export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerMain">
        <div className="headerMain_fixed-left">
          <img src="../images/water-drop.png" alt="raindrop" />
          <a href="/">Yağmursuyu Deposu Başvuru</a>
        </div>
        <div className="headerMain_fixed-right">
          <div className="header-fixed-right-links">
            <a href="/sartlar">
              <img src="../images/accept.png" alt="kabul" />
              Şartlar ve Koşullar
            </a>
          </div>
          <div className="header-fixed-right-links">
            <a href="/sorular">
              <img src="../images/accept.png" alt="kabul" />
              Sıkça Sorulan Sorular
            </a>
          </div>
          <div className="header-fixed-right-links">
            <a href="/form">
              <img src="../images/accept.png" alt="kabul" />
              Başvuru Yap
            </a>
          </div>
          <div className="header-fixed-right-links">
            <a href="/iletisim">
              <img src="../images/accept.png" alt="kabul" />
              İletişim
            </a>
          </div>
        </div>
        <a href="javascript:void(0);" onclick="hamburger()">
          <img src="../images/menu.png" className="hamburger" />
        </a>
      </div>
    </div>
  );
}
