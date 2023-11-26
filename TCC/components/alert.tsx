interface Props {
  type: "success" | "error";
  isOpen: boolean;
  onClick: () => void;
  children: string;
}

export default function Alert({ type, isOpen, onClick, children }: Props) {
  if (!isOpen) {
    return <></>;
  }

  const typeDef = {
    error: {
      title: "Erro!",
      bg100: "bg-red-100",
      bg200: "bg-red-200",
      bg10070: "bg-red-100/70",
      text500: "text-red-500",
      text600: "text-red-600",
      text800: "text-red-800",
      border300: "border-red-300",
      border500: "border-red-500",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
    },
    success: {
      title: "Sucesso!",
      bg100: "bg-green-100",
      bg200: "bg-green-200",
      bg10070: "bg-green-100/70",
      text500: "text-green-500",
      text600: "text-green-600",
      text800: "text-green-800",
      border300: "border-green-300",
      border500: "border-green-500",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
    },
  };

  return (
    <div className="h-screen w-screen absolute inset-0 z-50 flex flex-col space-y-4 items-center justify-center bg-gray-600/30 py-6">
      <div
        className={`gap-4 alert flex flex-col items-center ${typeDef[type].bg200} p-5 rounded border-b-2 ${typeDef[type].border300}`}
      >
        <div className="flex items-center">
          <div
            className={`alert-icon flex items-center ${typeDef[type].bg100} border-2 ${typeDef[type].border500} justify-center h-10 w-10 flex-shrink-0 rounded-full`}
          >
            <span className={`${typeDef[type].text500}`}>{typeDef[type].icon}</span>
          </div>
          <div className="alert-content ml-4">
            <div className={`alert-title font-semibold text-lg ${typeDef[type].text800}`}>{typeDef[type].title}</div>
            <div className={`alert-description text-sm ${typeDef[type].text600}`}>{children}</div>
          </div>
        </div>
        <button
          onClick={onClick}
          className={`${typeDef[type].bg100} ${typeDef[type].text800} rounded-md font-semibold px-28 py-2 hover:${typeDef[type].bg10070}`}
        >
          OK
        </button>
      </div>

      {/* <div className="alert flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300">
        <div className="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
          <span className="text-green-500">
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div className="alert-content ml-4">
          <div className="alert-title font-semibold text-lg text-green-800">Success</div>
          <div className="alert-description text-sm text-green-600">
            This is an alert message, alert message goes here..!
          </div>
        </div>
      </div>

      <div className="alert flex flex-row items-center bg-yellow-200 p-5 rounded border-b-2 border-yellow-300">
        <div className="alert-icon flex items-center bg-yellow-100 border-2 border-yellow-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
          <span className="text-yellow-500">
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
              <path
                fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div className="alert-content ml-4">
          <div className="alert-title font-semibold text-lg text-yellow-800">Warning</div>
          <div className="alert-description text-sm text-yellow-600">
            This is an alert message, alert message goes here..!
          </div>
        </div>
      </div>

      <div className="alert flex flex-row items-center bg-blue-200 p-5 rounded border-b-2 border-blue-300">
        <div className="alert-icon flex items-center bg-blue-100 border-2 border-blue-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
          <span className="text-blue-500">
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div className="alert-content ml-4">
          <div className="alert-title font-semibold text-lg text-blue-800">Info</div>
          <div className="alert-description text-sm text-blue-600">
            This is an alert message, alert message goes here..!
          </div>
        </div>
      </div> */}
    </div>
  );
}
