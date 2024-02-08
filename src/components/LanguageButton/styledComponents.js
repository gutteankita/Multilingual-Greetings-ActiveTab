import styled from 'styled-components'

export const Li = styled.li`
  display: flex;
  align-items: center;
  margin: 20px;
`

export const Button = styled.button`
  background-color: ${props => (props.isActive ? '#db1c48' : 'transparent')};
  border: 1px solid #db1c48;
  border-radius: 20px;
  outline: none;
  color: ${props =>
    props.isActive ? '#ffffff' : '#db1c48'}; /* Adjust text color */
  padding: 8px;
  width: 80px;
`
