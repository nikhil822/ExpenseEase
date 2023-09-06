import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faChartLine,
    faCreditCard,
    faMoneyBillTransfer,
    faMoneyBillTrendUp,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

export const dashboard = <FontAwesomeIcon className='font' icon={faChartLine} />
export const transactions = <FontAwesomeIcon className='font' icon={faCreditCard} />
export const trend = <FontAwesomeIcon className='font' icon={faMoneyBillTrendUp} />
export const expenses = <FontAwesomeIcon className='font' icon={faMoneyBillTransfer} />
export const signout = <FontAwesomeIcon className='font' icon={faRightFromBracket} />