import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Select, { components } from 'react-select';
import { MainColor } from '../../../config/Design/Color';
import './SelectBox.css';







const SelectBox = ({
    icon,
    style,
    data,
    onChange,
    ...props
}) => {
    const Control = ({ children, ...props }) => {
      return (
        <components.Control {...props}>
          <span>
              {icon}
          </span>
          {children}
        </components.Control>
      );
    };

    const DropdownIndicator = (
      { children, ...props }
    ) => {
      return (
        <components.DropdownIndicator {...props}>
          <span style={{color:'#000'}}>
              <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </components.DropdownIndicator>
      );
    };

    const options = data ?? [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    const styles = {
      control: css => (Object.assign({}, { ...css, padding:5, paddingLeft: '1rem', paddingRight:'1rem', outline:'none', border:0, boxShadow:'none' }, style && style.select)),
      option : (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
              ...styles,
              backgroundColor: isFocused ? MainColor : null,
              borderRadius: isFocused ? 5 : 0,
              color: isFocused ? '#fff' : '#000'
          }
      },
      placeholder: base => ({
          ...base,
          fontSize: '1em',
          color: '#000',
          fontWeight: 400,
      }),
    };
    const emoji = "a"


    return (
        <Select 
        options={options}
        components={{ Control, DropdownIndicator, IndicatorSeparator:() => null }}
        styles={styles}
        emoji={emoji}
        defaultValue={options[0]}
        onChange={onChange}
        />
    )
}

export default SelectBox
