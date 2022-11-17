import { Link } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Box, Text } from './OnDelivery.styled'
import {refs} from '../../services/refs'

export default function OnDelivery() {
    Notify.info('Your order is on its way to you!');
    return (
        <Box>
            <Text>
                Your order is on its way to you! :)
                <Link to={`/${refs.shopsPage}`}>Click here to place another order</Link>
            </Text>
        </Box>
    )
};