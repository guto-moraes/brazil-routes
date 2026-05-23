

// const Custom = () => {
//     return(
//         <form>
//             <div>
//                 <input type="radio" name="answer" id={`otpion-${1}`} value={1} className="appearance-none cursor-pointer" />
//                 <label htmlFor={`otpion-${1}`}>A</label>
//             </div>
//             <div>
//                 <input type="radio" name="answer" id={`otpion-${2}`} value={2} className="appearance-none cursor-pointer" />
//                 <label htmlFor={`otpion-${2}`}>B</label>
//             </div>
//         </form>
//     )
// }


import { useState } from 'react';
import { Button } from '../ui/button';

const Custom = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setSelectedValue(String(formData.get('choice')));
  };

  return (
    <div className='flex flex-col gap-y-16'>
        <h2>Valor selecionado: <strong>{selectedValue}</strong></h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex justify-start items-center gap-x-2'>
                <input aria-checked className='appearance-none aria-checked:outline-2 aria-checked:outline-blue-retro-500 aria-checked:outline-offset-2' type="radio" id={`option-${1}`} name="choice" value="O Governo Vargas flertou com o fascismo" defaultChecked />
                <label htmlFor={`option-${1}`}>O Governo Vargas flertou com o fascismo</label>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <input aria-checked className='appearance-none aria-checked:outline-2 aria-checked:outline-blue-retro-500 aria-checked:outline-offset-2' type="radio" id={`option-${2}`} name="choice" value="O Governo Vargas rompeu com o fascismo" />
                <label htmlFor={`option-${2}`}>O Governo Vargas rompeu com o fascismo</label>
            </div>
        <Button type="submit">Submit</Button>
        </form>
    </div>
  );
};


interface CustomCheckboxProps {
  index: number;
  label: string;
  onChange: (isChecked: number) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ index, label, onChange }) => {
  const [isChecked, setIsChecked] = useState<number>(-1);

  const handleToggle = (index: number) => {
        setIsChecked(index);
        onChange(index);
  };

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isChecked === index}
      onClick={() => handleToggle(index)}
      className="flex items-center space-x-3 p-2 rounded-md transition-colors duration-200 border 
                 bg-slate-100 border-slate-300 
                 aria-checked:bg-blue-600 aria-checked:border-blue-700 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <span className="text-slate-900 aria-checked:text-white font-medium">
        {label}
      </span>
    </button>
  );
};


export { Custom, CustomCheckbox }