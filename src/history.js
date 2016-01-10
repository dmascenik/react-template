/**
 * History is used for routing between views. It's externalized from
 * index.jsx so it can be required by other views.
 */
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = createBrowserHistory()
export default history
