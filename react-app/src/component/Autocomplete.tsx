import {
	useState,
	useRef,
	useEffect,
} from "react";

import type {
	ChangeEvent
} from "react";

import "./autocomplete.css";

interface AutocompleteProps {
	options: string[];
	multiple: boolean;
    style: React.CSSProperties;
	onChange?: (value: string[]) => void;
	placeholder?: string;
	label?: string;
}

interface ACDropDownProps {
    filteredOptions: Array<string>,
    open: boolean,
    onSelect: (opt: string) => void
}

function ACDropDown({ filteredOptions, open, onSelect }: ACDropDownProps) {
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
    const showDropdown = open && filteredOptions.length > 0; 
    return showDropdown && <ul className="ac-list">
        {filteredOptions.map((opt, index) => {
            const isHighlighted = index === highlightedIndex;
            return (
                <li
                    key={opt}
                    className={`ac-item ${isHighlighted ? "highlighted" : ""}`}
                    onMouseDown={(e) => e.preventDefault()}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => onSelect(opt)}
                >
                    <span>{opt}</span>
                </li>
            );
        })}
    </ul>
}

export default function Autocomplete(props: AutocompleteProps)  {
	const { options, placeholder = "Choose…", label, style } = props;

	const isMultiple = props.multiple === true;

	const [inputValue, setInputValue] = useState<string>("");
	const [open, setOpen] = useState<boolean>(false);
	
	const rootRef = useRef<HTMLDivElement | null>(null);

    const [selectedValues, setSelected] = useState(new Array<string>());

	const filteredOptions = options.filter((opt) => {
        return opt.toLowerCase().startsWith(inputValue.toLowerCase());
    });

    // Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
	}, []);

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value);
		setOpen(true);
	}

	function toggleOption(option: string) {
        let next: Array<string>;
        if (isMultiple) {
            next = selectedValues.includes(option) ?
                selectedValues.filter((v) => v !== option) :
                [...selectedValues, option];
        } else {
            next = [option];
        }
        setSelected(next);
        if (props.onChange) props.onChange(next);
        setOpen(false);
        setInputValue(isMultiple ? "" : option);
	}

	function removeChip(option: string) {
		if (!isMultiple) return;
        const next = selectedValues.filter((v) => v !== option);
		setSelected(next);
        if (props.onChange) props.onChange(next);
	}

	return (
		<div className="ac-root" ref={rootRef} style={style}>
			{label && <label className="ac-label">{label}</label>}
			<div className="ac-input-shell">
				{isMultiple &&
					selectedValues.map((val) => (
						<span className="ac-chip" key={val}>
							<span>{val}</span>
							<button
								type="button"
								className="ac-chip-remove"
								onClick={() => removeChip(val)}
							>
								×
							</button>
						</span>
					))}

				<input
					className="ac-input"
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					onFocus={() => {}}
					placeholder={
						isMultiple && selectedValues.length > 0 ? "" : placeholder
					}
				/>
			</div>

            <ACDropDown 
                filteredOptions={filteredOptions} 
                open={open} 
                onSelect={toggleOption}
            ></ACDropDown>
		</div>
	);
};
