import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuWrapper, MobileMenuIcon } from "./styles";
import { GlobalContext } from "../../contexts/global";

import Logo from '../../assets/logo.png';
import DashboardIcon from '../../assets/icons/menu/chart.png';
import DashboardActiveIcon from '../../assets/icons/menu/chart_active.png';
import ProductsIcon from '../../assets/icons/menu/inventory.png';
import ArrowUpIcon from '../../assets/icons/menu/arrow_up.png';
import ArrowDownIcon from '../../assets/icons/menu/arrow_down.png';
import MailIcon from '../../assets/icons/menu/mail.png';
import NotificationsIcon from '../../assets/icons/menu/notifications.png';
import NotificationsActiveIcon from '../../assets/icons/menu/notifications_active.png';
import SettingsIcon from '../../assets/icons/menu/settings.png';
import LogoutIcon from '../../assets/icons/menu/logout.png';
import HamburguerIcon from '../../assets/icons/menu/hamburguer.png';
import { getAllProducts, getProductsByCategory, getProductsByPartner } from "../../services/api";

export default function Menu({ hideRoutes }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeInsideSubMenu, setActiveInsideSubMenu] = useState(null);
  const [showFullScreenMenu, setShowFullScreenMenu] = useState(false);
  const { notifications, categories, partners, setProducts } = useContext(GlobalContext);

  function handleClickSubMenu(subMenu) {
    subMenu === activeSubMenu
      ? setActiveSubMenu(null)
      : setActiveSubMenu(subMenu);
  }

  function handleClickInsideSubMenu(insideSubMenu) {
    insideSubMenu === activeInsideSubMenu
      ? setActiveInsideSubMenu(null)
      : setActiveInsideSubMenu(insideSubMenu)
  }

  function handleNavigate(route, filterType, filter) {
    if (filterType) {
      filterType === 'categoria'
        && getProductsByCategory(filter).then(products => setProducts(products));
      filterType === 'parceiro'
        && getProductsByPartner(filter).then(products => setProducts(products));
      navigate(route + `/${filterType}/${filter}`);
    } else {
      getAllProducts().then(products => setProducts(products));
      navigate(route);
    }
    setShowFullScreenMenu(false);
  }

  if (!hideRoutes.includes(location.pathname)) {
    return (
      <>
        <MobileMenuIcon onClick={() => setShowFullScreenMenu(true)}>
          <img src={HamburguerIcon} alt="-" />
        </MobileMenuIcon>
        <MenuWrapper showFullScreen={showFullScreenMenu}>
          <button className="close" onClick={() => setShowFullScreenMenu(false)}>
            X
          </button>
          <img src={Logo} alt="domazzi" />
          <span className="divider" />
          <nav>
            <div>
              <h2>Operações</h2>
              <span
                onClick={() => handleNavigate('/dashboard')}
                className={location.pathname === '/dashboard' ? 'active' : ''}
              >
                <img src={location.pathname === '/dashboard' ? DashboardActiveIcon : DashboardIcon} alt="" />
                Dashboard
              </span>
              <span onClick={() => handleClickSubMenu('products')}>
                <img src={ProductsIcon} alt="" />
                Produtos
                <img
                  className="rightIcon" alt=""
                  src={activeSubMenu === 'products' ? ArrowUpIcon : ArrowDownIcon}
                />
              </span>
              {activeSubMenu === 'products' &&
                <div className="subMenuContent">
                  <span
                    onClick={() => handleNavigate('/produtos-cadastrados')}
                    className={location.pathname === '/produtos-cadastrados' ? 'active' : ''}
                  >
                    Cadastrados
                  </span>
                  <span onClick={() => handleClickInsideSubMenu('categories')} className="fullWidth">
                    Categorias
                    <img
                      className="rightIcon"
                      src={activeInsideSubMenu === 'categories' ? ArrowUpIcon : ArrowDownIcon}
                      alt=""
                    />
                  </span>
                  {activeInsideSubMenu === 'categories' &&
                    <div className="subMenuContent insideSubmenu">
                      {categories.map((category, index) =>
                        <span key={index}
                          onClick={() => handleNavigate('/produtos-cadastrados', 'categoria', category)}
                          className={location.pathname === `/produtos-cadastrados/categoria/${category}` ? 'active' : ''}
                        >
                          {category}
                        </span>
                      )}
                    </div>
                  }
                  <span onClick={() => handleClickInsideSubMenu('partners')} className="fullWidth">
                    Parceiros
                    <img
                      className="rightIcon"
                      src={activeInsideSubMenu === 'partners' ? ArrowUpIcon : ArrowDownIcon}
                      alt=""
                    />

                  </span>
                  {activeInsideSubMenu === 'partners' &&
                    <div className="subMenuContent insideSubmenu">
                      {partners.map((partner, index) =>
                        <span key={index}
                          onClick={() => handleNavigate('produtos-cadastrados', 'parceiro', partner)}
                          className={location.pathname.replace('%20', ' ') === `/produtos-cadastrados/parceiro/${partner}` ? 'active' : ''}
                        >{partner}</span>
                      )}
                    </div>
                  }
                </div>
              }
            </div>
            <div className="mid">
              <h2>Mensageria</h2>
              <span
                onClick={() => handleNavigate('/notificacoes')}
                className={location.pathname === '/notificacoes' ? 'active' : 'notification'}
              >
                <img
                  src={location.pathname === '/notificacoes' ? NotificationsActiveIcon : NotificationsIcon}
                  alt=""
                />
                Notificações
                {notifications.length > 0 &&
                  <span className="badge">
                    {notifications.length}
                  </span>
                }
              </span>
              <span>
                <img src={MailIcon} alt="-" />
                Mensagens
              </span>
            </div>
            <div>
              <h2>Configurações</h2>
              <span onClick={() => handleClickSubMenu('configurations')}>
                <img src={SettingsIcon} alt="" />
                Configurações
                <img
                  className="rightIcon" alt=""
                  src={activeSubMenu === 'products' ? ArrowUpIcon : ArrowDownIcon}
                />
              </span>
              {activeSubMenu === 'configurations' &&
                <div className="subMenuContent">
                  <span
                    onClick={() => handleNavigate('/produtos-cadastrados')}
                    className={location.pathname === '/produtos-cadastrados' ? 'active' : ''}
                  >
                    item 1
                  </span>
                  <span onClick={() => handleNavigate('/produtos-cadastrados')}>
                    item 2
                  </span>
                </div>
              }
              <span onClick={() => handleNavigate('/')}>
                <img src={LogoutIcon} alt="" />
                Sair da aplicação
              </span>
            </div>
          </nav>
        </MenuWrapper>
      </>
    )
  }
}