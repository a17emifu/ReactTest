//import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faSearch} />
//ReactDOM.render(element, document.body)
function Input(){

    return(
        <div className="flex border-grey-light p-2">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 w-64 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" id="inline-full-name" type="text" placeholder="Type citys name"></input>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
            {element}
            </button>
        </div>
 


    )
}
export default Input