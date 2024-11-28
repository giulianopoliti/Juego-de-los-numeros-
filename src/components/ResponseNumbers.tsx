import React from "react";


interface ResponseNumbersProps {
    responses: string[];
}

const ResponseNumbers: React.FC<ResponseNumbersProps> = ({ responses }) => {    
    return (
      <div>
        {responses.map((res, index) => (
            <p key={index}>{res}</p>
        ))}  {/* Muestra la respuesta correctamente */}
      </div>
    );
  };

export default ResponseNumbers;