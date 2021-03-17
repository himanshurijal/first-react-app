import PropTypes from 'prop-types'
import Button from './Button'

// The parameter to our function is an object literal; 
// here we are pulling (destructuring) the 'title' variable 
// from the object literal.
const Header = ({ title, onAdd, showAddTask }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button color = {showAddTask ? 'green' : 'red'} 
            text = {showAddTask ? 'Add' : 'Close'}
            onClick = {onAdd} />
        </header>
    )
}

// You can declare default values to the variables inside
// your object literal (props).
Header.defaultProps = {
    title: 'Task Tracker'
}

// You can also explicitily declare the types for your variables.
Header.propTypes =  {
    title: PropTypes.string.isRequired,
}

export default Header

