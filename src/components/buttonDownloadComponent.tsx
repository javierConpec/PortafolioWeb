interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = ({text,onClick,isLoading = false,disabled = false,}: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled || isLoading}
        className="relative my-10 bg-black cursor-pointer py-3 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="relative z-20">
          {isLoading ? "Cargando..." : text}
        </span>
        <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/30 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

        <span className="w-1/2 drop-shadow-4xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
        <span className="w-1/2 drop-shadow-4xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
        <span className="w-1/2 drop-shadow-4xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
        <span className="w-1/2 drop-shadow-4xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
      </button>
    </div>
  );
};
export default Button;
