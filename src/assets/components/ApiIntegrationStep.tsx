import React from "react";
import "./ApiIntegrationStep.css";

type ApiOption = {
  id: string;
  title: string;
  description: string;
};

const apiOptions: ApiOption[] = [
  { id: "social", title: "Mídias sociais", description: "Facebook, Twitter, etc" },
  { id: "payment", title: "Pagamento", description: "Paypal, Stripe, etc" },
  { id: "storage", title: "Armazenamento", description: "Dropbox, Google Drive, etc" },
  { id: "outros", title: "Outros", description: "Outras APIs" },
];

interface Props {
  selected: string[];
  onChange: (selected: string[]) => void;
}

const ApiIntegrationStep: React.FC<Props> = ({ selected, onChange }) => {
  const handleToggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div>
      <h3
        style={{
          textAlign: "center", // Propriedade CSS em camelCase
          marginTop: "3%", // Propriedade CSS em camelCase
        }}
      >
        Informe o tipo:
      </h3>
      <div className="api-options">
        {apiOptions.map((option) => (
          <label
            key={option.id}
            className={`api-card ${selected.includes(option.id) ? "selected" : ""}`}
          >
            <input
              type="checkbox"
              checked={selected.includes(option.id)}
              onChange={() => handleToggle(option.id)}
            />
            <div>
              <strong>{option.title}</strong>
              <p>{option.description}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ApiIntegrationStep;
