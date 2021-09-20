import React from 'react';

interface DropdownProps {
  options: any[];
  value: number;
  setValue: (v: number) => void;
}

export const Dropdown = ({options, value, setValue}: DropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div className="dropdown">
      <button className="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {value}
      </button>
      <div className={'dropdown-menu'.concat(dropdownOpen ? ' show' : '')}
           aria-labelledby="dropdownMenuButton"
           style={{
             right: 0,
           }}
      >
        {options.map(v => (
          <span
            key={v}
            className="dropdown-item"
            onClick={() => {
              setValue(v);
              setDropdownOpen(false);
            }}
          >{v}</span>
        ))}
      </div>
    </div>
  );
}
