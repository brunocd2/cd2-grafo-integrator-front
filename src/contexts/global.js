import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [user, setUser] = useState({
    name: "Domazzi", avatar: "https://www.w3schools.com/howto/img_avatar.png"
  });
  const [notifications, setNotifications] = useState([
    {title: 'Um novo relatório mensal está pronto para download!', description: 'O relatório mensal de Operações está pronto para visualização e Download. Verifique todos os dados presentes no relatório.', type: 'description', date: '06/02/2023',
      file: {title: 'Relatório teste.pdf', type: 'pdf'}    
    },
    {title: 'Um novo relatório financeiro está disponível para visualização!', description: 'lorem ipsum dolor sit amet', type: 'payments', date: '06/02/2023'},
    {title: 'Notamos gastos anormalmente altos no mês de Fevereiro.', description: 'lorem ipsum dolor sit amet', type: 'warning', date: '06/02/2023'},
  ]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [partners, setPartners] = useState([]);
  const [session, setSession] = useState(null);

  useEffect(() => {
    if(products.length > 0) {
      let categories = [];
      let partners = [];
      products.forEach(product => {
        if(!categories.some(category => category === product.categoria)) {
          categories.push(product.categoria);
        }
        if(!partners.some(partner => partner === product.parceiro)) {
          partners.push(product.parceiro);
        }
      });
      setCategories(categories);
      setPartners(partners);
    }
  }, [products]);

  return (
    <GlobalContext.Provider value={{
      user, setUser, 
      notifications, setNotifications,
      products, setProducts,
      categories, partners,
      session, setSession
    }}>
      {children}
    </GlobalContext.Provider>
  )
}