import React, { createContext,useState ,ReactElement,useContext} from "react";

interface OngsContextProps {
  ongs: any[];
  setOngs: React.Dispatch<React.SetStateAction<any[]>>;
}
interface Props {
  children: ReactElement;
}
const OngsContext = createContext<OngsContextProps>({
  ongs: [],
  setOngs: () => {},
});

const OngsProvider = ({ children }: Props) =>  {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ongs, setOngs] = useState<any[]>([]);

  return (
    <OngsContext.Provider value={{ ongs, setOngs }}>
      {children}
    </OngsContext.Provider>
  );
};

export { OngsProvider };

export const useOngs = () =>{
  const context = useContext(OngsContext);
  if(!context){
    throw new Error("useOngs must be used within an OngsProvider");
  }
  return context;
}